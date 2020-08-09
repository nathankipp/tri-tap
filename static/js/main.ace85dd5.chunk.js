(this["webpackJsonptri-tap"]=this["webpackJsonptri-tap"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(24),a(9)),u=a(1),i=a(7),s=a(4),m=a(17),f=a.n(m),d=(a(25),"Press");function p(e){for(var t,a=e.clicks,n=e.reset,r=[{item:"Date",value:new Date(a[0].timeStamp).toLocaleDateString()},{item:"Time",value:new Date(a[0].timeStamp).toLocaleTimeString()}],l=[],o=0;o<1;o+=1){var u=2*o,i=(t=a[u].timeStamp,a[u+1].timeStamp-t),s=a[u+1].pressure;r.push({item:"Delay ".concat(o+1),value:"".concat(i,"ms [").concat(s,"%]")}),l.push(i)}return r.push({item:"Average",value:"".concat(Math.round(l.reduce((function(e,t){return e+t}),0)/l.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,r.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:n},"Restart")))}var E=function(){var e=Object(n.useState)(d),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),u=o[0],m=o[1],E=Object(n.useState)(!1),v=Object(s.a)(E,2),h=v[0],b=v[1],O=Object(n.useState)(!1),j=Object(s.a)(O,2),g=j[0],S=j[1],w=Object(n.useState)(!1),T=Object(s.a)(w,2),k=T[0],y=T[1],D=Object(n.useState)(!1),N=Object(s.a)(D,2),I=N[0],L=N[1],R=Object(n.useRef)(null),M=Object(n.useRef)(0);return Object(n.useEffect)((function(){console.log("once"),f.a.set("#circle",{start:function(){console.log("start",M.current),M.current=0},change:function(e){console.log("change",M.current),M.current=e>M.current?e:M.current},end:function(){console.log("end",M.current)},unsupported:function(){alert("Oh no, this device does not support pressure.")}})}),[]),Object(n.useEffect)((function(){var e=1500+Math.round(250*Math.random());k&&(R.current=setTimeout((function(){L(!0),m((function(e){return[].concat(Object(i.a)(e),[{timeStamp:Date.now()}])}))}),e))}),[k]),Object(n.useEffect)((function(){2===u.length&&S(!0)}),[u]),c.a.createElement("div",{className:"Lift"},c.a.createElement("div",{className:"header"},"Press with your thumb. When the screen turns red, lift your thumb. Repeat five times."),c.a.createElement("div",{className:"tap ".concat(k&&"pressed"," ").concat(I&&"triggered")},c.a.createElement("div",{id:"circle",className:"circle",onPointerDown:function(e){a===d&&(b(!0),y(!0),console.log("down",e))},onPointerUp:function(e){y(!1),h&&a===d&&(I?(r("Good"),m([].concat(Object(i.a)(u),[{timeStamp:Date.now(),pressure:M.current}]))):(r("!"),clearTimeout(R.current)),b(!1),L(!1),setTimeout((function(){return r(d)}),1500),console.log("up",e))}},a)),M.current,g&&c.a.createElement(p,{clicks:u,reset:function(){m([]),function(e,t){r(e),b(t)}(d,!1),S(!1)}}))};a(26);function v(e){var t=e.clicks,a=e.reset,n=[{item:"Date",value:new Date(t[0]).toLocaleDateString()},{item:"Time",value:new Date(t[0]).toLocaleTimeString()}],r=[];return["2-Tap Int 1","3-Tap Int 1","3-Tap Int 2","4-Tap Int 1","4-Tap Int 2","4-Tap Int 3"].forEach((function(e,a){var c,l=0===a?[1,2]:a<3?[a+2,a+3]:[a+3,a+4],o=(c=t[l[0]],t[l[1]]-c);n.push({item:e,value:"".concat(o,"ms")}),r.push(o)})),n.push({item:"Average",value:"".concat(Math.round(r.reduce((function(e,t){return e+t}),0)/r.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,n.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:a},"Restart")))}var h=function(){var e=Object(n.useState)("Start"),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),u=o[0],m=o[1],f=Object(n.useState)(!1),d=Object(s.a)(f,2),p=d[0],E=d[1],h=Object(n.useState)(!1),b=Object(s.a)(h,2),O=b[0],j=b[1],g=function(e,t){r(e),E(t)};return Object(n.useEffect)((function(){switch(u.length){case 1:setTimeout((function(){g("2",!0)}),500);break;case 3:g("Good",!1),setTimeout((function(){g("3",!0)}),1500);break;case 6:g("Good",!1),setTimeout((function(){g("4",!0)}),1500);break;case 10:g("Done",!1),setTimeout((function(){j(!0)}),1500)}}),[u]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},"Tap Start.  When a number appears, tap the circle that many times as quickly as you can.  Use only your thumb."),c.a.createElement("div",{className:"tap"},c.a.createElement("div",{className:"circle ".concat(p&&"active"),onClick:function(e){if(0===u.length)r("");else if(!p)return;m([].concat(Object(i.a)(u),[Date.now()]))}},a)),O&&c.a.createElement(v,{clicks:u,reset:function(){m([]),g("Start",!1),j(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.addEventListener("contextmenu",(function(e){e.preventDefault()})),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement("div",{className:"links"},c.a.createElement(o.b,{to:"tap"},"Tap"),c.a.createElement(o.b,{to:"lift"},"Lift")),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/lift",component:E}),c.a.createElement(u.a,{component:h})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ace85dd5.chunk.js.map