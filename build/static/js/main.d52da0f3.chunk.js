(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,t,a){},35:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a.n(s),n=a(5),r=a(29),i=a.n(r),l=(a(35),a(11)),j=a(17),o=a.n(j),b=a(2),d=a(10),m=a(0);var u=function(e){var t=e.Login,a=e.error,c=e.setPageStatus,n=Object(s.useState)({name:"",email:"",password:""}),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(i),t(i)},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{children:"Login"}),""!==a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0}),Object(m.jsxs)("span",{className:"psw",children:["Forgot ",Object(m.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(m.jsx)("input",{type:"submit",value:"LOGIN"}),Object(m.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),c("create")},children:"SIGN UP"})]})})};var O=function(e){var t=e.register,a=e.error,c=e.setPageStatus,n=Object(s.useState)({name:"",email:"",password:""}),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{children:"Register"}),""!==a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{name:e.target.value}))},value:i.name,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{placeholder:"Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{placeholder:"Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0})]}),Object(m.jsx)("input",{type:"submit",value:"REGISTER"}),Object(m.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),c("")},children:"Cancel"})]})})};a(14);var h=function(e){return e.setPageStatus,e.pageStatus,Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{className:"topnav",children:[Object(m.jsxs)("div",{className:"signin",children:[Object(m.jsx)(n.b,{to:"/signup",children:" Create Account "}),Object(m.jsx)(n.b,{to:"/login",children:" Sign in "})]}),Object(m.jsx)(n.b,{to:"/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"/",children:" Home "}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(n.b,{to:"/",children:" DreamCode "})})]})})})};var p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"bottomnav",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"./pages/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"./pages/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"index.html",children:" Home "})]})})})};var x=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],j=r[1],d=Object(s.useState)({name:"",email:""}),x=Object(l.a)(d,2),g=x[0],v=x[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h,{setPageStatus:c,pageStatus:a}),"Logged_in"===a?Object(m.jsx)(b.a,{to:"/"}):"",Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"welcome App",children:Object(m.jsxs)("h2",{children:["Welcome, ",Object(m.jsxs)("span",{children:[" ",g.name," "]}),Object(m.jsx)("button",{onClick:function(e){v({name:"",email:""}),j(""),c("")},children:" Logout "})]})})}),Object(m.jsx)(b.b,{exact:!0,path:"/login",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(u,{Login:function(e){v({name:e.name,email:e.email}),o.a.post("/login",{email:e.email,password:e.password}).then((function(e){if(!e.data.message)return j(""),c("Logged_in"),console.log("should switch"),Object(m.jsx)(b.a,{to:"/"});j(e.data.message)}))},error:i,setPageStatus:c})})}),Object(m.jsx)(b.b,{exact:!0,path:"/signup",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{register:function(e){v({name:e.name,email:e.email}),o.a.post("/users",{username:e.name,email:e.email,password:e.password}).then((function(e){e.data.message?j(e.data.message):(j(""),c("Logged_in"))}))},error:i,setPageStatus:c})})}),Object(m.jsx)(b.b,{path:"/about.html"})]}),Object(m.jsx)(p,{})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(x,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.d52da0f3.chunk.js.map