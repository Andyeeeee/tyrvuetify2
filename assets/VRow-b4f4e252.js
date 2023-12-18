import{p as u,l as O,at as i,c as f,g as C,f as b,h as k}from"./index-b079ac67.js";const v=u({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function K(t){const s=O("useRender");s.render=t}const z=(t,s)=>{const e=t.__vccOpts||t;for(const[a,n]of s)e[a]=n;return e};const j=u({tag:{type:String,default:"div"}},"tag"),N=(()=>i.reduce((t,s)=>(t[s]={type:[Boolean,String,Number],default:!1},t),{}))(),V=(()=>i.reduce((t,s)=>{const e="offset"+f(s);return t[e]={type:[String,Number],default:null},t},{}))(),L=(()=>i.reduce((t,s)=>{const e="order"+f(s);return t[e]={type:[String,Number],default:null},t},{}))(),m={col:Object.keys(N),offset:Object.keys(V),order:Object.keys(L)};function G(t,s,e){let a=t;if(!(e==null||e===!1)){if(s){const n=s.replace(t,"");a+=`-${n}`}return t==="col"&&(a="v-"+a),t==="col"&&(e===""||e===!0)||(a+=`-${e}`),a.toLowerCase()}}const R=["auto","start","end","center","baseline","stretch"],I=u({cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...V,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>R.includes(t)},...v(),...j()},"VCol"),J=C()({name:"VCol",props:I(),setup(t,s){let{slots:e}=s;const a=b(()=>{const n=[];let l;for(l in m)m[l].forEach(o=>{const c=t[o],y=G(l,o,c);y&&n.push(y)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return k(t.tag,{class:[a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),d=["start","end","center"],$=["space-between","space-around","space-evenly"];function g(t,s){return i.reduce((e,a)=>{const n=t+f(a);return e[n]=s(),e},{})}const T=[...d,"baseline","stretch"],h=t=>T.includes(t),w=g("align",()=>({type:String,default:null,validator:h})),U=[...d,...$],P=t=>U.includes(t),A=g("justify",()=>({type:String,default:null,validator:P})),B=[...d,...$,"stretch"],_=t=>B.includes(t),E=g("alignContent",()=>({type:String,default:null,validator:_})),S={align:Object.keys(w),justify:Object.keys(A),alignContent:Object.keys(E)},M={align:"align",justify:"justify",alignContent:"align-content"};function p(t,s,e){let a=M[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const x=u({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...A,alignContent:{type:String,default:null,validator:_},...E,...v(),...j()},"VRow"),W=C()({name:"VRow",props:x(),setup(t,s){let{slots:e}=s;const a=b(()=>{const n=[];let l;for(l in S)S[l].forEach(r=>{const o=t[r],c=p(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return k(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{J as V,z as _,j as a,W as b,v as m,K as u};
