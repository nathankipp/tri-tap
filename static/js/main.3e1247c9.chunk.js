(this["webpackJsonptri-tap"]=this["webpackJsonptri-tap"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(23),a(9)),i=a(1),u=a(7),s=a(4),m=(a(24),"Press");function d(e){for(var t,a=e.clicks,n=e.reset,r=[{item:"Date",value:new Date(a[0].timeStamp).toLocaleDateString()},{item:"Time",value:new Date(a[0].timeStamp).toLocaleTimeString()}],l=[],o=0;o<1;o+=1){var i=2*o,u=(t=a[i].timeStamp,a[i+1].timeStamp-t),s=a[i+1].pressure;r.push({item:"Delay ".concat(o+1),value:"".concat(u,"ms [").concat(s,"%]")}),l.push(u)}return r.push({item:"Average",value:"".concat(Math.round(l.reduce((function(e,t){return e+t}),0)/l.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,r.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:n},"Restart")))}var f=function(){var e,t=Object(n.useState)(m),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),i=Object(s.a)(o,2),f=i[0],E=i[1],p=Object(n.useState)(!1),v=Object(s.a)(p,2),h=v[0],b=v[1],j=Object(n.useState)(!1),O=Object(s.a)(j,2),S=O[0],w=O[1],g=Object(n.useState)(0),T=Object(s.a)(g,2),k=T[0],y=T[1],D=Object(n.useState)(!1),N=Object(s.a)(D,2),I=N[0],L=N[1];return Object(n.useEffect)((function(){var t=1500+Math.round(250*Math.random());k&&(e=setTimeout((function(){L(!0),E([].concat(Object(u.a)(f),[{timeStamp:Date.now()}]))}),t))}),[k]),Object(n.useEffect)((function(){2===f.length&&w(!0)}),[f]),c.a.createElement("div",{className:"Lift"},c.a.createElement("div",{className:"header"},"Press with your thumb. When the screen turns red, lift your thumb. Repeat five times."),c.a.createElement("div",{className:"tap ".concat(k&&"pressed"," ").concat(I&&"triggered")},c.a.createElement("div",{className:"circle",onPointerDown:function(e){r===m&&(b(!0),y(e.pressure),console.log("down",e))},onPointerUp:function(t){h&&r===m?(I?(l("Good"),E([].concat(Object(u.a)(f),[{timeStamp:Date.now(),pressure:k}]))):(l("!"),clearTimeout(e)),y(0),b(!1),L(!1),setTimeout((function(){return l(m)}),1500),console.log("up",t)):y(0)}},r)),k,S&&c.a.createElement(d,{clicks:f,reset:function(){E([]),function(e,t){l(e),b(t)}(m,!1),w(!1)}}))};a(25);function E(e){var t=e.clicks,a=e.reset,n=[{item:"Date",value:new Date(t[0]).toLocaleDateString()},{item:"Time",value:new Date(t[0]).toLocaleTimeString()}],r=[];return["2-Tap Int 1","3-Tap Int 1","3-Tap Int 2","4-Tap Int 1","4-Tap Int 2","4-Tap Int 3"].forEach((function(e,a){var c,l=0===a?[1,2]:a<3?[a+2,a+3]:[a+3,a+4],o=(c=t[l[0]],t[l[1]]-c);n.push({item:e,value:"".concat(o,"ms")}),r.push(o)})),n.push({item:"Average",value:"".concat(Math.round(r.reduce((function(e,t){return e+t}),0)/r.length),"ms")}),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",{className:"modal"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Event"),c.a.createElement("th",null,"Result"))),c.a.createElement("tbody",null,n.map((function(e){return c.a.createElement("tr",{key:e.item},c.a.createElement("td",null,e.item),c.a.createElement("td",null,e.value))})))),c.a.createElement("div",{className:"reset",onClick:a},"Restart")))}var p=function(){var e=Object(n.useState)("Start"),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],m=o[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)(!1),b=Object(s.a)(h,2),j=b[0],O=b[1],S=function(e,t){r(e),v(t)};return Object(n.useEffect)((function(){switch(i.length){case 1:setTimeout((function(){S("2",!0)}),500);break;case 3:S("Good",!1),setTimeout((function(){S("3",!0)}),1500);break;case 6:S("Good",!1),setTimeout((function(){S("4",!0)}),1500);break;case 10:S("Done",!1),setTimeout((function(){O(!0)}),1500)}}),[i]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},"Tap Start.  When a number appears, tap the circle that many times as quickly as you can.  Use only your thumb."),c.a.createElement("div",{className:"tap"},c.a.createElement("div",{className:"circle ".concat(p&&"active"),onClick:function(e){if(0===i.length)r("");else if(!p)return;m([].concat(Object(u.a)(i),[Date.now()]))}},a)),j&&c.a.createElement(E,{clicks:i,reset:function(){m([]),S("Start",!1),O(!1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.addEventListener("contextmenu",(function(e){e.preventDefault()})),l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement("div",{className:"links"},c.a.createElement(o.b,{to:"tap"},"Tap"),c.a.createElement(o.b,{to:"lift"},"Lift")),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/lift",component:f}),c.a.createElement(i.a,{component:p})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3e1247c9.chunk.js.map