(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),o=n(5),i=n.n(o),a=(n(14),n(7)),j=(n(15),n(2)),d=n.n(j),h=n(4),l=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api07.iq.questrade.com/v1/accounts/52130491/".concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}});case 2:return c=e.sent,console.log(c,c.body),console.log("position",c.body.json()),e.abrupt("return",c.body.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=n(8);var p=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0];return(0,t[1])(l("positions","G5TllCgBZ_7YdCnpW2ZB6Xjx6Dop24cO0")),console.log(n),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)(u.a,{responsive:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\u80a1\u7968\u540d\u79f0"}),Object(c.jsx)("th",{children:"\u6570\u91cf"}),Object(c.jsx)("th",{children:"\u6301\u6709\u4ef7/\u80a1"}),Object(c.jsx)("th",{children:"\u5e02\u573a\u4ef7/\u80a1"}),Object(c.jsx)("th",{children:"\u76c8\u4e8f"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.symbol}),Object(c.jsx)("td",{children:e.openQuantity}),Object(c.jsx)("td",{children:e.averageEntryPrice}),Object(c.jsx)("td",{children:e.currentPrice}),Object(c.jsx)("td",{children:e.openPnl})]})}))})]})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.4f255f98.chunk.js.map