(this.webpackJsonpmanycoins=this.webpackJsonpmanycoins||[]).push([[0],{28:function(n,t,e){"use strict";e.r(t);var r,a,c,i,s,o,d,b=e(0),l=e.n(b),u=e(13),h=e.n(u),j=e(9),m=e.n(j),g=e(14),p=e(4),f=e(5),x=e(7),O=e(6),k=e(2),v=e(3),y=Object(v.a)(r||(r=Object(k.a)(["\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    font-family: 'Ubuntu', sans-serif;\n    margin: 0;\n\n    *{\n        box-sizing: border-box;\n    }\n\n}\n\ntr:nth-of-type(even) {\n    background-color: #fafafa;\n}\n\n.data-right {\n    text-align: right;\n}\n\n@media only screen and (max-width: 770px) { \n    .collapsing {\n        display: none;\n    }\n}\n\n"]))),N={rank:{ascendingFunction:function(n){return n.sort((function(n,t){return t.rank-n.rank}))},descendingFunction:function(n){return n.sort((function(n,t){return n.rank-t.rank}))}},name:{ascendingFunction:function(n){return n.sort((function(n,t){return(""+n.name).localeCompare(t.name)})).reverse()},descendingFunction:function(n){return n.sort((function(n,t){return(""+n.name).localeCompare(t.name)}))}}},C=e(1),w="descending",F="ascending",S=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(n){var r;return Object(p.a)(this,e),(r=t.call(this,n)).handleClick=function(n){r.props.handler(r.isDescending()?N[n].ascendingFunction:N[n].descendingFunction),r.setState({sortingState:r.isDescending()?F:w,currentlySortedColumn:n})},r.state={sortingState:w,currentlySortedColumn:""},r.isDescending=function(){return r.state.sortingState===w},r}return Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=this,t="https://api.coincap.io/v2/assets",e=function(){return{method:"GET"}};this.props.getItems(t,e);setTimeout((function r(){var a=n.state.currentlySortedColumn;n.props.getItems(t,e,""!==a&&(n.isDescending()?N[a].descendingFunction:N[a].ascendingFunction)),setTimeout(r,1e4)}),1e4)}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var n=this;return Object(C.jsx)(M,{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)(D,{className:"collapsing",onClick:function(){return n.handleClick("rank")},children:"Rank"}),Object(C.jsx)(I,{onClick:function(){return n.handleClick("name")},children:"Name"}),Object(C.jsx)(L,{children:"Price"}),Object(C.jsx)(U,{children:"24h %"}),Object(C.jsx)(E,{className:"data-right collapsing",children:"Market Cap"})]})})}}]),e}(b.Component),M=v.b.thead(a||(a=Object(k.a)(["\n  background: #f4f4f4;\n  border-bottom: 1px solid #bababa;\n  tr {\n    text-align: right;\n    font-weight: bold;\n    font-size: 0.8rem;\n  }\n"]))),D=v.b.th(c||(c=Object(k.a)(["\n  text-align: center;\n  width: 5%;\n  &:hover {\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.1);\n  }\n"]))),I=v.b.th(i||(i=Object(k.a)(["\n  text-align: left;\n  width: 45%;\n"]))),L=v.b.th(s||(s=Object(k.a)(["\n  width: 45%;\n"]))),U=v.b.th(o||(o=Object(k.a)(["\n  text-align: right;\n  width: 5%;\n"]))),E=v.b.th(d||(d=Object(k.a)([""])));function $(){return Object(C.jsx)("tr",{children:Object(C.jsx)("th",{children:"Loading... \u23f3"})})}var z,P,T,H,J,B,G,R,q,A;function K(n){return n.items.map((function(n){return Object(C.jsxs)(V,{children:[Object(C.jsx)(W,{className:"collapsing",children:n.rank}),Object(C.jsxs)(X,{children:[Object(C.jsx)(nn,{src:"https://assets.coincap.io/assets/icons/".concat(n.symbol.toLowerCase(),"@2x.png"),onError:function(n){n.target.onError=null,n.target.src="https://assets.coincap.io/assets/icons/btg@2x.png"}}),Object(C.jsxs)(rn,{children:[Object(C.jsx)(tn,{children:n.name}),Object(C.jsx)(en,{children:n.symbol})]})]}),Object(C.jsxs)(Y,{className:"data-right",children:["$",n.priceUsd>=1?Number(n.priceUsd).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}):Number(n.priceUsd).toFixed(8)]}),Object(C.jsxs)(Z,{className:"data-right",style:{color:Number(n.changePercent24Hr)>0?"#13b016":"#d6230f"},children:[Number(n.changePercent24Hr).toFixed(2),"%"]}),Object(C.jsx)(_,{className:"collapsing",children:(t=n.marketCapUsd,Math.abs(Number(t))>=1e9?"$".concat((Math.abs(Number(t))/1e9).toFixed(2),"b"):Math.abs(Number(t))>=1e6?"$".concat((Math.abs(Number(t))/1e6).toFixed(2),"m"):Math.abs(Number(t))>=1e3?"$".concat((Math.abs(Number(t))/1e3).toFixed(2),"k"):Math.abs(Number(t).toFixed(2)))})]},"".concat(n.rank,"-").concat(n.id));var t}))}var Q,V=v.b.tr(z||(z=Object(k.a)(["\n  cursor: pointer;\n"]))),W=v.b.td(P||(P=Object(k.a)(["\n  text-align: center;\n"]))),X=v.b.td(T||(T=Object(k.a)(["\n  text-align: center;\n  display: flex;\n"]))),Y=v.b.td(H||(H=Object(k.a)([""]))),Z=v.b.td(J||(J=Object(k.a)([""]))),_=v.b.td(B||(B=Object(k.a)([""]))),nn=v.b.img(G||(G=Object(k.a)(["\n  align-self: center;\n  height: 1.8rem;\n  width: 1.8rem;\n  margin-right: 1rem;\n"]))),tn=v.b.span(R||(R=Object(k.a)(["\n  font-size: 1.1rem;\n"]))),en=v.b.span(q||(q=Object(k.a)(["\n  font-weight: 300;\n  font-style: italic;\n"]))),rn=v.b.div(A||(A=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  span {\n    text-align: left;\n  }\n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n"]))),an=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(){return Object(p.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(C.jsxs)(cn,{children:[Object(C.jsx)(S,{getItems:this.props.getItems,handler:this.props.handler}),Object(C.jsx)("tbody",{children:this.props.isLoading?Object(C.jsx)($,{}):Object(C.jsx)(K,{items:this.props.items})})]})}}]),e}(b.Component),cn=v.b.table(Q||(Q=Object(k.a)(["\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n\n  th,\n  td {\n    padding: 0.8rem 1.1rem;\n  }\n\n  tbody {\n    tr {\n      border-bottom: 1px solid #dddddd;\n      &:hover {\n        background: #fbf0ff;\n        span:first-of-type {\n          font-weight: 500;\n        }\n        &:active {\n          background: #f7e0ff;\n          span:first-of-type {\n            font-weight: 500;\n          }\n        }\n      }\n    }\n  }\n"]))),sn=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(n){var r;return Object(p.a)(this,e),(r=t.call(this,n)).getItems=function(){var n=Object(g.a)(m.a.mark((function n(t,e,a){var c;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,e);case 3:return n.next=5,n.sent.json();case 5:c=n.sent,console.log(c),r.setState({items:a?a(c.data):c.data,isLoading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),r.handleClick=function(n){r.setState((function(t){return{items:n(t.items)}}))},r.state={items:[],isLoading:!0},r}return Object(f.a)(e,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"root",children:[Object(C.jsx)(y,{}),Object(C.jsx)(an,{getItems:this.getItems,items:this.state.items,isLoading:this.state.isLoading,handler:this.handleClick})]})}}]),e}(b.Component);h.a.render(Object(C.jsx)(l.a.StrictMode,{children:Object(C.jsx)(sn,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c9ac66a3.chunk.js.map