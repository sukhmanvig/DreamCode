(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,s){},31:function(e,t,s){},80:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(7),i=s(19),r=s.n(i),l=s(9),o=s(5),j=s(8),d=s(16),b=s.n(d),h=(s(31),s(0));var m=function(){var e=Object(c.useState)({name:"",email:"",password:""}),t=Object(j.a)(e,2),s=t[0],n=t[1],i=Object(c.useState)(""),r=Object(j.a)(i,2),d=r[0],m=r[1],O=Object(l.g)();return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/login",{email:s.email,password:s.password}).then((function(e){e.data.message?m(e.data.message):(localStorage.setItem("username",e.data.username),localStorage.setItem("email",s.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),m(""),O.push("/"),window.location.reload(!1))}))},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{className:"form-group",children:"Login"}),""!==d?Object(h.jsx)("div",{className:"error",children:d}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return n(Object(o.a)(Object(o.a)({},s),{},{email:e.target.value}))},value:s.email,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(h.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return n(Object(o.a)(Object(o.a)({},s),{},{password:e.target.value}))},value:s.password,required:!0}),Object(h.jsxs)("span",{children:["Forgot ",Object(h.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(h.jsx)("input",{type:"submit",value:"LOGIN"}),Object(h.jsx)(a.b,{to:"/",children:Object(h.jsx)("button",{className:"register",children:"CANCEL"})}),Object(h.jsxs)("span",{className:"form-group",children:["Don't have an account? ",Object(h.jsx)(a.b,{to:"/signup",children:"SIGN UP"})]})]})})})};var O=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],n=t[1],i=Object(l.g)(),r=Object(c.useState)({username:"",email:"",password:"",password_2nd:""}),d=Object(j.a)(r,2),m=d[0],O=d[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/users",{username:m.username,email:m.email,password:m.password,password_2nd:m.password_2nd}).then((function(e){e.data.message?n(e.data.message):(localStorage.setItem("username",m.username),localStorage.setItem("email",m.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),n(""),i.push("/"))}))},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{className:"form-group",children:"Register"}),""!==s?Object(h.jsx)("div",{className:"error",children:s}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{placeholder:" Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return O(Object(o.a)(Object(o.a)({},m),{},{username:e.target.value}))},value:m.username,required:!0}),Object(h.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(h.jsx)("input",{placeholder:" Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return O(Object(o.a)(Object(o.a)({},m),{},{email:e.target.value}))},value:m.email,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(h.jsx)("input",{placeholder:" Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return O(Object(o.a)(Object(o.a)({},m),{},{password:e.target.value}))},value:m.password,required:!0}),Object(h.jsx)("label",{htmlFor:"password",children:"Re-enter Password:"}),Object(h.jsx)("input",{placeholder:" Re-enter Enter Password",type:"password",name:"password_2nd",id:"password_2nd",onChange:function(e){return O(Object(o.a)(Object(o.a)({},m),{},{password_2nd:e.target.value}))},value:m.password_2nd,required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"REGISTER"}),Object(h.jsx)(a.b,{to:"/",children:Object(h.jsx)("button",{className:"register",children:"CANCEL"})}),Object(h.jsxs)("span",{className:"form-group",children:["Already have an account? ",Object(h.jsx)(a.b,{to:"/login",children:"SIGN IN"})]})]})})})};s(22);var u=function(){return Object(h.jsx)("div",{className:"navbarr topnav",children:Object(h.jsx)("nav",{className:"topnav",children:Object(h.jsxs)("div",{children:[localStorage.getItem("isLogin")?Object(h.jsx)("div",{className:"signin",children:Object(h.jsxs)("div",{className:"navbar-dropdown",children:[Object(h.jsx)("a",{children:localStorage.getItem("username")}),Object(h.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(h.jsx)(a.b,{to:"/profile",children:"Profile"}),Object(h.jsx)(a.b,{to:"/settings",children:"Account Settings"}),Object(h.jsx)(a.b,{to:"/logout",children:" Logout"})]})]})}):Object(h.jsxs)("div",{className:"signin",children:[Object(h.jsx)(a.b,{to:"/signup",children:" Create Account "}),Object(h.jsx)(a.b,{to:"/login",children:" Sign in "})]}),Object(h.jsx)(a.b,{to:"/dashboard",children:" Dashboard "}),Object(h.jsx)(a.b,{to:"/shell",children:" Python Shell "}),Object(h.jsx)(a.b,{to:"/contact",children:" Contact "}),Object(h.jsx)(a.b,{to:"/about",children:" About "}),Object(h.jsx)(a.b,{to:"/",children:" Home "}),Object(h.jsx)("div",{className:"logo",children:Object(h.jsx)(a.b,{className:"links",to:"/",children:"DreamCode"})})]})})})};var p=function(){return Object(h.jsx)("div",{className:" bottomnav",children:Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(a.b,{to:"./pages/contact.html",children:" Contact "}),Object(h.jsx)(a.b,{to:"./pages/about.html",children:" About "}),Object(h.jsx)(a.b,{to:"index.html",children:" Home "})]})})})},x=s(36),f=s.n(x),g=s(47),v=(s(80),s.p+"static/media/magn-glass.4b8d2b26.jpg"),w=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),s=t[0],n=t[1],a=function(){var e=Object(g.a)(f.a.mark((function e(){var t,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/leaderboard");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,n(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(h.jsxs)(c.Fragment,{className:"dashboard navbar",children:[Object(h.jsx)("title",{children:" Dashboard "}),Object(h.jsxs)("body",{children:[Object(h.jsx)("br",{}),Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("header",{children:" Dashboard "}),Object(h.jsx)("form",{action:"profile.html",children:Object(h.jsx)("input",{type:"submit",id:"profile",value:"PROFILE"})}),Object(h.jsxs)("div",{id:"leaderboard",children:["LEADERBOARD",Object(h.jsx)("ol",{children:s.map((function(e,t){return Object(h.jsx)("li",{children:e.username+" "+e.points+"XP"},t)}))})]}),Object(h.jsx)("form",{action:"stack_game/stack_game.html",children:Object(h.jsx)("input",{type:"submit",className:"daily-challenge",value:"DAILY CHALLENGE: Stack Game"})}),Object(h.jsx)("br",{}),Object(h.jsx)("h1",{children:"GAMES"}),Object(h.jsxs)("form",{action:"dashboard.html",children:[Object(h.jsx)("input",{type:"text",name:"search-bar",className:"search-bar",placeholder:"Search Bar"}),Object(h.jsx)("input",{type:"image",name:"submit",src:v,className:"search-button",alt:"submit"})]}),Object(h.jsxs)("div",{className:"dropdown",children:["SELECT OPTION",Object(h.jsxs)("div",{className:"dropdown-elements",children:[Object(h.jsx)("a",{href:"./",children:"Option 1"}),Object(h.jsx)("a",{href:"./",children:"Option 2"}),Object(h.jsx)("a",{href:"./",children:"Option 3"})]})]}),Object(h.jsx)("h2",{children:"Sort by"}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"continue-game",children:Object(h.jsx)("form",{action:"/ifcode",children:Object(h.jsx)("input",{type:"submit",className:"continue",value:"CONTINUE PLAYING: Learn If Statements"})})}),Object(h.jsxs)("div",{className:"category",children:[Object(h.jsx)("i",{className:"arrow left",children:" "}),Object(h.jsx)("div",{id:"js-category-name",children:"CATEGORY1"}),Object(h.jsx)("i",{className:"arrow right",children:" "}),Object(h.jsx)("form",{action:"helloworld.html",children:Object(h.jsx)("input",{type:"submit",className:"game",value:"Hello World Game"})}),Object(h.jsx)("form",{action:"python-problem-repository.html",children:Object(h.jsx)("input",{type:"submit",className:"game",value:"Python Problem Repository"})}),Object(h.jsx)("form",{action:"category1/game3.html",children:Object(h.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME3"})}),Object(h.jsx)("form",{action:"category1/game4.html",children:Object(h.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME4"})}),Object(h.jsx)("form",{action:"category1/game5.html",children:Object(h.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME5"})})]})]})]})]})},N=s(21),y=s(23),S=s(20),E=s(14),_=s(37),I=s(24);var L=function(e){var t=e.type,s=e.error,n=e.success,a=e.setPageStatus,i=Object(c.useState)({name:"",email:"",oldpassword:"",newpassword:""}),r=Object(j.a)(i,2),l=r[0],d=r[1];return Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(l)},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{children:"Change Password"}),""!==n?Object(h.jsx)("div",{className:"error success",children:n}):"",""!==s?Object(h.jsx)("div",{className:"error",children:s}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(h.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return d(Object(o.a)(Object(o.a)({},l),{},{name:e.target.value}))},value:l.name,required:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Enter current Password:"}),Object(h.jsx)("input",{placeholder:"Enter current password",type:"password",name:"password",id:"password",onChange:function(e){return d(Object(o.a)(Object(o.a)({},l),{},{oldpassword:e.target.value}))},value:l.oldpassword,required:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Enter New Password:"}),Object(h.jsx)("input",{placeholder:"Enter new password",type:"password",name:"newpassword",id:"newpassword",onChange:function(e){return d(Object(o.a)(Object(o.a)({},l),{},{newpassword:e.target.value}))},value:l.newpassword,required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"UPDATE PASSWORD"}),Object(h.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),a("")},children:"Cancel"})]})})},A=s(28);var T=function(e){var t=e.type,s=e.error,n=e.success,a=e.setPageStatus,i=Object(c.useState)({name:"",bio:""}),r=Object(j.a)(i,2),l=r[0],d=r[1];return Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(l)},children:Object(h.jsxs)("div",{className:"form-inner",children:[Object(h.jsx)("h2",{children:"Edit Bio"}),""!==n?Object(h.jsx)("div",{className:"error success",children:n}):"",""!==s?Object(h.jsx)("div",{className:"error",children:s}):"",Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Username:"}),Object(h.jsx)("input",{placeholder:"Enter Username",type:"text",name:"name",id:"name",onChange:function(e){return d(Object(o.a)(Object(o.a)({},l),{},{name:e.target.value}))},value:l.name,required:!0})]}),Object(h.jsxs)(A.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(h.jsx)(A.a.Label,{children:"Edit Bio"}),Object(h.jsx)(A.a.Control,{as:"textarea",rows:3,onChange:function(e){return d(Object(o.a)(Object(o.a)({},l),{},{bio:e.target.value}))},value:l.bio,required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"Update Bio"}),Object(h.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),a("")},children:"Cancel"})]})})};s(82);function C(){return Object(h.jsxs)("ul",{className:"settings setting-list",children:[Object(h.jsx)("li",{children:Object(h.jsxs)("label",{className:"mb-3",children:[" ","Recieve newsletters",Object(h.jsx)("input",{className:"ml-2",type:"checkbox",defaultChecked:"True"}),Object(h.jsx)("span",{className:"checkmark"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("label",{className:"mb-2",children:[" ","Display name on profile",Object(h.jsx)("input",{className:"ml-2 mt-1",type:"checkbox",defaultChecked:"True"}),Object(h.jsx)("span",{className:"checkmark"})]})})]})}function k(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],l=i[1],o=Object(c.useState)(""),d=Object(j.a)(o,2),m=d[0],O=d[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y.a,{children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(E.a,{md:5,children:Object(h.jsxs)("ul",{className:" settings setting-list",children:[Object(h.jsx)("li",{children:"USERNAME:"}),Object(h.jsx)("p",{children:"username"}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"NAME:"}),Object(h.jsx)("p",{children:"name"}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"EMAIL:"}),Object(h.jsx)("p",{children:"email"}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"BIRTHDAY:"}),Object(h.jsx)("p",{children:"birthday"}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"PASSWORD:"}),Object(h.jsx)("p",{children:"*******"})]})}),Object(h.jsxs)(E.a,{md:{span:5,offset:1},className:"",children:[Object(h.jsx)(_.a,{className:"mb-1",onClick:function(){return n("EditBio")},variant:"info",children:"Edit Bio"}),Object(h.jsx)(C,{})]})]})}),"EditBio"===s?Object(h.jsx)("div",{className:"Ap",children:Object(h.jsx)(T,{type:function(e){b.a.post("/EditBio",{bio:e.bio,name:e.name}).then((function(e){O(e.data.message),l("")}),(function(e){console.log(e),O(""),l("Bio error")}))},error:r,success:m,setPageStatus:n})}):""]})}function R(){return Object(h.jsx)(y.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(E.a,{md:{span:5},children:Object(h.jsx)(C,{})})})})}function G(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],l=i[1],o=Object(c.useState)(""),d=Object(j.a)(o,2),m=d[0],O=d[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y.a,{children:Object(h.jsx)(S.a,{children:Object(h.jsx)(E.a,{md:{span:12},children:Object(h.jsxs)("ul",{className:"setting-list",children:[Object(h.jsx)("li",{children:"FORGOT PASSWORD:"}),Object(h.jsx)(_.a,{variant:"danger",className:"inline",onClick:function(){return n("ResetPassword")},children:"Reset Password"})]})})})}),"ResetPassword"===s?Object(h.jsx)("div",{className:"Ap",children:Object(h.jsx)(L,{type:function(e){b.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){O(e.data.message),l("")}),(function(e){console.log(e),O(""),l("Username or password incorrect")}))},error:r,success:m,setPageStatus:n})}):""]})}var P=function(){return Object(h.jsxs)(y.a,{className:" settings mt-5",children:[Object(h.jsxs)(S.a,{children:[Object(h.jsx)(E.a,{md:4,sm:{span:12},children:Object(h.jsx)("h1",{id:"setting-tile",children:"Account Settings"})}),Object(h.jsx)(E.a,{md:3,sm:12,children:Object(h.jsxs)("div",{className:"acc-preview",children:[Object(h.jsxs)("p",{className:"mr-1",id:"usr",children:["USERNAME"," "]}),Object(h.jsx)("p",{className:"",children:" MEMBER SINCE MM/DD/YYYY"})]})}),Object(h.jsx)(E.a,{md:{span:3,offset:2},xs:{span:4,offset:3},sm:{span:4,offset:6},children:Object(h.jsx)("div",{attribution:"Peter Southwood, CC0, via Wikimedia Commons",id:"circle"})})]}),Object(h.jsx)(N.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#general",children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(E.a,{sm:4,md:3,children:Object(h.jsxs)(I.a,{variant:"flush",className:"rounded",children:[Object(h.jsx)(I.a.Item,{eventKey:"#general",className:"pb-3",children:"General Settings"}),Object(h.jsx)(I.a.Item,{eventKey:"#notif",className:"pb-3",children:"Notifications"}),Object(h.jsx)(I.a.Item,{eventKey:"#privacy",className:"pb-3 mb-5 border-bottom",children:"Privacy"})]})}),Object(h.jsx)(E.a,{sm:{span:7,offset:1},className:"mt-5 border",children:Object(h.jsxs)(N.a.Content,{className:"contenttab",children:[Object(h.jsx)(N.a.Pane,{eventKey:"#general",className:"mt-5",children:Object(h.jsx)(k,{})}),Object(h.jsx)(N.a.Pane,{eventKey:"#notif",className:"mt-5",children:Object(h.jsx)(R,{id:"notif"})}),Object(h.jsx)(N.a.Pane,{eventKey:"#privacy",className:"mt-5",children:Object(h.jsx)(G,{id:"privacy"})})]})})]})})]})};s(83);var F=function(){var e=Object(c.useState)({name:"",oldpassword:"",newpassword:""}),t=Object(j.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),r=i[0],l=i[1],d=Object(c.useState)(""),m=Object(j.a)(d,2),O=m[0],u=m[1],p=function(){!function(e){b.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){u(e.data.message),l("")}),(function(e){console.log(e),u(""),l("Username or password incorrect")}))}(s)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"confirm-pass mt-5 container pure-form ",children:Object(h.jsxs)("fieldset",{className:"confirm-pass",children:[Object(h.jsx)("h1",{children:"Set a New Password"}),""!==O?Object(h.jsx)("div",{className:"error success",children:O}):"",""!==r?Object(h.jsx)("div",{className:"error",children:r}):"",Object(h.jsx)("input",{type:"text",placeholder:"Enter username",id:"password",onChange:function(e){return n(Object(o.a)(Object(o.a)({},s),{},{name:e.target.value}))},value:s.name,required:!0}),Object(h.jsx)("input",{type:"password",placeholder:"Enter current Password",id:"password",onChange:function(e){return n(Object(o.a)(Object(o.a)({},s),{},{oldpassword:e.target.value}))},value:s.oldpassword,required:!0}),Object(h.jsx)("input",{type:"password",placeholder:"Enter New Password",id:"new_password",onChange:function(e){return n(Object(o.a)(Object(o.a)({},s),{},{newpassword:e.target.value}))},value:s.newpassword,required:!0}),Object(h.jsx)("button",{type:"submit",onClick:function(){return p()},className:"pure-button pure-button-primary",children:"Confirm"})]})})})};s(84);var q=function(){var e=Object(c.useState)({name:""}),t=Object(j.a)(e,2),s=(t[0],t[1],Object(c.useState)("")),n=Object(j.a)(s,2),a=n[0],i=n[1],r=Object(c.useState)(""),l=Object(j.a)(r,2),o=l[0],d=l[1];return b.a.get("/getBio",{username:"jayvin"}).then((function(e){console.log(e.data.message),i(e.data.message),d("")}),(function(e){console.log(e),i(""),d("Couldn't get Bio")})),Object(h.jsx)("body",{id:"profilebody",children:Object(h.jsx)("main",{className:"profile",children:Object(h.jsxs)("div",{className:"profile-content profile",children:[Object(h.jsxs)("section",{className:"p-head",children:[Object(h.jsx)("div",{id:"user-pfp",children:Object(h.jsx)("img",{alt:"profile",src:"https://www.thispersondoesnotexist.com/image"})}),Object(h.jsxs)("div",{id:"user-infosec",children:[Object(h.jsx)("h1",{id:"name-title",children:"Username"}),Object(h.jsx)("p",{children:"LEADERBOARD RANKING"}),Object(h.jsx)("p",{children:"#000000000000000000"}),Object(h.jsx)("p",{children:"LEVEL"}),Object(h.jsx)("p",{children:"XP"}),Object(h.jsx)("p",{className:"bio",children:""!==a?Object(h.jsx)("p",{className:"",children:a}):Object(h.jsx)("p",{className:"error",children:o})})]}),Object(h.jsxs)("div",{id:"circle-stats",title:"XP",children:[Object(h.jsx)("svg",{children:Object(h.jsx)("circle",{className:"circle-xp",cx:"125",cy:"125",r:"100"})}),Object(h.jsx)("div",{className:"div-lvl",children:Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:"Level 0"})})})]})]}),Object(h.jsx)("div",{className:"profile-div-left",children:Object(h.jsxs)("section",{className:"pf-sec sec-friends",children:[Object(h.jsx)("h4",{children:"FRIENDS"}),Object(h.jsxs)("div",{className:"frn",children:[Object(h.jsx)("div",{className:"frn-img"}),Object(h.jsx)("h5",{children:"FriendUsername"})]}),Object(h.jsxs)("div",{className:"frn",children:[Object(h.jsx)("div",{className:"frn-img"}),Object(h.jsx)("h5",{children:"FriendUsername"})]}),Object(h.jsxs)("div",{className:"frn",children:[Object(h.jsx)("div",{className:"frn-img"}),Object(h.jsx)("h5",{children:"FriendUsername"})]}),Object(h.jsxs)("div",{className:"frn",children:[Object(h.jsx)("div",{className:"frn-img"}),Object(h.jsx)("h5",{children:"FriendUsername"})]})]})}),Object(h.jsxs)("div",{className:"profile-div-right",children:[Object(h.jsxs)("section",{className:"pf-sec sec-badges",children:[Object(h.jsx)("h4",{children:"BADGES"}),Object(h.jsx)("div",{className:"ubadge",title:"Say Hello to Coding!"}),Object(h.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(h.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(h.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(h.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(h.jsx)("div",{className:"ubadge",title:"Badge Name"})]}),Object(h.jsxs)("section",{className:"pf-sec sec-most-played",children:[Object(h.jsx)("h4",{children:"MOST PLAYED GAMES"}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Hello World!"})}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Game Title 2"})}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Game Title 3"})}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Game Title 4"})}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Game Title 5"})}),Object(h.jsx)("div",{className:"game",children:Object(h.jsx)("h5",{children:"Game Title 6"})})]})]})]})})})},D=s(27),M=function(e){var t=e.component,s=e.restricted,c=Object(D.a)(e,["component","restricted"]),n=localStorage.getItem("isLogin");return Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},c),{},{component:function(e){return n&&s?Object(h.jsx)(l.a,{to:"/dashboard"}):Object(h.jsx)(t,Object(o.a)({},e))}}))},H=function(e){var t=e.component,s=Object(D.a)(e,["component"]),c=localStorage.getItem("isLogin");return Object(h.jsx)(l.b,Object(o.a)(Object(o.a)({},s),{},{component:function(e){return c?Object(h.jsx)(t,Object(o.a)({},e)):Object(h.jsx)(l.a,{to:"/login"})}}))},B=(s(85),function(){document.querySelector("#robot-submit").addEventListener("click",(function(){!function(){var c=document.querySelector("#on-front-wall").value,n=document.querySelector("#on-bottom-wall").value,a=document.querySelector("#default").value,i=document.querySelector("#game-status"),r=document.querySelector("#robot-submit");r.disabled=!0,function(e,t,s){var c="",n="",a="",i=document.querySelector("#code-output"),r=document.querySelector("#code-elements"),l="";switch(e){case"Down":c="vpos = vpos - 1";break;case"Up":c="vpos = vpos + 1"}switch(t){case"Left":n="hpos = hpos - 1";break;case"Right":n="hpos = hpos + 1"}switch(s){case"Right":a="hpos = hpos + 1";break;case"Down":a="vpos = vpos - 1"}l="<pre class='ifgame_pre'><code> \n\tif is_front_wall == True:\n\t".concat(c,"\n\telif is_bottom_wall == True:\n\t").concat(n,"    \n\telse: \n\t").concat(a,"\n</code></pre>"),i.innerHTML=l,r.style.visibility="inherit"}(c,n,a),i.innerHTML="";var l=document.querySelector("#game-grid"),o=l.childNodes,j=l.childElementCount,d=Math.sqrt(j),b=d,h=0,m=0,O=s[0],u=0,p=t[0],x=p,f=0;function g(){if(u++,f=!1,u>=20)return i.innerHTML("The robot took too many moves and ran out of steam. Try again."),o[p].innerHTML="",o[x].innerHTML="<img id='robot' src='../images/robot.png'>",void clearInterval(e);if(m+1>=d)switch(n){case"Left":if(0===h){f=!0;break}h--;break;case"Right":if(h>=b){f=!0;break}h++;break;default:f=!0}else if(h+1>=b)switch(c){case"Down":if(m+1>=d){f=!0;break}m++;break;case"Up":if(0===m){f=!0;break}m--;break;default:f=!0}else switch(a){case"Down":m++;break;case"Right":h++;break;default:f=!0}return f?(i.innerHTML="Oops that path wasn't quite right. Try again.",o[p].innerHTML="",o[x].innerHTML="<img id='robot' src='../images/robot.png' />",r.disabled=!1,void clearInterval(e)):(o[p].innerHTML="",o[p=m*d+h].innerHTML="<img id='robot' src='../images/robot.png' />",h*b+m===O?(clearInterval(e),i.innerHTML="Yay, Rob successfully retrieved the treasure!",document.querySelector("#robot-try-again").style.visibility="visible",void(document.querySelector("#next-level").style.visibility="visible")):void 0)}clearInterval(e),e=setInterval(g,1e3)}()})),document.querySelector("#robot-try-again").addEventListener("click",(function(){!function(){document.querySelector("#robot").parentNode.innerHTML="";var e=document.querySelector("#game-grid").childNodes,c=t[0];e[s[0]].innerHTML="<img id='goal' src='../images/treasure.png' />",e[c].innerHTML="<img id='robot' src='../images/robot.png'i />",document.querySelector("#game-status").innerHTML="",document.querySelector("#robot-try-again").style.visibility="hidden",document.querySelector("#robot-submit").disabled=!1}()})),document.querySelector("#show-hide-code").addEventListener("click",(function(){!function(){var e=document.querySelector("#code");"hidden"===getComputedStyle(e).visibility?e.style.visibility="visible":e.style.visibility="hidden"}()}));var e=null,t=[0],s=[8]}),U=function(){return Object(c.useEffect)((function(){B()}),[]),Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("title",{children:"Learn If Statements"}),Object(h.jsx)("body",{id:"ifgame_body",children:Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{className:"ifgame_h1",children:" Learn If Statements "}),Object(h.jsxs)("div",{id:"game-window",children:[Object(h.jsxs)("div",{id:"option-select",children:[Object(h.jsx)("h2",{className:"ifgame_h2",children:"Level 1"}),Object(h.jsx)("p",{children:"Rob the Robot has been tasked with retrieving the treasure on the board."}),Object(h.jsx)("p",{children:"Help Rob reach the treasure by telling him what to do when he encounters an obstacle."}),Object(h.jsxs)("div",{className:"option",children:[Object(h.jsx)("label",{htmlFor:"on-front-wall",children:"If there is a wall in front, go"}),Object(h.jsxs)("select",{className:"ifgame_select",id:"on-front-wall",children:[Object(h.jsx)("option",{children:"Up"}),Object(h.jsx)("option",{children:"Down"})]})]}),Object(h.jsxs)("div",{className:"option",children:[Object(h.jsx)("label",{htmlFor:"on-bottom-wall",children:"If there is a wall below, go"}),Object(h.jsxs)("select",{className:"ifgame_select",id:"on-bottom-wall",children:[Object(h.jsx)("option",{children:"Left"}),Object(h.jsx)("option",{children:"Right"})]})]}),Object(h.jsxs)("div",{className:"option",children:[Object(h.jsx)("label",{htmlFor:"default",children:" Otherwise, go"}),Object(h.jsxs)("select",{className:"ifgame_select",id:"default",children:[Object(h.jsx)("option",{children:"Down"}),Object(h.jsx)("option",{children:"Right"})]})]}),Object(h.jsx)("div",{id:"game-status"}),Object(h.jsx)("button",{className:"ifgame_button",id:"robot-submit",children:"Go"}),Object(h.jsx)("button",{className:"ifgame_button",id:"robot-try-again",children:"Play Again"}),Object(h.jsx)("button",{className:"ifgame_button",id:"show-hide-code",children:"Show/Hide Code"}),Object(h.jsx)("button",{className:"ifgame_button",id:"next-level",children:"Next Level"})]}),Object(h.jsxs)("div",{id:"game-grid",children:[Object(h.jsx)("div",{className:"grid-position",children:Object(h.jsx)("img",{id:"robot",alt:"robot",src:"images/robot.png"})}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position"}),Object(h.jsx)("div",{className:"grid-position",children:Object(h.jsx)("img",{id:"goal",alt:"goal",src:"images/treasure.png"})})]}),Object(h.jsxs)("div",{id:"code",children:[Object(h.jsx)("h2",{className:"ifgame_h2",children:"Code For Actions"}),Object(h.jsx)("div",{id:"code-output"}),Object(h.jsxs)("div",{id:"code-elements",children:[Object(h.jsxs)("div",{children:["The variable ",Object(h.jsx)("p",{className:"highlighted",children:"is_front_wall"})," is a"," ",Object(h.jsx)("p",{className:"highlighted",children:"boolean"})," that is"," ",Object(h.jsx)("p",{className:"highlighted",children:"TRUE"})," if there is a wall in front of Rob and ",Object(h.jsx)("p",{className:"highlighted",children:"FALSE"})," ","otherwise."]}),Object(h.jsxs)("div",{children:["The variable ",Object(h.jsx)("p",{className:"highlighted",children:"is_bottom_wall"})," is a ",Object(h.jsx)("p",{className:"highlighted",children:"boolean"})," that is"," ",Object(h.jsx)("p",{className:"highlighted",children:"TRUE"})," if there is a wall below Rob and ",Object(h.jsx)("p",{className:"highlighted",children:"FALSE"})," otherwise."]}),Object(h.jsxs)("div",{children:["The variable ",Object(h.jsx)("p",{className:"highlighted",children:"hpos"})," is an"," ",Object(h.jsx)("p",{className:"highlighted",children:"integer"})," representing Rob's horizontal position on the board."]}),Object(h.jsxs)("div",{children:["The variable ",Object(h.jsx)("p",{className:"highlighted",children:"vpos"})," is an"," ",Object(h.jsx)("p",{className:"highlighted",children:"integer"})," representing Rob's vertical position on the board."]})]})]})]})]})})]})},Y=(s(86),function(){var e=document.querySelectorAll("#fontsizer li");function t(e){for(var t=document.querySelectorAll("p"),s=document.querySelectorAll("pre"),c=0;c<t.length;c++)t[c].style.fontSize=e;for(var n=0;n<s.length;n++)s[n].style.fontSize=e}e[0].addEventListener("click",(function(){t("medium")})),e[1].addEventListener("click",(function(){t("large")})),e[2].addEventListener("click",(function(){t("x-large")}))}),z=function(){return Object(c.useEffect)((function(){Y()}),[]),Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("title",{children:"Learn If Statements"}),Object(h.jsx)("body",{id:"ifcode_body",children:Object(h.jsxs)("div",{id:"content",children:[Object(h.jsx)("h1",{className:"ifcode_h1",children:"If Statements"}),Object(h.jsx)("div",{className:"notes",children:Object(h.jsx)("div",{id:"fontsizer",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"A"}),Object(h.jsx)("li",{children:"A"}),Object(h.jsx)("li",{children:"A"})]})})}),Object(h.jsx)("p",{children:"An if statement tests a condition."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front"})}),Object(h.jsx)("p",{children:"If the condition is TRUE, then the code within the if statement is run."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # if there is a wall in front \n\t# Go down\n\tvertical_position = vertical_position - 1 "})}),Object(h.jsx)("p",{children:"If the condition is FALSE, then the code within the if statement is not run (it is skipped)."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # if there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1 "})}),Object(h.jsx)("p",{children:"If the condition is FALSE and an ELSE statement is present, the code within the ELSE statement is run instead."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1\nelse: # If there is no wall in front \n    \t# Go right\n\thorizontal_position = horizontal_position + 1"})}),Object(h.jsx)("p",{children:"Multiple conditions can be chained together using the ELIF statement."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1\nelif(is_bottom_wall): # If there is a wall below\n    \t# Go up\n\tvertical_position = vertical_position + 1 "})}),Object(h.jsx)("p",{children:"In a chain of conditions with ELIF statements, Python tests each condition in order and runs the code within the first statement whose condition is TRUE. All following ELIF statements are not run."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1\nelif(is_bottom_wall): # If there is a wall below\n    \t# Go up\n\tvertical_position = vertical_position + 1"})}),Object(h.jsx)("p",{children:"An ELSE statement can be added to a chain of conditions. The code within an ELSE statement is run if all IF and ELIF conditions are FALSE."}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1\nelif(is_bottom_wall): # If there is a wall below\n    \t# Go up\n\tvertical_position = vertical_position + 1\nelse: # If none of the above are true\n    \t# Go right\n\thorizontal_position = horizontal_position + 1"})}),Object(h.jsx)("p",{children:"An example combining IF, ELIF, and ELSE statements"}),Object(h.jsx)("pre",{className:"ifcode_pre",children:Object(h.jsx)("code",{children:"if(is_front_wall): # If there is a wall in front\n\t# Go down\n\tvertical_position = vertical_position - 1\nelif(is_bottom_wall): # If there is a wall below\n        # Go up\n\tvertical_position = vertical_position + 1\nelse: # If none of the above are true\n   \t# Go right\n\thorizontal_position = horizontal_position + 1"})}),Object(h.jsx)(a.b,{to:"/ifgame",children:Object(h.jsx)("input",{type:"submit",id:"toGameButton",name:"game",value:"If Statement Game"})})]})})]})};var K=function(){var e=Object(l.g)(),t=function(){return window.location.reload(!1),localStorage.clear(),e.push("/")};return Object(h.jsxs)("div",{children:[Object(h.jsx)(u,{}),Object(h.jsx)("div",{style:{paddingTop:"50px",height:"100%"},children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(M,{restricted:!1,exact:!0,path:"/",children:Object(h.jsx)("div",{className:"welcome App",children:Object(h.jsxs)("h2",{children:["Welcome, ",Object(h.jsxs)("span",{children:[" ",localStorage.getItem("username")," "]}),Object(h.jsx)("button",{onClick:t,children:" Logout "})]})})}),Object(h.jsx)(M,{restricted:!0,exact:!0,path:"/login",component:m}),Object(h.jsx)(M,{restricted:!0,exact:!0,path:"/signup",component:O}),Object(h.jsx)(H,{path:"/settings",component:P}),Object(h.jsx)(H,{path:"/passwordreset",component:F}),Object(h.jsx)(H,{path:"/profile",component:q}),Object(h.jsx)(H,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(h.jsx)(H,{path:"/dashboard",component:w}),Object(h.jsx)(H,{path:"/shell"}),Object(h.jsx)(H,{path:"/ifgame",component:U}),Object(h.jsx)(H,{path:"/ifcode",component:z}),Object(h.jsx)(l.b,{path:"/logout",component:t})]})}),Object(h.jsx)(p,{})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(a.a,{children:Object(h.jsx)(K,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.e7a089bc.chunk.js.map