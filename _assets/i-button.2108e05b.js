import{d as t,f as e}from"./index.adfdb150.js";import{j as i}from"./jsx.de6d6089.js";function o(t,...e){if(!Array.isArray(t))return t(...e);t.forEach((t=>o(t,...e)))}var r=t({name:"i-button",props:{type:{type:String,default:"default"},size:{type:String,default:"medium"},color:String,bgColor:String,dashed:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},onClick:[Function,Array]},setup(t){const{disabled:i,color:r,bgColor:n,type:a,onClick:l}=t;return{handleClick:t=>{i||l&&o(l,t)},mainStyle:e((()=>({color:"text"===a?r:"","background-color":n||""})))}},render(){const{$slots:t,type:e,size:o,mainStyle:r,disabled:n}=this;return i("div",{class:["i-btn",{[`i-btn-${o}`]:"text"!==e,[`i-btn-bg-${e}`]:!n&&"text"!==e,"i-btn-disable":n}],style:r,onClick:this.handleClick},t)}});export{r as I};
