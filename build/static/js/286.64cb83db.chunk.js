"use strict";(self.webpackChunkreact_todo_app=self.webpackChunkreact_todo_app||[]).push([[286],{107:(t,e,o)=>{o.d(e,{$:()=>s});var d=o(154);const a="https://nodejs-mysql-api-server-89c2f3154f98.herokuapp.com/todos",s={getAll:async()=>(await d.A.get(a)).data,post:async t=>(await d.A.post(a,t)).data,update:async t=>(await d.A.patch(a+"/"+t.id,t)).data,delete:async t=>(await d.A.delete(a+"/"+t.id)).data}},286:(t,e,o)=>{o.r(e),o.d(e,{default:()=>x});var d=o(715),a=o(43),s=o(579);const n=(0,a.lazy)((t=>o.e(990).then(o.bind(o,990)))),r=t=>{const e=(0,d.k3)();return(0,s.jsx)("div",{className:"todos",children:e.map(((t,e)=>(0,s.jsx)(a.Suspense,{fallback:(0,s.jsx)("div",{style:{padding:"20px",color:"#fff",fontWeight:"bold",fontSize:".8em"},children:"Loading Component ....."}),children:(0,s.jsx)(n,{todo:t},e)})))})};var c=o(107),i=o(863);const l=t=>{const[e,o]=(0,a.useState)("");return(0,s.jsx)("div",{className:"add-form",children:(0,s.jsxs)("form",{onSubmit:t=>{t.preventDefault();const d={id:Math.floor(1e5*Math.random()),content:e,editing:!1};c.$.post(d).then((t=>{const e={...t[0],editing:!1};i.s.emit("todo/add",e)})),o("")},children:[(0,s.jsx)("input",{type:"text",value:e,onChange:t=>o(t.target.value)}),(0,s.jsx)("button",{type:"submit",style:{marginLeft:"5px"},children:"add"})]})})},p=t=>{const e=(0,d.ST)();i.s.on("todo/add",(t=>{e({type:"todo/add",todo:t})})),i.s.on("todo/update",(t=>{e({type:"todo/update",todo:t})})),i.s.on("todo/delete",(t=>{e({type:"todo/delete",todo:t})}))};var u=o(704);const h=t=>(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)(d.aY,{children:[(0,s.jsx)(r,{}),(0,s.jsx)(l,{}),(0,s.jsx)(p,{})]}),(0,s.jsx)(u.rw_,{className:"reload",onClick:t=>window.location.reload()})]}),x=t=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(h,{})})},715:(t,e,o)=>{o.d(e,{ST:()=>p,aY:()=>i,k3:()=>l});var d=o(43),a=o(107),s=o(579);const n=(0,d.createContext)(),r=(0,d.createContext)(),c=(t,e)=>{let{type:o,todo:d}=e;switch(o){case"todo/init":return[...d];case"todo/add":return[...t,d];case"todo/delete":return t.filter((t=>t.id!==d.id));case"todo/update":return t.map((t=>t.id===d.id?{...t,...d}:{...t}));default:return t}},i=t=>{let{children:e}=t;const[o,i]=(0,d.useReducer)(c,[]);return(0,d.useEffect)((t=>{a.$.getAll().then((t=>{i({type:"todo/init",todo:t})}))}),[]),(0,s.jsx)(n.Provider,{value:o,children:(0,s.jsx)(r.Provider,{value:i,children:e})})},l=t=>(0,d.useContext)(n),p=t=>(0,d.useContext)(r)},863:(t,e,o)=>{o.d(e,{s:()=>d});const d=(0,o(749).io)("https://nodejs-mysql-api-server-89c2f3154f98.herokuapp.com/")}}]);
//# sourceMappingURL=286.64cb83db.chunk.js.map