(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(940)}])},940:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),s=t(7294),a=t(1676),l=t(5005),o=t(3990),c=t(7352),i=t.n(c);let u=e=>{let{handleOnSubmit:r,handleGoogleBtnClick:t}=e,[c,u]=(0,s.useState)(!1),[d,m]=(0,s.useState)({email:null,password:null,confirmedPass:null}),[h,f]=(0,s.useState)({}),p=()=>{if(c){let e=null!==d.email&&""!==d.email&&null!==d.password&&""!==d.password&&null!==d.confirmedPass&&""!==d.confirmedPass;return!e}{let r=null!==d.email&&""!==d.email&&null!==d.password&&""!==d.password;return!r}},g=(e,r)=>{let t={...d};t[r]=e,m(t)},w=()=>{if(f({}),c&&d.password!==d.confirmedPass){let e={...h};return e.confirmedPass="Passwords doesn't match!",f(e),!1}return!0},v=e=>{e.preventDefault(),w()&&r(e,!c)},y=()=>{u(e=>!e),f({})};return(0,n.jsx)("div",{className:i()["login-form-container"],children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(a.Z,{onSubmit:v,children:[(0,n.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,n.jsx)(a.Z.Label,{children:"Email address"}),(0,n.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email",onChange:e=>g(e.target.value,"email")}),(0,n.jsx)(a.Z.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),(0,n.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formBasicPassword",children:[(0,n.jsx)(a.Z.Label,{children:"Password"}),(0,n.jsx)(a.Z.Control,{type:"password",placeholder:"Password",onChange:e=>g(e.target.value,"password")})]}),c&&(0,n.jsxs)(a.Z.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:[(0,n.jsx)(a.Z.Label,{children:"Confirm Password"}),(0,n.jsx)(a.Z.Control,{type:"password",placeholder:"Confirm Password",className:"mb-4",onChange:e=>g(e.target.value,"confirmedPass")}),h.confirmedPass&&(0,n.jsx)("div",{style:{color:"red"},children:h.confirmedPass})]}),(0,n.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,n.jsx)(l.Z,{variant:p()?"secondary":"primary",type:"submit",disabled:p(),children:c?"Register":"Login"}),(0,n.jsx)(l.Z,{variant:"primary",onClick:y,children:c?"Already an User":"New User"})]})]}),(0,n.jsx)("hr",{}),(0,n.jsx)(l.Z,{className:i()["google-login-button"],onClick:t,children:(0,n.jsx)(o.U1m,{})})]})})};var d=t(2664),m=t(9565),h=t(1840),f=t(1163);let p=()=>{let e=(0,d.I0)(),r=(0,f.useRouter)(),t=t=>{let n=t.target[0].value,s=t.target[1].value,a=t.target[2].checked;(0,h.e5)(h.I8,n,s).then(t=>{e((0,m.cn)({user:t.user.email,accessToken:t.user.accessToken,remember:a})),r.push("/")}).catch(e=>{console.log(e)})},s=()=>{(0,h.rh)(h.I8,new h.hJ).then(r=>{let t=h.hJ.credentialFromResult(r),n=t.accessToken,s=r.user.displayName||r.user.email;e((0,m.cn)({user:s,accessToken:n,rememner:!1})),navigate("/")}).catch(e=>{e.code,e.message,e.customData.email,h.hJ.credentialFromError(e)})},a=e=>{let r=e.target[0].value,t=e.target[1].value;(0,h.Xb)(h.I8,r,t).then(e=>{console.log(e),e.user,alert("User created successfully! Please login in your new account.")}).catch(e=>{e.code,e.message,alert(e.message)})};return(0,n.jsx)(u,{handleOnSubmit:(e,r)=>r?t(e):a(e),handleGoogleBtnClick:s})};var g=p},7352:function(e){e.exports={"login-form-container":"authForm_login-form-container__8Ee1A","google-login-button":"authForm_google-login-button__lXZOF"}},8357:function(e,r,t){"use strict";t.d(r,{w_:function(){return c}});var n=t(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),l=function(){return(l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var s in r=arguments[t])Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);return e}).apply(this,arguments)},o=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>r.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(t[n[s]]=e[n[s]]);return t};function c(e){return function(r){return n.createElement(i,l({attr:l({},e.attr)},r),function e(r){return r&&r.map(function(r,t){return n.createElement(r.tag,l({key:t},r.attr),e(r.child))})}(e.child))}}function i(e){var r=function(r){var t,s=e.attr,a=e.size,c=e.title,i=o(e,["attr","size","title"]),u=a||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,i,{className:t,style:l(l({color:e.color||r.color},r.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,function(e){return r(e)}):r(s)}}},function(e){e.O(0,[609,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);