require("dotenv").config();

const express = require("express");
const path = require("path");
const { client, sql } = require("./database/client.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "build")));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://nodejs-mysql-api-server-89c2f3154f98.herokuapp.com/');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, OPTIONS');
  next();
});

/* ----- MySQL DB Connection (starts here) ----- */
// const connectMySQLDB = async _ => {
//   try {
//     await client.connect();
//   } catch(err) {
//     console.error(err);
//   }
// };

// connectMySQLDB();
/* ----- MySQL DB Connection (ends here) ----- */

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.get("/todos", async (req, res) => {
  let data;

  try {
    data = await client.executeQuery(await sql("SELECT_ALL_FROM_TODOS"));
    res.json(data);
  } catch(err) {
    console.error(err);
  } 
});

app.post("/todos", async (req, res) => {
  const { content } = req.body;
  console.log(content);
  try {
    await client.executeQuery(await sql("INSERT_NEW_TODO"), [ content ]);
    const newTodo = await client.executeQuery(await sql("SELECT_TODO_BY_CONTENT"), [ content ]);
    console.log(newTodo);
    res.json(newTodo);
  } catch(err) {
    console.error(err);
  };
});

app.patch("/todos/:id", async (req, res) => {
  const todoId = req.params.id;
  const { content, editing } = req.body;
  let transaction;
  try {
    transaction = await client.beginTransaction();
    await transaction.executeQuery(await sql("UPDATE_TODO"), [ content, editing, todoId ]);
    await transaction.commit();
    const updatedTodo = await client.executeQuery(await sql("SELECT_TODO_BY_ID"), [ todoId ]);
    res.json(updatedTodo);
  } catch(err) {
    await transaction.rollback();
    console.error(err);
  };
});

app.delete("/todos/:id", async (req, res) => {
  const todoId = req.params.id;
  try {
    const todoToDelete = await client.executeQuery(await sql("SELECT_TODO_BY_ID"), [ todoId ]);
    console.log(todoToDelete);
    const todoToDeleteId = todoToDelete.id;
    console.log(todoToDeleteId);
    await client.executeQuery(await sql("DELETE_TODO"), [ todoId ]);
    const deletedTodo = await client.executeQuery(await sql("SELECT_TODO_BY_ID"), [ todoId ]);
    if(deletedTodo.id === undefined)
      res.json(todoToDelete);
    else
      res.json({ "message": "delete failed ..." });
  } catch(err) {
    console.error(err);
  };
});

app.listen(PORT, _ => {
  console.log(`Applcation listening at http://127.0.0.1:${PORT}`);
});