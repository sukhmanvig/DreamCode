(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,s){},41:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(5),r=s(19),j=s.n(r),i=s(7),l=s(4),o=s(6),d=s(15),b=s.n(d),m=(s(41),s(0));var h=function(){var e=Object(c.useState)({name:"",email:"",password:""}),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),j=Object(o.a)(r,2),d=j[0],h=j[1],O=Object(i.g)();return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/login",{email:s.email,password:s.password}).then((function(e){e.data.message?h(e.data.message):(localStorage.setItem("username",e.data.username),localStorage.setItem("email",s.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),h(""),O.push("/"),window.location.reload(!1))}))},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{className:"form-group",children:"Login"}),""!==d?Object(m.jsx)("div",{className:"error",children:d}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return a(Object(l.a)(Object(l.a)({},s),{},{email:e.target.value}))},value:s.email,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return a(Object(l.a)(Object(l.a)({},s),{},{password:e.target.value}))},value:s.password,required:!0}),Object(m.jsxs)("span",{children:["Forgot ",Object(m.jsx)("a",{href:"forgotPassword.html",children:"password?"})]})]}),Object(m.jsx)("input",{type:"submit",value:"LOGIN"}),Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("button",{className:"register",children:"CANCEL"})}),Object(m.jsxs)("span",{className:"form-group",children:["Don't have an account? ",Object(m.jsx)(n.b,{to:"/signup",children:"SIGN UP"})]})]})})})};var O=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(i.g)(),j=Object(c.useState)({username:"",email:"",password:"",password_2nd:""}),d=Object(o.a)(j,2),h=d[0],O=d[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/users",{username:h.username,email:h.email,password:h.password,password_2nd:h.password_2nd}).then((function(e){e.data.message?a(e.data.message):(localStorage.setItem("username",h.username),localStorage.setItem("email",h.email),localStorage.setItem("isLogin",!0),localStorage.setItem("accessToken",e.data.accessToken),localStorage.setItem("refreshToken",e.data.refreshToken),a(""),r.push("/"))}))},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{className:"form-group",children:"Register"}),""!==s?Object(m.jsx)("div",{className:"error",children:s}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:" Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return O(Object(l.a)(Object(l.a)({},h),{},{username:e.target.value}))},value:h.username,required:!0}),Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{placeholder:" Enter Email",type:"email",name:"email",id:"email",onChange:function(e){return O(Object(l.a)(Object(l.a)({},h),{},{email:e.target.value}))},value:h.email,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(m.jsx)("input",{placeholder:" Enter Password",type:"password",name:"password",id:"password",onChange:function(e){return O(Object(l.a)(Object(l.a)({},h),{},{password:e.target.value}))},value:h.password,required:!0}),Object(m.jsx)("label",{htmlFor:"password",children:"Re-enter Password:"}),Object(m.jsx)("input",{placeholder:" Re-enter Enter Password",type:"password",name:"password_2nd",id:"password_2nd",onChange:function(e){return O(Object(l.a)(Object(l.a)({},h),{},{password_2nd:e.target.value}))},value:h.password_2nd,required:!0})]}),Object(m.jsx)("input",{type:"submit",value:"REGISTER"}),Object(m.jsx)(n.b,{to:"/",children:Object(m.jsx)("button",{className:"register",children:"CANCEL"})}),Object(m.jsxs)("span",{className:"form-group",children:["Already have an account? ",Object(m.jsx)(n.b,{to:"/login",children:"SIGN IN"})]})]})})})};s(22);var u=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{className:"topnav",children:[localStorage.getItem("isLogin")?Object(m.jsx)("div",{className:"signin",children:Object(m.jsx)(n.b,{to:"/logout",children:" Logout"})}):Object(m.jsxs)("div",{className:"signin",children:[Object(m.jsx)(n.b,{to:"/signup",children:" Create Account "}),Object(m.jsx)(n.b,{to:"/login",children:" Sign in "})]}),Object(m.jsx)(n.b,{to:"/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"/dashboard",children:" Dashboard "}),Object(m.jsx)(n.b,{to:"/",children:" Home "}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)(n.b,{to:"/",children:" DreamCode "})})]})})})};var x=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("nav",{className:"bottomnav",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(n.b,{to:"./pages/contact.html",children:" Contact "}),Object(m.jsx)(n.b,{to:"./pages/about.html",children:" About "}),Object(m.jsx)(n.b,{to:"index.html",children:" Home "})]})})})},p=s(32),g=s.n(p),f=s(44),v=(s(78),s.p+"static/media/magn-glass.4b8d2b26.jpg"),N=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],n=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/leaderboard");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,a(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n()}),[]),Object(m.jsxs)(c.Fragment,{children:[Object(m.jsx)("title",{children:" Dashboard "}),Object(m.jsxs)("body",{children:[Object(m.jsx)("nav",{className:"topnav",children:Object(m.jsxs)("div",{className:"topnav",children:[Object(m.jsxs)("div",{className:"navbar-dropdown",children:[Object(m.jsx)("a",{children:"Username"}),Object(m.jsxs)("div",{className:"navbar-dropdown-elements",children:[Object(m.jsx)("a",{href:"profile.html",children:"Profile"}),Object(m.jsx)("a",{href:"account-settings.html",children:"Account Settings"}),Object(m.jsx)("a",{href:"index.html",children:"Logout"})]})]}),Object(m.jsx)("a",{href:"contact.html",children:"Contact"}),Object(m.jsx)("a",{href:"about.html",children:"About"}),Object(m.jsx)("a",{href:"/",children:"Home"}),Object(m.jsx)("a",{href:"dashboard.html",children:"Dashboard"}),Object(m.jsx)("a",{href:"shell.html",children:"Python Shell"}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("a",{href:"/",children:"DreamCode"})})]})}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"content",children:[Object(m.jsx)("header",{children:" Dashboard "}),Object(m.jsx)("form",{action:"profile.html",children:Object(m.jsx)("input",{type:"submit",className:"profile",value:"PROFILE"})}),Object(m.jsxs)("div",{id:"leaderboard",children:["LEADERBOARD",Object(m.jsx)("ol",{children:s.map((function(e,t){return Object(m.jsx)("li",{children:e.username+" "+e.points+"XP"},t)}))})]}),Object(m.jsx)("form",{action:"stack_game/stack_game.html",children:Object(m.jsx)("input",{type:"submit",className:"daily-challenge",value:"DAILY CHALLENGE: Stack Game"})}),Object(m.jsx)("br",{}),Object(m.jsx)("h1",{children:"GAMES"}),Object(m.jsxs)("form",{action:"dashboard.html",children:[Object(m.jsx)("input",{type:"text",name:"search-bar",className:"search-bar",placeholder:"Search Bar"}),Object(m.jsx)("input",{type:"image",name:"submit",src:v,className:"search-button",alt:"submit"})]}),Object(m.jsxs)("div",{className:"dropdown",children:["SELECT OPTION",Object(m.jsxs)("div",{className:"dropdown-elements",children:[Object(m.jsx)("a",{href:"./",children:"Option 1"}),Object(m.jsx)("a",{href:"./",children:"Option 2"}),Object(m.jsx)("a",{href:"./",children:"Option 3"})]})]}),Object(m.jsx)("h2",{children:"Sort by"}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{className:"continue-game",children:Object(m.jsx)("form",{action:"ifgame.html",children:Object(m.jsx)("input",{type:"submit",className:"continue",value:"CONTINUE PLAYING: Learn If Statements"})})}),Object(m.jsxs)("div",{className:"category",children:[Object(m.jsx)("i",{className:"arrow left",children:" "}),Object(m.jsx)("div",{id:"js-category-name",children:"CATEGORY1"}),Object(m.jsx)("i",{className:"arrow right",children:" "}),Object(m.jsx)("form",{action:"helloworld.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"Hello World Game"})}),Object(m.jsx)("form",{action:"python-problem-repository.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"Python Problem Repository"})}),Object(m.jsx)("form",{action:"category1/game3.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME3"})}),Object(m.jsx)("form",{action:"category1/game4.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME4"})}),Object(m.jsx)("form",{action:"category1/game5.html",children:Object(m.jsx)("input",{type:"submit",className:"game",value:"CATEGORY1 GAME5"})})]})]})]})]})};var w=s(21),S=s(23),y=s(20),E=s(16),C=s(45),A=s(24);var P=function(e){var t=e.type,s=e.error,a=e.success,n=e.setPageStatus,r=Object(c.useState)({name:"",email:"",oldpassword:"",newpassword:""}),j=Object(o.a)(r,2),i=j[0],d=j[1];return Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(i)},children:Object(m.jsxs)("div",{className:"form-inner",children:[Object(m.jsx)("h2",{children:"Change Password"}),""!==a?Object(m.jsx)("div",{className:"error success",children:a}):"",""!==s?Object(m.jsx)("div",{className:"error",children:s}):"",Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(m.jsx)("input",{placeholder:"Enter Name",type:"text",name:"name",id:"name",onChange:function(e){return d(Object(l.a)(Object(l.a)({},i),{},{name:e.target.value}))},value:i.name,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Enter current Password:"}),Object(m.jsx)("input",{placeholder:"Enter current password",type:"password",name:"password",id:"password",onChange:function(e){return d(Object(l.a)(Object(l.a)({},i),{},{oldpassword:e.target.value}))},value:i.oldpassword,required:!0})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Enter New Password:"}),Object(m.jsx)("input",{placeholder:"Enter new password",type:"password",name:"newpassword",id:"newpassword",onChange:function(e){return d(Object(l.a)(Object(l.a)({},i),{},{newpassword:e.target.value}))},value:i.newpassword,required:!0})]}),Object(m.jsx)("input",{type:"submit",value:"UPDATE PASSWORD"}),Object(m.jsx)("button",{className:"register",onClick:function(e){e.preventDefault(),n("")},children:"Cancel"})]})})};s(79);function I(){return Object(m.jsxs)("ul",{className:"setting-list",children:[Object(m.jsx)("li",{children:Object(m.jsxs)("label",{className:"mb-3",children:["Recieve newsletters",Object(m.jsx)("input",{className:"ml-2",type:"checkbox",defaultChecked:"True"}),Object(m.jsx)("span",{className:"checkmark"})]})}),Object(m.jsx)("li",{children:Object(m.jsxs)("label",{className:"mb-2",children:["Display name on profile",Object(m.jsx)("input",{className:"ml-2 mt-1",type:"checkbox",defaultChecked:"True"}),Object(m.jsx)("span",{className:"checkmark"})]})})]})}function R(){return Object(m.jsx)(S.a,{children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(E.a,{md:5,children:Object(m.jsxs)("ul",{className:"setting-list",children:[Object(m.jsx)("li",{children:"USERNAME:"}),Object(m.jsx)("p",{children:"username"}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"NAME:"}),Object(m.jsx)("p",{children:"name"}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"EMAIL:"}),Object(m.jsx)("p",{children:"email"}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"BIRTHDAY:"}),Object(m.jsx)("p",{children:"birthday"}),Object(m.jsx)("br",{}),Object(m.jsx)("li",{children:"PASSWORD:"}),Object(m.jsx)("p",{children:"*******"})]})}),Object(m.jsx)(E.a,{md:{span:5,offset:1},className:"mt-5",children:Object(m.jsx)(I,{})})]})})}function k(){return Object(m.jsx)(S.a,{children:Object(m.jsx)(y.a,{children:Object(m.jsx)(E.a,{md:{span:5},children:Object(m.jsx)(I,{})})})})}function D(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),j=r[0],i=r[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),h=d[0],O=d[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S.a,{children:Object(m.jsx)(y.a,{children:Object(m.jsx)(E.a,{md:{span:5},children:Object(m.jsxs)("ul",{className:"setting-list",children:[Object(m.jsx)("li",{children:"FORGOT PASSWORD:"}),Object(m.jsx)(C.a,{onClick:function(){return a("ResetPassword")},className:"btn btn-primary",children:"Reset Password"})]})})})}),"ResetPassword"===s?Object(m.jsx)("div",{className:"Ap",children:Object(m.jsx)(P,{type:function(e){b.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){O(e.data.message),i("")}),(function(e){console.log(e),O(""),i("Username or password incorrect")}))},error:j,success:h,setPageStatus:a})}):""]})}var T=function(){return Object(m.jsxs)(S.a,{className:"pt-5",children:[Object(m.jsxs)(y.a,{children:[Object(m.jsx)(E.a,{md:4,sm:{span:12},children:Object(m.jsx)("h1",{id:"setting-tile",children:"Account Settings"})}),Object(m.jsx)(E.a,{md:3,sm:12,children:Object(m.jsxs)("div",{className:"acc-preview",children:[Object(m.jsxs)("p",{className:"mr-1",id:"usr",children:["USERNAME"," "]}),Object(m.jsx)("p",{className:"",children:" MEMBER SINCE MM/DD/YYYY"})]})}),Object(m.jsx)(E.a,{md:{span:3,offset:2},xs:{span:4,offset:3},sm:{span:4,offset:6},children:Object(m.jsx)("div",{attribution:"Peter Southwood, CC0, via Wikimedia Commons",id:"circle"})})]}),Object(m.jsx)(w.a.Container,{id:"list-group-tabs-example",defaultActiveKey:"#general",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(E.a,{sm:4,md:3,children:Object(m.jsxs)(A.a,{variant:"flush",className:"rounded",children:[Object(m.jsx)(A.a.Item,{action:!0,href:"#general",className:"pb-3",children:"General Settings"}),Object(m.jsx)(A.a.Item,{action:!0,href:"#notif",className:"pb-3",children:"Notifications"}),Object(m.jsx)(A.a.Item,{action:!0,href:"#privacy",className:"pb-3 mb-5 border-bottom",children:"Privacy"})]})}),Object(m.jsx)(E.a,{sm:{span:7,offset:1},className:"mt-5 border",children:Object(m.jsxs)(w.a.Content,{children:[Object(m.jsx)(w.a.Pane,{eventKey:"#general",className:"mt-5",children:Object(m.jsx)(R,{})}),Object(m.jsx)(w.a.Pane,{eventKey:"#notif",className:"mt-5",children:Object(m.jsx)(k,{id:"notif"})}),Object(m.jsx)(w.a.Pane,{eventKey:"#privacy",className:"mt-5",children:Object(m.jsx)(D,{id:"privacy"})})]})})]})})]})};s(80),s(81);var G=function(){var e=Object(c.useState)({name:"",oldpassword:"",newpassword:""}),t=Object(o.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),j=r[0],i=r[1],d=Object(c.useState)(""),h=Object(o.a)(d,2),O=h[0],u=h[1],x=function(){!function(e){b.a.post("/settingPassword",{username:e.name,oldpassword:e.oldpassword,newpassword:e.newpassword}).then((function(e){u(e.data.message),i("")}),(function(e){console.log(e),u(""),i("Username or password incorrect")}))}(s)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:" mt-5 container pure-form",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("h1",{children:"Set a New Password"}),""!==O?Object(m.jsx)("div",{className:"error success",children:O}):"",""!==j?Object(m.jsx)("div",{className:"error",children:j}):"",Object(m.jsx)("input",{type:"text",placeholder:"Enter username",id:"password",onChange:function(e){return a(Object(l.a)(Object(l.a)({},s),{},{name:e.target.value}))},value:s.name,required:!0}),Object(m.jsx)("input",{type:"password",placeholder:"Enter current Password",id:"password",onChange:function(e){return a(Object(l.a)(Object(l.a)({},s),{},{oldpassword:e.target.value}))},value:s.oldpassword,required:!0}),Object(m.jsx)("input",{type:"password",placeholder:"Enter New Password",id:"new_password",onChange:function(e){return a(Object(l.a)(Object(l.a)({},s),{},{newpassword:e.target.value}))},value:s.newpassword,required:!0}),Object(m.jsx)("button",{type:"submit",onClick:function(){return x()},className:"pure-button pure-button-primary",children:"Confirm"})]})})})};s(82);var L=function(){var e=Object(c.useState)({name:""}),t=Object(o.a)(e,2),s=(t[0],t[1],Object(c.useState)("")),a=Object(o.a)(s,2),n=a[0],r=a[1],j=Object(c.useState)(""),i=Object(o.a)(j,2),l=i[0],d=i[1];return b.a.get("/getBio",{username:"jayvin"}).then((function(e){console.log(e.data.message),r(e.data.message),d("")}),(function(e){console.log(e),r(""),d("Couldn't get Bio")})),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"profile-content",children:[Object(m.jsxs)("section",{className:"p-head",children:[Object(m.jsx)("div",{id:"user-pfp",children:Object(m.jsx)("img",{alt:"profile",src:"https://www.thispersondoesnotexist.com/image"})}),Object(m.jsxs)("div",{id:"user-infosec",children:[Object(m.jsx)("h1",{id:"name-title",children:"Username"}),Object(m.jsx)("p",{children:"LEADERBOARD RANKING"}),Object(m.jsx)("p",{children:"#000000000000000000"}),Object(m.jsx)("p",{children:"LEVEL"}),Object(m.jsx)("p",{children:"XP"}),Object(m.jsx)("div",{className:"bio",children:""!==n?Object(m.jsx)("div",{className:"",children:n}):Object(m.jsx)("div",{className:"error",children:l})})]}),Object(m.jsxs)("div",{id:"circle-stats",title:"XP",children:[Object(m.jsx)("svg",{children:Object(m.jsx)("circle",{className:"circle-xp",cx:"125",cy:"125",r:"100"})}),Object(m.jsx)("div",{className:"div-lvl",children:Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:"Level 0"})})})]})]}),Object(m.jsx)("div",{className:"profile-div-left",children:Object(m.jsxs)("section",{className:"pf-sec sec-friends",children:[Object(m.jsx)("h4",{children:"FRIENDS"}),Object(m.jsxs)("div",{className:"frn",children:[Object(m.jsx)("div",{className:"frn-img"}),Object(m.jsx)("h5",{children:"FriendUsername"})]}),Object(m.jsxs)("div",{className:"frn",children:[Object(m.jsx)("div",{className:"frn-img"}),Object(m.jsx)("h5",{children:"FriendUsername"})]}),Object(m.jsxs)("div",{className:"frn",children:[Object(m.jsx)("div",{className:"frn-img"}),Object(m.jsx)("h5",{children:"FriendUsername"})]}),Object(m.jsxs)("div",{className:"frn",children:[Object(m.jsx)("div",{className:"frn-img"}),Object(m.jsx)("h5",{children:"FriendUsername"})]})]})}),Object(m.jsxs)("div",{className:"profile-div-right",children:[Object(m.jsxs)("section",{className:"pf-sec sec-badges",children:[Object(m.jsx)("h4",{children:"BADGES"}),Object(m.jsx)("div",{className:"ubadge",title:"Say Hello to Coding!"}),Object(m.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(m.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(m.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(m.jsx)("div",{className:"ubadge",title:"Badge Name"}),Object(m.jsx)("div",{className:"ubadge",title:"Badge Name"})]}),Object(m.jsxs)("section",{className:"pf-sec sec-most-played",children:[Object(m.jsx)("h4",{children:"MOST PLAYED GAMES"}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Hello World!"})}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Game Title 2"})}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Game Title 3"})}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Game Title 4"})}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Game Title 5"})}),Object(m.jsx)("div",{className:"game",children:Object(m.jsx)("h5",{children:"Game Title 6"})})]})]})]})})})},F=s(26),M=function(e){var t=e.component,s=e.restricted,c=Object(F.a)(e,["component","restricted"]),a=localStorage.getItem("isLogin");return Object(m.jsx)(i.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a&&s?Object(m.jsx)(i.a,{to:"/dashboard"}):Object(m.jsx)(t,Object(l.a)({},e))}}))},B=function(e){var t=e.component,s=Object(F.a)(e,["component"]),c=localStorage.getItem("isLogin");return Object(m.jsx)(i.b,Object(l.a)(Object(l.a)({},s),{},{component:function(e){return c?Object(m.jsx)(t,Object(l.a)({},e)):Object(m.jsx)(i.a,{to:"/login"})}}))};var U=function(){var e=Object(i.g)(),t=function(){return window.location.reload(!1),localStorage.clear(),e.push("/")};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u,{}),Object(m.jsxs)(i.d,{children:[Object(m.jsx)(M,{restricted:!1,exact:!0,path:"/",children:Object(m.jsx)("div",{className:"welcome App",children:Object(m.jsxs)("h2",{children:["Welcome, ",Object(m.jsxs)("span",{children:[" ",localStorage.getItem("username")," "]}),Object(m.jsx)("button",{onClick:t,children:" Logout "})]})})}),Object(m.jsx)(M,{restricted:!0,exact:!0,path:"/login",component:h}),Object(m.jsx)(M,{restricted:!0,exact:!0,path:"/signup",component:O}),Object(m.jsx)(B,{path:"/settings",component:T}),Object(m.jsx)(B,{path:"/passwordreset",component:G}),Object(m.jsx)(B,{path:"/profile",component:L}),Object(m.jsx)(B,{path:"/about.html",component:function(){window.location.reload(!1)}}),Object(m.jsx)(B,{path:"/dashboard",component:N}),Object(m.jsx)(i.b,{path:"/logout",component:t})]}),Object(m.jsx)(x,{})]})};j.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(n.a,{children:Object(m.jsx)(U,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.336bed3d.chunk.js.map