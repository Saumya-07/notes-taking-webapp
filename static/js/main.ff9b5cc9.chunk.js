(this["webpackJsonpnotes-taking-webapp"]=this["webpackJsonpnotes-taking-webapp"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),s=n.n(r),o=(n(14),n(9)),i=n(2),l=n(4),d=(n(15),n(0));var j=function(e){var t=e.handleAddNote,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(d.jsxs)("div",{className:"note new",children:[Object(d.jsx)("textarea",{rows:"8",cols:"10",placeholder:"Type to add a note...",value:r,onChange:function(e){200-e.target.value.length>=0&&s(e.target.value)}}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsxs)("small",{children:[200-r.length," Remaining"]}),Object(d.jsx)("button",{className:"save",onClick:function(){r.trim().length>0&&(t(r),s(""))},children:"Save"})]})]})},h=n(6);var u=function(e){var t=e.id,n=e.text,a=e.date,c=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"note",children:[Object(d.jsx)("span",{children:n}),Object(d.jsxs)("div",{className:"note-footer",children:[Object(d.jsx)("small",{children:a}),Object(d.jsx)(h.a,{onClick:function(){return c(t)},className:"delete-icon",size:"1.3em"})]})]})};var b=function(e){var t=e.notes,n=e.handleAddNote,a=e.handleDeleteNote;return Object(d.jsxs)("div",{className:"notes-list",children:[t.map((function(e){return Object(d.jsx)(u,{id:e.id,text:e.text,date:e.date,handleDeleteNote:a})})),Object(d.jsx)(j,{handleAddNote:n})]})};var O=function(e){var t=e.handleSearchNote;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsx)(h.b,{className:"search-icons",size:"1.3em"}),Object(d.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})]})};var g=function(e){var t=e.handleToggleDarkMode;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:"Keep your Notes here"}),Object(d.jsx)("button",{onClick:function(){return t((function(e){return!e}))},className:"toggle-icon",children:Object(d.jsx)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 512 512",height:"2.5em",width:"3em",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"})})})]})};var x=function(){var e=Object(a.useState)([{id:Object(l.a)(),text:"Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",date:"15/04/2021"},{id:Object(l.a)(),text:"I would love to change the world, but they won\u2019t give me the source code.",date:"13/04/2021"},{id:Object(l.a)(),text:"The glass is neither half-full nor half-empty; it\u2019s twice as big as it needs to be.",date:"11/04/2021"}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),j=s[0],h=s[1],u=Object(a.useState)("false"),x=Object(i.a)(u,2),f=x[0],v=x[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-notes-app-data"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-notes-app-data",JSON.stringify(n))}),[n]),Object(d.jsx)("div",{className:"".concat(f&&"dark-mode"),children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(g,{handleToggleDarkMode:v}),Object(d.jsx)(O,{handleSearchNote:h}),Object(d.jsx)(b,{notes:n.filter((function(e){return e.text.toLowerCase().includes(j)})),handleAddNote:function(e){var t=new Date,a={id:Object(l.a)(),text:e,date:t.toLocaleDateString()},r=[].concat(Object(o.a)(n),[a]);c(r)},handleDeleteNote:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ff9b5cc9.chunk.js.map