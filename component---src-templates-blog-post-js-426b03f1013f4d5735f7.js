(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return E});a(161);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),o=a(150),c=a.n(o),s=a(181),u=a.n(s),m=a(151),d=a.n(m),h=a(156),p=a(147),f=a(232),g=a.n(f),b=p.b.div.withConfig({displayName:"blog-post__PostStyles",componentId:"sc-1eicbm2-0"})([".post-script{padding:0 1em;}.author-info{display:flex;.gatsby-image-wrapper{min-width:75px;height:75px;border-radius:100%;margin-right:1rem;}}.bio{display:grid;grid-template-columns:1fr auto;.name{font-weight:bold;}.title{font-weight:light;font-style:italic;}p{padding:0;margin:0;}i{font-size:1.25rem;color:",";padding-right:1rem;}}"],function(e){return e.theme.base}),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u()(this.props,"data.contentfulBlogPost"),t=u()(this.props,"data.site.siteMetadata.title"),a=e.author;return l.a.createElement(h.a,{location:this.props.location},l.a.createElement(b,null,l.a.createElement(c.a,null,l.a.createElement("title",null,e.title+" | "+t),l.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossorigin:"anonymous"})),e.heroImage.fluid&&l.a.createElement("div",{className:g.a.hero},l.a.createElement(d.a,{className:g.a.heroImage,alt:e.title,fluid:e.heroImage.fluid})),l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",{className:"section-headline"},e.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}})),l.a.createElement("div",{className:"section-headline"}),l.a.createElement("div",{className:"post-script"},l.a.createElement("p",null,e.publishDate),l.a.createElement("div",{className:"author-info"},l.a.createElement(d.a,{alt:a.name,fluid:a.image.fluid}),l.a.createElement("div",{className:"bio"},l.a.createElement("div",null,l.a.createElement("p",{className:"name"},a.name),l.a.createElement("p",{className:"title"},a.title)),l.a.createElement("div",null,a.github&&l.a.createElement("a",{href:"https://www.github.com/"+a.github},l.a.createElement("i",{className:"fab fa-github"})),a.twitter&&l.a.createElement("a",{href:"https://www.twitter.com/"+a.twitter},l.a.createElement("i",{className:"fab fa-twitter"}))))),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.shortBio.childMarkdownRemark.html}}))))},t}(l.a.Component);t.default=y;var E="371249829"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(146),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(149),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},149:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{contentfulSiteSettings:{brandingTitle:"Bridger Putnam",theme:{bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)",base:"#327381",gray:"#3B4044",lightGray:"#A1A2A7",black:"#393939",white:"#F2FDFF",accent:"#A96F51",cardBg:"#FBFEFF",maxWidth:"1000px"}}}}},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(152),l=a(0),o=a.n(l),c=a(148),s=(a(154),a(150)),u=a.n(s),m=a(147),d=m.b.ul.withConfig({displayName:"NavStyles",componentId:"v22j16-0"})(["z-index:10;width:100vw;margin:0;padding:0;list-style:none;font-weight:600;background-color:rgba(251,254,255,0.8);box-shadow:",";-webkit-backdrop-filter:blur(2px);.name{font-weight:900;font-size:2em;color:",";}a{text-decoration:none;}@media (max-width:739px){display:grid;justify-items:center;.active{border-bottom:2px solid ",";}.extras{display:none;}}@media (min-width:740px){display:flex;font-size:1.25em;height:4rem;align-items:center;li{margin:0 0 0 1em;}.name{margin-right:auto;}.last{padding-right:3em;}.active{border-bottom:5px solid ",";}}"],function(e){return e.theme.bs},function(e){return e.theme.base},function(e){return e.theme.accent},function(e){return e.theme.accent}),h=a(166),p=a.n(h),f=function(e){var t=e.title;return o.a.createElement(p.a,null,o.a.createElement(d,{role:"navigation"},o.a.createElement("li",{className:"name"},o.a.createElement(c.Link,{to:"/"},t)),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/",activeClassName:"active"},"Home")),o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/blog/",activeClassName:"active"},"Blog")),o.a.createElement("li",{className:"extras"},o.a.createElement(c.Link,{to:"/#content",activeClassName:"active"},"Projects")),o.a.createElement("li",{className:"last extras"},o.a.createElement(c.Link,{to:"/#contact",activeClassName:"active"},"Hire Me"))))},g=m.b.div.withConfig({displayName:"layout__StyledPage",componentId:"sc-1xsoua0-0"})(["background:",";color:",";a{color:",";}.sr-only{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;}"],function(e){return e.theme.white},function(e){return e.theme.gray},function(e){return e.theme.base}),b=function(){return o.a.createElement(u.a,null,o.a.createElement("title",null,"Bridger Putnam"),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("meta",{name:"description",content:"My name is Bridger Putnam and I am a full stack developer located in Boise, ID. My focus is on creating stunning websites that users find value in. I am available for hire, contact me!"}),o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("html",{lang:"en"}))},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/",o.a.createElement(c.StaticQuery,{query:"1846775307",render:function(e){var a=e.contentfulSiteSettings,n=a.brandingTitle,r=a.theme;return o.a.createElement(m.a,{theme:r},o.a.createElement(g,null,o.a.createElement(b,null),o.a.createElement(f,{title:n}),t))},data:i})},t}(o.a.Component);t.a=y},232:function(e,t,a){e.exports={hero:"hero-module--hero--S__gH",heroImage:"hero-module--heroImage--DciWV",heroDetails:"hero-module--heroDetails--3uv8x",heroHeadline:"hero-module--heroHeadline--jhgHQ",heroTitle:"hero-module--heroTitle--2LulU"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-426b03f1013f4d5735f7.js.map