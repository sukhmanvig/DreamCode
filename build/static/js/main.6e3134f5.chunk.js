(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){},27:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(2),r=a(28),l=a.n(r),i=a(10),o=a(11),j=a.n(o),d=a(3),b=a(5),h=(a(27),a(0));var m=function(){var e=Object(s.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),o=l[0],m=l[1],O=Object(s.useState)(!0),u=Object(i.a)(O,2),x=u[0],p=u[1],g=Object(d.g)();return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("/login",{email:a.email,password:a.password,rememberMe:x}).then((function(e){e.data.message?m(e.data.message):(localStorage.setItem("username",e.data.username),localStorage.setItem("email",a.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),localStorage.setItem("rememberMe",x),m(""),g.push("/"),window.location.reload(!1))}))},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{className:"form-group",children:"Login"}),""!==o?Object(h.jsx)("div",{className:"error",children:o}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return c(Object(b.a)(Object(b.a)({},a),{},{email:e.target.value}))},value:a.email,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return c(Object(b.a)(Object(b.a)({},a),{},{password:e.target.value}))},value:a.password,required:!0}),Object(h.jsxs)("span",{children:["Forgot ",Object(h.jsx)("a",{href:"forgotPassword.html",children:"password?"})]}),Object(h.jsxs)("label",{style:{display:"inline ",float:"right"},children:[Object(h.jsx)("input",{style:{width:"20px",display:"inline"},type:"checkbox",defaultChecked:x,onChange:function(){return p(!x)}}),"Remember Me"]})]}),Object(h.jsx)("input",{type:"submit",value:"LOGIN"}),Object(h.jsx)(n.b,{to:"/",children:Object(h.jsx)("button",{className:"register",children:"CANCEL"})}),Object(h.jsxs)("span",{className:"form-group",children:["Don't have an account? ",Object(h.jsx)(n.b,{to:"/signup",children:"SIGN UP"})]})]})})})};var O=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(d.g)(),l=Object(s.useState)({username:"",email:"",password:"",password_2nd:""}),o=Object(i.a)(l,2),m=o[0],O=o[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("/users",{username:m.username,email:m.email,password:m.password,password_2nd:m.password_2nd}).then((function(e){e.data.message?c(e.data.message):(localStorage.setItem("username",m.username),localStorage.setItem("email",m.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),c(""),r.push("/"))}))},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{className:"form-group",children:"Register"}),""!==a?Object(h.jsx)("div",{className:"error",children:a}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{placeholder:" Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return O(Object(b.a)(Object(b.a)({},m),{},{username:e.target.value}))},value:m.username,required:!0}),Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{placeholder:" Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return O(Object(b.a)(Object(b.a)({},m),{},{email:e.target.value}))},value:m.email,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(h.jsx)("input",{placeholder:" Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return O(Object(b.a)(Object(b.a)({},m),{},{password:e.target.value}))},value:m.password,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Re-enter Password:"}),Object(h.jsx)("input",{placeholder:" Re-enter Enter Password",type:"password",name:"password_2nd",id:"password_2nd",onChange:function(e){return O(Object(b.a)(Object(b.a)({},m),{},{password_2nd:e.target.value}))},value:m.password_2nd,required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"REGISTER"}),Object(h.jsx)(n.b,{to:"/",children:Object(h.jsx)("button",{className:"register",children:"CANCEL"})}),Object(h.jsxs)("span",{className:"form-group",children:["Already have an account? ",Object(h.jsx)(n.b,{to:"/login",children:"SIGN IN"})]})]})})})};a(16);var u=function(){return Object(h.jsx)("div",{className:"navbarr topnav",children:Object(h.jsx)("nav",{className:"topnav",children:Object(h.jsxs)("div",{children:[localStorage.getItem("isLogin")?Object(h.jsx)("div",{className:"signin",children:Object(h.jsxs)("div",{className:"navbar-dropdown",children:[Object(h.jsx)("a",{children:localStorage.getItem("username")}),Object(h.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(h.jsx)(n.b,{to:"/profile",children:"Profile"}),Object(h.jsx)(n.b,{to:"/settings",children:"Account Settings"}),Object(h.jsx)(n.b,{to:"/logout",children:" Logout"})]})]})}):Object(h.jsxs)("div",{className:"signin",children:[Object(h.jsx)(n.b,{to:"/signup",children:" Create Account "}),Object(h.jsx)(n.b,{to:"/login",children:" Sign in "})]}),Object(h.jsx)(n.b,{to:"/dashboard",children:" Dashboard "}),Object(h.jsx)(n.b,{to:"/shell",children:" Python Shell "}),Object(h.jsx)(n.b,{to:"/contact",children:" Contact "}),Object(h.jsx)(n.b,{to:"/about",children:" About "}),Object(h.jsx)(n.b,{to:"/",children:" Home "}),Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(n.b,{className:"links",to:"/",children:"DreamCode"})})]})})})};var x=function(){return Object(h.jsx)("div",{className:" bottomnav",children:Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(n.b,{to:"./pages/contact.html",children:" Contact "}),Object(h.jsx)(n.b,{to:"./pages/about.html",children:" About "}),Object(h.jsx)(n.b,{to:"index.html",children:" Home "})]})})})},p=(a(61),function(){return Object(h.jsxs)(s.Fragment,{children:[Object(h.jsx)("title",{children:"Python Learning Resources"}),Object(h.jsxs)("body",{children:[Object(h.jsx)("nav",{className:"topnav",children:Object(h.jsxs)("div",{className:"topnav",children:[Object(h.jsxs)("div",{className:"navbar-dropdown",children:[Object(h.jsx)("a",{children:"Username"}),Object(h.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(h.jsx)("a",{href:"profile.html",children:"Profile"}),Object(h.jsx)("a",{href:"account-settings.html",children:"Account Settings"}),Object(h.jsx)("a",{href:"index.html",children:"Logout"})]})]}),Object(h.jsx)("a",{href:"contact.html",children:"Contact"}),Object(h.jsx)("a",{href:"about.html",children:"About"}),Object(h.jsx)("a",{href:"index.html",children:"Home"}),Object(h.jsx)("a",{href:"dashboard.html",children:"Dashboard"}),Object(h.jsx)("a",{href:"shell.html",children:"Python Shell"}),Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)("a",{href:"index.html",children:"DreamCode"})})]})}),Object(h.jsx)("h1",{id:"center-page",children:"Python Learning Resources"}),Object(h.jsxs)("ul",{className:"main-nav",children:[Object(h.jsx)("li",{className:"item1",children:Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/udemy.png")'}}),Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://www.udemy.com/course/complete-python-bootcamp/?LSNPUBID=jU79Zysihs4&siteID=jU79Zysihs4-wy57L5rBsHZNKZ2IjcYiTg",target:"_blank",children:"Udemy"})}),Object(h.jsx)("div",{children:"Introduction of Python, Python objects and Data structure basics, Python statements"})]})}),Object(h.jsx)("li",{className:"item2",children:Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("label",{className:"textOverImage",style:{backgroundImage:"url(images/codeAcademy.png)"}}),Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://www.codecademy.com/learn/learn-python",target:"_blank",children:"codeAcademy"})}),Object(h.jsx)("div",{children:"Conditionals and control flow, Functions, List and dictionaries, Loops"})]})}),Object(h.jsx)("li",{className:"item3",children:Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/tutorialspoint.png")'}}),Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://www.tutorialspoint.com/python/",target:"_blank",children:"Tutorials Point"})}),Object(h.jsx)("div",{children:"Basic syntax, Variable types, Basic operators, Decision making"})]})}),Object(h.jsx)("li",{className:"item4",children:Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/studytonight.jpg")'}}),Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://www.studytonight.com/",target:"_blank",children:"Studytonight"})}),Object(h.jsx)("div",{children:"Modules and functions, Lists, Data types, Conditional statements"})]})}),Object(h.jsx)("li",{className:"item5",children:Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/intellipaat.jpg")'}}),Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("h2",{children:Object(h.jsx)("a",{href:"https://intellipaat.com/blog/tutorial/python-tutorial/",target:"_blank",children:"IntelliPaat"})}),Object(h.jsx)("div",{children:"Conditional control flow, Modules, Exception handling, Regular expressions"})]})})]})]})]})});var g=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],b=Object(s.useState)({name:"",email:""}),g=Object(i.a)(b,2),v=g[0],f=g[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u,{setPageStatus:c,pageStatus:a}),"Logged_in"===a?Object(h.jsx)(d.a,{to:"/"}):"",Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)("div",{className:"welcome App",children:Object(h.jsxs)("h2",{children:["Welcome, ",Object(h.jsxs)("span",{children:[" ",v.name," "]}),Object(h.jsx)("button",{onClick:function(e){f({name:"",email:""}),o(""),c("")},children:" Logout "})]})})}),Object(h.jsx)(d.b,{exact:!0,path:"/login",children:Object(h.jsx)("div",{children:Object(h.jsx)(m,{Login:function(e){j.a.post("/login",{email:e.email,password:e.password}).then((function(t){t.data.message?o(t.data.message):(o(""),c("Logged_in"),f({name:e.name,email:e.email}))}))},error:l,setError:o})})}),Object(h.jsx)(d.b,{exact:!0,path:"/signup",children:Object(h.jsx)("div",{children:Object(h.jsx)(O,{register:function(e){j.a.post("/users",{username:e.name,email:e.email,password:e.password,password_2nd:e.password_2nd}).then((function(t){t.data.message?o(t.data.message):(f({name:e.name,email:e.email}),o(""),c("Logged_in"))}))},error:l,setError:o})})}),Object(h.jsx)(d.b,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(h.jsx)(d.b,{path:"/python-learning-resources",component:p})]}),Object(h.jsx)(x,{})]})};l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(n.a,{children:Object(h.jsx)(g,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6e3134f5.chunk.js.map