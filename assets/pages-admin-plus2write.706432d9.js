import{p as e,l as t,m as a,q as s,s as o,C as l,o as n,c as r,w as i,i as d,a as u,j as c,f,h as g,F as m,r as h,t as p}from"./index-a62d1839.js";import{_}from"./uni-icons.e66cfeb5.js";import{r as b}from"./uni-app.es.4388576a.js";import{_ as k}from"./uni-th.b2e6a484.js";import{_ as I,a as y,b as C}from"./uni-table.06e02d8e.js";import{_ as T}from"./_plugin-vue_export-helper.1b428a4d.js";const S=T({data:()=>({stuList:[],patternlogout:{buttonColor:"#55aaff",iconColor:"#fff",icon:"refreshempty"},totalList:[]}),methods:{tomy(){e({url:"/pages/admin/my"})},plus(){let e=sessionStorage.getItem("stuIdLength");for(var o=0;o<e;o++){let e=sessionStorage.getItem("stuid"+o);t({url:a().globalData.baseUrl+"/adfindtotal/"+e,method:"GET",header:{token:localStorage.getItem("token")},success:o=>{s({title:"正在同步",icon:"loading"}),200==o.statusCode?(console.log(e+"的德育分："+o.data),t({url:a().globalData.baseUrl+"/change",method:"POST",header:{token:localStorage.getItem("token")},data:{stuid:e,score:o.data},success(){s({title:"同步成功",icon:"success"})}})):console.log(e+"未查询到加减分数信息")}})}},getInfo(){let e=localStorage.getItem("token");t({url:a().globalData.baseUrl+"/adfindscore",method:"GET",header:{token:e},success:e=>{if(20401==e.data.code&&(s({title:"无权限",icon:"error"}),setTimeout((()=>{o({url:"/pages/admin/index"})}),1e3)),200==e.statusCode){let a=e.data;this.stuList=e.data;for(var t=0;t<a.length;t++)sessionStorage.setItem("stuid"+t,a[t].stuid)}else s({title:"无权限",icon:"error"}),setTimeout((()=>{o({url:"/pages/admin/index"})}),1e3)}})}},onLoad(){l({title:"警告",content:"用于同步导入的德育分，非数据库导入请勿使用",showCancel:!0,confirmColor:"#FF3333",cancelColor:"#007aff",success:function(t){t.confirm||t.cancel&&e({url:"/pages/admin/my"})}}),this.getInfo();let n=localStorage.getItem("token");t({url:a().globalData.baseUrl+"/adfindscore",method:"GET",header:{token:n},success:e=>{20401==e.data.code&&(s({title:"Token过期",icon:"error"}),setTimeout((()=>{o({url:"/pages/login"})}),1e3)),200==e.statusCode?(sessionStorage.setItem("stuIdLength",e.data.length),this.stuList=e.data):(s({title:"Token过期",icon:"error"}),setTimeout((()=>{o({url:"/pages/login"})}),1e3))}})}},[["render",function(e,t,a,s,o,l){const T=b(h("uni-icons"),_),S=d,j=b(h("uni-th"),k),w=b(h("uni-tr"),I),L=b(h("uni-td"),y),x=b(h("uni-table"),C);return n(),r(S,null,{default:i((()=>[u(S,{class:"fab",onClick:t[0]||(t[0]=e=>l.plus())},{default:i((()=>[u(T,{type:"refreshempty",size:"30",color:"#fff"})])),_:1}),u(S,{class:"fab1",onClick:t[1]||(t[1]=e=>l.tomy())},{default:i((()=>[u(T,{type:"undo-filled",size:"30",color:"#fff"})])),_:1}),u(x,{border:"",stripe:"",emptyText:"查不到信息,请联系秘书部!",style:{width:"100vw"},class:"table"},{default:i((()=>[u(w,null,{default:i((()=>[u(j,{align:"center",width:"55"},{default:i((()=>[c("学号")])),_:1}),u(j,{align:"center",width:"70"},{default:i((()=>[c("姓名")])),_:1}),u(j,{align:"center",width:"100"},{default:i((()=>[c("班级")])),_:1}),u(j,{align:"center",width:"100"},{default:i((()=>[c("分数")])),_:1})])),_:1}),(n(!0),f(m,null,g(o.stuList,((e,t)=>(n(),r(w,{key:e.id},{default:i((()=>[u(L,{align:"center"},{default:i((()=>[c(p(e.stuid),1)])),_:2},1024),u(L,{align:"center"},{default:i((()=>[c(p(e.name),1)])),_:2},1024),u(L,{align:"center"},{default:i((()=>[c(p(e.classs),1)])),_:2},1024),u(L,{align:"center",id:e.score>=90?"green":e.score>=80?"blue":e.score>=70?"black":e.score>=60?"orange":"red"},{default:i((()=>[c(p(e.score),1)])),_:2},1032,["id"])])),_:2},1024)))),128))])),_:1})])),_:1})}],["__scopeId","data-v-7e839e77"]]);export{S as default};
