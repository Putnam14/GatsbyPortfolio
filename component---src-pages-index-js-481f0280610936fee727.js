(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(150),c=a.n(l),m=a(151),s=a.n(m),u=a(147),d=u.b.div.withConfig({displayName:"HeroStyles",componentId:"sc-1hjukem-0"})(["width:100vw;position:relative;.heroContainer{background-image:linear-gradient(white 90%,",");}.bottomLinks{display:flex;width:100%;i{color:",";opacity:0.8;font-size:3em;}}@media (max-width:739px){.gatsby-image-wrapper{max-height:50vh;}.bio-content{display:grid;width:75%;}a{text-align:center;}.bottomLinks{margin:1em 0;justify-content:space-evenly;.downArrow{display:none;}}}@media (min-width:740px){height:100vh;min-height:590px;.heroContainer{display:grid;grid-template-columns:1fr 1fr;margin-top:-4rem;height:100vh;}.bio-content{margin-top:4rem;margin-bottom:4rem;width:50%;min-width:300px;}.bottomLinks{position:absolute;bottom:0;i{padding:0 0 1rem 3rem;}.downArrow{margin-left:auto;padding-right:3rem;opacity:1;color:",";}}}.bio{display:flex;align-items:center;justify-content:center;}p{margin:0;padding:0;font-size:1.5em;}.pre{color:",";margin-bottom:-0.5em;}.strong{font-weight:900;margin-bottom:-0.25em;}.cta{margin:1em 0 1em;}button{cursor:pointer;border:0;background-color:",";color:",";font-size:1rem;border-radius:4px;box-shadow:",";height:3rem;width:50%;}"],function(e){return e.theme.white},function(e){return e.theme.lightGray},function(e){return e.theme.base},function(e){return e.theme.lightGray},function(e){return e.theme.base},function(e){return e.theme.white},function(e){return e.theme.bs}),p=a(148),h=function(e){var t=e.data,a=t.brandingTitle,n=t.heroImage,r=t.ctaJSON,i=r.pre,l=r.strong,m=r.cta,u=r.button;return o.a.createElement(d,null,o.a.createElement(c.a,null,o.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossorigin:"anonymous"})),o.a.createElement("div",{className:"heroContainer"},o.a.createElement(s.a,{alt:a,fluid:n.fluid}),o.a.createElement("div",{className:"bio"},o.a.createElement("div",{className:"bio-content"},i&&o.a.createElement("p",{className:"pre"},i),l&&l.map(function(e){return o.a.createElement("p",{className:"strong"},e)}),m&&o.a.createElement("p",{className:"cta"},m),u&&o.a.createElement("a",{href:"/#contact"},o.a.createElement("button",null,u))))),o.a.createElement("div",{className:"bottomLinks"},o.a.createElement("a",{href:"https://github.com/Putnam14"},o.a.createElement("i",{className:"fab fa-github"},o.a.createElement("span",{className:"sr-only"},"Github"))),o.a.createElement("a",{href:"https://twitter.com/BridgerPutnam"},o.a.createElement("i",{className:"fab fa-twitter"},o.a.createElement("span",{className:"sr-only"},"Twitter"))),o.a.createElement(p.Link,{to:"/#content",className:"downArrow"},o.a.createElement("i",{className:"downArrow fas fa-angle-double-down"}))))},g=a(156),f=(a(234),a(161),a(155)),b=u.b.div.withConfig({displayName:"ProjectsStyles",componentId:"sc-1ara878-0"})(["margin-top:4rem;.projects{display:flex;flex-wrap:wrap;justify-content:center;}.card{display:grid;width:300px;margin:1rem;background:",";border-radius:16px;box-shadow:",";}.project{width:90%;margin:1rem auto;display:flex;flex-wrap:wrap;}img{border-radius:16px 16px 0 0;height:125px;background:gray;margin-bottom:1rem;}.projName{margin-right:auto;}.projType{font-weight:bold;color:",";}.projDesc{display:block;color:",";}.links{padding:1rem;display:grid;justify-items:center;align-self:end;a{display:block;text-decoration:none;color:",";}}"],function(e){return e.theme.cardBg},function(e){return e.theme.bs},function(e){return e.theme.gray},function(e){return e.theme.lightGray},function(e){return e.theme.base}),y=function(e){var t=e.projects;return o.a.createElement(b,{id:"projects"},t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("span",null,"Projects")),o.a.createElement("div",{className:"projects"},t.map(function(e){var t=e.node;return o.a.createElement("div",{className:"card"},o.a.createElement(s.a,{alt:t.name,fluid:t.image.fluid}),o.a.createElement("div",{className:"project"},o.a.createElement("span",{className:"projName"},t.name),o.a.createElement("span",{className:"projType"},t.type),o.a.createElement("span",{className:"projDesc"},t.shortDescription)),o.a.createElement("div",{className:"links"},t.link&&o.a.createElement("a",{href:t.link},"Live Website"),t.github&&o.a.createElement("a",{href:"https://github.com/"+t.github},"Github")))}))))},E=a(167),w=u.b.div.withConfig({displayName:"ContactStyles",componentId:"hc5txm-0"})(["form{display:grid;justify-content:center;}label{margin-bottom:1rem;}@media (max-width:739px){label{width:100%;}}@media (min-width:740px){textarea{width:350px;}}textarea{height:150px;resize:none;}input,textarea{padding:0.5rem;display:block;border-radius:4px;border:2px solid ",";background-color:",";}button{justify-self:center;cursor:pointer;border:0;background-color:",";color:",";font-size:1rem;border-radius:4px;box-shadow:",";height:3rem;width:50%;}"],function(e){return e.theme.gray},function(e){return e.theme.cardBg},function(e){return e.theme.base},function(e){return e.theme.white},function(e){return e.theme.bs}),x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("span",null,"Contact Me")),o.a.createElement(w,null,o.a.createElement("form",{name:"contact",netlify:!0},o.a.createElement("label",null,"Name ",o.a.createElement("input",{type:"text",name:"name",placeholder:"Your name..."})),o.a.createElement("label",null,"Email ",o.a.createElement("input",{type:"email",name:"email",placeholder:"Your email..."})),o.a.createElement("label",null,"Message"," ",o.a.createElement("textarea",{name:"message",placeholder:"Hi Bridger, I saw your portfolio and..."})),o.a.createElement("button",{type:"submit"},"Send"))))};a.d(t,"pageQuery",function(){return k});var v=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allContentfulBlogPost.edges,t=this.props.data.allContentfulProject.edges,a=(this.props.data.allContentfulPerson.edges[0],this.props.data.contentfulSiteSettings),n=a.siteTitle;return o.a.createElement(g.a,{location:this.props.location,data:a},o.a.createElement(c.a,{title:n}),o.a.createElement(h,{data:a}),o.a.createElement("div",{className:"wrapper",id:"content",style:{marginTop:"-4rem"}},o.a.createElement(y,{projects:t}),o.a.createElement(E.a,{posts:e},"Recent blog posts"),o.a.createElement(x,{id:"contact"})))},t}(o.a.Component),k=(t.default=v,"550634284")},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(146),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var m=a(149),s=a.n(m);a.d(t,"PageRenderer",function(){return s.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{contentfulSiteSettings:{brandingTitle:"Bridger Putnam",theme:{bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)",base:"#327381",gray:"#3B4044",lightGray:"#A1A2A7",black:"#393939",white:"#F2FDFF",accent:"#A96F51",cardBg:"#FBFEFF",maxWidth:"1000px"}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(52),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},154:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(147).b.h2.withConfig({displayName:"HalfRule",componentId:"s1oitv-0"})(["width:100%;text-align:center;border-bottom:1px solid ",";line-height:0.1em;margin-bottom:3rem;span{background:",";padding:0 10px;}"],function(e){return e.theme.lightGray},function(e){return e.theme.white});t.a=n},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(152),o=a(0),l=a.n(o),c=a(148),m=(a(154),a(150)),s=a.n(m),u=a(147),d=u.b.ul.withConfig({displayName:"NavStyles",componentId:"v22j16-0"})(["z-index:10;width:100vw;margin:0;padding:0;list-style:none;font-weight:600;background-color:rgba(251,254,255,0.8);box-shadow:",";-webkit-backdrop-filter:blur(2px);.name{font-weight:900;font-size:2em;color:",";}a{text-decoration:none;}@media (max-width:739px){display:grid;justify-items:center;.active{border-bottom:2px solid ",";}.extras{display:none;}}@media (min-width:740px){display:flex;font-size:1.25em;height:4rem;align-items:center;li{margin:0 0 0 1em;}.name{margin-right:auto;}.last{padding-right:3em;}.active{border-bottom:5px solid ",";}}"],function(e){return e.theme.bs},function(e){return e.theme.base},function(e){return e.theme.accent},function(e){return e.theme.accent}),p=a(166),h=a.n(p),g=function(e){var t=e.title;return l.a.createElement(h.a,null,l.a.createElement(d,{role:"navigation"},l.a.createElement("li",{className:"name"},l.a.createElement(c.Link,{to:"/"},t)),l.a.createElement("li",null,l.a.createElement(c.Link,{to:"/",activeClassName:"active"},"Home")),l.a.createElement("li",null,l.a.createElement(c.Link,{to:"/blog/",activeClassName:"active"},"Blog")),l.a.createElement("li",{className:"extras"},l.a.createElement(c.Link,{to:"/#content",activeClassName:"active"},"Projects")),l.a.createElement("li",{className:"last extras"},l.a.createElement(c.Link,{to:"/#contact",activeClassName:"active"},"Hire Me"))))},f=u.b.div.withConfig({displayName:"layout__StyledPage",componentId:"sc-1xsoua0-0"})(["background:",";color:",";a{color:",";}.sr-only{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}"],function(e){return e.theme.white},function(e){return e.theme.gray},function(e){return e.theme.base}),b=function(){return l.a.createElement(s.a,null,l.a.createElement("title",null,"Bridger Putnam"),l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),l.a.createElement("meta",{name:"description",content:"My name is Bridger Putnam and I am a full stack developer located in Boise, ID. My focus is on creating stunning websites that users find value in. I am available for hire, contact me!"}),l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("html",{lang:"en"}))},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",l.a.createElement(c.StaticQuery,{query:"1846775307",render:function(e){var a=e.contentfulSiteSettings,n=a.brandingTitle,r=a.theme;return l.a.createElement(u.a,{theme:r},l.a.createElement(f,null,l.a.createElement(b,null),l.a.createElement(g,{title:n}),t))},data:i})},t}(l.a.Component);t.a=y},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148),o=a(151),l=a.n(o),c=a(147).b.li.withConfig({displayName:"ArticlePreviewStyles",componentId:"njx6po-0"})(["img{border-radius:16px;z-index:0;}.card{position:relative;background:",";margin-top:-4em;width:80%;border-radius:0 16px 16px 16px;padding-top:1em;box-shadow:",";}.tag{display:block;color:",";padding:0.25em;margin:0;margin-left:-0.5em;border-left:4px solid ",";text-transform:capitalize;}h3{margin:0;padding-left:0.5em;color:",";font-size:1.5em;}a{text-decoration:none;}div{padding:0.5em;margin:0;}small{display:block;padding:1em;color:",";}:nth-child(even){.card{border-radius:16px 0 16px 16px;margin-left:auto;}.tag{margin-left:auto;margin-right:-0.5em;text-align:right;border-left:0;border-right:4px solid ",";}small{text-align:right;}}"],function(e){return e.theme.cardBg},function(e){return e.theme.bs},function(e){return e.theme.lightGray},function(e){return e.theme.accent},function(e){return e.theme.base},function(e){return e.theme.lightGray},function(e){return e.theme.accent});t.a=function(e){var t=e.article;return r.a.createElement(c,null,r.a.createElement(l.a,{alt:"",fluid:t.heroImage.fluid}),r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"tag"},t.tags[0]),r.a.createElement("h3",null,r.a.createElement(i.Link,{to:"/blog/"+t.slug},t.title)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.a.createElement("small",null,t.publishDate)))}},161:function(e,t,a){var n=a(24).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(16)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},167:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(160),o=a(155),l=a(147).b.ul.withConfig({displayName:"ArticlesStyles",componentId:"sc-10bgdab-0"})(["margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));justify-items:center;grid-gap:10vmin;"]);t.a=function(e){var t=e.posts,a=e.children;return r.a.createElement("div",null,a&&r.a.createElement(o.a,null,r.a.createElement("span",null,a)),r.a.createElement(l,null,t.map(function(e){var t=e.node;return r.a.createElement(i.a,{article:t})})))}},234:function(e,t,a){"use strict";a(235)("link",function(e){return function(t){return e(this,"a","href",t)}})},235:function(e,t,a){var n=a(11),r=a(25),i=a(17),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-481f0280610936fee727.js.map