import{p as n,s as r,c as u,x as l}from"./index-bd89a78f.js";const f=n({eager:Boolean},"lazy");function m(e,o){const a=r(!1),s=u(()=>a.value||e.eager||o.value);l(o,()=>a.value=!0);function t(){e.eager||(a.value=!1)}return{isBooted:a,hasContent:s,onAfterLeave:t}}export{f as m,m as u};
