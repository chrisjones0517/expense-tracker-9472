(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=function(){return r.a.createElement("h2",null,"Expense Tracker")},u=a(3),s=a.n(u),i=a(7),m=a(5),p=a(19),d=a(2),E=function(e,t){switch(t.type){case"GET_TRANSACTIONS":return Object(d.a)(Object(d.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD_TRANSACTION":return Object(d.a)(Object(d.a)({},e),{},{transactions:[].concat(Object(p.a)(e.transactions),[t.payload])});case"TRANSACTION_ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:t.payload});default:return e}},f=a(8),b=a.n(f),v={transactions:[],error:null,loading:!0},O=Object(n.createContext)(v),h=function(e){var t=e.children,a=Object(n.useReducer)(E,v),c=Object(m.a)(a,2),l=c[0],o=c[1];function u(){return(u=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/v1/transactions");case 3:t=e.sent,o({type:"GET_TRANSACTIONS",payload:t.data.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/api/v1/transactions/".concat(t));case 3:o({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Context-Type":"application/json"}},e.prev=1,e.next=4,b.a.post("/api/v1/transactions",t,a);case 4:n=e.sent,o({type:"ADD_TRANSACTION",payload:n.data.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return r.a.createElement(O.Provider,{value:{transactions:l.transactions,error:l.error,loading:l.loading,getTransactions:function(){return u.apply(this,arguments)},deleteTransaction:function(e){return p.apply(this,arguments)},addTransaction:function(e){return d.apply(this,arguments)}}},t)};function T(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var x=function(){var e=Object(n.useContext)(O).transactions,t=0;return e.length&&(t=e.map((function(e){return e.amount})).reduce((function(e,t){return e+t})).toFixed(2)),r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",T(t)))},y=function(){var e=Object(n.useContext)(O).transactions,t=0,a=0;return e.length&&(a=e.map((function(e){return e.amount>0?e.amount:(t+=e.amount,0)})).reduce((function(e,t){return e+t})).toFixed(2)),r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"$",T(a))),r.a.createElement("div",null,r.a.createElement("h4",null,"Expenses"),r.a.createElement("p",{className:"money minus"},"$",T(t))))},N=function(e){var t=e.transaction,a=Object(n.useContext)(O).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c+"$"+T(Math.abs(t.amount))),r.a.createElement("button",{onClick:function(){return a(t._id)},className:"delete-btn"},"x"))},j=function(){var e=Object(n.useContext)(O),t=e.transactions,a=e.getTransactions;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(N,{key:e.id,transaction:e})}))))},A=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),o=Object(m.a)(l,2),u=o[0],s=o[1],i=Object(n.useContext)(O).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:a,amount:+u};i(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:u,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};a(43);var R=function(){return r.a.createElement(h,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(y,null),r.a.createElement(j,null),r.a.createElement(A,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6951ebe5.chunk.js.map