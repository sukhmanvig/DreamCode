(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,s){},41:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),r=s(5),n=s(19),j=s.n(n),i=s(6),l=s(16),d=s.n(l),o=s(7),b=s(4),O=(s(41),s(0));var m=function(e){var t=e.Login,s=e.error,a=(e.setError,Object(c.useState)({name:"",email:"",password:""})),n=Object(i.a)(a,2),j=n[0],l=n[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(j)},children:Object(O.jsxs)("div",{className:"form-inner",children:[Object(O.jsx)("h2",{className:"form-group",children:"Login"}),""!==s?Object(O.jsx)("div",{className:"error",children:s}):"",Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(O.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{email:e.target.value}))},value:j.email,required:!0}),Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{password:e.target.value}))},value:j.password,required:!0}),Object(O.jsxs)("span",{children:["Forgot ",Object(O.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(O.jsx)("input",{type:"submit",value:"LOGIN"}),Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("button",{className:"register",children:"CANCEL"})}),Object(O.jsxs)("span",{className:"form-group",children:["Don't have an account? ",Object(O.jsx)(r.b,{to:"/signup",children:"SIGN UP"})]})]})})})};var h=function(e){var t=e.register,s=e.error,a=(e.setError,Object(c.useState)({name:"",email:"",password:"",password_2nd:""})),n=Object(i.a)(a,2),j=n[0],l=n[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(j)},children:Object(O.jsxs)("div",{className:"form-inner",children:[Object(O.jsx)("h2",{className:"form-group",children:"Register"}),""!==s?Object(O.jsx)("div",{className:"error",children:s}):"",Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(O.jsx)("input",{placeholder:" Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{name:e.target.value}))},value:j.name,required:!0}),Object(O.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(O.jsx)("input",{placeholder:" Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{email:e.target.value}))},value:j.email,required:!0}),Object(O.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(O.jsx)("input",{placeholder:" Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{password:e.target.value}))},value:j.password,required:!0}),Object(O.jsx)("label",{htmlFor:"password",children:"Re-enter Password:"}),Object(O.jsx)("input",{placeholder:" Re-enter Enter Password",type:"password",name:"password_2nd",id:"password_2nd",onChange:function(e){return l(Object(b.a)(Object(b.a)({},j),{},{password_2nd:e.target.value}))},value:j.password_2nd,required:!0})]}),Object(O.jsx)("input",{type:"submit",value:"REGISTER"}),Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("button",{className:"register",children:"CANCEL"})}),Object(O.jsxs)("span",{className:"form-group",children:["Already have an account? ",Object(O.jsx)(r.b,{to:"/login",children:"SIGN IN"})]})]})})})};s(22);var x=function(e){return e.setPageStatus,e.pageStatus,Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"topnav",children:Object(O.jsxs)("div",{className:"topnav",children:[Object(O.jsxs)("div",{className:"signin",children:[Object(O.jsx)(r.b,{to:"/signup",children:" Create Account "}),Object(O.jsx)(r.b,{to:"/login",children:" Sign in "})]}),Object(O.jsx)(r.b,{to:"/contact.html",children:" Contact "}),Object(O.jsx)(r.b,{to:"/about.html",children:" About "}),Object(O.jsx)(r.b,{to:"/dashboard",children:" Dashboard "}),Object(O.jsx)(r.b,{to:"/",children:" Home "}),Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(r.b,{to:"/",children:" DreamCode "})})]})})})};var u=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("nav",{className:"bottomnav",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(r.b,{to:"./pages/contact.html",children:" Contact "}),Object(O.jsx)(r.b,{to:"./pages/about.html",children:" About "}),Object(O.jsx)(r.b,{to:"index.html",children:" Home "})]})})})},p=s(32),v=s.n(p),f=s(44),g=(s(78),s.p+"static/media/magn-glass.4b8d2b26.jpg"),N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],r=function(){var e=Object(f.a)(v.a.mark((function e(){var t,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/leaderboard");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,a(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(O.jsxs)(c.Fragment,{children:[Object(O.jsx)("title",{children:" Dashboard "}),Object(O.jsxs)("body",{children:[Object(O.jsx)("nav",{className:"topnav",children:Object(O.jsxs)("div",{className:"topnav",children:[Object(O.jsxs)("div",{className:"navbar-dropdown",children:[Object(O.jsx)("a",{children:"Username"}),Object(O.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(O.jsx)("a",{href:"profile.html",children:"Profile"}),Object(O.jsx)("a",{href:"account-settings.html",children:"Account Settings"}),Object(O.jsx)("a",{href:"index.html",children:"Logout"})]})]}),Object(O.jsx)("a",{href:"contact.html",children:"Contact"}),Object(O.jsx)("a",{href:"about.html",children:"About"}),Object(O.jsx)("a",{href:"/",children:"Home"}),Object(O.jsx)("a",{href:"dashboard.html",children:"Dashboard"}),Object(O.jsx)("a",{href:"shell.html",children:"Python Shell"}),Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)("a",{href:"/",children:"DreamCode"})})]})}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{id:"content",children:[Object(O.jsx)("header",{children:" Dashboard "}),Object(O.jsx)("form",{action:"profile.html",children:Object(O.jsx)("input",{type:"submit",className:"profile",value:"PROFILE"})}),Object(O.jsxs)("div",{id:"leaderboard",children:["LEADERBOARD",Object(O.jsx)("ol",{children:s.map((function(e,t){return Object(O.jsx)("li",{children:e.username+" "+e.points+"XP"},t)}))})]}),Object(O.jsx)("form",{action:"stack_game/stack_game.html",children:Object(O.jsx)("input",{type:"submit",className:"daily-challenge",value:"DAILY CHALLENGE: Stack Game"})}),Object(O.jsx)("br",{}),Object(O.jsx)("h1",{children:"GAMES"}),Object(O.jsxs)("form",{action:"dashboard.html",children:[Object(O.jsx)("input",{type:"text",name:"search-bar",className:"search-bar",placeholder:"Search Bar"}),Object(O.jsx)("input",{type:"image",name:"submit",src:g,className:"search-button",alt:"submit"})]}),Object(O.jsxs)("div",{className:"dropdown",children:["SELECT OPTION",Object(O.jsxs)("div",{className:"dropdown-elements",children:[Object(O.jsx)("a",{href:"./",children:"Option 1"}),Object(O.jsx)("a",{href:"./",children:"Option 2"}),Object(O.jsx)("a",{href:"./",children:"Option 3"})]})]}),Object(O.jsx)("h2",{children:"Sort by"}),Object(O.jsx)("br",{}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"continue-game",children:Object(O.jsx)("form",{action:"ifgame.html",children:Object(O.jsx)("input",{type:"submit",className:"continue",value:"CONTINUE PLAYING: Learn If Statements"})})}),Object(O.jsxs)("div",{className:"category",children:[Object(O.jsx)("i",{className:"arrow left",children:" "}),Object(O.jsx)("div",{id:"js-category-name",children:"CATEGORY1"}),Object(O.jsx)("i",{className:"arrow right",children:" "}),Object(O.jsx)("form",{action:"helloworld.html",children:Object(O.jsx)("input",{type:"submit",className:"game",value:"Hello World Game"})}),Object(O.jsx)("form",{action:"python-problem-repository.html",children:Object(O.jsx)("input",{type:"submit",className:"game",value:"Python Problem Repository"})}),Object(O.jsx)("form",{action:"category1/game3.html",children:Object(O.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME3"})}),Object(O.jsx)("form",{action:"category1/game4.html",children:Object(O.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME4"})}),Object(O.jsx)("form",{action:"category1/game5.html",children:Object(O.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME5"})})]})]})]})]})};function w(){return Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"topnav",children:Object(O.jsxs)("div",{className:"topnav",children:[Object(O.jsxs)("div",{className:"navbar-dropdown",children:[Object(O.jsx)("a",{children:"Username"}),Object(O.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(O.jsx)(r.b,{to:"/profile",children:"Profile "}),Object(O.jsx)(r.b,{to:"/settings",children:" Settings "}),Object(O.jsx)(r.b,{href:"/logout",children:"Logout"})]})]}),Object(O.jsx)(r.b,{to:"/contact",children:"Contact"}),Object(O.jsx)(r.b,{to:"/about",children:"About"}),Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/dashboard",children:"Dashboard"}),Object(O.jsx)(r.b,{to:"/passwordreset",children:" Password Reset "}),Object(O.jsx)("div",{className:"logo",children:Object(O.jsx)(r.b,{to:"/",children:"DreamCode"})})]})})})}var y=s(21),E=s(23),S=s(20),C=s(15),P=s(45),A=s(24);var R=function(e){var t=e.type,s=e.error,a=e.success,r=e.setPageStatus,n=Object(c.useState)({name:"",email:"",oldpassword:"",newpassword:""}),j=Object(i.a)(n,2),l=j[0],d=j[1];return Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(l)},children:Object(O.jsxs)("div",{className:"form-inner",children:[Object(O.jsx)("h2",{children:"Change Password"}),""!==a?Object(O.jsx)("div",{className:"error success",children:a}):"",""!==s?Object(O.jsx)("div",{className:"error",children:s}):"",Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(O.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{name:e.target.value}))},value:l.name,required:!0})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Enter current Password:"}),Object(O.jsx)("input",{placeholder:"Enter current password",type:"password",name:"password",id:"password",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{oldpassword:e.target.value}))},value:l.oldpassword,required:!0})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"password",children:"Enter New Password:"}),Object(O.jsx)("input",{placeholder:"Enter new password",type:"password",name:"newpassword",id:"newpassword",onChange:function(e){return d(Object(b.a)(Object(b.a)({},l),{},{newpassword:e.target.value}))},value:l.newpassword,required:!0})]}),Object(O.jsx)("input",{type:"submit",value:"UPDATE PASSWORD"}),Object(O.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),r("")},children:"Cancel"})]})})};s(79);function D(){return Object(O.jsxs)("ul",{className:"setting-list",children:[Object(O.jsx)("li",{children:Object(O.jsxs)("label",{className:"mb-3",children:["Recieve newsletters",Object(O.jsx)("input",{className:"ml-2",type:"checkbox",defaultChecked:"True"}),Object(O.jsx)("span",{className:"checkmark"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("label",{className:"mb-2",children:["Display name on profile",Object(O.jsx)("input",{className:"ml-2 mt-1",type:"checkbox",defaultChecked:"True"}),Object(O.jsx)("span",{className:"checkmark"})]})})]})}function G(){return Object(O.jsx)(E.a,{children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)(C.a,{md:5,children:Object(O.jsxs)("ul",{className:"setting-list",children:[Object(O.jsx)("li",{children:"USERNAME:"}),Object(O.jsx)("p",{children:"username"}),Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"NAME:"}),Object(O.jsx)("p",{children:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"EMAIL:"}),Object(O.jsx)("p",{children:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"BIRTHDAY:"}),Object(O.jsx)("p",{children:"birthday"}),Object(O.jsx)("br",{}),Object(O.jsx)("li",{children:"PASSWORD:"}),Object(O.jsx)("p",{children:"*******"})]})}),Object(O.jsx)(C.a,{md:{span:5,offset:1},className:"mt-5",children:Object(O.jsx)(D,{})})]})})}function L(){return Object(O.jsx)(E.a,{children:Object(O.jsx)(S.a,{children:Object(O.jsx)(C.a,{md:{span:5},children:Object(O.jsx)(D,{})})})})}function F(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(i.a)(r,2),j=n[0],l=n[1],o=Object(c.useState)(""),b=Object(i.a)(o,2),m=b[0],h=b[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E.a,{children:Object(O.jsx)(S.a,{children:Object(O.jsx)(C.a,{md:{span:5},children:Object(O.jsxs)("ul",{className:"setting-list",children:[Object(O.jsx)("li",{children:"FORGOT PASSWORD:"}),Object(O.jsx)(P.a,{onClick:function(){return a("ResetPassword")},className:"btn btn-primary",children:"Reset Password"})]})})})}),"ResetPassword"===s?Object(O.jsx)("div",{className:"Ap",children:Object(O.jsx)(R,{type:function(e){d.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){h(e.data.message),l("")}),(function(e){console.log(e),h(""),l("Username or password incorrect")}))},error:j,success:m,setPageStatus:a})}):""]})}var k=function(){return Object(O.jsxs)(E.a,{className:"pt-5",children:[Object(O.jsxs)(S.a,{children:[Object(O.jsx)(C.a,{md:4,sm:{span:12},children:Object(O.jsx)("h1",{id:"setting-tile",children:"Account Settings"})}),Object(O.jsx)(C.a,{md:3,sm:12,children:Object(O.jsxs)("div",{className:"acc-preview",children:[Object(O.jsxs)("p",{className:"mr-1",id:"usr",children:["USERNAME"," "]}),Object(O.jsx)("p",{className:"",children:" MEMBER SINCE MM/DD/YYYY"})]})}),Object(O.jsx)(C.a,{md:{span:3,offset:2},xs:{span:4,offset:3},sm:{span:4,offset:6},children:Object(O.jsx)("div",{attribution:"Peter Southwood, CC0, via Wikimedia Commons",id:"circle"})})]}),Object(O.jsx)(y.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#general",children:Object(O.jsxs)(S.a,{children:[Object(O.jsx)(C.a,{sm:4,md:3,children:Object(O.jsxs)(A.a,{variant:"flush",className:"rounded",children:[Object(O.jsx)(A.a.Item,{action:!0,href:"#general",className:"pb-3",children:"General Settings"}),Object(O.jsx)(A.a.Item,{action:!0,href:"#notif",className:"pb-3",children:"Notifications"}),Object(O.jsx)(A.a.Item,{action:!0,href:"#privacy",className:"pb-3 mb-5 border-bottom",children:"Privacy"})]})}),Object(O.jsx)(C.a,{sm:{span:7,offset:1},className:"mt-5 border",children:Object(O.jsxs)(y.a.Content,{children:[Object(O.jsx)(y.a.Pane,{eventKey:"#general",className:"mt-5",children:Object(O.jsx)(G,{})}),Object(O.jsx)(y.a.Pane,{eventKey:"#notif",className:"mt-5",children:Object(O.jsx)(L,{id:"notif"})}),Object(O.jsx)(y.a.Pane,{eventKey:"#privacy",className:"mt-5",children:Object(O.jsx)(F,{id:"privacy"})})]})})]})})]})};s(80),s(81);var I=function(){var e=Object(c.useState)({name:"",oldpassword:"",newpassword:""}),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(i.a)(r,2),j=n[0],l=n[1],o=Object(c.useState)(""),m=Object(i.a)(o,2),h=m[0],x=m[1],u=function(){!function(e){d.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){x(e.data.message),l("")}),(function(e){console.log(e),x(""),l("Username or password incorrect")}))}(s)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:" mt-5 container pure-form",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsx)("h1",{children:"Set a New Password"}),""!==h?Object(O.jsx)("div",{className:"error success",children:h}):"",""!==j?Object(O.jsx)("div",{className:"error",children:j}):"",Object(O.jsx)("input",{type:"text",placeholder:"Enter username",id:"password",onChange:function(e){return a(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))},value:s.name,required:!0}),Object(O.jsx)("input",{type:"password",placeholder:"Enter current Password",id:"password",onChange:function(e){return a(Object(b.a)(Object(b.a)({},s),{},{oldpassword:e.target.value}))},value:s.oldpassword,required:!0}),Object(O.jsx)("input",{type:"password",placeholder:"Enter New Password",id:"new_password",onChange:function(e){return a(Object(b.a)(Object(b.a)({},s),{},{newpassword:e.target.value}))},value:s.newpassword,required:!0}),Object(O.jsx)("button",{type:"submit",onClick:function(){return u()},className:"pure-button pure-button-primary",children:"Confirm"})]})})})};s(82);var T=function(){var e=Object(c.useState)({name:""}),t=Object(i.a)(e,2),s=(t[0],t[1],Object(c.useState)("")),a=Object(i.a)(s,2),r=a[0],n=a[1],j=Object(c.useState)(""),l=Object(i.a)(j,2),o=l[0],b=l[1];return d.a.get("/getBio",{username:"jayvin"}).then((function(e){console.log(e.data.message),n(e.data.message),b("")}),(function(e){console.log(e),n(""),b("Couldn't get Bio")})),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("main",{children:Object(O.jsxs)("div",{className:"profile-content",children:[Object(O.jsxs)("section",{className:"p-head",children:[Object(O.jsx)("div",{id:"user-pfp",children:Object(O.jsx)("img",{alt:"profile",src:"https://www.thispersondoesnotexist.com/image"})}),Object(O.jsxs)("div",{id:"user-infosec",children:[Object(O.jsx)("h1",{id:"name-title",children:"Username"}),Object(O.jsx)("p",{children:"LEADERBOARD RANKING"}),Object(O.jsx)("p",{children:"#000000000000000000"}),Object(O.jsx)("p",{children:"LEVEL"}),Object(O.jsx)("p",{children:"XP"}),Object(O.jsx)("div",{className:"bio",children:""!==r?Object(O.jsx)("div",{className:"",children:r}):Object(O.jsx)("div",{className:"error",children:o})})]}),Object(O.jsxs)("div",{id:"circle-stats",title:"XP",children:[Object(O.jsx)("svg",{children:Object(O.jsx)("circle",{className:"circle-xp",cx:"125",cy:"125",r:"100"})}),Object(O.jsx)("div",{className:"div-lvl",children:Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"Level 0"})})})]})]}),Object(O.jsx)("div",{className:"profile-div-left",children:Object(O.jsxs)("section",{className:"pf-sec sec-friends",children:[Object(O.jsx)("h4",{children:"FRIENDS"}),Object(O.jsxs)("div",{className:"frn",children:[Object(O.jsx)("div",{className:"frn-img"}),Object(O.jsx)("h5",{children:"FriendUsername"})]}),Object(O.jsxs)("div",{className:"frn",children:[Object(O.jsx)("div",{className:"frn-img"}),Object(O.jsx)("h5",{children:"FriendUsername"})]}),Object(O.jsxs)("div",{className:"frn",children:[Object(O.jsx)("div",{className:"frn-img"}),Object(O.jsx)("h5",{children:"FriendUsername"})]}),Object(O.jsxs)("div",{className:"frn",children:[Object(O.jsx)("div",{className:"frn-img"}),Object(O.jsx)("h5",{children:"FriendUsername"})]})]})}),Object(O.jsxs)("div",{className:"profile-div-right",children:[Object(O.jsxs)("section",{className:"pf-sec sec-badges",children:[Object(O.jsx)("h4",{children:"BADGES"}),Object(O.jsx)("div",{className:"ubadge",title:"Say Hello to Coding!"}),Object(O.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(O.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(O.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(O.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(O.jsx)("div",{className:"ubadge",title:"Badge Name"})]}),Object(O.jsxs)("section",{className:"pf-sec sec-most-played",children:[Object(O.jsx)("h4",{children:"MOST PLAYED GAMES"}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Hello World!"})}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Game Title 2"})}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Game Title 3"})}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Game Title 4"})}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Game Title 5"})}),Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("h5",{children:"Game Title 6"})})]})]})]})})})},M=s(26),B=function(e){var t=e.component,s=e.restricted,c=Object(M.a)(e,["component","restricted"]);return Object(O.jsx)(o.b,Object(b.a)(Object(b.a)({},c),{},{render:function(e){return _()&&s?Object(O.jsx)(o.a,{to:"/dashboard"}):Object(O.jsx)(t,Object(b.a)({},e))}}))},U=function(e){var t=e.component,s=Object(M.a)(e,["component"]);return Object(O.jsx)(o.b,Object(b.a)(Object(b.a)({},s),{},{component:function(e){return _()?Object(O.jsx)(t,Object(b.a)({},e)):Object(O.jsx)(o.a,{to:"/login"})}}))};var _=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(i.a)(r,2),j=n[0],l=n[1],b=Object(c.useState)({name:"",email:""}),p=Object(i.a)(b,2),v=p[0],f=p[1],g=Object(c.useState)(!1),y=Object(i.a)(g,2),E=(y[0],y[1]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{setPageStatus:a,pageStatus:s}),"Logged_in"===s?Object(O.jsx)(o.a,{to:"/"}):"",Object(O.jsxs)(o.d,{children:[Object(O.jsx)(B,{restricted:!1,exact:!0,path:"/",children:Object(O.jsx)("div",{className:"welcome App",children:Object(O.jsxs)("h2",{children:["Welcome, ",Object(O.jsxs)("span",{children:[" ",v.name," "]}),Object(O.jsx)("button",{onClick:function(e){f({name:"",email:""}),l(""),a(""),E(!1)},children:" Logout "})]})})}),Object(O.jsx)(B,{restricted:!0,exact:!0,path:"/login",children:Object(O.jsx)("div",{children:Object(O.jsx)(m,{Login:function(e){d.a.post("/login",{email:e.email,password:e.password}).then((function(t){t.data.message?l(t.data.message):(l(""),a("Logged_in"),E(!0),f({name:e.name,email:e.email}))}))},error:j,setError:l})})}),Object(O.jsx)(B,{restricted:!0,exact:!0,path:"/signup",children:Object(O.jsx)("div",{children:Object(O.jsx)(h,{register:function(e){d.a.post("/users",{username:e.name,email:e.email,password:e.password,password_2nd:e.password_2nd}).then((function(t){t.data.message?l(t.data.message):(f({name:e.name,email:e.email}),l(""),a("Logged_in"),E(!0))}))},error:j,setError:l})})}),Object(O.jsxs)(U,{path:"/settings",children:[Object(O.jsx)(w,{}),Object(O.jsx)(k,{})]}),Object(O.jsx)(U,{path:"/passwordreset",children:Object(O.jsx)(I,{})}),Object(O.jsx)(U,{path:"/profile",children:Object(O.jsx)(T,{})}),Object(O.jsx)(U,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(O.jsx)(U,{path:"/dashboard",component:N})]}),Object(O.jsx)(u,{})]})};j.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(_,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.6eb3c6f6.chunk.js.map