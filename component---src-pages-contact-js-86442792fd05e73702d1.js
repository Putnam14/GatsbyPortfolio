(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(155),m=n.n(l),c=n(159),u=(n(156),n(154)),d=n(151).b.div.withConfig({displayName:"ContactStyles",componentId:"hc5txm-0"})(["display:grid;justify-content:center;a{text-decoration:none;}form{display:grid;justify-content:center;margin-bottom:2em;}label{margin-bottom:1rem;}@media (max-width:739px){label{width:100%;}}@media (min-width:740px){textarea{width:350px;}}textarea{height:150px;resize:none;}input,textarea{padding:0.5rem;display:block;border-radius:4px;border:2px solid ",";background-color:",";}button{justify-self:center;cursor:pointer;border:0;background-color:",";color:",";font-size:1rem;border-radius:4px;box-shadow:",";height:3rem;width:50%;}"],function(e){return e.theme.gray},function(e){return e.theme.cardBg},function(e){return e.theme.base},function(e){return e.theme.white},function(e){return e.theme.bs}),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleChange=function(e){var t,a=e.target,r=a.name;n.setState(((t={})[r]=a.value,t))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),fetch("http://mail.bridgerputnam.me",{method:"post",headers:new Headers({Authorization:"Basic "+btoa("bridgerputnam:test"),"Content-Type":"application/x-www-form-urlencoded"}),body:n.state})},n.state={email:"",name:"",subject:"",body:""},n}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement(u.a,null,i.a.createElement("span",null,"Contact Me")),i.a.createElement(d,null,i.a.createElement("p",null,"Don't be afraid to contact me on"," ",i.a.createElement("a",{href:"https://twitter.com/BridgerPutnam"},"Twitter")," or"," ",i.a.createElement("a",{href:"mailto:hey+portfolio@bridgerputnam.me"},"email"),"."),i.a.createElement("p",null,"Alternatively, you can use the form below."),i.a.createElement("form",{name:"contact",onSubmit:this.handleSubmit},i.a.createElement("label",null,"Name"," ",i.a.createElement("input",{type:"text",name:"name",placeholder:"Your name...",value:this.state.name,onChange:this.handleChange})),i.a.createElement("label",null,"Email"," ",i.a.createElement("input",{type:"email",name:"email",placeholder:"Your email...",value:this.state.email,onChange:this.handleChange})),i.a.createElement("label",null,"Message"," ",i.a.createElement("textarea",{name:"body",placeholder:"Hi Bridger, I saw your portfolio and...",value:this.state.body,onChange:this.handleChange})),i.a.createElement("button",{type:"submit"},"Send"))))},t}(i.a.Component),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(c.a,{location:this.props.location},i.a.createElement(m.a,{title:"Contact me"}),i.a.createElement(h,null))},t}(i.a.Component);t.default=s},154:function(e,t,n){"use strict";var a=n(151).b.h2.withConfig({displayName:"HalfRule",componentId:"s1oitv-0"})(["width:100%;text-align:center;border-bottom:1px solid ",";line-height:0.1em;margin-bottom:3rem;span{background:",";padding:0 10px;}"],function(e){return e.theme.lightGray},function(e){return e.theme.white});t.a=a},156:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-86442792fd05e73702d1.js.map