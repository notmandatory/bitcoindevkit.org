(window.webpackJsonp=window.webpackJsonp||[]).push([[3,17],{253:function(t,e,a){},255:function(t,e,a){},256:function(t,e,a){"use strict";a.r(e);var s=a(265),i=a(263),n=a(252);function r(t,e){if("group"===e.type){const a=e.path&&Object(n.e)(t,e.path),s=e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(n.e)(t,e.path));return a||s}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:s.default,SidebarLink:i.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let a=0;a<e.length;a++){const s=e[a];if(r(t,s))return a}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.e)(this.$route,t.regularPath)}}},l=a(7),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(a,s){return e("li",{key:s},["group"===a.type?e("SidebarGroup",{attrs:{item:a,open:s===t.openGroupIndex,collapsable:a.collapsable||a.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(s)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:a}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=c.exports},257:function(t,e,a){},258:function(t,e,a){},260:function(t,e,a){"use strict";a(253)},261:function(t,e,a){},263:function(t,e,a){"use strict";a.r(e);var s=a(252);function i(t,e,a,s,i){const n={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return i>2&&(n.style={"padding-left":i+"rem"}),t("RouterLink",n,a)}function n(t,e,a,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(s.e)(r,a+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,a+"#"+e.slug,e.title,c,e.level-1),n(t,e.children,a,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:a,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:c,sidebarDepth:u}}){const d=Object(s.e)(r,c.path),p="auto"===c.type?d||c.children.some(t=>Object(s.e)(r,c.basePath+"#"+t.slug)):d,h="external"===c.type?function(t,e,a){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[a,t("OutboundLink")])}(t,c.path,c.title||c.path):i(t,c.path,c.title||c.path,p),f=[e.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===c.type)return[h,n(t,c.children,c.basePath,r,f)];if((p||g)&&c.headers&&!s.d.test(c.path)){return[h,n(t,Object(s.c)(c.headers),c.path,r,f)]}return h}},o=(a(260),a(7)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},264:function(t,e,a){"use strict";a(255)},265:function(t,e,a){"use strict";a.r(e);var s=a(262),i=a(252),n={name:"SidebarGroup",components:{DropdownTransition:s.default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=a(256).default},methods:{isActive:i.e}},r=(a(264),a(7)),o=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=o.exports},266:function(t,e,a){"use strict";a(257)},267:function(t,e,a){"use strict";a(258)},268:function(t,e){t.exports=function(t){return null==t}},269:function(t,e,a){"use strict";a.r(e);var s=a(256),i=a(276),n={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:i.default},props:["items"]},r=(a(266),a(7)),o=Object(r.a)(n,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},270:function(t,e,a){"use strict";a.r(e);var s={name:"Footer",components:{NavLink:a(254).default},computed:{links(){return this.$site.themeConfig.footer.links},copyright(){return this.$site.themeConfig.footer.copyright}}},i=(a(267),a(7)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"inner"},[e("div",{staticClass:"footer-content"},t._l(t.links,(function(a){return e("div",{key:a.title,staticClass:"footer-block"},[e("h4",[t._v(t._s(a.title))]),t._v(" "),t._l(a.children,(function(t){return e("div",{key:t.link},[e("NavLink",{attrs:{item:t}})],1)}))],2)})),0),t._v(" "),t.copyright?e("p",{staticClass:"copyright"},[t._v(t._s(t.copyright))]):t._e()])])])])}),[],!1,null,null,null);e.default=n.exports},273:function(t,e,a){},274:function(t,e,a){},275:function(t,e,a){"use strict";a(261)},277:function(t,e,a){"use strict";a.r(e);var s=a(286),i=a(269),n=a(270),r=a(252),o={name:"Layout",components:{Sidebar:i.default,Navbar:s.default,Footer:n.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},l=(a(275),a(7)),c=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"wrap"},[e("div",{staticClass:"wrap-border"},[e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t._t("default")],2)]),t._v(" "),e("Footer")],1)}),[],!1,null,"b812d5fc",null);e.default=c.exports},280:function(t,e,a){},283:function(t,e,a){"use strict";a(273)},284:function(t,e,a){var s=a(12),i=a(4),n=a(11);t.exports=function(t){return"string"==typeof t||!i(t)&&n(t)&&"[object String]"==s(t)}},285:function(t,e,a){"use strict";a(274)},288:function(t,e,a){"use strict";a.r(e);var s=a(268),i=a.n(s),n=a(252),r={name:"PageEdit",computed:{lastUpdated(){return!1===this.$page.frontmatter.lastUpdated?"":this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=i()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:a="",docsBranch:s="master",docsRepo:n=e}=this.$site.themeConfig;return t&&n&&this.$page.relativePath?this.createEditLink(e,n,a,s,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,a,s,i){if(/bitbucket.org/.test(e)){return e.replace(n.a,"")+"/src"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(n.a,"")+"/-/edit"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i}return(n.i.test(e)?e:"https://github.com/"+e).replace(n.a,"")+"/edit"+`/${s}/`+(a?a.replace(n.a,"")+"/":"")+i}}},o=(a(283),a(7)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},289:function(t,e,a){"use strict";a.r(e);a(46);var s=a(252),i=a(284),n=a.n(i),r=a(268),o=a.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return u(c.PREV,this)},next(){return u(c.NEXT,this)}}};const c={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function u(t,{$themeConfig:e,$page:a,$route:i,$site:r,sidebarItems:l}){const{resolveLink:c,getThemeLinkConfig:u,getPageLinkConfig:d}=t,p=u(e),h=d(a),f=o()(h)?p:h;return!1===f?void 0:n()(f)?Object(s.k)(r.pages,f,i.path):c(a,l)}function d(t,e,a){const s=[];!function t(e,a){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+a]}}var p=l,h=(a(285),a(7)),f=Object(h.a)(p,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},292:function(t,e,a){},295:function(t,e,a){"use strict";a(280)},296:function(t,e,a){},298:function(t,e,a){"use strict";a.r(e);var s=a(288),i=a(289),n={components:{PageEdit:s.default,PageNav:i.default},props:["sidebarItems"]},r=(a(295),a(7)),o=Object(r.a)(n,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},305:function(t,e,a){"use strict";a(292)},307:function(t,e,a){"use strict";a(296)},319:function(t,e,a){"use strict";a.r(e);var s={name:"Home",components:{NavLink:a(254).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(305),a(7)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home"},[e("header",{staticClass:"hero"},[e("div",{staticClass:"hero-inner"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n        "+t._s(t.data.heroText||t.$title||"Hello")+"\n      ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n      ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[a.image?e("svg",{attrs:{title:a.title,role:"img"}},[e("use",{attrs:{"xlink:href":"/img/illustrations.svg#"+a.image}})]):t._e(),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null);e.default=n.exports},320:function(t,e,a){"use strict";a.r(e);var s={name:"Cases",components:{NavLink:a(254).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(a(307),a(7)),n=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"cases"},[e("header",{staticClass:"hero"},[e("div",{staticClass:"hero-inner"},[null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n        "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("div",{staticClass:"feature-image-wrapper"},[a.image?e("img",{attrs:{src:t.$withBase(a.image),alt:a.imageAlt||"hero"}}):t._e()]),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))]),t._v(" "),e("NavLink",{staticClass:"nav-link",attrs:{item:{link:a.caseStudyLink,text:"View case study"}}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=n.exports},375:function(t,e,a){"use strict";a.r(e);var s=a(277),i=a(319),n=a(320),r=a(298),o=a(252),l={name:"Layout",components:{LayoutWrap:s.default,Home:i.default,Cases:n.default,Page:r.default},computed:{sidebarItems(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)}}},c=a(7),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("LayoutWrap",[t.$page.frontmatter.cases?e("Cases"):t._e(),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=u.exports}}]);