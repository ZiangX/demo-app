(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),s=n.n(r),a=n(5),o=n.n(a),i=(n(17),n(2)),h=n.n(i),j=n(3),u=n(6),d=n(7),p=n(11),l=n(9),b=(n(19),function(){var t=Object(j.a)(h.a.mark((function t(e,n){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://cors-anywhere.herokuapp.com/https://api07.iq.questrade.com/v1/accounts/52130491/".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(n)}});case 2:return c=t.sent,t.next=5,c.json();case 5:return r=t.sent,console.log("position",r.positions),t.abrupt("return",r.positions);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),O=n(10),x=function(t){Object(p.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={stocks:[],token:"G5TllCgBZ_7YdCnpW2ZB6Xjx6Dop24cO0"},t.componentDidMount=Object(j.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("positions",t.state.token);case 2:n=e.sent,t.setState({stocks:n});case 4:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsxs)(O.a,{responsive:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"\u80a1\u7968\u540d\u79f0"}),Object(c.jsx)("th",{children:"\u6570\u91cf"}),Object(c.jsx)("th",{children:"\u6301\u6709\u4ef7/\u80a1"}),Object(c.jsx)("th",{children:"\u5e02\u573a\u4ef7/\u80a1"}),Object(c.jsx)("th",{children:"\u76c8\u4e8f"})]})}),Object(c.jsx)("tbody",{children:this.state.stocks.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.symbol}),Object(c.jsx)("td",{children:t.openQuantity}),Object(c.jsx)("td",{children:t.averageEntryPrice}),Object(c.jsx)("td",{children:t.currentPrice}),Object(c.jsx)("td",{children:t.openPnl})]})}))})]})})})}}]),n}(s.a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),s(t),a(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.9d4affe5.chunk.js.map