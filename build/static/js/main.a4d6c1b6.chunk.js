(this.webpackJsonpmanycoins=this.webpackJsonpmanycoins||[]).push([[0],{28:function(n,t,e){"use strict";e.r(t);var r,i,c,s,a,o,d,b,j,l,h,u,f,m,x,g,O,p,y,v,k=e(3),w=e.n(k),C=e(13),F=e.n(C),S=e(9),N=e.n(S),U=e(14),M=e(4),z=e(5),I=e(7),D=e(6),R=e(2),V=e(1),H=Object(V.a)(r||(r=Object(R.a)(["\n\n*{\n        box-sizing: border-box;\n    }\n    \nhtml,\nbody{\n    width: 100%;\n    font-family: 'Ubuntu', sans-serif;\n    margin: 0;\n}\n\ntr:nth-of-type(even) {\n    background-color: #fafafa;\n}\n\ntd {\n    /* border-right: 1px solid red; */\n}\n\n.table-wrapper {\n    width: 100%;\n    overflow-x: scroll;\n}\n\n"]))),L="\n    @media only screen and (max-width: 770px) { \n        display: none;\n    }\n",P=function(n){return"\n@media only screen and (max-width: 770px) { \n    font-size: ".concat(n,"rem;\n}\n")},E=function(n){return"\n@media only screen and (max-width: 770px) { \n    ".concat(n,";\n}\n")},$={rank:{descendingFunction:function(n){return n.sort((function(n,t){return t.rank-n.rank}))},ascendingFunction:function(n){return n.sort((function(n,t){return n.rank-t.rank}))}},name:{descendingFunction:function(n){return n.sort((function(n,t){return(""+n.name).localeCompare(t.name)})).reverse()},ascendingFunction:function(n){return n.sort((function(n,t){return(""+n.name).localeCompare(t.name)}))}},price:{descendingFunction:function(n){return n.sort((function(n,t){return t.priceUsd-n.priceUsd}))},ascendingFunction:function(n){return n.sort((function(n,t){return n.priceUsd-t.priceUsd}))}},change24:{descendingFunction:function(n){return n.sort((function(n,t){return t.changePercent24Hr-n.changePercent24Hr}))},ascendingFunction:function(n){return n.sort((function(n,t){return n.changePercent24Hr-t.changePercent24Hr}))}},marketCap:{descendingFunction:function(n){return n.sort((function(n,t){return t.marketCapUsd-n.marketCapUsd}))},ascendingFunction:function(n){return n.sort((function(n,t){return n.marketCapUsd-t.marketCapUsd}))}}},T=e(0),B="descending",J="ascending",X=function(n){Object(I.a)(e,n);var t=Object(D.a)(e);function e(n){var r;return Object(M.a)(this,e),(r=t.call(this,n)).handleClick=function(n){r.props.handler(r.isDescending()?$[n].ascendingFunction:$[n].descendingFunction),r.setState({sortingState:r.isDescending()?J:B,currentlySortedColumn:n})},r.state={sortingState:J,currentlySortedColumn:"rank"},r.isDescending=function(){return r.state.sortingState===B},r}return Object(z.a)(e,[{key:"componentDidMount",value:function(){var n=this,t="https://api.coincap.io/v2/assets",e=function(){return{method:"GET"}};this.props.getItems(t,e);setTimeout((function r(){var i=n.state.currentlySortedColumn;n.props.getItems(t,e,""!==i&&(n.isDescending()?$[i].descendingFunction:$[i].ascendingFunction)),setTimeout(r,n.props.refreshRate())}),this.props.refreshRate())}},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"render",value:function(){var n=this;return Object(T.jsx)(A,{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)(G,{children:"\u2661"}),Object(T.jsx)(q,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)("p",{onClick:function(){return n.handleClick("rank")},children:"Rank"}),Object(T.jsx)(nn,{direction:this.state.sortingState,isVisible:"rank"===this.state.currentlySortedColumn})]})}),Object(T.jsx)(K,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)("p",{onClick:function(){return n.handleClick("name")},children:"Name"}),Object(T.jsx)(nn,{direction:this.state.sortingState,isVisible:"name"===this.state.currentlySortedColumn})]})}),Object(T.jsx)(Q,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)("p",{onClick:function(){return n.handleClick("price")},children:"Price"}),Object(T.jsx)(nn,{direction:this.state.sortingState,isVisible:"price"===this.state.currentlySortedColumn})]})}),Object(T.jsx)(W,{children:Object(T.jsxs)(Z,{children:[Object(T.jsx)("p",{onClick:function(){return n.handleClick("change24")},children:"24h\xa0%"}),Object(T.jsx)(nn,{direction:this.state.sortingState,isVisible:"change24"===this.state.currentlySortedColumn})]})}),Object(T.jsx)(Y,{children:Object(T.jsx)(Z,{children:Object(T.jsxs)("p",{onClick:function(){return n.handleClick("marketCap")},children:[Object(T.jsx)(nn,{direction:this.state.sortingState,isVisible:"marketCap"===this.state.currentlySortedColumn}),"Market\xa0Cap"]})})})]})})}}]),e}(k.Component),A=V.b.thead(i||(i=Object(R.a)(["\n  background: #f4f4f4;\n  border-bottom: 1px solid #bababa;\n\n  tr {\n    text-align: right;\n    font-weight: bold;\n    font-size: 0.8rem;\n  }\n"]))),G=V.b.th(c||(c=Object(R.a)(["\n  padding-left: 1rem !important;\n  text-align: center;\n  font-size: 1.5rem;\n"]))),q=V.b.th(s||(s=Object(R.a)(["\n  ","\n  div {\n    /* justify-content: center; */\n  }\n"])),L),K=V.b.th(a||(a=Object(R.a)(["\n  div {\n    justify-content: flex-start;\n    p {\n      margin-left: 0.5rem;\n      ","\n    }\n  }\n"])),E("margin-left: 0;")),Q=V.b.th(o||(o=Object(R.a)([""]))),W=V.b.th(d||(d=Object(R.a)(["\n  ","\n"])),E("div {\n    justify-content: center;\n  }")),Y=V.b.th(b||(b=Object(R.a)(["\n  ","\n  div {\n    justify-content: center;\n  }\n\n  img {\n    right: -104%;\n  }\n"])),L),Z=V.b.div(j||(j=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  p {\n    cursor: pointer;\n    margin: 0;\n    padding: 0;\n    position: relative;\n  }\n"]))),_=V.b.img(l||(l=Object(R.a)(["\n  width: 6px;\n  height: 6px;\n  position: relative;\n  right: -5px;\n  bottom: -2px;\n  opacity: ","%;\n  transition: 0.3s opacity ease;\n  transform: ","; ;\n"])),(function(n){return n.isVisible?"100":"0"}),(function(n){return"descending"===n.direction?"rotate(90deg)":"rotate(-90deg)"})),nn=function(n){return Object(T.jsx)(_,{direction:n.direction,isVisible:n.isVisible,src:"/assets/play.svg"})};function tn(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(bn,{children:[Object(T.jsxs)(en,{children:[" ",Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})]}),Object(T.jsx)(rn,{children:Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})}),Object(T.jsx)(cn,{children:Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})}),Object(T.jsx)(sn,{children:Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})}),Object(T.jsx)(an,{children:Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})}),Object(T.jsx)(on,{children:Object(T.jsx)(jn,{children:Object(T.jsx)(ln,{})})})]})})}var en=V.b.td(h||(h=Object(R.a)([""]))),rn=V.b.td(u||(u=Object(R.a)(["\n  ",";\n  text-align: center;\n"])),L),cn=V.b.td(f||(f=Object(R.a)([""]))),sn=V.b.td(m||(m=Object(R.a)([""]))),an=V.b.td(x||(x=Object(R.a)([""]))),on=V.b.td(g||(g=Object(R.a)(["\n  ",";\n"])),L),dn=Object(V.c)(O||(O=Object(R.a)(["\n  0% {transform: translateX(0);}\n  100% {transform: translateX(1600%);}\n"]))),bn=V.b.tr(p||(p=Object(R.a)([""]))),jn=V.b.div(y||(y=Object(R.a)(["\n  height: 1.8rem;\n  background: #f7f7f7;\n  overflow: hidden;\n"]))),ln=V.b.div(v||(v=Object(R.a)(["\n  animation: "," 0.5s linear infinite backwards;\n  background: linear-gradient(\n    90deg,\n    rgba(247, 247, 247, 1) 0%,\n    rgba(210, 210, 210, 1) 40%,\n    rgba(210, 210, 210, 1) 60%,\n    rgba(247, 247, 247, 1) 100%\n  );\n  width: 2rem;\n  height: 100%;\n"])),dn);function hn(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{}),Object(T.jsx)(tn,{})]})}var un,fn,mn,xn,gn,On,pn,yn,vn,kn,wn,Cn,Fn=e.p+"static/media/coin64.e8291a03.ico";function Sn(n){return n.items.map((function(n){return Object(T.jsxs)(En,{children:[Object(T.jsx)($n,{children:Object(T.jsx)("div",{children:"\u2661"})}),Object(T.jsx)(Tn,{children:n.rank}),Object(T.jsxs)(Bn,{children:[Object(T.jsx)(Gn,{src:"https://assets.coincap.io/assets/icons/".concat(n.symbol.toLowerCase(),"@2x.png"),onError:function(n){n.target.onError=null,n.target.src=Fn}}),Object(T.jsxs)(Wn,{children:[Object(T.jsx)(qn,{children:n.name}),Object(T.jsxs)(Kn,{children:[Object(T.jsx)(Qn,{children:n.symbol}),Object(T.jsxs)("p",{children:["#",n.rank]})]})]})]}),Object(T.jsxs)(Jn,{children:["$",n.priceUsd>=1?Number(n.priceUsd).toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:2}):Number(n.priceUsd).toFixed(8)]}),Object(T.jsxs)(Xn,{style:{color:Number(n.changePercent24Hr)>0?"#13b016":"#d6230f"},children:[Number(n.changePercent24Hr).toFixed(2),"%"]}),Object(T.jsx)(An,{children:(t=n.marketCapUsd,Math.abs(Number(t))>=1e9?"$".concat((Math.abs(Number(t))/1e9).toFixed(2),"b"):Math.abs(Number(t))>=1e6?"$".concat((Math.abs(Number(t))/1e6).toFixed(2),"m"):Math.abs(Number(t))>=1e3?"$".concat((Math.abs(Number(t))/1e3).toFixed(2),"k"):Math.abs(Number(t).toFixed(2)))})]},"".concat(n.rank,"-").concat(n.id));var t}))}var Nn,Un,Mn,zn,In,Dn,Rn,Vn,Hn,Ln,Pn,En=V.b.tr(un||(un=Object(R.a)(["\n  cursor: pointer;\n"]))),$n=V.b.td(fn||(fn=Object(R.a)(['\n  padding-left: 1rem !important;\n  div {\n    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;\n    font-size: 1.5rem;\n    color: lightgray;\n\n    &:hover {\n      color: red;\n    }\n\n    &:active {\n      color: red;\n      text-shadow: 0px 0px 3px red;\n    }\n  }\n']))),Tn=V.b.td(mn||(mn=Object(R.a)(["\n  ","\n  text-align: center;\n"])),L),Bn=V.b.td(xn||(xn=Object(R.a)(["\n  text-align: center;\n  display: flex;\n"]))),Jn=V.b.td(gn||(gn=Object(R.a)(["\n  ","\n  font-size: 1rem;\n  text-align: right;\n"])),P(.9)),Xn=V.b.td(On||(On=Object(R.a)(["\n  ","\n  font-size: 1rem;\n  text-align: right;\n  ","\n"])),P(.9),E("text-align: center;")),An=V.b.td(pn||(pn=Object(R.a)(["\n  ","\n  text-align: center;\n"])),L),Gn=V.b.img(yn||(yn=Object(R.a)(["\n  ","\n  align-self: center;\n  height: 1.8rem;\n  width: 1.8rem;\n  margin-right: 1rem;\n"])),"\n@media only screen and (max-width: 770px) { \n    margin-right: 0.3rem;\n}"),qn=V.b.span(vn||(vn=Object(R.a)(["\n  ","\n  font-size: 1.1rem;\n"])),P(.8)),Kn=V.b.div(kn||(kn=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  p {\n    ",";\n    margin: 0 0 0 0.5rem;\n    font-size: 1rem;\n    font-weight: 300;\n    font-style: italic;\n    background: #fee8ff;\n    border-radius: 9999px;\n    padding: 0.2rem 0.5rem;\n  }\n"])),"\n    @media only screen and (min-width: 771px) { \n        display: none;\n    }\n"),Qn=V.b.span(wn||(wn=Object(R.a)(["\n  ","\n  font-size: 1rem;\n  font-weight: 300;\n  font-style: italic;\n"])),P(.9)),Wn=V.b.div(Cn||(Cn=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  span {\n    text-align: left;\n  }\n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n"]))),Yn=function(n){Object(I.a)(e,n);var t=Object(D.a)(e);function e(){return Object(M.a)(this,e),t.apply(this,arguments)}return Object(z.a)(e,[{key:"render",value:function(){return Object(T.jsxs)(Zn,{children:[Object(T.jsxs)("colgroup",{children:[Object(T.jsx)(_n,{}),Object(T.jsx)(nt,{}),Object(T.jsx)(tt,{}),Object(T.jsx)(et,{}),Object(T.jsx)(rt,{}),Object(T.jsx)(it,{})]}),Object(T.jsx)(X,{refreshRate:this.props.refreshRate,getItems:this.props.getItems,handler:this.props.handler}),Object(T.jsx)("tbody",{children:this.props.isLoading?Object(T.jsx)(hn,{}):Object(T.jsx)(Sn,{items:this.props.items})})]})}}]),e}(k.Component),Zn=V.b.table(Nn||(Nn=Object(R.a)(["\n  border-collapse: collapse;\n  width: 100%;\n  margin: 0 auto;\n\n  th,\n  td {\n    padding: 0.8rem 0.4rem;\n    &:nth-of-type(1) {\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n    }\n    &:nth-of-type(2) {\n      /* padding: 0; */\n    }\n    &:nth-of-type(3) {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n\n  th {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  tbody {\n    tr {\n      border-bottom: 1px solid #dddddd;\n      &:hover {\n        background: #fbf0ff;\n        span:first-of-type {\n          font-weight: 500;\n        }\n        div {\n          div {\n            p {\n              background: #e6fffe; //Change color of little rank mark on row hover\n            }\n          }\n        }\n        &:active {\n          background: #f7e0ff;\n          span:first-of-type {\n            font-weight: 500;\n          }\n        }\n      }\n    }\n  }\n"]))),_n=V.b.col(Un||(Un=Object(R.a)(["\n  width: 30px;\n"]))),nt=V.b.col(Mn||(Mn=Object(R.a)(["\n  width: 10px;\n"]))),tt=V.b.col(zn||(zn=Object(R.a)([""]))),et=V.b.col(In||(In=Object(R.a)(["\n  width: 45%;\n  ","\n"])),E("  width: unset;")),rt=V.b.col(Dn||(Dn=Object(R.a)(["\n  width: 8%;\n  ","\n"])),E("  width: unset;")),it=V.b.col(Rn||(Rn=Object(R.a)(["\n  width: 12%;\n  ","\n"])),E("  width: unset;")),ct=e.p+"static/media/coinM.e4cb2a36.png",st=V.b.a(Vn||(Vn=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  &:link,\n  &:visited,\n  &:hover,\n  &:active {\n    text-decoration: none;\n  }\n\n  &:hover {\n    p {\n      color: #fad964;\n      transform: scale(105%);\n      transition: transform 0.1s;\n    }\n    img {\n      transform: scale(105%);\n      transition: transform 0.1s;\n    }\n\n    &:active {\n      p {\n        color: #fad964;\n        transform: scale(95%);\n        transition: transform 0.1s;\n      }\n      img {\n        transform: scale(95%);\n        transition: transform 0.1s;\n      }\n    }\n  }\n"]))),at=V.b.div(Hn||(Hn=Object(R.a)(["\n  display: flex;\n  /* justify-content: center; */\n  width: 100%;\n  align-items: center;\n  background: linear-gradient(\n    90deg,\n    rgba(181, 127, 208, 1) 0%,\n    rgba(235, 128, 84, 1) 100%\n  );\n\n  padding: 1rem;\n"]))),ot=V.b.img(Ln||(Ln=Object(R.a)(["\n  width: 3rem;\n  height: 3rem;\n"]))),dt=V.b.p(Pn||(Pn=Object(R.a)(["\n  margin: 0;\n  margin-left: 1rem;\n  font-size: 2rem;\n  font-style: italic;\n  font-weight: bold;\n  color: #fff;\n"]))),bt=function(){return Object(T.jsx)(at,{children:Object(T.jsxs)(st,{href:"/",children:[Object(T.jsx)(ot,{src:ct,alt:"manycoins logo"}),Object(T.jsx)(dt,{children:"Manycoins"})]})})},jt=function(n){Object(I.a)(e,n);var t=Object(D.a)(e);function e(n){var r;return Object(M.a)(this,e),(r=t.call(this,n)).refreshRate=function(){return 15e3},r.getItems=function(){var n=Object(U.a)(N.a.mark((function n(t,e,i){var c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(t,e);case 3:return n.next=5,n.sent.json();case 5:c=n.sent,console.log(c),r.setState({items:i?i(c.data):c.data,isLoading:!1}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t,e,r){return n.apply(this,arguments)}}(),r.handleClick=function(n){r.setState((function(t){return{items:n(t.items)}}))},r.state={items:[],isLoading:!0,favorites:[]},r}return Object(z.a)(e,[{key:"render",value:function(){var n=this;return Object(T.jsxs)("div",{className:"root",children:[Object(T.jsx)(H,{}),Object(T.jsx)(bt,{}),Object(T.jsx)("div",{className:"table-wrapper",children:Object(T.jsx)(Yn,{refreshRate:function(){return n.refreshRate()},getItems:this.getItems,items:this.state.items,isLoading:this.state.isLoading,handler:this.handleClick})})]})}}]),e}(k.Component);F.a.render(Object(T.jsx)(w.a.StrictMode,{children:Object(T.jsx)(jt,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.a4d6c1b6.chunk.js.map