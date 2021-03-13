(this["webpackJsonpchat-socket-frontend"]=this["webpackJsonpchat-socket-frontend"]||[]).push([[0],{179:function(e,t,n){},208:function(e,t){},210:function(e,t){},225:function(e,t){},227:function(e,t){},254:function(e,t){},256:function(e,t){},257:function(e,t){},262:function(e,t){},264:function(e,t){},283:function(e,t){},295:function(e,t){},298:function(e,t){},323:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(14),s=n(58),o=n.n(s),i=n(5),l=(n(179),n(6)),u=n(10),d=n(38),b=n(166),j=n.n(b),m=n(89),h=n.n(m),f=n(60),x=n.n(f),O=n(8),g=n.n(O),p=n(26),v=n(92),y=n(50),N=n.n(y),w="/api/channels",E={getAll:function(){var e=Object(p.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(w);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getById:function(){var e=Object(p.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat(w,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post(w,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateChannelUsers:function(){var e=Object(p.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.patch("".concat(w,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CHANNEL":return[t.data].concat(Object(d.a)(e));case"UPDATE_MESSAGES":var n=Object(v.a)(Object(v.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[t.data])});return n;case"UPDATE_CHANNEL":var r=t.data,c=e.map((function(e){return e.id===r.id?r:e}));return c;case"GET_SINGLE_CHANNEL":case"INIT_CHANNELS":return t.data;default:return e}},C=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(),o=Object(u.a)(s,2),l=o[0],b=o[1],m=Object(r.useState)(!1),f=Object(u.a)(m,2),O=f[0],v=f[1],y=Object(r.useState)(""),N=Object(u.a)(y,2),w=N[0],S=N[1],C=Object(r.useState)(),k=Object(u.a)(C,2),L=k[0],I=k[1],A=Object(r.useState)(!1),U=Object(u.a)(A,2),R=U[0],T=U[1],_=Object(r.useState)(""),M=Object(u.a)(_,2),D=M[0],H=M[1],G=Object(r.useState)(!1),P=Object(u.a)(G,2),V=P[0],B=P[1],F=Object(r.useState)(""),J=Object(u.a)(F,2),z=J[0],W=J[1],q=Object(r.useRef)(),K=Object(r.useRef)(),Q=Object(r.useRef)(),X=Object(r.useState)([]),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useRef)(),te=Object(i.c)((function(e){return e.activeUser})),ne=Object(i.b)();console.log("in hook users",Z),Object(r.useEffect)((function(){return te?(ne((t=e,function(){var e=Object(p.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getById(t);case 3:return r=e.sent,e.abrupt("return",n({type:"GET_SINGLE_CHANNEL",data:r}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("Error fetching single channel",e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),ee.current=j()("http://localhost:3001",{query:{roomId:e,user:te}}),console.log("in use hook"),console.log("emit",te),ee.current.emit("userJoinRoom",te),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){b(e),q.current.srcObject=l})),ee.current.on("socketId",(function(e){a(e)})),ee.current.on("callUser",(function(e){v(!0),S(e.from),W(e.name),I(e.signal)})),ee.current.on("newChatMessage",(function(e){console.log("GETTING NEW MESSAGE",e),ne({type:"UPDATE_MESSAGES",data:e})})),ee.current.on("userJoinRoom",(function(e){console.log("joining room is usehook"),$((function(t){return t.some((function(t){return t.id===e.id}))?Object(d.a)(t):[].concat(Object(d.a)(t),[e])}))})),ee.current.on("roomListChange",(function(e){console.log("room list change happened"),$((function(){return console.log(e),e.users}))})),ee.current.on("userLeaveRoom",(function(e){$((function(t){return console.log("Old USERS",t),console.log("LEFT USER",e),t.filter((function(t){return t.id!==e.id}))}))})),function(){return ee.current.disconnect()}):(console.log("useHook no user found"),null);var t}),[e,te]);return{sendMessage:function(e){ee.current.emit("newChatMessageToServer",{content:e,author:{username:te.username,id:te.id},date:(new Date).toLocaleDateString("ru-RU",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),id:x.a.randomBytes(12).toString("hex")})},users:Z,socketRef:ee,callUser:function(e){var t=new h.a({initiator:!0,trickle:!1,stream:l});t.on("signal",(function(t){ee.current.emit("callUser",{userToCall:e,signalData:t,from:c,name:z})})),t.on("stream",(function(e){K.current.srcObject=e})),ee.current.on("callAccepted",(function(e){T(!0),t.signal(e)})),Q.current=t},answerCall:function(){T(!0);var e=new h.a({initiator:!1,trickle:!1,stream:l});e.on("signal",(function(e){ee.current.emit("answerCall",{signal:e,to:w})})),e.on("stream",(function(e){K.current.srcObject=e})),e.signal(L),Q.current=e},leaveCall:function(){B(!0),Q.current.destroy()},receivingCall:O,callAccepted:R,idToCall:D,setIdToCall:H,callEnded:V,myVideo:q,userVideo:K,connectionRef:Q,stream:l,name:z,setName:W,me:c}},k=n(0),L=function(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){return e.current.scrollIntoView({behavior:"smooth"})})),Object(k.jsx)("div",{ref:e})},I=function(e){var t=e.user,n=e.msg;return Object(k.jsxs)("div",{className:t.id===n.author.id?"flex flex-row-reverse items-baseline space-x-1":"flex flex-row items-baseline space-x-1",children:[Object(k.jsx)("span",{className:t.id.toString()===n.author.id.toString()?"bg-green-200 mx-3 mb-3 p-1 rounded w-52 self-end":"bg-blue-200 ml-3 mb-3 p-1 rounded w-52 self-start",children:n.content}),Object(k.jsx)("span",{className:"text-gray-300 text-sm self-start",children:n.date}),t.id!==n.author.id?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:"text-gray-500 self-start px-2",children:n.author.username})]}):null]})},A=function(){var e=Object(l.g)().roomId,t=C(e),n=t.sendMessage,c=t.users,a=t.callUser,s=t.answerCall,o=t.leaveCall,d=t.callAccepted,b=t.callEnded,j=t.idToCall,m=t.setIdToCall,h=t.receivingCall,f=t.myVideo,x=t.userVideo,O=t.stream,g=t.name,p=t.setName,v=t.me,y=Object(r.useState)(""),N=Object(u.a)(y,2),w=N[0],E=N[1],S=Object(i.c)((function(e){return e.activeUser})),A=Object(i.c)((function(e){return e.channels.messages}));return S?Object(k.jsxs)("div",{className:"md:grid md:grid-cols-5",children:[Object(k.jsxs)("div",{className:"mx-3 md:col-start-2 md:col-span-3 shadow-sm border rounded px-5 py-3 mt-5 text-center",children:[Object(k.jsxs)("h1",{className:"font-bold text-xl mb-2",children:["Room:"," ","#",e]}),Object(k.jsxs)("div",{className:"md:grid md:grid-cols-4",children:[Object(k.jsxs)("div",{className:"col-span-1 pt-2 col-start-1 bg-blue-100 rounded-t md:rounded-tr-none border border-gray-400",children:[Object(k.jsx)("h2",{className:"font-semibold",children:"Users in room:"}),Object(k.jsx)("ul",{children:c.map((function(e){return Object(k.jsx)("li",{children:e.username},e.id)}))})]}),Object(k.jsxs)("div",{className:"col-span-3 col-start-2 border border-gray-400 md:rounded-tr pt-2 md:border-l-0",children:[Object(k.jsx)("h2",{className:"font-semibold text-lg",children:"Chat"}),Object(k.jsx)("div",{className:"h-80 overflow-auto",children:Object(k.jsxs)("ul",{className:"flex flex-col items-baseline",children:[A?Object(k.jsx)(k.Fragment,{children:A.map((function(e){return Object(k.jsx)("li",{className:S.id===e.author.id?"self-end items-baseline":"self-start items-baseline",children:Object(k.jsx)(I,{user:S,msg:e})},e.id)}))}):"No messages yet..",Object(k.jsx)(L,{})]})})]}),Object(k.jsxs)("form",{className:"md:col-span-4",onSubmit:function(e){e.preventDefault(),n(w),E("")},children:[Object(k.jsx)("input",{type:"text",placeholder:"Send a message...",value:w,onChange:function(e){var t=e.target;return E(t.value)},className:"w-5/6 rounded-bl shadow-sm border-r-0 border-t-0 border-gray-400 hover:bg-gray-100 hover:border-gray-500"}),Object(k.jsx)("button",{type:"submit",className:"w-1/6 focus:ring-2 shadow-sm px-3 py-2 border border-t-0 border-gray-400 hover:border-gray-500 rounded-br font-semibold focus:outline-none hover:bg-green-200 focus:bg-green-300",children:"Send"})]})]})]}),Object(k.jsxs)("div",{className:"col-span-5",children:[Object(k.jsxs)("div",{className:"video-container",children:[Object(k.jsx)("div",{className:"video",children:O&&Object(k.jsx)("video",{playsInline:!0,muted:!0,ref:f,autoPlay:!0,style:{width:"300px"}})}),Object(k.jsx)("div",{className:"video",children:d&&!b?Object(k.jsx)("video",{playsInline:!0,ref:x,autoPlay:!0,style:{width:"300px"}}):null})]}),Object(k.jsxs)("div",{className:"myId",children:["Set your name here:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",value:g,onChange:function(e){var t=e.target;return p(t.value)}}),Object(k.jsx)("br",{}),"Copy your id:"," ",v,Object(k.jsx)("br",{}),"Who you want to call by id:",Object(k.jsx)("br",{}),Object(k.jsx)("input",{type:"text",value:j,onChange:function(e){var t=e.target;return m(t.value)}}),Object(k.jsx)("br",{}),d&&!b?Object(k.jsx)("button",{type:"button",onClick:o,children:"End Call"}):Object(k.jsxs)("button",{type:"button",onClick:function(){return a(j)},children:["Call"," ",j]})]}),Object(k.jsx)("div",{children:h&&!d?Object(k.jsxs)("div",{children:[Object(k.jsxs)("h2",{children:[g," ","is calling..."]}),Object(k.jsx)("button",{type:"button",onClick:s,children:"Answer"})]}):null})]})]}):(console.log("no user"),Object(k.jsx)("div",{className:"text-center",children:Object(k.jsx)("h1",{className:"font-bold text-xl mt-3",children:"Please login to see chat!"})}))},U=function(){return window.localStorage.removeItem("chatAppUser"),console.log("logged out"),{type:"REMOVE_USER"}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USER":case"LOGIN_USER":return t.data.user;case"REMOVE_USER":return null;default:return e}},T=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(u.a)(a,2),o=s[0],l=s[1],d="font-bold text-xl mb-2",b="rounded-l shadow-sm border-r-0 border-gray-400 hover:bg-gray-100 hover:border-gray-500",j="focus:ring-2 shadow-sm px-3 py-2 border border-gray-400 hover:border-gray-500 rounded-r font-semibold focus:outline-none hover:bg-gray-200 focus:bg-gray-300",m=Object(i.b)(),h=Object(i.c)((function(e){return e.activeUser}));return Object(k.jsx)("div",{className:"md:grid md:grid-cols-5",children:Object(k.jsxs)("div",{className:"mx-3 md:col-start-2 md:col-span-3 rounded shadow-sm border px-5 py-3 mt-5 text-center",children:[h?Object(k.jsxs)("div",{children:["Hello,"," ",h.username,"!",Object(k.jsx)("button",{type:"button",onClick:function(){return m(U())},className:"px-2 py-1 mx-2 border hover:bg-gray-200 focus:outline-none focus:ring-2 border-gray-400 hover:border-gray-500 rounded shadow-sm font-semibold",children:"Logout"})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{className:d,children:"Enter your name"}),Object(k.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(function(e){var t={username:e,id:x.a.randomBytes(12).toString("hex")};return window.localStorage.setItem("chatAppUser",JSON.stringify(t)),{type:"LOGIN_USER",data:{user:t}}}(n)),c("")},children:[Object(k.jsx)("input",{type:"text",placeholder:"Enter your name...",value:n,onChange:function(e){var t=e.target;return c(t.value)},className:b}),Object(k.jsx)("button",{type:"submit",className:j,children:"Set"})]})]}),Object(k.jsx)("h2",{className:d,children:"Create a new room or join existing"}),h?Object(k.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),m((t={name:o,creator:h.username},function(){var e=Object(p.a)(g.a.mark((function e(n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.create(t);case 3:return r=e.sent,e.abrupt("return",n({type:"CREATE_CHANNEL",data:r}));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",console.log("Error creating a new channel",e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),l("")},children:[Object(k.jsx)("input",{type:"text",placeholder:"Enter room name",value:o,onChange:function(e){var t=e.target;return l(t.value)},className:b}),Object(k.jsx)("button",{type:"submit",className:j,children:"Create"})]}):"Login to create and join rooms!"]})})},_=function(){var e=Object(i.c)((function(e){return e.channels})),t=Object(i.b)();return Object(r.useEffect)((function(){t(function(){var e=Object(p.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getAll();case 3:n=e.sent,t({type:"INIT_CHANNELS",data:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error initializing posts",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Array.isArray(e)?Object(k.jsx)("div",{className:"md:grid md:grid-cols-5",children:Object(k.jsxs)("div",{className:"mx-3 md:col-start-2 md:col-span-3 shadow-sm border rounded px-5 py-3 mt-5 text-center",children:[Object(k.jsx)("h2",{className:"font-bold text-xl mb-2",children:"List of channels available"}),e?Object(k.jsx)("ul",{children:e.map((function(e){return Object(k.jsx)(a.b,{to:"/channels/".concat(e.id),children:Object(k.jsx)("li",{className:"border-gray-400 hover:border-gray-600 font-semibold border-2 rounded shadow-sm p-5 mb-3 bg-gray-50 hover:bg-gray-200",children:e.name})},e.id)}))}):"Loading..."]})}):"loading..."},M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OPENED":return!0;case"SET_CLOSED":return!1;default:return e}},D="text-white px-2 hover:text-yellow-100 text-m",H="text-white hover:text-yellow-600 min-w-full hover:bg-gray-100 hover:opacity-50 block px-3 py-2 rounded-md text-base font-medium",G=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.mobileNavOpened}));console.log("OPEND:",t);return Object(k.jsx)("div",{className:"-mr-2 flex justify-end items-end md:hidden",children:Object(k.jsx)("button",{type:"button",className:"bg-green-300 mb-2 inline-flex items-end justify-end p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu",onClick:function(){return e(t?{type:"SET_CLOSED"}:{type:"SET_OPENED"})},children:t?Object(k.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",stroke:"currentColor",className:"block h-6 w-6",viewBox:"0 0 16 16",children:[Object(k.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(k.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]}):Object(k.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})},P=function(){var e=Object(i.c)((function(e){return e.activeUser})),t=Object(i.b)(),n=Object(i.c)((function(e){return e.mobileNavOpened}));return Object(k.jsxs)("div",{className:"px-5",children:[Object(k.jsx)(G,{}),Object(k.jsx)("div",{className:"flex flex-wrap text-center mx-auto justify-items-center space-y-1",children:n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(a.c,{to:"/new-channel",activeClassName:"font-bold",className:H,children:"New channel"}),e?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(a.c,{to:"/channels/all",activeClassName:"font-bold",className:H,children:"All channels"}),Object(k.jsx)("div",{className:"flex justify-items-end items-end",children:Object(k.jsx)("button",{type:"button",onClick:function(){return t(U())},className:" text-right px-3 inline-flex self-end justify-end py-1 shadow-sm text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Logout"})})]}):Object(k.jsx)(a.c,{to:"/new-channel",activeClassName:"font-bold",className:H,children:"Login"})]}):""})]})},V=function(){var e=Object(i.c)((function(e){return e.activeUser})),t=Object(i.b)();return Object(k.jsxs)("div",{className:"bg-blue-500 py-4",children:[Object(k.jsx)("div",{className:"flex justify-end space-x-4",children:Object(k.jsxs)("div",{className:"hidden md:block px-10",children:[Object(k.jsx)(a.c,{to:"/new-channel",activeClassName:"font-bold",className:D,children:"New channel"}),e?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(a.c,{to:"/channels/all",activeClassName:"font-bold",className:D,children:"All channels"}),Object(k.jsxs)("span",{className:"text-white mr-2",children:["Hello,"," ",e.username,"!"]}),Object(k.jsx)("button",{type:"button",onClick:function(){return t(U())},className:"px-3 py-1 mx-2 shadow-sm text-sm font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Logout"})]}):Object(k.jsx)(a.c,{to:"/new-channel",activeClassName:"font-bold",className:"px-3 py-1 mx-2 shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"Login"})]})}),Object(k.jsx)("div",{className:"md:hidden ml-0",children:Object(k.jsx)(P,{})})]})},B=function(){return Object(k.jsx)("div",{children:Object(k.jsx)("h1",{children:"Error 404. Page not found!"})})},F=function(){var e=Object(i.b)();return Object(r.useEffect)((function(){e(function(){var e,t=window.localStorage.getItem("chatAppUser");return console.log("to parse:",t),t&&(e=JSON.parse(t),console.log("Found logged in user:",e)),{type:"INIT_USER",data:{user:e||null}}}())}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)(V,{}),Object(k.jsxs)(l.d,{children:[Object(k.jsx)(l.b,{exact:!0,path:"/channels/all",component:_}),Object(k.jsx)(l.b,{path:"/channels/:roomId",children:Object(k.jsx)(A,{})}),Object(k.jsx)(l.b,{exact:!0,path:"/new-channel",component:T}),Object(k.jsx)(l.b,{exact:!0,path:"/",children:Object(k.jsx)(l.a,{to:"/new-channel"})}),Object(k.jsx)(l.b,{path:"*",component:B})]})]})},J=n(32),z=n(167),W=n(168),q=Object(J.combineReducers)({activeUser:R,channels:S,mobileNavOpened:M}),K=Object(J.createStore)(q,Object(z.composeWithDevTools)(Object(J.applyMiddleware)(W.a)));o.a.render(Object(k.jsx)(i.a,{store:K,children:Object(k.jsx)(a.a,{children:Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(F,{})})})}),document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.bb4c1c3f.chunk.js.map