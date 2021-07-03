(this.webpackJsonpmanycoins=this.webpackJsonpmanycoins||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var r,c,i,a,s,o,d,b,j,u,l,h,f,g,O,m,x=t(1),p=t.n(x),k=t(13),v=t.n(k),y=t(9),C=t.n(y),F=t(14),w=t(4),U=t(5),N=t(7),S=t(6),M=t(3),D=t(2),I=Object(D.a)(r||(r=Object(M.a)(["\nhtml,\nbody{\n    width: 100%;\n    height: 100%;\n    font-family: 'Ubuntu', sans-serif;\n    margin: 0;\n\n    *{\n        box-sizing: border-box;\n    }\n\n}\n\ntr:nth-of-type(even) {\n    background-color: #fafafa;\n}\n\n"]))),R={rank:{ascendingFunction:function(n){return n.sort((function(n,e){return e.rank-n.rank}))},descendingFunction:function(n){return n.sort((function(n,e){return n.rank-e.rank}))}},name:{ascendingFunction:function(n){return n.sort((function(n,e){return(""+n.name).localeCompare(e.name)})).reverse()},descendingFunction:function(n){return n.sort((function(n,e){return(""+n.name).localeCompare(e.name)}))}},price:{ascendingFunction:function(n){return n.sort((function(n,e){return e.priceUsd-n.priceUsd}))},descendingFunction:function(n){return n.sort((function(n,e){return n.priceUsd-e.priceUsd}))}},change24:{ascendingFunction:function(n){return n.sort((function(n,e){return e.changePercent24Hr-n.changePercent24Hr}))},descendingFunction:function(n){return n.sort((function(n,e){return n.changePercent24Hr-e.changePercent24Hr}))}},marketCap:{ascendingFunction:function(n){return n.sort((function(n,e){return e.marketCapUsd-n.marketCapUsd}))},descendingFunction:function(n){return n.sort((function(n,e){return n.marketCapUsd-e.marketCapUsd}))}}},L="\n    @media only screen and (max-width: 770px) { \n        display: none;\n    }\n",P="\n    &:hover {\n        cursor: pointer;\n        background: rgba(0, 0, 0, 0.1);\n        transition: background 0.4s;\n    }\n    &:active {\n        background: rgba(0, 0, 0, 0.2);\n    }\n",H=t(0),z="descending",E="ascending",$=function(n){Object(N.a)(t,n);var e=Object(S.a)(t);function t(n){var r;return Object(w.a)(this,t),(r=e.call(this,n)).handleClick=function(n){r.props.handler(r.isDescending()?R[n].ascendingFunction:R[n].descendingFunction),r.setState({sortingState:r.isDescending()?E:z,currentlySortedColumn:n})},r.state={sortingState:z,currentlySortedColumn:""},r.isDescending=function(){return r.state.sortingState===z},r}return Object(U.a)(t,[{key:"componentDidMount",value:function(){var n=this,e="https://api.coincap.io/v2/assets",t=function(){return{method:"GET"}};this.props.getItems(e,t);setTimeout((function r(){var c=n.state.currentlySortedColumn;n.props.getItems(e,t,""!==c&&(n.isDescending()?R[c].descendingFunction:R[c].ascendingFunction)),setTimeout(r,n.props.refreshRate())}),this.props.refreshRate())}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var n=this;return Object(H.jsx)(T,{children:Object(H.jsxs)("tr",{children:[Object(H.jsx)(J,{onClick:function(){return n.handleClick("rank")},children:"Rank"}),Object(H.jsx)(X,{onClick:function(){return n.handleClick("name")},children:"Name"}),Object(H.jsx)(B,{onClick:function(){return n.handleClick("price")},children:"Price"}),Object(H.jsx)(G,{onClick:function(){return n.handleClick("change24")},children:"24h\xa0%"}),Object(H.jsx)(q,{onClick:function(){return n.handleClick("marketCap")},children:"Market\xa0Cap"})]})})}}]),t}(x.Component),T=D.b.thead(c||(c=Object(M.a)(["\n  background: #f4f4f4;\n  border-bottom: 1px solid #bababa;\n  tr {\n    text-align: right;\n    font-weight: bold;\n    font-size: 0.8rem;\n  }\n"]))),J=D.b.th(i||(i=Object(M.a)(["\n  ",";\n  ",";\n  text-align: center;\n  width: 5%;\n"])),L,P),X=D.b.th(a||(a=Object(M.a)(["\n  ",";\n  text-align: left;\n  width: 40%;\n"])),P),B=D.b.th(s||(s=Object(M.a)(["\n  ",";\n  width: 45%;\n"])),P),G=D.b.th(o||(o=Object(M.a)(["\n  ",";\n  text-align: right;\n  width: 5%;\n"])),P),q=D.b.th(d||(d=Object(M.a)(["\n  ",";\n  ",";\n  text-align: right;\n  width: 5%;\n"])),P,L);function A(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(_,{children:[Object(H.jsx)(K,{children:Object(H.jsx)(nn,{children:Object(H.jsx)(en,{})})}),Object(H.jsx)(Q,{children:Object(H.jsx)(nn,{children:Object(H.jsx)(en,{})})}),Object(H.jsx)(V,{children:Object(H.jsx)(nn,{children:Object(H.jsx)(en,{})})}),Object(H.jsx)(W,{children:Object(H.jsx)(nn,{children:Object(H.jsx)(en,{})})}),Object(H.jsx)(Y,{children:Object(H.jsx)(nn,{children:Object(H.jsx)(en,{})})})]})})}var K=D.b.td(b||(b=Object(M.a)(["\n  ",";\n  text-align: center;\n"])),L),Q=D.b.td(j||(j=Object(M.a)([""]))),V=D.b.td(u||(u=Object(M.a)([""]))),W=D.b.td(l||(l=Object(M.a)([""]))),Y=D.b.td(h||(h=Object(M.a)(["\n  ",";\n"])),L),Z=Object(D.c)(f||(f=Object(M.a)(["\n  0% {transform: translateX(0);}\n  100% {transform: translateX(1600%);}\n"]))),_=D.b.tr(g||(g=Object(M.a)([""]))),nn=D.b.div(O||(O=Object(M.a)(["\n  height: 1.8rem;\n  background: #f7f7f7;\n  overflow: hidden;\n"]))),en=D.b.div(m||(m=Object(M.a)(["\n  animation: "," 0.5s linear infinite backwards;\n  background: linear-gradient(\n    90deg,\n    rgba(247, 247, 247, 1) 0%,\n    rgba(210, 210, 210, 1) 40%,\n    rgba(210, 210, 210, 1) 60%,\n    rgba(247, 247, 247, 1) 100%\n  );\n  width: 2rem;\n  height: 100%;\n"])),Z);function tn(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{}),Object(H.jsx)(A,{})]})}var rn,cn,an,sn,on,dn,bn,jn,un,ln,hn;function fn(n){return n.items.map((function(n){return Object(H.jsxs)(On,{children:[Object(H.jsx)(mn,{children:n.rank}),Object(H.jsxs)(xn,{children:[Object(H.jsx)(yn,{src:"https://assets.coincap.io/assets/icons/".concat(n.symbol.toLowerCase(),"@2x.png"),onError:function(n){n.target.onError=null,n.target.src="https://assets.coincap.io/assets/icons/btg@2x.png"}}),Object(H.jsxs)(Un,{children:[Object(H.jsx)(Cn,{children:n.name}),Object(H.jsxs)(Fn,{children:[Object(H.jsx)(wn,{children:n.symbol}),Object(H.jsxs)("p",{children:["#",n.rank]})]})]})]}),Object(H.jsxs)(pn,{children:["$",n.priceUsd>=1?Number(n.priceUsd).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}):Number(n.priceUsd).toFixed(8)]}),Object(H.jsxs)(kn,{style:{color:Number(n.changePercent24Hr)>0?"#13b016":"#d6230f"},children:[Number(n.changePercent24Hr).toFixed(2),"%"]}),Object(H.jsx)(vn,{children:(e=n.marketCapUsd,Math.abs(Number(e))>=1e9?"$".concat((Math.abs(Number(e))/1e9).toFixed(2),"b"):Math.abs(Number(e))>=1e6?"$".concat((Math.abs(Number(e))/1e6).toFixed(2),"m"):Math.abs(Number(e))>=1e3?"$".concat((Math.abs(Number(e))/1e3).toFixed(2),"k"):Math.abs(Number(e).toFixed(2)))})]},"".concat(n.rank,"-").concat(n.id));var e}))}var gn,On=D.b.tr(rn||(rn=Object(M.a)(["\n  cursor: pointer;\n"]))),mn=D.b.td(cn||(cn=Object(M.a)(["\n  ",";\n  text-align: center;\n"])),L),xn=D.b.td(an||(an=Object(M.a)(["\n  text-align: center;\n  display: flex;\n"]))),pn=D.b.td(sn||(sn=Object(M.a)(["\n  text-align: right;\n"]))),kn=D.b.td(on||(on=Object(M.a)(["\n  text-align: right;\n"]))),vn=D.b.td(dn||(dn=Object(M.a)(["\n  ",";\n"])),L),yn=D.b.img(bn||(bn=Object(M.a)(["\n  align-self: center;\n  height: 1.8rem;\n  width: 1.8rem;\n  margin-right: 1rem;\n"]))),Cn=D.b.span(jn||(jn=Object(M.a)(["\n  font-size: 1.1rem;\n"]))),Fn=D.b.div(un||(un=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  p {\n    ",";\n    margin: 0 0 0 1rem;\n    font-size: 1rem;\n    font-weight: 300;\n    font-style: italic;\n    background: #fee8ff;\n    border-radius: 9999px;\n    padding: 0.2rem 0.5rem;\n  }\n"])),"\n    @media only screen and (min-width: 770px) { \n        display: none;\n    }\n"),wn=D.b.span(ln||(ln=Object(M.a)(["\n  font-weight: 300;\n  font-style: italic;\n"]))),Un=D.b.div(hn||(hn=Object(M.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  span {\n    text-align: left;\n  }\n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n"]))),Nn=function(n){Object(N.a)(t,n);var e=Object(S.a)(t);function t(){return Object(w.a)(this,t),e.apply(this,arguments)}return Object(U.a)(t,[{key:"render",value:function(){return Object(H.jsxs)(Sn,{children:[Object(H.jsx)($,{refreshRate:this.props.refreshRate,getItems:this.props.getItems,handler:this.props.handler}),Object(H.jsx)("tbody",{children:this.props.isLoading?Object(H.jsx)(tn,{}):Object(H.jsx)(fn,{items:this.props.items})})]})}}]),t}(x.Component),Sn=D.b.table(gn||(gn=Object(M.a)(["\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n\n  th,\n  td {\n    padding: 0.8rem 1.1rem;\n  }\n\n  tbody {\n    tr {\n      border-bottom: 1px solid #dddddd;\n      &:hover {\n        background: #fbf0ff;\n        div {\n          div {\n            p {\n              background: #e6fffe;\n            }\n          }\n        }\n        span:first-of-type {\n          font-weight: 500;\n        }\n        &:active {\n          background: #f7e0ff;\n          span:first-of-type {\n            font-weight: 500;\n          }\n        }\n      }\n    }\n  }\n"]))),Mn=function(n){Object(N.a)(t,n);var e=Object(S.a)(t);function t(n){var r;return Object(w.a)(this,t),(r=e.call(this,n)).refreshRate=function(){return 15e3},r.getItems=function(){var n=Object(F.a)(C.a.mark((function n(e,t,c){var i;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,t);case 3:return n.next=5,n.sent.json();case 5:i=n.sent,console.log(i),r.setState({items:c?c(i.data):i.data,isLoading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t,r){return n.apply(this,arguments)}}(),r.handleClick=function(n){r.setState((function(e){return{items:n(e.items)}}))},r.state={items:[],isLoading:!0},r}return Object(U.a)(t,[{key:"render",value:function(){var n=this;return Object(H.jsxs)("div",{className:"root",children:[Object(H.jsx)(I,{}),Object(H.jsx)(Nn,{refreshRate:function(){return n.refreshRate()},getItems:this.getItems,items:this.state.items,isLoading:this.state.isLoading,handler:this.handleClick})]})}}]),t}(x.Component);v.a.render(Object(H.jsx)(p.a.StrictMode,{children:Object(H.jsx)(Mn,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2db168cc.chunk.js.map