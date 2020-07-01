(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{1897:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return U}));var r=n(2),a=n(328),s=n(358),o=n.n(s),i=n(5),l=n(540),c=n(331),m=n(325),u=n(316),d=n.n(u),p=n(310),h=n(340),b=n.n(h),g=n(334),f=n.n(g),C=n(662);class E extends r.PureComponent{constructor(e){super(e),this.mounted=!1,this.handleSubmit=()=>this.state.metricKey?this.props.onSubmit({description:this.state.description,metricKey:this.state.metricKey,value:this.state.value}).then(this.props.onClose):Promise.reject(void 0),this.fetchCustomMetrics=()=>{this.setState({loading:!0}),Object(C.c)({isCustom:!0}).then(e=>{this.mounted&&this.setState({loading:!1,metrics:e})},()=>{this.mounted&&this.setState({loading:!1})})},this.handleMetricSelect=({value:e})=>{this.setState({metricKey:e})},this.handleDescriptionChange=e=>{this.setState({description:e.currentTarget.value})},this.handleValueChange=e=>{this.setState({value:e.currentTarget.value})},this.renderMetricSelect=e=>e.length||this.state.loading?r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-metric"},Object(i.translate)("custom_measures.metric"),r.createElement("em",{className:"mandatory"},"*")),this.state.loading?r.createElement("i",{className:"spinner"}):r.createElement(b.a,{autoFocus:!0,clearable:!1,id:"create-custom-measure-metric",onChange:this.handleMetricSelect,options:e,value:this.state.metricKey})):r.createElement(m.Alert,{variant:"warning"},Object(i.translate)("custom_measures.all_metrics_taken")),this.state={description:e.measure&&e.measure.description||"",loading:!1,metricKey:e.measure&&e.measure.metric.key,value:e.measure&&e.measure.value||""}}componentDidMount(){this.mounted=!0,this.props.measure||this.fetchCustomMetrics()}componentWillUnmount(){this.mounted=!1}render(){const{skipMetrics:e=[]}=this.props,{metrics:t=[]}=this.state,n=t.filter(t=>!e.includes(t.key)).map(e=>({label:e.name,value:e.key})),a=!this.props.measure&&!n.length;return r.createElement(f.a,{header:this.props.header,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},({onCloseClick:e,onFormSubmit:t,submitting:s})=>r.createElement("form",{onSubmit:t},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,this.props.header)),r.createElement("div",{className:"modal-body"},!this.props.measure&&this.renderMetricSelect(n),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-value"},Object(i.translate)("value"),r.createElement("em",{className:"mandatory"},"*")),r.createElement("input",{autoFocus:void 0!==this.props.measure,id:"create-custom-measure-value",maxLength:200,name:"value",onChange:this.handleValueChange,required:!0,type:"text",value:this.state.value})),r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"create-custom-measure-description"},Object(i.translate)("description")),r.createElement("textarea",{id:"create-custom-measure-description",name:"description",onChange:this.handleDescriptionChange,value:this.state.description}))),r.createElement("footer",{className:"modal-foot"},r.createElement(d.a,{className:"spacer-right",loading:s}),r.createElement(p.SubmitButton,{disabled:a||s,id:"create-custom-measure-submit"},this.props.confirmButtonText),r.createElement(p.ResetButtonLink,{disabled:s,id:"create-custom-measure-cancel",onClick:e},Object(i.translate)("cancel")))))}}class O extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={modal:!1},this.handleClick=()=>{this.setState({modal:!0})},this.handleClose=()=>{this.mounted&&this.setState({modal:!1})}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){return r.createElement(r.Fragment,null,r.createElement(p.Button,{id:"custom-measures-create",onClick:this.handleClick},Object(i.translate)("create")),this.state.modal&&r.createElement(E,{confirmButtonText:Object(i.translate)("create"),header:Object(i.translate)("custom_measures.create_custom_measure"),onClose:this.handleClose,onSubmit:this.props.onCreate,skipMetrics:this.props.skipMetrics}))}}function y({loading:e,onCreate:t,skipMetrics:n}){return r.createElement("header",{className:"page-header",id:"custom-measures-header"},r.createElement("h1",{className:"page-title"},Object(i.translate)("custom_measures.page")),r.createElement(d.a,{loading:e}),r.createElement("div",{className:"page-actions"},r.createElement(O,{onCreate:t,skipMetrics:n})),r.createElement("div",{className:"page-description"},r.createElement(m.Alert,{display:"inline",variant:"error"},Object(i.translate)("custom_measures.deprecated")),r.createElement("p",null,Object(i.translate)("custom_measures.page.description"))))}var v=n(326),j=n.n(v),_=n(380),S=n.n(_),N=n(315),w=n.n(N),k=n(318),P=n(333);function D({measure:e,onClose:t,onSubmit:n}){const a=Object(i.translate)("custom_measures.delete_custom_measure");return r.createElement(f.a,{header:a,onClose:t,onSubmit:n},({onCloseClick:t,onFormSubmit:n,submitting:s})=>r.createElement("form",{onSubmit:n},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,a)),r.createElement("div",{className:"modal-body"},Object(i.translateWithParameters)("custom_measures.delete_custom_measure.confirmation",e.metric.name)),r.createElement("footer",{className:"modal-foot"},r.createElement(d.a,{className:"spacer-right",loading:s}),r.createElement(p.SubmitButton,{className:"button-red",disabled:s},Object(i.translate)("delete")),r.createElement(p.ResetButtonLink,{disabled:s,onClick:t},Object(i.translate)("cancel")))))}var M=n(351),F=n.n(M);function x({measure:e}){return e.updatedAt?r.createElement(r.Fragment,null,Object(i.translate)("updated_on")," ",r.createElement("span",{className:"js-custom-measure-created-at"},r.createElement(F.a,{date:e.updatedAt}))):e.createdAt?r.createElement(r.Fragment,null,Object(i.translate)("created_on")," ",r.createElement("span",{className:"js-custom-measure-created-at"},r.createElement(F.a,{date:e.createdAt}))):r.createElement(r.Fragment,null,Object(i.translate)("created"))}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class B extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={deleteForm:!1,editForm:!1},this.handleEditClick=()=>{this.setState({editForm:!0})},this.handleDeleteClick=()=>{this.setState({deleteForm:!0})},this.closeEditForm=()=>{this.mounted&&this.setState({editForm:!1})},this.closeDeleteForm=()=>{this.mounted&&this.setState({deleteForm:!1})},this.handleEditFormSubmit=e=>this.props.onEdit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:this.props.measure.id},e)),this.handleDeleteFormSubmit=()=>this.props.onDelete(this.props.measure.id)}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{measure:e}=this.props,t=e.user.name||e.user.login;return r.createElement("tr",{"data-metric":e.metric.key},r.createElement("td",{className:"nowrap"},r.createElement("div",null,r.createElement("span",{className:"js-custom-measure-metric-name"},e.metric.name),e.pending&&r.createElement(w.a,{overlay:Object(i.translate)("custom_measures.pending_tooltip")},r.createElement("span",{className:"js-custom-measure-pending badge badge-warning spacer-left"},Object(i.translate)("custom_measures.pending")))),r.createElement("span",{className:"js-custom-measure-domain note"},e.metric.domain)),r.createElement("td",{className:"nowrap"},r.createElement("strong",{className:"js-custom-measure-value"},Object(k.formatMeasure)(e.value,e.metric.type))),r.createElement("td",null,r.createElement("span",{className:"js-custom-measure-description"},e.description)),r.createElement("td",null,r.createElement(x,{measure:e})," ",Object(i.translate)("by_")," ",r.createElement("span",{className:"js-custom-measure-user"},Object(P.c)(e.user)?t:Object(i.translateWithParameters)("user.x_deleted",t))),r.createElement("td",{className:"thin nowrap"},r.createElement(S.a,null,r.createElement(_.ActionsDropdownItem,{className:"js-custom-measure-update",onClick:this.handleEditClick},Object(i.translate)("update_verb")),r.createElement(_.ActionsDropdownDivider,null),r.createElement(_.ActionsDropdownItem,{className:"js-custom-measure-delete",destructive:!0,onClick:this.handleDeleteClick},Object(i.translate)("delete")))),this.state.editForm&&r.createElement(E,{confirmButtonText:Object(i.translate)("update_verb"),header:Object(i.translate)("custom_measures.update_custom_measure"),measure:this.props.measure,onClose:this.closeEditForm,onSubmit:this.handleEditFormSubmit}),this.state.deleteForm&&r.createElement(D,{measure:this.props.measure,onClose:this.closeDeleteForm,onSubmit:this.handleDeleteFormSubmit}))}}function T({measures:e,onDelete:t,onEdit:n}){return r.createElement("div",{className:"boxed-group boxed-group-inner",id:"custom-measures-list"},e.length>0?r.createElement("table",{className:"data zebra zebra-hover"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,Object(i.translate)("custom_measures.metric")),r.createElement("th",null,Object(i.translate)("value")),r.createElement("th",null,Object(i.translate)("description")),r.createElement("th",null,Object(i.translate)("date")),r.createElement("th",null))),r.createElement("tbody",null,j()(e,e=>e.metric.name.toLowerCase()).map(e=>r.createElement(B,{key:e.id,measure:e,onDelete:t,onEdit:n})))):r.createElement("p",null,Object(i.translate)("no_results")))}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class U extends r.PureComponent{constructor(){super(...arguments),this.mounted=!1,this.state={loading:!0},this.fetchMeasures=()=>{this.setState({loading:!0}),Object(l.c)({projectKey:this.props.component.key,ps:50}).then(({customMeasures:e,paging:t})=>{this.mounted&&this.setState({loading:!1,measures:e,paging:t})},this.stopLoading)},this.fetchMore=()=>{const{paging:e}=this.state;e&&(this.setState({loading:!0}),Object(l.c)({projectKey:this.props.component.key,p:e.pageIndex+1,ps:50}).then(({customMeasures:e,paging:t})=>{this.mounted&&this.setState(({measures:n=[]})=>({loading:!1,measures:[...n,...e],paging:t}))},this.stopLoading))},this.stopLoading=()=>{this.mounted&&this.setState({loading:!1})},this.handleCreate=e=>Object(l.a)(W({},e,{projectKey:this.props.component.key})).then(e=>{this.mounted&&this.setState(({measures:t=[],paging:n})=>({measures:[...t,e],paging:n&&W({},n,{total:n.total+1})}))}),this.handleEdit=e=>Object(l.i)(e).then(()=>{this.mounted&&this.setState(({measures:t=[]})=>({measures:t.map(t=>t.id===e.id?W({},t,{},e):t)}))}),this.handleDelete=e=>Object(l.b)({id:e}).then(()=>{this.mounted&&this.setState(({measures:t=[],paging:n})=>({measures:t.filter(t=>t.id!==e),paging:n&&W({},n,{total:n.total-1})}))})}componentDidMount(){this.mounted=!0,this.fetchMeasures()}componentWillUnmount(){this.mounted=!1}render(){const{loading:e,measures:t,paging:n}=this.state;return r.createElement(r.Fragment,null,r.createElement(c.a,{suggestions:"custom_measures"}),r.createElement(a.a,{title:Object(i.translate)("custom_measures.page")}),r.createElement("div",{className:"page page-limited"},r.createElement(y,{loading:e,onCreate:this.handleCreate,skipMetrics:t&&t.map(e=>e.metric.key)}),t&&r.createElement(T,{measures:t,onDelete:this.handleDelete,onEdit:this.handleEdit}),t&&n&&r.createElement(o.a,{count:t.length,loadMore:this.fetchMore,ready:!e,total:n.total})))}}},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=n(357);function s({suggestions:e}){return r.createElement(a.a.Consumer,null,({addSuggestions:t,removeSuggestions:n})=>r.createElement(o,{addSuggestions:t,removeSuggestions:n,suggestions:e}))}class o extends r.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(e){e.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(e.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}},334:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=this&&this.__assign||function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(327),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={submitting:!1},t.stopSubmitting=function(){t.mounted&&t.setState({submitting:!1})},t.handleCloseClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.props.onClose()},t.handleFormSubmit=function(e){e.preventDefault(),t.submit()},t.handleSubmitClick=function(e){e&&(e.preventDefault(),e.currentTarget.blur()),t.submit()},t.submit=function(){var e=t.props.onSubmit();e&&(t.setState({submitting:!0}),e.then(t.stopSubmitting,t.stopSubmitting))},t}return a(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.header,r=e.onClose,a=(e.onSubmit,o(e,["children","header","onClose","onSubmit"]));return i.createElement(l.default,s({contentLabel:n,onRequestClose:r},a),t({onCloseClick:this.handleCloseClick,onFormSubmit:this.handleFormSubmit,onSubmitClick:this.handleSubmitClick,submitting:this.state.submitting}))},t}(i.Component);t.default=c},351:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),s=n(304),o=n(28);t.formatterOption={year:"numeric",month:"short",day:"2-digit"},t.longFormatterOption={year:"numeric",month:"long",day:"numeric"},t.default=function(e){var n=e.children,i=e.date,l=e.long;return a.createElement(s.FormattedDate,r({value:o.parseDate(i)},l?t.longFormatterOption:t.formatterOption),n)}},358:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var a=n(309),s=n(2),o=n(5),i=n(318),l=n(316);t.default=function(e){var t,n=e.ready,c=void 0===n||n,m=r(e,["ready"]),u=m.total&&m.total>m.count,d=s.createElement("a",{className:"spacer-left","data-test":"show-more",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),m.loadMore&&m.loadMore()}},o.translate("show_more")),p=s.createElement("a",{className:"spacer-left","data-test":"reload",href:"#",onClick:function(e){e.preventDefault(),e.currentTarget.blur(),m.reload&&m.reload()}},o.translate("reload")),h=a("spacer-top note text-center",{"new-loading":!c},m.className);return m.needReload&&m.reload?t=p:u&&m.loadMore&&(t=d),s.createElement("footer",{className:h},o.translateWithParameters("x_of_y_shown",i.formatMeasure(m.count,"INT",null),i.formatMeasure(m.total,"INT",null)),t,m.loading&&s.createElement(l.default,{className:"text-bottom spacer-left position-absolute"}))}},380:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var s=n(309),o=n(2),i=n(29),l=n(5),c=n(330),m=n(381),u=n(310),d=n(377),p=n(324),h=n(315);t.default=function(e){var t=e.children,n=e.className,r=e.overlayPlacement,a=e.small,i=e.toggleClassName;return o.createElement(p.default,{className:n,onOpen:e.onOpen,overlay:o.createElement("ul",{className:"menu"},t),overlayPlacement:r},o.createElement(u.Button,{className:s("dropdown-toggle",i,{"button-small":a})},o.createElement(m.default,{size:a?12:14}),o.createElement(c.default,{className:"little-spacer-left"})))};var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(e){e.preventDefault(),e.currentTarget.blur(),t.props.onClick&&t.props.onClick()},t}return a(t,e),t.prototype.render=function(){var e=this,t=s(this.props.className,{"text-danger":this.props.destructive});return this.props.download&&"string"==typeof this.props.to?o.createElement("li",null,o.createElement("a",{className:t,download:this.props.download,href:this.props.to,id:this.props.id},this.props.children)):this.props.to?o.createElement("li",null,o.createElement(i.Link,{className:t,id:this.props.id,to:this.props.to},this.props.children)):this.props.copyValue?o.createElement(d.ClipboardBase,null,(function(n){var r=n.setCopyButton,a=n.copySuccess;return o.createElement(h.default,{overlay:l.translate("copied_action"),visible:a},o.createElement("li",{"data-clipboard-text":e.props.copyValue,ref:r},o.createElement("a",{className:t,href:"#",id:e.props.id,onClick:e.handleClick},e.props.children)))})):o.createElement("li",null,o.createElement("a",{className:t,href:"#",id:this.props.id,onClick:this.handleClick},this.props.children))},t}(o.PureComponent);t.ActionsDropdownItem=b,t.ActionsDropdownDivider=function(){return o.createElement("li",{className:"divider"})}},381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=n(313);t.default=function(e){var t=e.className,n=e.fill,s=void 0===n?"currentColor":n,o=e.size,i=void 0===o?14:o;return r.createElement(a.default,{className:t,size:i,viewBox:"0 0 14 14"},r.createElement("g",{transform:"matrix(0.0364583,0,0,0.0364583,0,-1.16667)"},r.createElement("path",{d:"M256,224C256,206.333 249.75,191.25 237.25,178.75C224.75,166.25 209.667,160 192,160C174.333,160 159.25,166.25 146.75,178.75C134.25,191.25 128,206.333 128,224C128,241.667 134.25,256.75 146.75,269.25C159.25,281.75 174.333,288 192,288C209.667,288 224.75,281.75 237.25,269.25C249.75,256.75 256,241.667 256,224ZM384,196.75L384,252.25C384,254.25 383.333,256.167 382,258C380.667,259.833 379,260.917 377,261.25L330.75,268.25C327.583,277.25 324.333,284.833 321,291C326.833,299.333 335.75,310.833 347.75,325.5C349.417,327.5 350.25,329.583 350.25,331.75C350.25,333.917 349.5,335.833 348,337.5C343.5,343.667 335.25,352.667 323.25,364.5C311.25,376.333 303.417,382.25 299.75,382.25C297.75,382.25 295.583,381.5 293.25,380L258.75,353C251.417,356.833 243.833,360 236,362.5C233.333,385.167 230.917,400.667 228.75,409C227.583,413.667 224.583,416 219.75,416L164.25,416C161.917,416 159.875,415.292 158.125,413.875C156.375,412.458 155.417,410.667 155.25,408.5L148.25,362.5C140.083,359.833 132.583,356.75 125.75,353.25L90.5,380C88.833,381.5 86.75,382.25 84.25,382.25C81.917,382.25 79.833,381.333 78,379.5C57,360.5 43.25,346.5 36.75,337.5C35.583,335.833 35,333.917 35,331.75C35,329.75 35.667,327.833 37,326C39.5,322.5 43.75,316.958 49.75,309.375C55.75,301.792 60.25,295.917 63.25,291.75C58.75,283.417 55.333,275.167 53,267L7.25,260.25C5.083,259.917 3.333,258.875 2,257.125C0.667,255.375 0,253.417 0,251.25L0,195.75C0,193.75 0.667,191.833 2,190C3.333,188.167 4.917,187.083 6.75,186.75L53.25,179.75C55.583,172.083 58.833,164.417 63,156.75C56.333,147.25 47.417,135.75 36.25,122.25C34.583,120.25 33.75,118.25 33.75,116.25C33.75,114.583 34.5,112.667 36,110.5C40.333,104.5 48.542,95.542 60.625,83.625C72.708,71.708 80.583,65.75 84.25,65.75C86.417,65.75 88.583,66.583 90.75,68.25L125.25,95C132.583,91.167 140.167,88 148,85.5C150.667,62.833 153.083,47.333 155.25,39C156.417,34.333 159.417,32 164.25,32L219.75,32C222.083,32 224.125,32.708 225.875,34.125C227.625,35.542 228.583,37.333 228.75,39.5L235.75,85.5C243.917,88.167 251.417,91.25 258.25,94.75L293.75,68C295.25,66.5 297.25,65.75 299.75,65.75C301.917,65.75 304,66.583 306,68.25C327.5,88.083 341.25,102.25 347.25,110.75C348.417,112.083 349,113.917 349,116.25C349,118.25 348.333,120.167 347,122C344.5,125.5 340.25,131.042 334.25,138.625C328.25,146.208 323.75,152.083 320.75,156.25C325.083,164.583 328.5,172.75 331,180.75L376.75,187.75C378.917,188.083 380.667,189.125 382,190.875C383.333,192.625 384,194.583 384,196.75Z",style:{fill:s}})))}}}]);
//# sourceMappingURL=345.m.9905f040.chunk.js.map