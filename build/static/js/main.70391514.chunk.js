(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,a){},27:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(2),r=a(28),l=a.n(r),i=a(10),o=a(11),j=a.n(o),d=a(3),b=a(5),m=(a(27),a(0));var h=function(){var e=Object(s.useState)({name:"",email:"",password:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),o=l[0],h=l[1],u=Object(s.useState)(!0),O=Object(i.a)(u,2),x=O[0],p=O[1],g=Object(d.g)();return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("/login",{email:a.email,password:a.password,rememberMe:x}).then((function(e){e.data.message?h(e.data.message):(localStorage.setItem("username",e.data.username),localStorage.setItem("email",a.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),localStorage.setItem("rememberMe",x),h(""),g.push("/"),window.location.reload(!1))}))},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{className:"form-group",children:"Login"}),""!==o?Object(m.jsx)("div",{className:"error",children:o}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return c(Object(b.a)(Object(b.a)({},a),{},{email:e.target.value}))},value:a.email,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return c(Object(b.a)(Object(b.a)({},a),{},{password:e.target.value}))},value:a.password,required:!0}),Object(m.jsxs)("span",{children:["Forgot ",Object(m.jsx)("a",{href:"forgotPassword.html",children:"password?"})]}),Object(m.jsxs)("label",{style:{display:"inline ",float:"right"},children:[Object(m.jsx)("input",{style:{width:"20px",display:"inline"},type:"checkbox",defaultChecked:x,onChange:function(){return p(!x)}}),"Remember Me"]})]}),Object(m.jsx)("input",{type:"submit",value:"LOGIN"}),Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("button",{className:"register",children:"CANCEL"})}),Object(m.jsxs)("span",{className:"form-group",children:["Don't have an account? ",Object(m.jsx)(n.b,{to:"/signup",children:"SIGN UP"})]})]})})})};var u=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(d.g)(),l=Object(s.useState)({username:"",email:"",password:"",password_2nd:""}),o=Object(i.a)(l,2),h=o[0],u=o[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("/users",{username:h.username,email:h.email,password:h.password,password_2nd:h.password_2nd}).then((function(e){e.data.message?c(e.data.message):(localStorage.setItem("username",h.username),localStorage.setItem("email",h.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),c(""),r.push("/"))}))},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{className:"form-group",children:"Register"}),""!==a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:" Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return u(Object(b.a)(Object(b.a)({},h),{},{username:e.target.value}))},value:h.username,required:!0}),Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{placeholder:" Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return u(Object(b.a)(Object(b.a)({},h),{},{email:e.target.value}))},value:h.email,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{placeholder:" Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return u(Object(b.a)(Object(b.a)({},h),{},{password:e.target.value}))},value:h.password,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Re-enter Password:"}),Object(m.jsx)("input",{placeholder:" Re-enter Enter Password",type:"password",name:"password_2nd",id:"password_2nd",onChange:function(e){return u(Object(b.a)(Object(b.a)({},h),{},{password_2nd:e.target.value}))},value:h.password_2nd,required:!0})]}),Object(m.jsx)("input",{type:"submit",value:"REGISTER"}),Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("button",{className:"register",children:"CANCEL"})}),Object(m.jsxs)("span",{className:"form-group",children:["Already have an account? ",Object(m.jsx)(n.b,{to:"/login",children:"SIGN IN"})]})]})})})};a(16);var O=function(){return Object(m.jsx)("div",{className:"navbarr topnav",children:Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{children:[localStorage.getItem("isLogin")?Object(m.jsx)("div",{className:"signin",children:Object(m.jsxs)("div",{className:"navbar-dropdown",children:[Object(m.jsx)("a",{children:localStorage.getItem("username")}),Object(m.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(m.jsx)(n.b,{to:"/profile",children:"Profile"}),Object(m.jsx)(n.b,{to:"/settings",children:"Account Settings"}),Object(m.jsx)(n.b,{to:"/logout",children:" Logout"})]})]})}):Object(m.jsxs)("div",{className:"signin",children:[Object(m.jsx)(n.b,{to:"/signup",children:" Create Account "}),Object(m.jsx)(n.b,{to:"/login",children:" Sign in "})]}),Object(m.jsx)(n.b,{to:"/dashboard",children:" Dashboard "}),Object(m.jsx)(n.b,{to:"/shell",children:" Python Shell "}),Object(m.jsx)(n.b,{to:"/contact",children:" Contact "}),Object(m.jsx)(n.b,{to:"/about",children:" About "}),Object(m.jsx)(n.b,{to:"/",children:" Home "}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(n.b,{className:"links",to:"/",children:"DreamCode"})})]})})})};var x=function(){return Object(m.jsx)("div",{className:" bottomnav",children:Object(m.jsx)("nav",{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"./pages/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"./pages/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"index.html",children:" Home "})]})})})},p=(a(61),function(){return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)("title",{children:"Python Learning Resources"}),Object(m.jsxs)("body",{children:[Object(m.jsx)("h1",{id:"center-page",children:"Python Learning Resources"}),Object(m.jsxs)("ul",{className:"main-nav",children:[Object(m.jsx)("li",{className:"item1",children:Object(m.jsxs)("div",{className:"bg",children:[Object(m.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/udemy.png")'}}),Object(m.jsx)("input",{type:"checkbox"}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://www.udemy.com/course/complete-python-bootcamp/?LSNPUBID=jU79Zysihs4&siteID=jU79Zysihs4-wy57L5rBsHZNKZ2IjcYiTg",target:"_blank",children:"Udemy"})}),Object(m.jsx)("div",{children:"Introduction of Python, Python objects and Data structure basics, Python statements"})]})}),Object(m.jsx)("li",{className:"item2",children:Object(m.jsxs)("div",{className:"bg",children:[Object(m.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/codeAcademy.png")'}}),Object(m.jsx)("input",{type:"checkbox"}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://www.codecademy.com/learn/learn-python",target:"_blank",children:"codeAcademy"})}),Object(m.jsx)("div",{children:"Conditionals and control flow, Functions, List and dictionaries, Loops"})]})}),Object(m.jsx)("li",{className:"item3",children:Object(m.jsxs)("div",{className:"bg",children:[Object(m.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/tutorialspoint.png")'}}),Object(m.jsx)("input",{type:"checkbox"}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://www.tutorialspoint.com/python/",target:"_blank",children:"Tutorials Point"})}),Object(m.jsx)("div",{children:"Basic syntax, Variable types, Basic operators, Decision making"})]})}),Object(m.jsx)("li",{className:"item4",children:Object(m.jsxs)("div",{className:"bg",children:[Object(m.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/studytonight.jpg")'}}),Object(m.jsx)("input",{type:"checkbox"}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://www.studytonight.com/",target:"_blank",children:"Studytonight"})}),Object(m.jsx)("div",{children:"Modules and functions, Lists, Data types, Conditional statements"})]})}),Object(m.jsx)("li",{className:"item5",children:Object(m.jsxs)("div",{className:"bg",children:[Object(m.jsx)("label",{className:"textOverImage",style:{backgroundImage:'url("images/intellipaat.jpg")'}}),Object(m.jsx)("input",{type:"checkbox"}),Object(m.jsx)("h2",{children:Object(m.jsx)("a",{href:"https://intellipaat.com/blog/tutorial/python-tutorial/",target:"_blank",children:"IntelliPaat"})}),Object(m.jsx)("div",{children:"Conditional control flow, Modules, Exception handling, Regular expressions"})]})})]})]})]})});var g=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],b=Object(s.useState)({name:"",email:""}),g=Object(i.a)(b,2),v=g[0],w=g[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O,{setPageStatus:c,pageStatus:a}),"Logged_in"===a?Object(m.jsx)(d.a,{to:"/"}):"",Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.b,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"welcome App",children:Object(m.jsxs)("h2",{children:["Welcome, ",Object(m.jsxs)("span",{children:[" ",v.name," "]}),Object(m.jsx)("button",{onClick:function(e){w({name:"",email:""}),o(""),c("")},children:" Logout "})]})})}),Object(m.jsx)(d.b,{exact:!0,path:"/login",children:Object(m.jsx)("div",{children:Object(m.jsx)(h,{Login:function(e){j.a.post("/login",{email:e.email,password:e.password}).then((function(t){t.data.message?o(t.data.message):(o(""),c("Logged_in"),w({name:e.name,email:e.email}))}))},error:l,setError:o})})}),Object(m.jsx)(d.b,{exact:!0,path:"/signup",children:Object(m.jsx)("div",{children:Object(m.jsx)(u,{register:function(e){j.a.post("/users",{username:e.name,email:e.email,password:e.password,password_2nd:e.password_2nd}).then((function(t){t.data.message?o(t.data.message):(w({name:e.name,email:e.email}),o(""),c("Logged_in"))}))},error:l,setError:o})})}),Object(m.jsx)(d.b,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(m.jsx)(d.b,{path:"/python-learning-resources",component:p})]}),Object(m.jsx)(x,{})]})};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(g,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.70391514.chunk.js.map