(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,a){},37:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(4),s=a.n(c),n=a(5),r=a(30),i=a.n(r),l=(a(37),a(11)),j=a(17),o=a.n(j),b=a(2),d=a(10),m=a(0);var h=function(e){var t=e.Login,a=e.error,s=e.setPageStatus,n=Object(c.useState)({name:"",email:"",password:""}),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(i),t(i)},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{children:"Login"}),""!==a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0}),Object(m.jsxs)("span",{className:"psw",children:["Forgot ",Object(m.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(m.jsx)("input",{type:"submit",value:"LOGIN"}),Object(m.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),s("create")},children:"SIGN UP"})]})})};var O=function(e){var t=e.register,a=e.error,s=e.setPageStatus,n=Object(c.useState)({name:"",email:"",password:""}),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{children:"Register"}),""!==a?Object(m.jsx)("div",{className:"error",children:a}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{name:e.target.value}))},value:i.name,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{placeholder:"Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{email:e.target.value}))},value:i.email,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{placeholder:"Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return j(Object(d.a)(Object(d.a)({},i),{},{password:e.target.value}))},value:i.password,required:!0})]}),Object(m.jsx)("input",{type:"submit",value:"REGISTER"}),Object(m.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),s("")},children:"Cancel"})]})})};a(13);var u=function(e){return e.setPageStatus,e.pageStatus,Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{className:"topnav",children:[Object(m.jsxs)("div",{className:"signin",children:[Object(m.jsx)(n.b,{to:"/signup",children:" Create Account "}),Object(m.jsx)(n.b,{to:"/login",children:" Sign in "})]}),Object(m.jsx)(n.b,{to:"/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"/dashboard",children:" Dashboard "}),Object(m.jsx)(n.b,{to:"/",children:" Home "}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(n.b,{to:"/",children:" DreamCode "})})]})})})};var x=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"bottomnav",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"./pages/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"./pages/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"index.html",children:" Home "})]})})})},p=a(20),g=a.n(p),f=a(32),v=(a(65),a.p+"static/media/magn-glass.4b8d2b26.jpg"),N=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/leaderboard");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,s(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("title",{children:" Dashboard "}),Object(m.jsxs)("body",{children:[Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{className:"topnav",children:[Object(m.jsxs)("div",{className:"navbar-dropdown",children:[Object(m.jsx)("a",{children:"Username"}),Object(m.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(m.jsx)("a",{href:"profile.html",children:"Profile"}),Object(m.jsx)("a",{href:"account-settings.html",children:"Account Settings"}),Object(m.jsx)("a",{href:"index.html",children:"Logout"})]})]}),Object(m.jsx)("a",{href:"contact.html",children:"Contact"}),Object(m.jsx)("a",{href:"about.html",children:"About"}),Object(m.jsx)("a",{href:"/",children:"Home"}),Object(m.jsx)("a",{href:"dashboard.html",children:"Dashboard"}),Object(m.jsx)("a",{href:"shell.html",children:"Python Shell"}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("a",{href:"/",children:"DreamCode"})})]})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"content",children:[Object(m.jsx)("header",{children:" Dashboard "}),Object(m.jsx)("form",{action:"profile.html",children:Object(m.jsx)("input",{type:"submit",className:"profile",value:"PROFILE"})}),Object(m.jsxs)("div",{id:"leaderboard",children:["LEADERBOARD",Object(m.jsx)("ol",{children:a.map((function(e,t){return Object(m.jsx)("li",{children:e.username+" "+e.points+"XP"},t)}))})]}),Object(m.jsx)("form",{action:"stack_game/stack_game.html",children:Object(m.jsx)("input",{type:"submit",className:"daily-challenge",value:"DAILY CHALLENGE: Stack Game"})}),Object(m.jsx)("br",{}),Object(m.jsx)("h1",{children:"GAMES"}),Object(m.jsxs)("form",{action:"dashboard.html",children:[Object(m.jsx)("input",{type:"text",name:"search-bar",className:"search-bar",placeholder:"Search Bar"}),Object(m.jsx)("input",{type:"image",name:"submit",src:v,className:"search-button",alt:"submit"})]}),Object(m.jsxs)("div",{className:"dropdown",children:["SELECT OPTION",Object(m.jsxs)("div",{className:"dropdown-elements",children:[Object(m.jsx)("a",{href:"./",children:"Option 1"}),Object(m.jsx)("a",{href:"./",children:"Option 2"}),Object(m.jsx)("a",{href:"./",children:"Option 3"})]})]}),Object(m.jsx)("h2",{children:"Sort by"}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"continue-game",children:Object(m.jsx)("form",{action:"ifgame.html",children:Object(m.jsx)("input",{type:"submit",className:"continue",value:"CONTINUE PLAYING: Learn If Statements"})})}),Object(m.jsxs)("div",{className:"category",children:[Object(m.jsx)("i",{className:"arrow left",children:" "}),Object(m.jsx)("div",{id:"js-category-name",children:"CATEGORY1"}),Object(m.jsx)("i",{className:"arrow right",children:" "}),Object(m.jsx)("form",{action:"helloworld.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"Hello World Game"})}),Object(m.jsx)("form",{action:"python-problem-repository.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"Python Problem Repository"})}),Object(m.jsx)("form",{action:"category1/game3.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME3"})}),Object(m.jsx)("form",{action:"category1/game4.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME4"})}),Object(m.jsx)("form",{action:"category1/game5.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME5"})})]})]})]})]})};a(66);var w=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(l.a)(n,2),i=r[0],j=r[1],d=Object(c.useState)({name:"",email:""}),p=Object(l.a)(d,2),g=p[0],f=p[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{setPageStatus:s,pageStatus:a}),"Logged_in"===a?Object(m.jsx)(b.a,{to:"/"}):"",Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",children:Object(m.jsx)("div",{className:"welcome App",children:Object(m.jsxs)("h2",{children:["Welcome, ",Object(m.jsxs)("span",{children:[" ",g.name," "]}),Object(m.jsx)("button",{onClick:function(e){f({name:"",email:""}),j(""),s("")},children:" Logout "})]})})}),Object(m.jsx)(b.b,{exact:!0,path:"/login",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(h,{Login:function(e){f({name:e.name,email:e.email}),o.a.post("/login",{email:e.email,password:e.password}).then((function(e){e.data.message?j(e.data.message):(j(""),s("Logged_in"))}))},error:i,setPageStatus:s})})}),Object(m.jsx)(b.b,{exact:!0,path:"/signup",children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{register:function(e){f({name:e.name,email:e.email}),o.a.post("/users",{username:e.name,email:e.email,password:e.password}).then((function(e){e.data.message?j(e.data.message):(j(""),s("Logged_in"))}))},error:i,setPageStatus:s})})}),Object(m.jsx)(b.b,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(m.jsx)(b.b,{path:"/dashboard",component:N})]}),Object(m.jsx)(x,{})]})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(w,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.fd08a602.chunk.js.map