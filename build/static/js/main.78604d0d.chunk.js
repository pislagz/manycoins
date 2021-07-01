(this.webpackJsonpmanycoins=this.webpackJsonpmanycoins||[]).push([[0],{28:function(n,t,e){"use strict";e.r(t);var a,r,c,i,s,o,b,d=e(0),l=e.n(d),h=e(13),j=e.n(h),u=e(9),m=e.n(u),g=e(14),p=e(4),f=e(5),x=e(7),O=e(6),k=e(2),v=e(3),y=Object(v.a)(a||(a=Object(k.a)(["\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    font-family: 'Ubuntu', sans-serif;\n    margin: 0;\n\n    *{\n        box-sizing: border-box;\n    }\n\n}\n\ntr:nth-of-type(even) {\n    background-color: #fafafa;\n}\n\n.data-right {\n    text-align: right;\n}\n\n@media only screen and (max-width: 770px) { \n    .collapsing {\n        display: none;\n    }\n}\n\n"]))),N=function(n,t){return t.rank-n.rank},w=function(n,t){return n.rank-t.rank},S=e(1),C="descending",M="ascending",F=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(n){var a;return Object(p.a)(this,e),(a=t.call(this,n)).handleClick=function(){var n=a.state.rankSortingState===C;a.props.handler(n?N:w),a.setState({rankSortingState:n?M:C})},a.state={rankSortingState:C},a}return Object(f.a)(e,[{key:"render",value:function(){return Object(S.jsx)(L,{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)(U,{className:"collapsing",onClick:this.handleClick,children:"Rank"}),Object(S.jsx)(E,{children:"Name"}),Object(S.jsx)(I,{children:"Price"}),Object(S.jsx)($,{children:"24h %"}),Object(S.jsx)(z,{className:"data-right collapsing",children:"Market Cap"})]})})}}]),e}(d.Component),L=v.b.thead(r||(r=Object(k.a)(["\n  background: #f4f4f4;\n  border-bottom: 1px solid #bababa;\n  tr {\n    text-align: right;\n    font-weight: bold;\n    font-size: 0.8rem;\n  }\n"]))),U=v.b.th(c||(c=Object(k.a)(["\n  text-align: center;\n  width: 5%;\n  &:hover {\n    cursor: pointer;\n    background: rgba(0, 0, 0, 0.1);\n  }\n"]))),E=v.b.th(i||(i=Object(k.a)(["\n  text-align: left;\n  width: 45%;\n"]))),I=v.b.th(s||(s=Object(k.a)(["\n  width: 45%;\n"]))),$=v.b.th(o||(o=Object(k.a)(["\n  text-align: right;\n  width: 5%;\n"]))),z=v.b.th(b||(b=Object(k.a)([""])));function D(){return Object(S.jsx)("tr",{children:Object(S.jsx)("th",{children:"Loading... \u23f3"})})}var P,T,H,J,B,G,R,q,A,K;function Q(n){return n.items.map((function(n){return Object(S.jsxs)(W,{children:[Object(S.jsx)(X,{className:"collapsing",children:n.rank}),Object(S.jsxs)(Y,{children:[Object(S.jsx)(tn,{src:"https://assets.coincap.io/assets/icons/".concat(n.symbol.toLowerCase(),"@2x.png"),onError:function(n){n.target.onError=null,n.target.src="https://assets.coincap.io/assets/icons/btg@2x.png"}}),Object(S.jsxs)(rn,{children:[Object(S.jsx)(en,{children:n.name}),Object(S.jsx)(an,{children:n.symbol})]})]}),Object(S.jsxs)(Z,{className:"data-right",children:["$",n.priceUsd>=1?Number(n.priceUsd).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}):Number(n.priceUsd).toFixed(8)]}),Object(S.jsxs)(_,{className:"data-right",style:{color:Number(n.changePercent24Hr)>0?"#13b016":"#d6230f"},children:[Number(n.changePercent24Hr).toFixed(2),"%"]}),Object(S.jsx)(nn,{className:"collapsing",children:(t=n.marketCapUsd,Math.abs(Number(t))>=1e9?"$".concat((Math.abs(Number(t))/1e9).toFixed(2),"b"):Math.abs(Number(t))>=1e6?"$".concat((Math.abs(Number(t))/1e6).toFixed(2),"m"):Math.abs(Number(t))>=1e3?"$".concat((Math.abs(Number(t))/1e3).toFixed(2),"k"):Math.abs(Number(t).toFixed(2)))})]},"".concat(n.rank,"-").concat(n.id));var t}))}var V,W=v.b.tr(P||(P=Object(k.a)(["\n  cursor: pointer;\n"]))),X=v.b.td(T||(T=Object(k.a)(["\n  text-align: center;\n"]))),Y=v.b.td(H||(H=Object(k.a)(["\n  text-align: center;\n  display: flex;\n"]))),Z=v.b.td(J||(J=Object(k.a)([""]))),_=v.b.td(B||(B=Object(k.a)([""]))),nn=v.b.td(G||(G=Object(k.a)([""]))),tn=v.b.img(R||(R=Object(k.a)(["\n  align-self: center;\n  height: 1.8rem;\n  width: 1.8rem;\n  margin-right: 1rem;\n"]))),en=v.b.span(q||(q=Object(k.a)(["\n  font-size: 1.1rem;\n"]))),an=v.b.span(A||(A=Object(k.a)(["\n  font-weight: 300;\n  font-style: italic;\n"]))),rn=v.b.div(K||(K=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  span {\n    text-align: left;\n  }\n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n"]))),cn=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(){return Object(p.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"render",value:function(){return Object(S.jsxs)(sn,{children:[Object(S.jsx)(F,{handler:this.props.handler}),Object(S.jsx)("tbody",{children:this.props.isLoading?Object(S.jsx)(D,{}):Object(S.jsx)(Q,{items:this.props.items})})]})}}]),e}(d.Component),sn=v.b.table(V||(V=Object(k.a)(["\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n\n  th,\n  td {\n    padding: 0.8rem 1.1rem;\n  }\n\n  tbody {\n    tr {\n      border-bottom: 1px solid #dddddd;\n      &:hover {\n        background: #fbf0ff;\n        span:first-of-type {\n          font-weight: 500;\n        }\n        &:active {\n          background: #f7e0ff;\n          span:first-of-type {\n            font-weight: 500;\n          }\n        }\n      }\n    }\n  }\n"]))),on=function(n){Object(x.a)(e,n);var t=Object(O.a)(e);function e(n){var a;return Object(p.a)(this,e),(a=t.call(this,n)).getItems=function(){var n=Object(g.a)(m.a.mark((function n(t,e){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,e);case 3:return n.next=5,n.sent.json();case 5:r=n.sent,console.log(r),a.setState({items:r.data,isLoading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t,e){return n.apply(this,arguments)}}(),a.handleClick=function(n){a.setState((function(t){return{items:t.items.sort(n)}}))},a.state={items:[],isLoading:!0},a}return Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=this,t="https://api.coincap.io/v2/assets",e=function(){return{method:"GET"}};this.getItems(t,e);setTimeout((function a(){n.getItems(t,e),setTimeout(a,6e4)}),6e4)}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"root",children:[Object(S.jsx)(y,{}),Object(S.jsx)(cn,{items:this.state.items,isLoading:this.state.isLoading,handler:this.handleClick})]})}}]),e}(d.Component);j.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(on,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.78604d0d.chunk.js.map