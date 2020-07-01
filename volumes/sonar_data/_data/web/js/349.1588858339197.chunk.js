(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{1415:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(13),o=n(677);function i(t){var e=t.title,n=t.organization,i=e+(n?" - "+n.name:"");return r.createElement(o.a,{defaultTitle:i,defer:!1,titleTemplate:"%s - "+i})}},2116:function(t,e,n){var r=n(660),o=n(2117);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1},a=(r(o,i),o.locals?o.locals:{});t.exports=a},2117:function(t,e,n){(e=n(661)(!1)).push([t.i,".quality-profiles-table{padding-top:7px}.quality-profiles-table-inheritance{width:280px}.quality-profiles-table-date,.quality-profiles-table-projects,.quality-profiles-table-rules{min-width:80px}.quality-profiles-list-header{line-height:24px;margin-bottom:20px;padding:5px 10px;border-bottom:1px solid #e6e6e6}.quality-profile-grid{display:flex;justify-content:space-between;align-items:flex-start}.quality-profile-grid-left{width:340px;flex-shrink:0}.quality-profile-grid-right{flex-grow:1;margin-left:20px}.quality-profile-rules-distribution{margin-bottom:15px;padding:7px 20px 0}.quality-profile-rules-deprecated{margin-top:20px;padding:15px 20px;background-color:#f2dede}.quality-profile-rules-sonarway-missing{margin-top:20px;padding:15px 20px;background-color:#fcf8e3}.quality-profile-not-found{padding-top:100px;text-align:center}.quality-profiles-evolution{padding-top:55px}.quality-profiles-evolution-deprecated{border-color:#f4b1b0;background-color:#f2dede}.quality-profiles-evolution-stagnant{border-color:#faebcc;background-color:#fcf8e3}.quality-profile-comparison-table{table-layout:fixed}.quality-profile-changelog-rule-cell{line-height:1.5}.quality-profile-changelog-parameter{max-width:270px;word-break:break-word}",""]),t.exports=e},2282:function(t,e,n){"use strict";n.r(e);var r,o=n(666),i=n(668),a=n(13),u=n(37),c=n(707),p=n(680),s=n(1415),l=(n(2116),n(813)),f=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),g=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mounted=!1,e.state={loading:!0},e.updateProfiles=function(){return e.fetchProfiles().then((function(t){e.mounted&&e.setState({profiles:Object(l.g)(t.profiles)})}))},e}return f(e,t),e.prototype.componentDidMount=function(){this.mounted=!0,this.loadData()},e.prototype.componentWillUnmount=function(){this.mounted=!1},e.prototype.fetchProfiles=function(){var t=this.props.organization,e=t?{organization:t.key}:{};return Object(c.A)(e)},e.prototype.loadData=function(){var t=this;this.setState({loading:!0}),Promise.all([Object(c.n)(),this.fetchProfiles()]).then((function(e){if(t.mounted){var n=e[0],r=e[1];t.setState({actions:r.actions,exporters:n,profiles:Object(l.g)(r.profiles),loading:!1})}}),(function(){t.mounted&&t.setState({loading:!1})}))},e.prototype.renderChild=function(){if(this.state.loading)return a.createElement("i",{className:"spinner"});var t=this.props.organization,e=Object.values(this.props.languages);return a.cloneElement(this.props.children,{actions:this.state.actions||{},profiles:this.state.profiles||[],languages:e,exporters:this.state.exporters,updateProfiles:this.updateProfiles,organization:t?t.key:null})},e.prototype.render=function(){return a.createElement("div",{className:"page page-limited"},a.createElement(p.a,{suggestions:"quality_profiles"}),a.createElement(s.a,{organization:this.props.organization,title:Object(u.translate)("quality_profiles.page")}),this.renderChild())},e}(a.PureComponent);e.default=Object(o.connect)((function(t,e){return{languages:Object(i.getLanguages)(t),organization:e.params.organizationKey?Object(i.getOrganizationByKey)(t,e.params.organizationKey):void 0}}))(g)},680:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r,o=n(13),i=n(705),a=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function u(t){var e=t.suggestions;return o.createElement(i.a.Consumer,null,(function(t){var n=t.addSuggestions,r=t.removeSuggestions;return o.createElement(c,{addSuggestions:n,removeSuggestions:r,suggestions:e})}))}var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a(e,t),e.prototype.componentDidMount=function(){this.props.addSuggestions(this.props.suggestions)},e.prototype.componentDidUpdate=function(t){t.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(t.suggestions))},e.prototype.componentWillUnmount=function(){this.props.removeSuggestions(this.props.suggestions)},e.prototype.render=function(){return null},e}(o.PureComponent)},703:function(t,e,n){var r=n(724),o=n(690),i=n(779),a=n(709);t.exports=function(t,e){return(a(t)?r:i)(t,o(e,3))}},707:function(t,e,n){"use strict";n.d(e,"A",(function(){return p})),n.d(e,"s",(function(){return s})),n.d(e,"j",(function(){return l})),n.d(e,"y",(function(){return f})),n.d(e,"r",(function(){return g})),n.d(e,"q",(function(){return d})),n.d(e,"C",(function(){return y})),n.d(e,"x",(function(){return h})),n.d(e,"i",(function(){return m})),n.d(e,"l",(function(){return b})),n.d(e,"g",(function(){return O})),n.d(e,"t",(function(){return q})),n.d(e,"u",(function(){return j})),n.d(e,"o",(function(){return v})),n.d(e,"n",(function(){return x})),n.d(e,"p",(function(){return _})),n.d(e,"h",(function(){return z})),n.d(e,"d",(function(){return S})),n.d(e,"m",(function(){return P})),n.d(e,"B",(function(){return w})),n.d(e,"z",(function(){return N})),n.d(e,"c",(function(){return k})),n.d(e,"w",(function(){return J})),n.d(e,"b",(function(){return E})),n.d(e,"v",(function(){return C})),n.d(e,"e",(function(){return K})),n.d(e,"f",(function(){return D})),n.d(e,"a",(function(){return U})),n.d(e,"k",(function(){return A}));var r=n(703),o=n.n(r),i=n(818),a=n(51),u=n(670),c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function p(t){return Object(a.getJSON)("/api/qualityprofiles/search",t).catch(u.a)}function s(t){var e=t.compareToSonarWay,n=t.profile.key;return Object(a.getJSON)("/api/qualityprofiles/show",{compareToSonarWay:e,key:n})}function l(t){return Object(a.postJSON)("/api/qualityprofiles/create",t).catch(u.a)}function f(t){return Object(a.postJSON)("/api/qualityprofiles/restore",t).catch(u.a)}function g(t){return Object(a.getJSON)("/api/qualityprofiles/projects",t).catch(u.a)}function d(t){var e=t.language,n=t.name,r=t.organization;return Object(a.getJSON)("/api/qualityprofiles/inheritance",{language:e,qualityProfile:n,organization:r}).catch(u.a)}function y(t){var e=t.language,n=t.name,r=t.organization;return Object(a.post)("/api/qualityprofiles/set_default",{language:e,qualityProfile:n,organization:r})}function h(t,e){return Object(a.post)("/api/qualityprofiles/rename",{key:t,name:e}).catch(u.a)}function m(t,e){return Object(a.postJSON)("/api/qualityprofiles/copy",{fromKey:t,toName:e}).catch(u.a)}function b(t){var e=t.language,n=t.name,r=t.organization;return Object(a.post)("/api/qualityprofiles/delete",{language:e,qualityProfile:n,organization:r}).catch(u.a)}function O(t,e){var n=t.language,r=t.name,o=t.organization;return Object(a.post)("/api/qualityprofiles/change_parent",{language:n,qualityProfile:r,organization:o,parentQualityProfile:e?e.name:void 0}).catch(u.a)}function q(t){var e=t.language,n=t.name,r=t.organization;return"/api/qualityprofiles/backup?"+Object.entries({language:e,qualityProfile:n,organization:r}).map((function(t){var e=t[0],n=t[1];return e+"="+encodeURIComponent(n)})).join("&")}function j(t,e){var n=t.key,r=e.language,o=e.name,i=e.organization;return"/api/qualityprofiles/export?"+Object.entries({exporterKey:n,language:r,qualityProfile:o,organization:i}).map((function(t){var e=t[0],n=t[1];return e+"="+encodeURIComponent(n)})).join("&")}function v(){return Object(a.getJSON)("/api/qualityprofiles/importers").then((function(t){return t.importers}),u.a)}function x(){return Object(a.getJSON)("/api/qualityprofiles/exporters").then((function(t){return t.exporters}))}function _(t,e,n,r){var o=n.language,i=n.name,u=n.organization;return Object(a.getJSON)("/api/qualityprofiles/changelog",{since:t,to:e,language:o,qualityProfile:i,organization:u,p:r})}function z(t,e){return Object(a.getJSON)("/api/qualityprofiles/compare",{leftKey:t,rightKey:e})}function S(t,e){var n=t.language,r=t.name,o=t.organization;return Object(a.post)("/api/qualityprofiles/add_project",{language:n,qualityProfile:r,organization:o,project:e}).catch(u.a)}function P(t,e){var n=t.language,r=t.name,o=t.organization;return Object(a.post)("/api/qualityprofiles/remove_project",{language:n,qualityProfile:r,organization:o,project:e}).catch(u.a)}function w(t){return Object(a.getJSON)("/api/qualityprofiles/search_users",t).catch(u.a)}function N(t){return Object(a.getJSON)("/api/qualityprofiles/search_groups",t).catch(u.a)}function k(t){return Object(a.post)("/api/qualityprofiles/add_user",t).catch(u.a)}function J(t){return Object(a.post)("/api/qualityprofiles/remove_user",t).catch(u.a)}function E(t){return Object(a.post)("/api/qualityprofiles/add_group",t).catch(u.a)}function C(t){return Object(a.post)("/api/qualityprofiles/remove_group",t).catch(u.a)}function K(t){return Object(a.postJSON)("/api/qualityprofiles/activate_rules",t)}function D(t){return Object(a.postJSON)("/api/qualityprofiles/deactivate_rules",t)}function U(t){var e=t.params&&o()(t.params,(function(t,e){return e+"="+Object(i.csvEscape)(t)})).join(";");return Object(a.post)("/api/qualityprofiles/activate_rule",c(c({},t),{params:e})).catch(u.a)}function A(t){return Object(a.post)("/api/qualityprofiles/deactivate_rule",t).catch(u.a)}},818:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.csvEscape=function(t){return'"'+t.replace(/"/g,'\\"')+'"'}}}]);
//# sourceMappingURL=349.1588858339197.chunk.js.map