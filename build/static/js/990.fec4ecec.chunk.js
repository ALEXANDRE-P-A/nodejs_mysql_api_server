"use strict";(self.webpackChunkreact_todo_app=self.webpackChunkreact_todo_app||[]).push([[990],{990:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var n=o(43),d=o(715),i=o(107),c=o(579);const s=t=>{let{todo:e}=t;const[o,s]=(0,n.useState)(e.content),a=(0,d.ST)();return(0,c.jsxs)("div",{className:"todo",children:[(0,c.jsx)("button",{type:"button",onClick:t=>{i.$.delete(e).then((t=>{a({type:"todo/delete",todo:e})}))},children:"complete"}),(0,c.jsx)("form",{className:"update-content-form",onSubmit:t=>(t=>{t.preventDefault();const n={...e,content:o,editing:!e.editing};i.$.update(n).then((t=>{const e=Boolean(t[0].editing);console.log(e);const o={...t[0],editing:e};a({type:"todo/update",todo:o})}))})(t),children:e.editing?(0,c.jsx)("input",{type:"text",value:o,onChange:t=>s(t.target.value),style:{marginLeft:"5px"}}):(0,c.jsx)("span",{onDoubleClick:t=>{const o={...e,editing:!e.editing};i.$.update(o).then((t=>{const e=Boolean(t[0].editing);console.log(e);const o={...t[0],editing:e};a({type:"todo/update",todo:o})}))},children:e.content})})]},e.id)}}}]);
//# sourceMappingURL=990.fec4ecec.chunk.js.map