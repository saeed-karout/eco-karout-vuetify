import{m as p,b}from"./VBtn-88a9c4c3.js";import{l as v,o as F,f as V}from"./VTextField-8df9a982.js";import{p as y,l as h,r as R,m as P}from"./index-bd89a78f.js";const k=y({...p(),...v()},"VForm"),g=h()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),s=R();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return b(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{g as V};