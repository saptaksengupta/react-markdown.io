(this["webpackJsonpreact-markdown"]=this["webpackJsonpreact-markdown"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),l=n(11),o=n.n(l),i=(n(21),n(22),n(23),n(2)),u=n(15),d=n(3),m=n(6),s="bold",h="italic",g="underline",E="h1",f="h2",v="h3",p="blockquote",x="uppercase",b="lowercase",w="code",k=function(){var e;if(document.getElementById("editor-window"))return null===(e=document.getElementById("editor-window"))||void 0===e?void 0:e.innerText},C=function(e){var t=window.getSelection(),n=null===t||void 0===t?void 0:t.toString();if(null===t||void 0===t?void 0:t.rangeCount){var a=t.getRangeAt(0);switch(function(e){e.deleteContents()}(a),e){case s:a.insertNode(T(n));break;case h:a.insertNode(y(n));break;case g:a.insertNode(N(n));break;case E:a.insertNode(j(n));break;case f:a.insertNode(O(n));break;case v:a.insertNode(B(n));break;case p:a.insertNode(z(n));break;case x:a.insertNode(M(String(n)));break;case b:a.insertNode(_(String(n)));break;case w:a.insertNode(S(n))}}return k()},T=function(e){return document.createTextNode("**".concat(e||"Bold Text","**"))},y=function(e){return document.createTextNode("*".concat(e||"Italic Text","*"))},N=function(e){return document.createTextNode("<u>".concat(e||"Underlined Text","</u>"))},j=function(e){return document.createTextNode("# ".concat(e||"Heading Level 1"))},O=function(e){return document.createTextNode("## ".concat(e||"Heading Level 2"))},B=function(e){return document.createTextNode("### ".concat(e||"Heading Level 3"))},z=function(e){return document.createTextNode("> ".concat(e||"Blockquoted Text"))},M=function(e){return document.createTextNode("".concat(e?e.toUpperCase():"UPPERCASE TEXT"))},_=function(e){return document.createTextNode("".concat(e?e.toLowerCase():"lowercase text"))},S=function(e){return document.createTextNode("".concat(e?"`"+e+" `":"`Your code here `"))},H="SET_EDITOR_TEXT",V="SET_HEADER_ITEMS",L=function(e,t){switch(t.type){case H:return Object(m.a)({},e,{editorText:t.payload.editorText});case V:var n=I(t.payload);return Object(m.a)({},e,{headerTools:Object(m.a)({},e.headerTools,Object(d.a)({},n,t.payload[n]))});default:return e}},I=function(e){return(t=e,Object.keys(t))[0];var t},A=Object(c.createContext)(),R=function(e){var t,n={editorText:"",headerTools:(t={},Object(d.a)(t,s,!1),Object(d.a)(t,h,!1),Object(d.a)(t,g,!1),Object(d.a)(t,E,!1),Object(d.a)(t,f,!1),Object(d.a)(t,v,!1),t)},a=Object(c.useReducer)(L,n),l=Object(u.a)(a,2),o=l[0],i=l[1];return r.a.createElement(A.Provider,{value:{markdownContextState:o,dispatch:i}},e.children)};function U(){var e=Object(a.a)(["\n  width: 99%;\n  height: 99%;\n  border: none;\n  resize: none;\n  font-size: 20px;\n  text-align: left;\n  &:focus {\n    outline: none;\n  }\n"]);return U=function(){return e},e}function P(){var e=Object(a.a)(["\n  flex: 1;\n  padding: 1em;\n  border: 1px solid #efefef;\n"]);return P=function(){return e},e}var W=i.b.div(P()),q=i.b.div(U()),D=function(){var e=Object(c.useContext)(A).dispatch,t=function(t){var n=k();e({type:H,payload:{editorText:n}})};return r.a.createElement(W,null,r.a.createElement(q,{id:"editor-window",contentEditable:"true",onInput:function(e){t(e)}}))},J=(n(26),n(7)),X=n.n(J);function F(){var e=Object(a.a)(["\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n"]);return F=function(){return e},e}function K(){var e=Object(a.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 1em;\n  justify-content: flex-start;\n  margin: 0;\n  background: #f3f3f3;\n"]);return K=function(){return e},e}var Q=i.b.pre(K()),Y=i.b.pre(F());X.a.setOptions({renderer:new X.a.Renderer,pedantic:!1,gfm:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1});var $=function(){var e=Object(c.useContext)(A).markdownContextState.editorText,t=X()(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null,r.a.createElement(Y,{dangerouslySetInnerHTML:{__html:t}})))},G=n(4),Z=n.n(G),ee=function(e){var t=e.height,n=e.width,a=e.isActive;return r.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 392.619 392.619",enableBackground:"new 0 0 392.619 392.619",height:t,width:n,fill:a?"white":"whitesmoke",style:{background:a?"blue":"none"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M310.723,0.929H81.896C36.738,0.929,0,37.667,0,82.825v226.969c0,45.158,36.738,81.896,81.896,81.896h228.827 c45.158,0,81.896-36.738,81.896-81.896V82.825C392.619,37.667,355.881,0.929,310.723,0.929z M362.619,309.794 c0,28.616-23.28,51.896-51.896,51.896H81.896C53.28,361.69,30,338.41,30,309.794V82.825c0-28.615,23.28-51.896,51.896-51.896 h228.827c28.616,0,51.896,23.28,51.896,51.896V309.794z"}),r.a.createElement("path",{d:"M211.056,105.476h-81.993v35h10.334v111.667h-10.334v35h81.993c29.868,0,54.167-24.299,54.167-54.167 c0-14.132-5.445-27.012-14.341-36.667c8.896-9.655,14.341-22.535,14.341-36.667C265.223,129.775,240.924,105.476,211.056,105.476z M211.056,140.476c10.568,0,19.167,8.598,19.167,19.167c0,10.568-8.599,19.167-19.167,19.167h-36.659v-38.333H211.056z M211.056,252.143h-36.659V213.81h36.659c10.568,0,19.167,8.598,19.167,19.167C230.223,243.545,221.624,252.143,211.056,252.143z"})),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))},te=function(e){var t=e.height,n=(e.width,e.isActive);return r.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 392.619 392.619",enableBackground:"new 0 0 392.619 392.619",height:t,fill:n?"white":"whitesmoke",style:{background:n?"blue":"none"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M310.723,0.929H81.896C36.738,0.929,0,37.667,0,82.825v226.97c0,45.158,36.738,81.896,81.896,81.896h228.827 c45.158,0,81.896-36.738,81.896-81.896V82.825C392.619,37.667,355.881,0.929,310.723,0.929z M362.619,309.794 c0,28.616-23.28,51.896-51.896,51.896H81.896C53.28,361.69,30,338.41,30,309.794V82.825c0-28.616,23.28-51.896,51.896-51.896 h228.827c28.616,0,51.896,23.28,51.896,51.896V309.794z"}),r.a.createElement("path",{d:"M263.825,96.94h-91.03c-8.284,0-15,6.716-15,15s6.716,15,15,15h26.102l-36.177,138.739h-33.925c-8.284,0-15,6.716-15,15 s6.716,15,15,15h45.402c0.041,0,0.082,0.004,0.123,0.004c0.031,0,0.062-0.004,0.093-0.004h45.411c8.284,0,15-6.716,15-15 s-6.716-15-15-15h-26.102L229.9,126.94h33.925c8.284,0,15-6.716,15-15S272.109,96.94,263.825,96.94z"})),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))},ne=function(e){var t=e.height,n=(e.width,e.isActive);return r.a.createElement("svg",{version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 392.621 392.621",enableBackground:"new 0 0 392.621 392.621",height:t,fill:n?"white":"whitesmoke",style:{background:n?"blue":"none"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M310.725,0.93H81.896C36.739,0.93,0,37.668,0,82.825v226.969c0,45.158,36.739,81.896,81.896,81.896h228.829 c45.157,0,81.896-36.738,81.896-81.896V82.825C392.621,37.668,355.882,0.93,310.725,0.93z M362.621,309.795 c0,28.616-23.28,51.896-51.896,51.896H81.896C53.281,361.691,30,338.41,30,309.795V82.825C30,54.21,53.281,30.93,81.896,30.93 h228.829c28.615,0,51.896,23.28,51.896,51.896V309.795z"}),r.a.createElement("path",{d:"M118.033,185.762c8.786,1.822,14.152,3.333,16.095,4.536c1.943,1.204,3.643,2.822,5.101,4.858 c1.457,2.037,2.186,4.327,2.186,6.87c0,4.535-1.666,8.63-4.997,12.284c-3.331,3.655-8.097,5.483-14.297,5.483 c-11.752,0-19.663-7.634-23.734-22.902h-5.413v27.135h4.65c2.082-1.943,4.418-3.932,7.009-5.968 c5.32,4.164,11.289,6.246,17.905,6.246c9.299,0,16.528-3.235,21.687-9.708c5.158-6.473,7.738-14.171,7.738-23.095 c0-7.582-1.956-13.835-5.869-18.76c-3.913-4.923-11.581-8.62-23.005-11.089c-7.447-1.583-12.697-3.232-15.75-4.944 c-3.053-1.711-4.58-4.858-4.58-9.438c0-3.701,1.458-6.963,4.372-9.785c2.915-2.822,6.616-4.233,11.104-4.233 c5.274,0,9.773,1.631,13.498,4.892c3.724,3.262,7.044,9.011,9.959,17.246h5.552l-1.11-24.983h-4.511 c-2.08,1.759-4.02,3.169-5.821,4.233c-5.636-3.979-11.297-5.968-16.979-5.968c-7.485,0-13.735,2.751-18.747,8.251 c-5.013,5.501-7.519,12.226-7.519,20.177c0,7.397,2.049,13.568,6.147,18.513C102.803,180.558,109.245,183.941,118.033,185.762z"}),r.a.createElement("path",{d:"M166.885,206.398c0,4.396,0.382,7.599,1.145,9.612c0.763,2.013,2.613,3.852,5.552,5.517 c2.938,1.665,6.489,2.498,10.653,2.498c4.348,0,8.386-1.017,12.11-3.053c3.724-2.035,6.512-4.812,8.363-8.328h0.277v11.381 c0.833-0.046,2.117-0.22,3.852-0.52c1.735-0.302,5.517-0.451,11.347-0.451h11.659v-4.095h-7.911v-51.772h-28.176v4.303h9.23v26.094 c0,4.581-0.44,8.144-1.318,10.688c-0.88,2.545-2.73,4.813-5.552,6.801c-2.822,1.99-5.367,2.984-7.634,2.984 c-2.175,0-3.494-0.902-3.956-2.707c-0.463-1.804-0.694-5.528-0.694-11.173v-36.99h-26.858v4.303h7.912V206.398z"}),r.a.createElement("path",{d:"M277.369,165.453c-6.292,0-11.081,2.592-14.366,7.773h-0.278v-44.554h-2.012l-5.344,0.624 c-4.119,0.463-7.45,0.694-9.994,0.694h-9.091v4.233h7.495v84.598h-7.495v4.233h9.23c5.968,0,11.035,0.278,15.199,0.833h2.012 v-7.634h0.278c3.239,5.691,7.912,8.536,14.019,8.536c6.014,0,11.358-2.918,16.031-8.754c4.673-5.836,7.009-13.039,7.009-21.609 c0-8.615-2.314-15.598-6.94-20.948C288.496,168.127,283.244,165.453,277.369,165.453z M278.618,202.14 c0,7.228-0.417,12.001-1.25,14.317c-0.832,2.316-2.359,3.474-4.58,3.474c-2.545,0-4.858-1.344-6.94-4.031 c-2.082-2.687-3.124-6.995-3.124-12.926v-14.247c0-6.254,1.156-11.036,3.47-14.349c2.313-3.313,4.557-4.97,6.732-4.97 c1.897,0,3.319,0.834,4.268,2.501c0.948,1.668,1.423,6.626,1.423,14.872V202.14z"}),r.a.createElement("rect",{x:"92.559",y:"248.95",width:"207.503",height:"30"})),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))};function ae(){var e=Object(a.a)(["\n  margin: 0 1em;\n  background: none;\n  border: none;\n  &:focus {\n    outline: none;\n  }\n"]);return ae=function(){return e},e}function ce(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  background: #2c3e50;\n  padding: 1em;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n"]);return ce=function(){return e},e}var re=i.b.div(ce()),le=i.b.button(ae()),oe=function(){var e=Object(c.useContext)(A),t=e.markdownContextState,n=e.dispatch,a=t.headerTools,l=function(e){var t=Object(d.a)({},e,!a[e]);n({type:V,payload:t});var c=C(e);n({type:H,payload:{editorText:c}})};return r.a.createElement(re,null,r.a.createElement(le,{className:a[s]?Z.a.activeBtn:"",onClick:function(e){return l(s)}},r.a.createElement(ee,{height:"30px"})),r.a.createElement(le,{onClick:function(e){return l(h)}},r.a.createElement(te,{height:"30px"})),r.a.createElement(le,{onClick:function(e){return l(g)}},r.a.createElement(ne,{height:"30px"})),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(E)}},"h1"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(f)}},"h2"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(v)}},"h3"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(p)}},"Block Quote"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(x)}},"UpperCase"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(b)}},"Lowercase"),r.a.createElement(le,{className:Z.a.textBtn,onClick:function(e){return l(w)}},"Code"))};function ie(){var e=Object(a.a)(["\n  display: flex;\n  min-height: 100%;\n  position: relative;\n  top: 65.33px;\n  left: 15px;\n"]);return ie=function(){return e},e}var ue=i.b.div(ie());var de=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null,r.a.createElement(oe,null),r.a.createElement(ue,null,r.a.createElement(D,null),r.a.createElement($,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(){var e=Object(a.a)(["\n  html, body {\n    height: 100%;\n    padding: 0px;\n    margin: 0px;\n    font-size: 16px;\n    letter-spacing: 0.1em;\n    font-style: normal;\n  }\n"]);return me=function(){return e},e}var se=Object(i.a)(me());o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null),r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={activeBtn:"header_activeBtn___KLgN",textBtn:"header_textBtn__3w1We"}}},[[16,1,2]]]);
//# sourceMappingURL=main.9b95acfb.chunk.js.map