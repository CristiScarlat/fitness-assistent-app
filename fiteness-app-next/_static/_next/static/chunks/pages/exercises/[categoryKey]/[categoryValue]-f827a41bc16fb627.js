(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{7398:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exercises/[categoryKey]/[categoryValue]",function(){return n(6071)}])},2538:function(e,t,n){"use strict";var c=n(5893),s=n(5005);let a=e=>{let{label:t,gif:n,buttonLabel:a="Read More",onClick:r}=e;return(0,c.jsxs)("div",{className:"p-4 home-container text-center m-0",style:{width:"fit-content"},children:[(0,c.jsx)("h5",{children:t}),(0,c.jsx)("img",{src:n,alt:"...",width:"100%"}),(0,c.jsx)(s.Z,{variant:"outline-light",className:"mt-4",onClick:r,children:a})]})};t.Z=a},6071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var c=n(5893),s=n(7294),a=n(1163),r=n(2393),i=n(2538),l=n(8102),u=n(9331);let o=e=>{let{data:t,onSelect:n}=e;return(0,c.jsx)("div",{className:"d-flex justify-content-start gap-2 ps-4",children:t&&Object.keys(t).map((e,s)=>(0,c.jsx)(l.Z,{title:1===t[e].length?t[e]:e,disabled:1===t[e].length,children:t[e].map((t,s)=>(0,c.jsx)(u.Z.Item,{onClick:()=>n(e,t),children:t},t+s))},e+s))})},d=()=>{let[e,t]=(0,s.useState)(),[n,l]=(0,s.useState)([]),[u,d]=(0,s.useState)({}),{query:{categoryKey:f,categoryValue:h}}=(0,a.useRouter)(),x=async()=>{let e=await (0,r.VI)({[f]:h,...u});return e.data.exercises};(0,s.useEffect)(()=>{(async function(){let e=await x(),n=await (0,r.mB)("all"),c=n.data.map(e=>e.key).filter(e=>e!==f),s={};c.forEach(t=>{s[t]=[],e.forEach(e=>{s[t].includes(e[t])||s[t].push(e[t])})}),t(s),l(e)})()},[]),(0,s.useEffect)(()=>{x().then(e=>l(e))},[u]);let j=(e,t)=>{d(n=>({...n,[e]:t}))};return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"filters",children:(0,c.jsx)(o,{data:e,onSelect:j})}),(0,c.jsx)("hr",{}),(0,c.jsx)("div",{className:"exercises-list d-flex flex-wrap gap-2 justify-content-center",children:null==n?void 0:n.map(e=>(0,c.jsx)(i.Z,{label:e.name,gif:e.gifUrl,onClick(){}},e.id))})]})};var f=d},2393:function(e,t,n){"use strict";n.d(t,{VI:function(){return r},mB:function(){return i},zC:function(){return l}});var c=n(196);let s=c.ZP.create({baseURL:"http://localhost:5000",headers:{"content-type":"text/json"}}),a=e=>{let t=Object.keys(e).map(t=>"".concat(t,"=").concat(e[t]));return"?".concat(t.join("&"))},r=e=>{let t=a(e);return s.get("/exercises".concat(t))},i=e=>s.get("/filter-terms?category=".concat(e||"all")),l=e=>(console.log(e),s.get("/".concat(e)))}},function(e){e.O(0,[196,102,774,888,179],function(){return e(e.s=7398)}),_N_E=e.O()}]);