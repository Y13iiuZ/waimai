import{m as F,v as A,h as n,n as L,s as S,l as I,A as T,a2 as z,B as W,C as Z,a3 as j,d as G,b as N,E as R,P as J,K as Q,a4 as X,a5 as Y,a6 as O,a7 as ee,a8 as te,a9 as ne,Z as oe,aa as ae,ab as le,ac as se,_ as ce,x as re,u as ie,ad as de,e as ue,f as me,o as y,c as p,a as _,F as fe,r as he,t as Be,w as Ce,i as _e,p as ge,k as we}from"./index-d69430ba.js";import{C as be}from"./index-2b85c1d3.js";import"./index-798e273f.js";import{C as ve}from"./index-b0130fdc.js";import{_ as $}from"./Header-53ed58ce.js";import{B as P}from"./index-7885404b.js";import{b as E,a as ye}from"./index-32863ddd.js";import"./use-route-d5cecb2c.js";import"./use-placeholder-b054e2b6.js";const[pe,D,k]=F("contact-card"),ke={tel:String,name:String,type:L("add"),addText:String,editable:S};var Se=A({name:pe,props:ke,emits:["click"],setup(e,{emit:s}){const o=r=>{e.editable&&s("click",r)},a=()=>e.type==="add"?e.addText||k("addContact"):[n("div",null,[`${k("name")}：${e.name}`]),n("div",null,[`${k("tel")}：${e.tel}`])];return()=>n(ve,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:D([e.type]),border:!1,isLink:e.editable,titleClass:D("title"),onClick:o},{title:a})}});const Pe=I(Se),[xe,i,w]=F("dialog"),Te=T({},z,{title:String,theme:String,width:W,message:[String,Function],callback:Function,allowHtml:Boolean,className:Z,transition:L("van-dialog-bounce"),messageAlign:String,closeOnPopstate:S,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:S,closeOnClickOverlay:Boolean}),Oe=[...j,"transition","closeOnPopstate"];var H=A({name:xe,props:Te,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:s,slots:o}){const a=G(),r=N({confirm:!1,cancel:!1}),C=t=>s("update:show",t),f=t=>{var c;C(!1),(c=e.callback)==null||c.call(e,t)},h=t=>()=>{e.show&&(s(t),e.beforeClose?(r[t]=!0,oe(e.beforeClose,{args:[t],done(){f(t),r[t]=!1},canceled(){r[t]=!1}})):f(t))},l=h("cancel"),d=h("confirm"),B=Y(t=>{var c,u;if(t.target!==((u=(c=a.value)==null?void 0:c.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?d:O,Escape:e.showCancelButton?l:O})[t.key](),s("keydown",t)},["enter","esc"]),b=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:i("header",{isolated:!e.message&&!o.default})},[t])},K=t=>{const{message:c,allowHtml:u,messageAlign:m}=e,g=i("message",{"has-title":t,[m]:m}),v=ee(c)?c():c;return u&&typeof v=="string"?n("div",{class:g,innerHTML:v},null):n("div",{class:g},[v])},U=()=>{if(o.default)return n("div",{class:i("content")},[o.default()]);const{title:t,message:c,allowHtml:u}=e;if(c){const m=!!(t||o.title);return n("div",{key:u?1:0,class:i("content",{isolated:!m})},[K(m)])}},M=()=>n("div",{class:[ne,i("footer")]},[e.showCancelButton&&n(P,{size:"large",text:e.cancelButtonText||w("cancel"),class:i("cancel"),style:{color:e.cancelButtonColor},loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:l},null),e.showConfirmButton&&n(P,{size:"large",text:e.confirmButtonText||w("confirm"),class:[i("confirm"),{[te]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]),V=()=>n(ye,{class:i("footer")},{default:()=>[e.showCancelButton&&n(E,{type:"warning",text:e.cancelButtonText||w("cancel"),class:i("cancel"),color:e.cancelButtonColor,loading:r.cancel,disabled:e.cancelButtonDisabled,onClick:l},null),e.showConfirmButton&&n(E,{type:"danger",text:e.confirmButtonText||w("confirm"),class:i("confirm"),color:e.confirmButtonColor,loading:r.confirm,disabled:e.confirmButtonDisabled,onClick:d},null)]}),q=()=>o.footer?o.footer():e.theme==="round-button"?V():M();return()=>{const{width:t,title:c,theme:u,message:m,className:g}=e;return n(X,R({ref:a,role:"dialog",class:[i([u]),g],style:{width:Q(t)},tabindex:0,"aria-labelledby":c||m,onKeydown:B,"onUpdate:show":C},J(e,Oe)),{default:()=>[b(),U(),q()]})}}});let x;const Ee={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let De=T({},Ee);function Fe(){({instance:x}=le({setup(){const{state:s,toggle:o}=se();return()=>n(H,R(s,{"onUpdate:show":o}),null)}}))}function Ae(e){return ae?new Promise((s,o)=>{x||Fe(),x.open(T({},De,e,{callback:a=>{(a==="confirm"?s:o)(a)}}))}):Promise.resolve()}I(H);const Le={components:{Header:$},setup(){const e=re(),s=ie(),o=de(),a=N({tel:"18381037727",name:"张先生",totalPrice:0}),r=()=>{s.push("/address")},C=()=>{let l=0;e.state.orderList.length&&e.state.orderList.forEach(d=>{l+=d.num*d.price}),a.totalPrice=l},f=()=>{e.state.userAddress.forEach(l=>{l.isDefault&&(a.name=l.name,a.tel=l.tel)})},h=()=>{Ae({title:"提示",message:"恭喜!,您的订单已完成!"}).then(()=>{let l=e.state.cartList.filter(d=>!o.query.list.includes(d.id+""));e.commit("delete",l),e.commit("orderListEd"),s.push("/order")})};return ue(()=>{C(),f()}),{...me(a),onEdit:r,store:e,handleCreateOrder:h}}},Ie=e=>(ge("data-v-77de5daf"),e=e(),we(),e),Ne={class:"create-order"},Re={class:"content"},$e={class:"pay-wrap"},He={class:"price"},Ke=Ie(()=>_("span",null,"商品金额",-1));function Ue(e,s,o,a,r,C){const f=$,h=Pe,l=be,d=P;return y(),p("div",Ne,[n(f,{title:"订单"}),n(h,{type:"edit",tel:e.tel,name:e.name,onClick:a.onEdit},null,8,["tel","name","onClick"]),_("div",Re,[(y(!0),p(fe,null,he(a.store.state.orderList,(B,b)=>(y(),p("div",{key:b},[n(l,{num:B.num,price:B.price,title:B.title,thumb:B.pic},null,8,["num","price","title","thumb"])]))),128))]),_("div",$e,[_("div",He,[Ke,_("span",null,"￥"+Be(e.totalPrice),1)]),n(d,{type:"success",class:"pay-btn",block:"",color:"#ffc400",onClick:a.handleCreateOrder},{default:Ce(()=>[_e("生成订单")]),_:1},8,["onClick"])])])}const Qe=ce(Le,[["render",Ue],["__scopeId","data-v-77de5daf"]]);export{Qe as default};
