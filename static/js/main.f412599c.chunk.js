(this["webpackJsonpcsv-test"]=this["webpackJsonpcsv-test"]||[]).push([[0],{15:function(e,t,n){},35:function(e,t){},37:function(e,t){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),i=n.n(s),r=(n(15),n(23)),l=n(24),o=n(28),h=n(27),d=n(25),j=n(0),m=function(){return Object(j.jsx)("div",{className:"notCorect",children:Object(j.jsx)("h2",{className:"titleNotCorect",children:"File format is not correct"})})},b=n(14),u=function(e){var t,n=e.isIncorect,a=e.data;e.duplicateEmail;return n||(t=a.map((function(e,t){var n;a.forEach((function(a,c){a.email!==e.email&&a.phone!==e.phone||c!==t&&(n=c+1)}));var c="+1"+e.phone,s=parseInt(e.age),i=parseInt(e.experience),r=parseInt(e.yearlyincome)/100,l=e.licensestates.split(" ").map((function(e){return e.slice(0,2)})).join(" | "),o=e.expirationdate,h=String(e.haschildren),d=e.licensenumber,m=["info"],u=["info"],O=["info"],f=["info"],x=["info"],p=["info"];return e.age<21&&m.push("infoAge"),e.experience>21&&u.push("infoAge"),e.yearlyincome>1e6&&O.push("infoAge"),e.phone.length>10&&x.push("infoAge"),"boolean"===typeof e.haschildren?p.push(""):p.push("infoAge"),e.expirationdate===Object(b.a)(new Date(e.expirationdate),"yyyy-MM-dd")||e.expirationdate===Object(b.a)(new Date(e.expirationdate),"MM/dd/yyyy")?f.push(""):f.push("infoAge"),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"info",children:t+1}),Object(j.jsx)("td",{className:"info",children:e.fullname}),Object(j.jsx)("td",{className:x.join(" "),children:c}),Object(j.jsx)("td",{className:"info",children:e.email.toLowerCase()}),Object(j.jsx)("td",{className:m.join(" "),children:s}),Object(j.jsx)("td",{className:u.join(" "),children:i}),Object(j.jsx)("td",{className:O.join(" "),children:r}),Object(j.jsx)("td",{className:p.join(" "),children:h}),Object(j.jsx)("td",{className:"info",children:l}),Object(j.jsx)("td",{className:f.join(" "),children:o}),Object(j.jsx)("td",{className:["info"].join(" "),children:d}),Object(j.jsx)("td",{className:"info",children:n&&n})]},t)}))),Object(j.jsx)(j.Fragment,{children:n?Object(j.jsx)(m,{}):Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"tableData",children:Object(j.jsxs)("tr",{className:"tableData",children:[Object(j.jsx)("th",{className:"head",children:"ID"}),Object(j.jsx)("th",{className:"head",children:"Full Name"}),Object(j.jsx)("th",{className:"head",children:"Phone"}),Object(j.jsx)("th",{className:"head",children:"Email"}),Object(j.jsx)("th",{className:"head",children:"Age"}),Object(j.jsx)("th",{className:"head",children:"Experience"}),Object(j.jsx)("th",{className:"head",children:"Yearly Income"}),Object(j.jsx)("th",{className:"head",children:"Has children"}),Object(j.jsx)("th",{className:"head",children:"License states"}),Object(j.jsx)("th",{className:"head",children:"Expiration date"}),Object(j.jsx)("th",{className:"head",children:"License number"}),Object(j.jsx)("th",{className:"head",children:"Duplicate with"})]})}),Object(j.jsx)("tbody",{className:"tableData",children:t})]})})},O=c.a.createRef(),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={arr:[],isNotCorect:!1},e.handleOpenDialog=function(e){O.current&&O.current.open(e)},e.handleOnFileLoad=function(t,n){n.name.includes("csv")||e.setState({isNotCorect:!0});var a=t.map((function(e){return e.data}));e.setState({duplicateEmail:[],duplicatePhone:[]}),a.forEach((function(t,n){var a=t.fullname,c=t.phone,s=t.email;!a&&e.setState({isNotCorect:!0}),!c&&e.setState({isNotCorect:!0}),!s&&e.setState({isNotCorect:!0})})),e.setState({arr:a})},e.handleOnError=function(e){console.log("Err"),console.log(e)},e.handleOnRemoveFile=function(t){e.setState({arr:[],isNotCorect:!1})},e.handleRemoveFile=function(e){O.current&&O.current.removeFile(e)},e.handleTransform=function(e){return e.trim()},e.handleHader=function(e){return e.split(" ").join("").toLowerCase()},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(d.a,{ref:O,onFileLoad:this.handleOnFileLoad,onError:this.handleOnError,noClick:!0,noDrag:!0,config:{header:!0,skipEmptyLines:!0,transform:this.handleTransform,transformHeader:this.handleHader,dynamicTyping:!0},onRemoveFile:this.handleOnRemoveFile,children:function(t){var n=t.file;return Object(j.jsx)("aside",{className:"aside",children:n?Object(j.jsxs)("button",{className:"btnRemove",onClick:e.handleRemoveFile,children:["Remove ",n.name]}):Object(j.jsx)("button",{type:"button",onClick:e.handleOpenDialog,className:"btn",children:"Import users \ud83d\uddc4\ufe0f"})})}}),this.state.arr.length?Object(j.jsx)(u,{isIncorect:this.state.isNotCorect,data:this.state.arr}):Object(j.jsx)("h1",{className:"title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0456\u0442\u044c \u0444\u0430\u0439\u043b \ud83d\udcc1 "})]})})}}]),n}(a.Component);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.f412599c.chunk.js.map