(this.webpackJsonpfrontsport24=this.webpackJsonpfrontsport24||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),s=(n(25),n(6)),i=n(18),l=n(2),j=n(9),u=n(1),b=function(e){var t=e.type,n=e.txt,a=e.clickCallback;return Object(u.jsxs)("button",{type:t,onClick:a,children:[Object(u.jsx)("div",{}),Object(u.jsx)("p",{children:n})]})},O=n(13),p=n.n(O),d=n(17),h=function(e,t){var n=Object(a.useState)({}),c=Object(s.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],b=l[1];return[o,Object(a.useCallback)(Object(d.a)(p.a.mark((function n(){var a,c;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat("http://localhost:8000","/").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=n.sent,n.next=6,a.json();case 6:c=n.sent,r(Object(j.a)({},c)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),b(!0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])}))),[e,t]),u]},m=function(e){var t=e.headerCallback,n=Object(a.useState)(!1),c=Object(s.a)(n,2),o=c[0],r=c[1],i=Object(a.useState)({username:"",password:""}),l=Object(s.a)(i,2),O=l[0],p=l[1],d=Object(a.useState)(!1),m=Object(s.a)(d,2),g=m[0],x=m[1],k=Object(a.useState)(!1),v=Object(s.a)(k,2),f=v[0],y=v[1],S=h("login",O),w=Object(s.a)(S,3),C=w[0],P=w[1],z=w[2];return Object(u.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),g||f||(console.log(O),P(),z?r(!0):(localStorage.setItem("token",C.token),t(C.position),r(!1)))},children:[Object(u.jsx)("div",{className:"logo"}),o&&Object(u.jsx)("p",{children:"B\u0142\u0105d logowania"}),Object(u.jsx)("input",{type:"text",placeholder:"Login",onChange:function(e){p(Object(j.a)(Object(j.a)({},O),{},{username:e.target.value})),x(""===e.target.value.trim())},value:O.username}),g&&Object(u.jsx)("p",{children:"Prosz\u0119 wpisa\u0107 login"}),Object(u.jsx)("input",{type:"password",placeholder:"Has\u0142o",onChange:function(e){p(Object(j.a)(Object(j.a)({},O),{},{password:e.target.value})),y(""===e.target.value.trim())},value:O.password}),f&&Object(u.jsx)("p",{children:"Prosz\u0119 wpisa\u0107 has\u0142o"}),Object(u.jsx)(b,{type:"submit",txt:"Zaloguj"})]})},g={driver:[{name:"Podr\xf3\u017c",link:"/trip"},{name:"Kursy",link:"/courses"}],accountant:[{name:"Raporty",link:"/reports"},{name:"Zarobki",link:"/salaries"}],ceo:[{name:"Pracownicy",link:"/employees"},{name:"Pojazdy",link:"/vehicles"}],mechanic:[{name:"Pojazdy",link:"/vehicles"},{name:"Naprawy",link:"/repairs"}],transportCoord:[{name:"Kursy",link:"/course"}]};var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(s.a)(o,2),j=(r[0],r[1]),b=Object(a.useState)(!1),O=Object(s.a)(b,2),p=O[0],d=O[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(a.Header,{logged:p,links:n,logoutCallback:function(){localStorage.removeItem("token"),d(!1)}}),Object(u.jsx)(l.c,{children:Object(u.jsx)(l.a,{path:"/login",children:Object(u.jsx)(m,{headerCallback:function(e){j(e),c(e in g?g[e]:[]),d(!0)}})})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),k()}},[[33,1,2]]]);
//# sourceMappingURL=main.d519a5ce.chunk.js.map