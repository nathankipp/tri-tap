(this["webpackJsonptri-tap"]=this["webpackJsonptri-tap"]||[]).push([[0],{27:function(e,t){},465:function(e,t,a){},466:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(56),l=a.n(r),i=(a(65),a(17)),o=a(4);function u(e){return window.localStorage.getItem(e)||""}var m={items:[{label:"date",field:"date",type:"hidden"},{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"}],getItem:u,setItem:function(e,t){window.localStorage.setItem(e,t)},isValid:function(){return u("date")===(new Date).toLocaleDateString()&&u("name")}},s=a(15),d=a(6),f=a(57),v=a.n(f),p=(a(66),a(59)),E=a(473);var h=a(16),b=a.n(h);b.a.config.region="us-east-2",b.a.config.credentials=new b.a.CognitoIdentityCredentials({IdentityPoolId:"us-east-2:1056edee-e9e2-4c61-8f7e-45d31a5ab8a4"});var g=new b.a.DynamoDB.DocumentClient;var w="Press";function y(e){for(var t,a=e.clicks,n=e.reset,r=[{item:"Date",value:new Date(a[0].timeStamp).toLocaleDateString()},{item:"Time",value:new Date(a[0].timeStamp).toLocaleTimeString()}],l=[],i=0;i<5;i+=1){var o=2*i,u=(t=a[o].timeStamp,a[o+1].timeStamp-t),m=Math.round(1e3*a[o+1].pressure)/10;r.push({item:"Delay ".concat(i+1),value:"".concat(u,"ms [").concat(m,"%]")}),l.push(u)}return r.push({item:"Average",value:"".concat(Math.round(l.reduce((function(e,t){return e+t}),0)/l.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,r.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:n},"Restart")))}var S=function(){var e=Object(n.useState)(w),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(d.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),h=f[0],b=f[1],S=Object(n.useState)(!1),j=Object(d.a)(S,2),O=j[0],D=j[1],T=Object(n.useState)(!1),k=Object(d.a)(T,2),I=k[0],N=k[1],L=Object(n.useState)(!1),M=Object(d.a)(L,2),P=M[0],C=M[1],R=Object(n.useRef)(null),V=Object(n.useRef)(0);Object(n.useEffect)((function(){v.a.set("#circle",{start:function(){V.current=0},change:function(e){V.current=e>V.current?e:V.current},unsupported:function(){V.current=-1}},{only:"touch",polyfill:!1})}),[]);var F=function(){for(var e=[],t=Date.now(),a=function(a){e.push(new Promise((function(e,n){var c,r,l=function(e){var t=e.id,a=void 0===t?Object(E.a)():t,n=e.timestamp,c=void 0===n?Date.now():n,r=e.user,l=void 0===r?window.sessionStorage.getItem("user")||"unspecified":r,i=e.winNavUa,o=void 0===i?window.navigator.userAgent:i;return Object(p.a)({id:a,timestamp:c,user:l,winNavUa:o},e)}({timeStamp:t,trigger:o[a].timeStamp,lift:o[a+1].timeStamp,pressure:o[a+1].pressure});(c=l,r="lift",new Promise((function(e,t){g.put({Item:c,TableName:r},(function(a,n){a?t("Error: data was not saved to ".concat(r)):e()}))}))).then(e).catch(n)})))},n=0;n<o.length;n+=2)a(n);return Promise.all(e)};return Object(n.useEffect)((function(){var e=1500+Math.round(250*Math.random());I&&(R.current=setTimeout((function(){C(!0),u((function(e){return[].concat(Object(s.a)(e),[{timeStamp:Date.now()}])}))}),e))}),[I]),Object(n.useEffect)((function(){10===o.length&&D(!0)}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},"Press with your thumb. When the screen turns red, lift your thumb. Repeat five times."),c.a.createElement("div",{className:"lift ".concat(I&&"pressed"," ").concat(P&&"triggered")},c.a.createElement("div",{id:"circle",className:"circle",onPointerDown:function(e){a===w&&(b(!0),N(!0))},onPointerUp:function(e){N(!1),h&&a===w&&(P?(r("Good"),u([].concat(Object(s.a)(o),[{timeStamp:Date.now(),pressure:V.current}]))):(r("!"),clearTimeout(R.current)),b(!1),C(!1),setTimeout((function(){return r(w)}),1500))}},a)),O&&c.a.createElement(y,{clicks:o,reset:function(){F().finally((function(){D(!1),u([]),function(e,t){r(e),b(t)}(w,!1)}))}}))};a(465);function j(e){var t=e.clicks,a=e.reset,n=[{item:"Date",value:new Date(t[0]).toLocaleDateString()},{item:"Time",value:new Date(t[0]).toLocaleTimeString()}],r=[];return["2-Tap Int 1","3-Tap Int 1","3-Tap Int 2","4-Tap Int 1","4-Tap Int 2","4-Tap Int 3"].forEach((function(e,a){var c,l=0===a?[1,2]:a<3?[a+2,a+3]:[a+3,a+4],i=(c=t[l[0]],t[l[1]]-c);n.push({item:e,value:"".concat(i,"ms")}),r.push(i)})),n.push({item:"Average",value:"".concat(Math.round(r.reduce((function(e,t){return e+t}),0)/r.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,n.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:a},"Restart")))}var O=function(){var e=Object(n.useState)("Start"),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(d.a)(l,2),o=i[0],u=i[1],m=Object(n.useState)(!1),f=Object(d.a)(m,2),v=f[0],p=f[1],E=Object(n.useState)(!1),h=Object(d.a)(E,2),b=h[0],g=h[1],w=function(e,t){r(e),p(t)};return Object(n.useEffect)((function(){switch(o.length){case 1:setTimeout((function(){w("2",!0)}),500);break;case 3:w("Good",!1),setTimeout((function(){w("3",!0)}),1500);break;case 6:w("Good",!1),setTimeout((function(){w("4",!0)}),1500);break;case 10:w("Done",!1),setTimeout((function(){g(!0)}),1500)}}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},"Tap Start.  When a number appears, tap the circle that many times as quickly as you can.  Use only your thumb."),c.a.createElement("div",{className:"tap"},c.a.createElement("div",{className:"circle ".concat(v&&"active"),onClick:function(e){if(0===o.length)r("");else if(!v)return;u([].concat(Object(s.a)(o),[Date.now()]))}},a)),b&&c.a.createElement(j,{clicks:o,reset:function(){u([]),w("Start",!1),g(!1)}}))},D=(a(466),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),T=function(e){e.preventDefault();m.items.forEach((function(t){var a=t.field,n=(e.target[a].value||"").trim();console.log(a,n),n&&m.setItem(a,n)})),m.isValid()?window.location.replace("#lift"):window.location.reload(!0)},k=function(e){return"date"===e?(new Date).toLocaleDateString():m.getItem(e)||""};function I(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},"My ",D[(new Date).getDay()]," Status"),c.a.createElement("form",{onSubmit:T},m.items.map((function(e){var t=e.label,a=e.field,n=e.type;return c.a.createElement("div",{key:a},"hidden"!==n&&c.a.createElement("label",{htmlFor:t},a),c.a.createElement("input",{name:a,defaultValue:k(a),type:n||"text"}))})),c.a.createElement("div",null,c.a.createElement("input",{type:"submit",value:"Continue"})),m.items.map((function(e){var t=e.field;return c.a.createElement("div",{key:t},t,": ",m.getItem(t))}))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.addEventListener("contextmenu",(function(e){e.preventDefault()})),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"links"},m.isValid()&&c.a.createElement(i.b,{to:"/tap"},"Tap"),m.isValid()&&c.a.createElement(i.b,{to:"/lift"},"Lift"),c.a.createElement(i.b,{to:"/user"},c.a.createElement("div",{className:"user"},m.getItem("name")||(new Date).toLocaleDateString()))),m.isValid()?c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/lift",component:S}),c.a.createElement(o.a,{path:"/tap",component:O}),c.a.createElement(o.a,{component:I})):c.a.createElement(I,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(471)},65:function(e,t,a){},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.cfbb8e96.chunk.js.map