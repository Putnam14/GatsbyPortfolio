(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{143:function(e,t,n){"use strict";n.r(t);n(75),n(76);var a=n(7),r=n.n(a),i=n(0),l=n.n(i),o=(n(146),n(148)),c=n.n(o),u=(n(231),n(154)),d=n(165),m=n(158),s=n(145),p=s.b.div.withConfig({displayName:"FeaturedStyles",componentId:"sc-5zoe3p-0"})(["background-image:linear-gradient(white 90%,",");width:100vw;ul{margin:0 auto;padding:0;width:80%;list-style:none;}.gatsby-image-wrapper{max-height:50vh;}img{border-radius:40px;z-index:0;}@media (max-width:739px){.card{padding:0;margin-top:-40px;width:100%;border-radius:0 0 16px 16px;}}@media (min-width:740px){.gatsby-image-wrapper{max-width:80%;margin-left:auto;}.card{position:absolute;bottom:0;margin:0;width:50%;border-radius:16px 16px 0 16px;padding-top:1em;}}padding-top:1rem;position:relative;li{position:relative;}"],function(e){return e.theme.white}),g=function(e){var t=e.post.node;return l.a.createElement(p,null,l.a.createElement("ul",null,l.a.createElement(m.a,{article:t})))},h=s.b.div.withConfig({displayName:"BlogHeader__Header",componentId:"sc-1wbzu20-0"})(["padding:6rem 6rem 1rem 6rem;background-color:white;display:flex;@media (max-width:739px){width:100%;margin:0;padding:1rem 0 0 0;flex-wrap:wrap;justify-content:center;}@media (min-width:740px){div{margin-left:auto;}span{padding-left:2rem;}}span{font-weight:bold;color:",";}"],function(e){return e.theme.base}),f=function(){return l.a.createElement(h,null,l.a.createElement("span",null,"Life."),l.a.createElement("span",null,"Programming."),l.a.createElement("span",null,"Finance."),l.a.createElement("span",null,"Cycling."),l.a.createElement("div",null,l.a.createElement("small",null,"Doesn't work yet --\x3e"),l.a.createElement("input",{type:"search",placeholder:"Search!"})))};n.d(t,"pageQuery",function(){return x});var b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.contentfulSiteSettings.blogTitle,t=this.props.data.allContentfulBlogPost.edges,n=t.filter(function(e){return e.node.tags.includes("featured")})[0];return l.a.createElement(u.a,{location:this.props.location},l.a.createElement(c.a,{title:e}),l.a.createElement(f,null),n&&l.a.createElement(g,{post:n}),l.a.createElement("div",{className:"wrapper"},l.a.createElement(d.a,{posts:t},"Latest posts")))},t}(l.a.Component),x=(t.default=b,"2575564235")},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return s}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(144),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var u=n(147),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var m=n(32);n.d(t,"parsePath",function(){return m.a});var s=r.a.createContext({}),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},147:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},150:function(e){e.exports={data:{contentfulSiteSettings:{brandingTitle:"Bridger Putnam",theme:{bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)",base:"#327381",gray:"#3B4044",lightGray:"#A1A2A7",black:"#393939",white:"#F2FDFF",accent:"#A96F51",cardBg:"#FBFEFF",maxWidth:"1000px"}}}}},151:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),o=n(52),c=n(2),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},152:function(e,t,n){},153:function(e,t,n){"use strict";var a=n(145).b.h2.withConfig({displayName:"HalfRule",componentId:"s1oitv-0"})(["width:100%;text-align:center;border-bottom:1px solid ",";line-height:0.1em;margin-bottom:3rem;span{background:",";padding:0 10px;}"],function(e){return e.theme.lightGray},function(e){return e.theme.white});t.a=a},154:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(150),l=n(0),o=n.n(l),c=n(146),u=(n(152),n(148)),d=n.n(u),m=n(145),s=m.b.ul.withConfig({displayName:"NavStyles",componentId:"v22j16-0"})(["z-index:10;width:100vw;margin:0;padding:0;list-style:none;font-weight:600;background-color:rgba(251,254,255,0.8);box-shadow:",";-webkit-backdrop-filter:blur(2px);.name{font-weight:900;font-size:2em;color:",";}a{text-decoration:none;}@media (max-width:739px){display:grid;justify-items:center;.active{border-bottom:2px solid ",";}.extras{display:none;}}@media (min-width:740px){display:flex;font-size:1.25em;height:4rem;align-items:center;li{margin:0 0 0 1em;}.name{margin-right:auto;}.last{padding-right:3em;}.active{border-bottom:5px solid ",";}}"],function(e){return e.theme.bs},function(e){return e.theme.base},function(e){return e.theme.accent},function(e){return e.theme.accent}),p=n(164),g=n.n(p),h=function(e){var t=e.title;return o.a.createElement(g.a,null,o.a.createElement(s,{role:"navigation"},o.a.createElement("li",{className:"name"},o.a.createElement(c.Link,{to:"/"},t)),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/",activeClassName:"active"},"Home")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/blog/",activeClassName:"active"},"Blog")),o.a.createElement("li",{className:"extras"},o.a.createElement(c.Link,{to:"/#content",activeClassName:"active"},"Projects")),o.a.createElement("li",{className:"last extras"},o.a.createElement(c.Link,{to:"/#contact",activeClassName:"active"},"Hire Me"))))},f=m.b.div.withConfig({displayName:"layout__StyledPage",componentId:"sc-1xsoua0-0"})(["background:",";color:",";a{color:",";}"],function(e){return e.theme.white},function(e){return e.theme.gray},function(e){return e.theme.base}),b=function(){return o.a.createElement(d.a,null,o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Bridger Putnam"))},x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",o.a.createElement(c.StaticQuery,{query:"1846775307",render:function(e){var n=e.contentfulSiteSettings,a=n.brandingTitle,r=n.theme;return o.a.createElement(m.a,{theme:r},o.a.createElement(f,null,o.a.createElement(b,null),o.a.createElement(h,{title:a}),t))},data:i})},t}(o.a.Component);t.a=x},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(146),l=n(149),o=n.n(l),c=n(145).b.li.withConfig({displayName:"ArticlePreviewStyles",componentId:"njx6po-0"})(["img{border-radius:16px;z-index:0;}.card{position:relative;background:",";margin-top:-4em;width:80%;border-radius:0 16px 16px 16px;padding-top:1em;box-shadow:",";}.tag{display:block;color:",";padding:0.25em;margin:0;margin-left:-0.5em;border-left:4px solid ",";text-transform:capitalize;}h3{margin:0;padding-left:0.5em;color:",";font-size:1.5em;}a{text-decoration:none;}div{padding:0.5em;margin:0;}small{display:block;padding:1em;color:",";}:nth-child(even){.card{border-radius:16px 0 16px 16px;margin-left:auto;}.tag{margin-left:auto;margin-right:-0.5em;text-align:right;border-left:0;border-right:4px solid ",";}small{text-align:right;}}"],function(e){return e.theme.cardBg},function(e){return e.theme.bs},function(e){return e.theme.lightGray},function(e){return e.theme.accent},function(e){return e.theme.base},function(e){return e.theme.lightGray},function(e){return e.theme.accent});t.a=function(e){var t=e.article;return r.a.createElement(c,null,r.a.createElement(o.a,{alt:"",fluid:t.heroImage.fluid}),r.a.createElement("div",{className:"card"},r.a.createElement("span",{className:"tag"},t.tags[0]),r.a.createElement("h3",null,r.a.createElement(i.Link,{to:"/blog/"+t.slug},t.title)),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description.childMarkdownRemark.html}}),r.a.createElement("small",null,t.publishDate)))}},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(158),l=n(153),o=n(145).b.ul.withConfig({displayName:"ArticlesStyles",componentId:"sc-10bgdab-0"})(["margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));justify-items:center;grid-gap:10vmin;"]);t.a=function(e){var t=e.posts,n=e.children;return r.a.createElement("div",null,n&&r.a.createElement(l.a,null,r.a.createElement("span",null,n)),r.a.createElement(o,null,t.map(function(e){var t=e.node;return r.a.createElement(i.a,{article:t})})))}},231:function(e,t,n){e.exports={hero:"blog-module--hero--TCejO"}}}]);
//# sourceMappingURL=component---src-pages-blog-js-6f8d46f8c01a846692e1.js.map