(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){},35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a.n(s),c=a(5),r=a(29),i=a.n(r),l=(a(35),a(11)),j=a(17),o=a.n(j),d=a(2),m=a(6),b=a(0);var u=function(e){var t=e.Login,a=e.error,n=e.setPageStatus,c=Object(s.useState)({name:"",email:"",password:""}),r=Object(l.a)(c,2),i=r[0],j=r[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(i),t(i)},children:Object(b.jsxs)("div",{className:"form-inner",children:[Object(b.jsx)("h2",{children:"Login"}),""!==a?Object(b.jsx)("div",{className:"error",children:a}):"",Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{name:e.target.value}))},value:i.name,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0}),Object(b.jsxs)("span",{className:"psw",children:["Forgot ",Object(b.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(b.jsx)("input",{type:"submit",value:"LOGIN"}),Object(b.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),n("create")},children:"SIGN UP"})]})})};var h=function(e){var t=e.register,a=e.error,n=e.setPageStatus,c=Object(s.useState)({name:"",email:"",password:""}),r=Object(l.a)(c,2),i=r[0],j=r[1];return Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(b.jsxs)("div",{className:"form-inner",children:[Object(b.jsx)("h2",{children:"Register"}),""!==a?Object(b.jsx)("div",{className:"error",children:a}):"",Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(b.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{name:e.target.value}))},value:i.name,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(b.jsx)("input",{placeholder:"Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(b.jsx)("input",{placeholder:"Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return j(Object(m.a)(Object(m.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0})]}),Object(b.jsx)("input",{type:"submit",value:"REGISTER"}),Object(b.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),n("")},children:"Cancel"})]})})};a(14);var O=function(e){return e.setPageStatus,e.pageStatus,Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"topnav",children:Object(b.jsxs)("div",{className:"topnav",children:[Object(b.jsxs)("div",{className:"signin",children:[Object(b.jsx)(c.b,{to:"/signup",children:" Create Account "}),Object(b.jsx)(c.b,{to:"/login",children:" Sign In "})]}),Object(b.jsx)(c.b,{to:"/contact.html",children:" Contact "}),Object(b.jsx)(c.b,{to:"/about.html",children:" About "}),Object(b.jsx)(c.b,{to:"/",children:" Home "}),Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)(c.b,{to:"/",children:" DreamCode "})})]})})})};var p=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"bottomnav",children:Object(b.jsxs)("div",{children:[Object(b.jsx)(c.b,{to:"./pages/contact.html",children:" Contact "}),Object(b.jsx)(c.b,{to:"./pages/about.html",children:" About "}),Object(b.jsx)(c.b,{to:"index.html",children:" Home "})]})})})};var x=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(d.f)(),r=Object(s.useState)(""),i=Object(l.a)(r,2),j=i[0],m=i[1],x=Object(s.useState)({name:"",email:""}),g=Object(l.a)(x,2),v=g[0],f=g[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{setPageStatus:n,pageStatus:a}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"welcome App",children:Object(b.jsxs)("h2",{children:["Welcome, ",Object(b.jsxs)("span",{children:[" ",v.name," "]}),Object(b.jsx)("button",{onClick:function(e){f({name:"",email:""}),m(""),n("")},children:" Logout "})]})})}),Object(b.jsx)(d.a,{exact:!0,path:"/login",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(u,{Login:function(e){f({name:e.name,email:e.email}),o.a.post("/login",{username:e.name,email:e.email,password:e.password}).then((function(e){e.data.message?m(e.data.message):(m(""),n("Logged_in"),console.log("should switch"),c.push("/signup"))}))},error:j,setPageStatus:n})})}),Object(b.jsx)(d.a,{exact:!0,path:"/signup",children:Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{register:function(e){f({name:e.name,email:e.email}),o.a.post("/users",{username:e.name,email:e.email,password:e.password}).then((function(e){e.data.message?m(e.data.message):(m(""),n("Logged_in"))}))},error:j,setPageStatus:n})})}),Object(b.jsx)(d.a,{path:"/about.html",component:function(){return Object(b.jsx)("div",{className:"welcome App",children:Object(b.jsx)("h3",{children:"yoyooyoyo"})})}})]}),Object(b.jsx)(p,{})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(x,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.5244c7b7.chunk.js.map