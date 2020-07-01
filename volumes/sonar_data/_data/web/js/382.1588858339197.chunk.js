(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1218:function(e,t,a){var n=a(865),r=a(763),i=a(690),o=a(793),s=a(811),c=a(1045),l=o((function(e,t){var a=c(t);return s(a)&&(a=void 0),s(e)?n(e,r(t,1,s,!0),i(a,2)):[]}));e.exports=l},2266:function(e,t,a){"use strict";a.r(t),a.d(t,"PullRequestOverview",(function(){return A}));var n=a(770),r=a.n(n),i=a(1218),o=a.n(i),s=a(658),c=a(13),l=a(666),m=a(671),u=a.n(m),d=a(674),v=a(37),p=a(758),f=a(888),h=a(696),b=a(678),g=a(694),y=a(764),w=a(668),E=a(1590),N=a(1591),O=a(1592),_=a(1602),j=(a(1589),a(999)),k=a(667);var x=c.memo((function(e){var t=e.className,a=e.measures,n=e.type,r=Object(j.j)(n),i=Object(g.findMeasure)(a,r);return i&&void 0!==i.value?c.createElement("div",{className:s(t,"display-flex-center")},c.createElement("span",{className:"huge"},Object(k.formatMeasure)(i.value,"PERCENT")),c.createElement("span",{className:"label flex-1 spacer-left text-right"},Object(v.translate)("component_measures.facet_category.overall_category.estimated"))):null})),D=a(653),B=a(663),C=a(717),M=a.n(C),R=a(681),q=a(669);var L,S=c.memo((function(e){var t=e.component,a=e.level,n="OK"===a,r=void 0===t.qualityGate?Object(q.w)():Object(q.v)(t.qualityGate.key);return c.createElement("div",{className:s("overview-quality-gate-badge-large small",{failed:!n,success:n})},c.createElement("div",{className:"display-flex-center"},c.createElement("span",null,Object(v.translate)("overview.on_new_code_long")),c.createElement(u.a,{className:"little-spacer-left",overlay:c.createElement(D.FormattedMessage,{defaultMessage:Object(v.translate)("overview.quality_gate.conditions_on_new_code"),id:"overview.quality_gate.conditions_on_new_code",values:{link:c.createElement(B.Link,{to:r},Object(v.translate)("overview.quality_gate"))}})},c.createElement(M.a,{fill:R.colors.transparentWhite,size:12}))),void 0!==a&&c.createElement("h3",{className:"huge-spacer-top huge"},Object(v.translate)("metric.level",a)))})),P=(L=function(e,t){return(L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)},function(e,t){function a(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),W=function(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,r++)n[r]=i[o];return n},A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={loading:!1,measures:[]},t.conditionsHaveChanged=function(e){var a,n,r=null!==(a=e.conditions)&&void 0!==a?a:[],i=null!==(n=t.props.conditions)&&void 0!==n?n:[],s=o()(r.filter((function(e){return"ERROR"===e.level})),i.filter((function(e){return"ERROR"===e.level})),(function(e){return e.metric}));return void 0===e.conditions&&void 0!==t.props.conditions||s.length>0},t.fetchBranchStatusData=function(){var e=t.props,a=e.branchLike,n=e.component.key;t.props.fetchBranchStatus(a,n)},t.fetchBranchData=function(){var e=t.props,a=e.branchLike,n=e.component.key,i=e.conditions;t.setState({loading:!0});var o=void 0!==i?r()(W(j.e,i.filter((function(e){return"OK"!==e.level})).map((function(e){return e.metric})))):j.e;Object(f.f)(n,o,Object(b.d)(a)).then((function(e){var a=e.component,n=e.metrics;t.mounted&&a.measures&&t.setState({loading:!1,measures:Object(g.enhanceMeasuresWithMetrics)(a.measures||[],n)})}),(function(){t.mounted&&t.setState({loading:!1})}))},t}return P(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,void 0===this.props.conditions?this.fetchBranchStatusData():this.fetchBranchData()},t.prototype.componentDidUpdate=function(e){this.conditionsHaveChanged(e)&&this.fetchBranchData()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.branchLike,n=e.component,r=e.conditions,i=e.ignoredConditions,o=e.status,l=this.state,m=l.loading,f=l.measures;if(m)return c.createElement("div",{className:"page page-limited"},c.createElement("i",{className:"spinner"}));if(void 0===r)return null;var b=r.filter((function(e){return"ERROR"===e.level})).map((function(e){return Object(g.enhanceConditionWithMeasure)(e,f)})).filter(p.isDefined);return c.createElement("div",{className:"page page-limited"},c.createElement("div",{className:s("pr-overview",{"has-conditions":b.length>0})},i&&c.createElement(d.Alert,{className:"big-spacer-bottom",display:"inline",variant:"info"},c.createElement("span",{className:"text-middle"},Object(v.translate)("overview.quality_gate.ignored_conditions")),c.createElement(u.a,{className:"spacer-left",overlay:Object(v.translate)("overview.quality_gate.ignored_conditions.tooltip")})),c.createElement("div",{className:"display-flex-row"},c.createElement("div",{className:"big-spacer-right"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(v.translate)("overview.quality_gate"),c.createElement(h.a,{className:"spacer-left",doc:Promise.resolve().then(a.bind(null,1593))})),c.createElement(S,{component:n,level:o})),b.length>0&&c.createElement("div",{className:"pr-overview-failed-conditions big-spacer-right"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(v.translate)("overview.failed_conditions")),c.createElement(_.b,{branchLike:t,collapsible:!0,component:n,failedConditions:b})),c.createElement("div",{className:"flex-1"},c.createElement("h2",{className:"overview-panel-title spacer-bottom small"},Object(v.translate)("overview.measures")),c.createElement("div",{className:"overview-panel-content"},[j.b.Bug,j.b.Vulnerability,j.b.SecurityHotspot,j.b.CodeSmell].map((function(e){return c.createElement("div",{className:"overview-measures-row display-flex-row",key:e},c.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},c.createElement(E.a,{branchLike:t,component:n,measures:f,type:e,useDiffMetric:!0})),c.createElement("div",{className:"overview-panel-big-padded overview-measures-aside display-flex-center"},c.createElement(N.a,{branchLike:t,component:n,measures:f,type:e,useDiffMetric:!0})))})),[j.d.Coverage,j.d.Duplication].map((function(e){return c.createElement("div",{className:"overview-measures-row display-flex-row",key:e},c.createElement("div",{className:"overview-panel-big-padded flex-1 small display-flex-center"},c.createElement(O.a,{branchLike:t,component:n,measures:f,type:e,useDiffMetric:!0})),c.createElement(x,{className:"overview-panel-big-padded overview-measures-aside text-right overview-measures-emphasis",measures:f,type:e}))})))))))},t}(c.PureComponent),H={fetchBranchStatus:y.c};t.default=Object(l.connect)((function(e,t){var a=t.branchLike,n=t.component,r=Object(w.getBranchStatusByBranchLike)(e,n.key,a);return{conditions:r.conditions,ignoredConditions:r.ignoredConditions,status:r.status}}),H)(A)}}]);
//# sourceMappingURL=382.1588858339197.chunk.js.map