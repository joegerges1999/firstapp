(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{1420:function(t,e,n){"use strict";n.r(e),e.default="Projects assigned to a profile will always be analyzed with it for that language, regardless of which profile is the default. Quality Profile administrators may assign projects to a profile. Project administrators may also choose a non-default profile for each language.\n"},2262:function(t,e,n){"use strict";n.r(e);var r=n(13),o=n(677),a=n(37),i=n(707),u=n(699),c=n(680),l=n(767),s=n(908),p=n(696);function f(){return r.createElement("header",{className:"page-header"},r.createElement("div",{className:"page-title display-flex-center"},r.createElement("h1",null,Object(a.translate)("project_quality_profiles.page")),r.createElement(p.a,{className:"spacer-left",doc:Promise.resolve().then(n.bind(null,1420))})),r.createElement("div",{className:"page-description"},Object(a.translate)("project_quality_profiles.page.description")))}var g,d=n(952),h=n.n(d),m=n(732),y=n.n(m),v=n(688),b=n.n(v),O=(g=function(t,e){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),j=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!1},e.stopLoading=function(){e.mounted&&e.setState({loading:!1})},e.handleChange=function(t){e.props.profile.key!==t.value&&(e.setState({loading:!0}),e.props.onChangeProfile(e.props.profile.key,t.value).then(e.stopLoading,e.stopLoading))},e.renderProfileName=function(t){return t.isDefault?r.createElement("span",null,r.createElement("strong",null,Object(a.translate)("default")),": ",t.label):r.createElement("span",null,t.label)},e}return O(e,t),e.prototype.componentDidMount=function(){this.mounted=!0},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.renderProfileSelect=function(){var t=this.props,e=t.profile,n=t.possibleProfiles.map((function(t){return{value:t.key,label:t.name,isDefault:t.isDefault}}));return r.createElement(b.a,{clearable:!1,disabled:this.state.loading,onChange:this.handleChange,optionRenderer:this.renderProfileName,options:n,style:{width:300},value:e.key,valueRenderer:this.renderProfileName})},e.prototype.render=function(){var t=this.props.profile;return r.createElement("tr",{"data-key":t.language},r.createElement("td",{className:"thin nowrap"},t.languageName),r.createElement("td",{className:"thin nowrap"},this.renderProfileSelect()),r.createElement("td",null,this.state.loading&&r.createElement("i",{className:"spinner"})))},e}(r.PureComponent);function _(t){var e=y()(t.allProfiles,"language"),n=h()(t.profiles,"languageName").map((function(n){return r.createElement(j,{key:n.language,onChangeProfile:t.onChangeProfile,possibleProfiles:e[n.language],profile:n})}));return r.createElement("div",{className:"boxed-group boxed-group-inner"},r.createElement("table",{className:"data zebra"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{className:"thin nowrap"},Object(a.translate)("language")),r.createElement("th",{className:"thin nowrap"},Object(a.translate)("quality_profile")),r.createElement("th",null," "))),r.createElement("tbody",null,n)))}var P=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),q=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r},w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!0},e.handleChangeProfile=function(t,n){var r,o=e.props.component,u=e.state,c=u.allProfiles,s=u.profiles,p=c&&c.find((function(e){return e.key===t})),f=c&&c.find((function(t){return t.key===n}));return f&&(r=f.isDefault&&p?Object(i.m)(p,o.key):Object(i.d)(f,o.key)),r?r.then((function(){if(e.mounted&&s&&f){var n=q(s.filter((function(e){return e.key!==t})),[f]);e.setState({profiles:n}),Object(l.a)(Object(a.translateWithParameters)("project_quality_profile.successfully_updated",f.languageName))}})):Promise.resolve()},e}return P(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.checkPermissions()?this.fetchProfiles():Object(s.a)()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.checkPermissions=function(){var t=this.props.component.configuration;return!!(t&&t.showQualityProfiles)},e.prototype.fetchProfiles=function(){var t=this,e=this.props.component,n=e.key,r=e.organization;Promise.all([Object(i.A)({organization:r}).then((function(t){return t.profiles})),Object(i.A)({organization:r,project:n}).then((function(t){return t.profiles}))]).then((function(e){var n=e[0],r=e[1];t.mounted&&t.setState({loading:!1,allProfiles:n,profiles:r})}),(function(){t.mounted&&t.setState({loading:!1})}))},e.prototype.render=function(){if(!this.checkPermissions())return null;var t=this.state,e=t.allProfiles,n=t.loading,i=t.profiles;return r.createElement("div",{className:"page page-limited"},r.createElement(c.a,{suggestions:"project_quality_profiles"}),r.createElement(o.a,{defer:!1,title:Object(a.translate)("project_quality_profiles.page")}),r.createElement(u.a,{anchor:"profiles_main"}),r.createElement(f,null),n?r.createElement("i",{className:"spinner"}):e&&i&&r.createElement(_,{allProfiles:e,onChangeProfile:this.handleChangeProfile,profiles:i}))},e}(r.PureComponent);e.default=w},671:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(658),o=n(13),a=n(717),i=n(684);n(686);var u=n(664);e.default=function(t){var e=t.tagName,n=void 0===e?"div":e;return o.createElement(n,{className:r("help-tooltip",t.className)},o.createElement(u.default,{mouseLeaveDelay:.25,onShow:t.onShow,overlay:t.overlay,placement:t.placement},o.createElement("span",{className:"display-inline-flex-center"},t.children||o.createElement(i.ThemeConsumer,null,(function(t){return o.createElement(a.default,{fill:t.colors.gray71,size:12})})))))}},680:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,o=n(13),a=n(705),i=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function u(t){var e=t.suggestions;return o.createElement(a.a.Consumer,null,(function(t){var n=t.addSuggestions,r=t.removeSuggestions;return o.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:e})}))}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},e.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},e.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},e.prototype.render=function(){return null},e}(o.PureComponent)},686:function(t,e,n){var r=n(660),o=n(687);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});t.exports=i},687:function(t,e,n){(e=n(661)(!1)).push([t.i,".help-tooltip{display:inline-flex;align-items:center;vertical-align:middle}.help-toolip-link{display:block;width:12px;height:12px;border:none}",""]),t.exports=e},696:function(t,e,n){"use strict";var r,o=n(13),a=n(671),i=n.n(a),u=n(672),c=n(719),l=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=Object(u.lazyLoadComponent)((function(){return Promise.all([n.e(11),n.e(10),n.e(15),n.e(14),n.e(9),n.e(6),n.e(16)]).then(n.bind(null,825))}),"DocMarkdownBlock"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={},e}return l(e,t),e.prototype.componentDidMount=function(){var t=this;this.mounted=!0,this.props.doc.then((function(e){var n=e.default;t.mounted&&t.setState({content:n})}),(function(){}))},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.render=function(){return this.state.content?o.createElement(i.a,{className:this.props.className,overlay:o.createElement("div",{className:"abs-width-300"},o.createElement(s,{childProps:this.props.overlayProps,className:"cut-margins",content:Object(c.filterContent)(this.state.content),isTooltip:!0}))},this.props.children):this.props.children||null},e}(o.PureComponent);e.a=p},699:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,o=n(13),a=n(37),i=n(749),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function l(t){return o.createElement(i.a.Consumer,null,(function(e){var n=e.addA11ySkipLink,r=e.removeA11ySkipLink;return o.createElement(s,c({addA11ySkipLink:n,removeA11ySkipLink:r},t))}))}var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getLink=function(){var t=e.props,n=t.anchor,r=t.label;return{key:n,label:void 0===r?Object(a.translate)("skip_to_content"):r,weight:t.weight}},e}return u(e,t),e.prototype.componentDidMount=function(){this.props.addA11ySkipLink(this.getLink())},e.prototype.componentWillUnmount=function(){this.props.removeA11ySkipLink(this.getLink())},e.prototype.render=function(){var t=this.props.anchor;return o.createElement("span",{id:"a11y_target__"+t})},e}(o.PureComponent)},703:function(t,e,n){var r=n(724),o=n(690),a=n(779),i=n(709);t.exports=function(t,e){return(i(t)?r:a)(t,o(e,3))}},707:function(t,e,n){"use strict";n.d(e,"A",(function(){return l})),n.d(e,"s",(function(){return s})),n.d(e,"j",(function(){return p})),n.d(e,"y",(function(){return f})),n.d(e,"r",(function(){return g})),n.d(e,"q",(function(){return d})),n.d(e,"C",(function(){return h})),n.d(e,"x",(function(){return m})),n.d(e,"i",(function(){return y})),n.d(e,"l",(function(){return v})),n.d(e,"g",(function(){return b})),n.d(e,"t",(function(){return O})),n.d(e,"u",(function(){return j})),n.d(e,"o",(function(){return _})),n.d(e,"n",(function(){return P})),n.d(e,"p",(function(){return q})),n.d(e,"h",(function(){return w})),n.d(e,"d",(function(){return E})),n.d(e,"m",(function(){return k})),n.d(e,"B",(function(){return N})),n.d(e,"z",(function(){return S})),n.d(e,"c",(function(){return x})),n.d(e,"w",(function(){return z})),n.d(e,"b",(function(){return C})),n.d(e,"v",(function(){return L})),n.d(e,"e",(function(){return J})),n.d(e,"f",(function(){return A})),n.d(e,"a",(function(){return D})),n.d(e,"k",(function(){return M}));var r=n(703),o=n.n(r),a=n(818),i=n(51),u=n(670),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function l(t){return Object(i.getJSON)("/api/qualityprofiles/search",t).catch(u.a)}function s(t){var e=t.compareToSonarWay,n=t.profile.key;return Object(i.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:e,key:n})}function p(t){return Object(i.postJSON)("/api/qualityprofiles/create",t).catch(u.a)}function f(t){return Object(i.postJSON)("/api/qualityprofiles/restore",t).catch(u.a)}function g(t){return Object(i.getJSON)("/api/qualityprofiles/projects",t).catch(u.a)}function d(t){var e=t.language,n=t.name,r=t.organization;return Object(i.getJSON)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:n,organization:r}).catch(u.a)}function h(t){var e=t.language,n=t.name,r=t.organization;return Object(i.post)("/api/qualityprofiles/set_default",{language:e,qualityProfile:n,organization:r})}function m(t,e){return Object(i.post)("/api/qualityprofiles/rename",{key:t,name:e}).catch(u.a)}function y(t,e){return Object(i.postJSON)("/api/qualityprofiles/copy",{fromKey:t,toName:e}).catch(u.a)}function v(t){var e=t.language,n=t.name,r=t.organization;return Object(i.post)("/api/qualityprofiles/delete",{language:e,qualityProfile:n,organization:r}).catch(u.a)}function b(t,e){var n=t.language,r=t.name,o=t.organization;return Object(i.post)("/api/qualityprofiles/change_parent",{language:n,qualityProfile:r,organization:o,parentQualityProfile:e?e.name:void 0}).catch(u.a)}function O(t){var e=t.language,n=t.name,r=t.organization;return"/api/qualityprofiles/backup?"+Object.entries({language:e,qualityProfile:n,organization:r}).map((function(t){var e=t[0],n=t[1];return e+"="+encodeURIComponent(n)})).join("&")}function j(t,e){var n=t.key,r=e.language,o=e.name,a=e.organization;return"/api/qualityprofiles/export?"+Object.entries({exporterKey:n,language:r,qualityProfile:o,organization:a}).map((function(t){var e=t[0],n=t[1];return e+"="+encodeURIComponent(n)})).join("&")}function _(){return Object(i.getJSON)("/api/qualityprofiles/importers").then((function(t){return t.importers}),u.a)}function P(){return Object(i.getJSON)("/api/qualityprofiles/exporters").then((function(t){return t.exporters}))}function q(t,e,n,r){var o=n.language,a=n.name,u=n.organization;return Object(i.getJSON)("/api/qualityprofiles/changelog",{since:t,to:e,language:o,qualityProfile:a,organization:u,p:r})}function w(t,e){return Object(i.getJSON)("/api/qualityprofiles/compare",{leftKey:t,rightKey:e})}function E(t,e){var n=t.language,r=t.name,o=t.organization;return Object(i.post)("/api/qualityprofiles/add_project",{language:n,qualityProfile:r,organization:o,project:e}).catch(u.a)}function k(t,e){var n=t.language,r=t.name,o=t.organization;return Object(i.post)("/api/qualityprofiles/remove_project",{language:n,qualityProfile:r,organization:o,project:e}).catch(u.a)}function N(t){return Object(i.getJSON)("/api/qualityprofiles/search_users",t).catch(u.a)}function S(t){return Object(i.getJSON)("/api/qualityprofiles/search_groups",t).catch(u.a)}function x(t){return Object(i.post)("/api/qualityprofiles/add_user",t).catch(u.a)}function z(t){return Object(i.post)("/api/qualityprofiles/remove_user",t).catch(u.a)}function C(t){return Object(i.post)("/api/qualityprofiles/add_group",t).catch(u.a)}function L(t){return Object(i.post)("/api/qualityprofiles/remove_group",t).catch(u.a)}function J(t){return Object(i.postJSON)("/api/qualityprofiles/activate_rules",t)}function A(t){return Object(i.postJSON)("/api/qualityprofiles/deactivate_rules",t)}function D(t){var e=t.params&&o()(t.params,(function(t,e){return e+"="+Object(a.csvEscape)(t)})).join(";");return Object(i.post)("/api/qualityprofiles/activate_rule",c(c({},t),{params:e})).catch(u.a)}function M(t){return Object(i.post)("/api/qualityprofiles/deactivate_rule",t).catch(u.a)}},719:function(t,e,n){"use strict";function r(t){for(var e,n,r=0;r<t.length;r++){if("---"===t[r].trim()){if(void 0!==e){n=r;break}e=r}}return void 0!==n?{firstLine:e,lastLine:n}:void 0}function o(t){for(var e={},n=0;n<t.length;n++){var r=t[n].split(":").map((function(t){return t.trim()}));2===r.length&&(e[r[0]]=r[1])}return e}function a(t,e){for(var n="\x3c!-- "+e+" --\x3e",r="\x3c!-- /"+e+" --\x3e",o=t,a=o.indexOf(n),i=o.indexOf(r);-1!==a&&-1!==i;)a<i?o=o.substring(0,a)+o.substring(i+r.length):(console.error(new Error('Documentation - incorrect usage of conditional formatting tags here: "'+o.substring(i,a+n.length)+'"')),o=o.substring(0,i)+o.substring(i+r.length,a)+o.substring(a+n.length)),a=o.indexOf(n),i=o.indexOf(r);return o}t.exports={getFrontMatter:function(t){var e=t.split("\n"),n=r(e);return n?o(e.slice(n.firstLine+1,n.lastLine)):{}},separateFrontMatter:function(t){var e=t.split("\n"),n=r(e);if(n){var a=o(e.slice(n.firstLine+1,n.lastLine)),i=e.slice(n.lastLine+1).join("\n");return{frontmatter:a,content:i}}return{frontmatter:{},content:t}},filterContent:function(t){var e="\x3c!-- \\/?(sonarqube|sonarcloud|static) --\x3e",r=n(125),o=r.isSonarCloud,i=r.getInstance,u=a(t.replace(/{instance}/gi,i()),"static");return(o()?a(u,"sonarqube"):a(u,"sonarcloud")).replace(new RegExp("^"+e+"(\n|\r|\r\n|$)","gm"),"").replace(new RegExp(""+e,"g"),"")}}},732:function(t,e,n){var r=n(791),o=n(742),a=Object.prototype.hasOwnProperty,i=o((function(t,e,n){a.call(t,n)?t[n].push(e):r(t,n,[e])}));t.exports=i},767:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(735),o=n(734);function a(t){Object(o.default)().dispatch(r.b(t))}},818:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.csvEscape=function(t){return'"'+t.replace(/"/g,'\\"')+'"'}},908:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(178),o=n.n(r),a=n(886),i=n(734);function u(){var t=Object(i.default)(),e=o()(),n=window.location.pathname+window.location.search+window.location.hash;t.dispatch(Object(a.c)()),e.replace({pathname:"/sessions/new",query:{return_to:n}})}}}]);
//# sourceMappingURL=336.1588858339197.chunk.js.map