(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(13),r=n(662);t.default=function(e){var t=e.className,n=e.fill,i=e.size,a=void 0===i?36:i;return o.createElement(r.ThemedIcon,{className:t,size:a,viewBox:"0 0 36 36"},(function(e){var t=e.theme;return o.createElement("g",{transform:"matrix(0.0625,0,0,0.0625,3,4)"},o.createElement("path",{d:"M148.25,224C121.25,224.833 99.167,235.5 82,256L48.5,256C34.833,256 23.333,252.625 14,245.875C4.667,239.125 0,229.25 0,216.25C0,157.417 10.333,128 31,128C32,128 35.625,129.75 41.875,133.25C48.125,136.75 56.25,140.292 66.25,143.875C76.25,147.458 86.167,149.25 96,149.25C107.167,149.25 118.25,147.333 129.25,143.5C128.417,149.667 128,155.167 128,160C128,183.167 134.75,204.5 148.25,224ZM416,383.25C416,403.25 409.917,419.042 397.75,430.625C385.583,442.208 369.417,448 349.25,448L130.75,448C110.583,448 94.417,442.208 82.25,430.625C70.083,419.042 64,403.25 64,383.25C64,374.417 64.292,365.792 64.875,357.375C65.458,348.958 66.625,339.875 68.375,330.125C70.125,320.375 72.333,311.333 75,303C77.667,294.667 81.25,286.542 85.75,278.625C90.25,270.708 95.417,263.958 101.25,258.375C107.083,252.792 114.208,248.333 122.625,245C131.042,241.667 140.333,240 150.5,240C152.167,240 155.75,241.792 161.25,245.375C166.75,248.958 172.833,252.958 179.5,257.375C186.167,261.792 195.083,265.792 206.25,269.375C217.417,272.958 228.667,274.75 240,274.75C251.333,274.75 262.583,272.958 273.75,269.375C284.917,265.792 293.833,261.792 300.5,257.375C307.167,252.958 313.25,248.958 318.75,245.375C324.25,241.792 327.833,240 329.5,240C339.667,240 348.958,241.667 357.375,245C365.792,248.333 372.917,252.792 378.75,258.375C384.583,263.958 389.75,270.708 394.25,278.625C398.75,286.542 402.333,294.667 405,303C407.667,311.333 409.875,320.375 411.625,330.125C413.375,339.875 414.542,348.958 415.125,357.375C415.708,365.792 416,374.417 416,383.25ZM160,64C160,81.667 153.75,96.75 141.25,109.25C128.75,121.75 113.667,128 96,128C78.333,128 63.25,121.75 50.75,109.25C38.25,96.75 32,81.667 32,64C32,46.333 38.25,31.25 50.75,18.75C63.25,6.25 78.333,0 96,0C113.667,0 128.75,6.25 141.25,18.75C153.75,31.25 160,46.333 160,64ZM336,160C336,186.5 326.625,209.125 307.875,227.875C289.125,246.625 266.5,256 240,256C213.5,256 190.875,246.625 172.125,227.875C153.375,209.125 144,186.5 144,160C144,133.5 153.375,110.875 172.125,92.125C190.875,73.375 213.5,64 240,64C266.5,64 289.125,73.375 307.875,92.125C326.625,110.875 336,133.5 336,160ZM480,216.25C480,229.25 475.333,239.125 466,245.875C456.667,252.625 445.167,256 431.5,256L398,256C380.833,235.5 358.75,224.833 331.75,224C345.25,204.5 352,183.167 352,160C352,155.167 351.583,149.667 350.75,143.5C361.75,147.333 372.833,149.25 384,149.25C393.833,149.25 403.75,147.458 413.75,143.875C423.75,140.292 431.875,136.75 438.125,133.25C444.375,129.75 448,128 449,128C469.667,128 480,157.417 480,216.25ZM448,64C448,81.667 441.75,96.75 429.25,109.25C416.75,121.75 401.667,128 384,128C366.333,128 351.25,121.75 338.75,109.25C326.25,96.75 320,81.667 320,64C320,46.333 326.25,31.25 338.75,18.75C351.25,6.25 366.333,0 384,0C401.667,0 416.75,6.25 429.25,18.75C441.75,31.25 448,46.333 448,64Z",style:{fill:n||t.colors.gray67}}))}))}},1039:function(e,t,n){"use strict";var o=n(13),r=n(653),i=n(663),a=n(659),s=n(846),l=n.n(s),c=n(37),p=n(51),u=n(670);function m(){return Object(p.getJSON)("/api/billing/show_subscription_plans").then((function(e){return e.subscriptionPlans}),u.a)}var d=n(926),f=n(808),g=n.n(f),h=n(681);function b(){return o.createElement("ul",{className:"note"},o.createElement(y,null,Object(c.translate)("billing.upgrade_box.unlimited_private_projects")),o.createElement(y,null,Object(c.translate)("billing.upgrade_box.strict_control_private_data")),o.createElement(y,null,Object(c.translate)("billing.upgrade_box.cancel_anytime")),o.createElement(y,null,o.createElement("strong",null,Object(c.translateWithParameters)("billing.upgrade_box.free_trial_x",14))))}function y(e){var t=e.children;return o.createElement("li",{className:"display-flex-center little-spacer-bottom"},o.createElement(g.a,{className:"spacer-right",fill:h.colors.lightGreen}),t)}var v,_=n(676),C=n.n(_),P=n(665),O=n.n(P),j=n(727),E=n(747),T=(v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),w=function(){return(w=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return T(t,e),t.prototype.render=function(){var e=window.SonarBilling.BillingForm;return o.createElement(e,w({},this.props))},t}(o.Component),k=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),z=Object(j.a)(S),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={ready:!1},t}return k(t,e),t.prototype.componentDidMount=function(){var e=this;this.mounted=!0,Object(E.a)("billing/billing").then((function(){e.mounted&&e.setState({ready:!0})}),(function(){}))},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=Object(c.translate)("billing.upgrade_box.upgrade_to_paid_plan");return this.state.ready?o.createElement(C.a,{contentLabel:t,noBackdrop:this.props.insideModal,onRequestClose:this.props.onClose,shouldCloseOnOverlayClick:!1,size:"medium"},o.createElement("div",{className:"modal-head"},o.createElement("h2",null,t)),o.createElement(z,{onCommit:this.props.onUpgradeDone,organizationKey:this.props.organization.key,subscriptionPlans:this.props.subscriptionPlans},(function(t){var n=t.onSubmit,i=t.processingUpgrade,s=t.renderFormFields,l=t.renderNextCharge,p=t.renderRecap,u=t.renderSubmitButton;return o.createElement("form",{id:"organization-paid-plan-form",onSubmit:n},o.createElement("div",{className:"modal-body modal-container"},o.createElement("div",{className:"huge-spacer-bottom"},o.createElement("p",{className:"spacer-bottom"},o.createElement(r.FormattedMessage,{defaultMessage:Object(c.translate)("billing.upgrade.org_x_advantages"),id:"billing.coupon.description",values:{org:o.createElement("strong",null,e.props.organization.name)}})),o.createElement(b,null)),s(),o.createElement("div",{className:"big-spacer-top"},p())),o.createElement("footer",{className:"modal-foot display-flex-center display-flex-space-between"},l()||o.createElement("span",null),o.createElement("div",null,o.createElement(O.a,{loading:i}),u(),o.createElement(a.ResetButtonLink,{onClick:e.props.onClose},Object(c.translate)("cancel")))))}))):null},t}(o.PureComponent),x=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={subscriptionPlans:[],upgradeOrganizationModal:!1},t.fetchSubscriptionPlans=function(){return m().then((function(e){t.mounted&&t.setState({subscriptionPlans:e})}))},t.handleUpgradeClick=function(){t.setState({upgradeOrganizationModal:!0})},t.handleUpgradeOrganizationModalClose=function(){t.mounted&&t.setState({upgradeOrganizationModal:!1})},t.handleOrganizationUpgrade=function(){t.props.onOrganizationUpgrade(),t.handleUpgradeOrganizationModalClose()},t}return x(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchSubscriptionPlans()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){if(!Object(c.hasMessage)("billing.upgrade_box.header"))return null;var e=this.state,t=e.subscriptionPlans,n=e.upgradeOrganizationModal,s=t[0]&&t[0].price;return o.createElement(o.Fragment,null,o.createElement(l.a,{className:this.props.className,title:Object(c.translate)("billing.upgrade_box.header"),titleInfo:void 0!==s&&o.createElement(r.FormattedMessage,{defaultMessage:Object(c.translate)("billing.price_from_x"),id:"billing.price_from_x",values:{price:o.createElement("span",{className:"big"},Object(d.e)(s))}})},o.createElement(o.Fragment,null,o.createElement(b,null),o.createElement("div",{className:"big-spacer-left"},o.createElement(a.Button,{className:"js-upgrade-organization",onClick:this.handleUpgradeClick},Object(c.translate)("billing.paid_plan.upgrade")),o.createElement(i.Link,{className:"spacer-left",target:"_blank",to:"/about/pricing"},Object(c.translate)("billing.pricing.learn_more"))))),n&&o.createElement(N,{insideModal:this.props.insideModal,onClose:this.handleUpgradeOrganizationModalClose,onUpgradeDone:this.handleOrganizationUpgrade,organization:this.props.organization,subscriptionPlans:t}))},t}(o.PureComponent);t.a=U},1416:function(e,t,n){"use strict";var o,r=n(658),i=n(13),a=n(785),s=n.n(a),l=n(37),c=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this;return i.createElement("div",{className:r(this.props.className)},["public","private"].map((function(t){return i.createElement(s.a,{className:"huge-spacer-right visibility-"+t,key:t,value:t,checked:e.props.visibility===t,onCheck:e.props.onChange,disabled:"private"===t&&!e.props.canTurnToPrivate},i.createElement("div",null,Object(l.translate)("visibility",t),e.props.showDetails&&i.createElement("p",{className:"note"},Object(l.translate)("visibility",t,"description.long"))))})))},t}(i.PureComponent);t.a=p},1418:function(e,t,n){"use strict";var o,r=n(13),i=n(659),a=n(688),s=n.n(a),l=n(683),c=n.n(l),p=n(674),u=n(665),m=n.n(u),d=n(37),f=n(859),g=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={done:!1,loading:!0},t.fetchPermissionTemplates=function(){Object(f.l)(t.props.organization).then((function(e){var n=e.permissionTemplates;t.mounted&&t.setState({loading:!1,permissionTemplates:n})}),(function(){t.mounted&&t.setState({loading:!1})}))},t.handleSubmit=function(){return t.state.permissionTemplate?Object(f.b)({organization:t.props.organization,projectKey:t.props.project.key,templateId:t.state.permissionTemplate}).then((function(){t.mounted&&(t.props.onApply&&t.props.onApply(),t.setState({done:!0}))})):Promise.reject(void 0)},t.handlePermissionTemplateChange=function(e){var n=e.value;t.setState({permissionTemplate:n})},t}return g(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.fetchPermissionTemplates()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this,t=Object(d.translateWithParameters)("projects_role.apply_template_to_xxx",this.props.project.name);return r.createElement(c.a,{header:t,onClose:this.props.onClose,onSubmit:this.handleSubmit,size:"small"},(function(n){var o=n.onCloseClick,a=n.onFormSubmit,l=n.submitting;return r.createElement("form",{id:"project-permissions-apply-template-form",onSubmit:a},r.createElement("header",{className:"modal-head"},r.createElement("h2",null,t)),r.createElement("div",{className:"modal-body"},e.state.done?r.createElement(p.Alert,{variant:"success"},Object(d.translate)("projects_role.apply_template.success")):r.createElement(r.Fragment,null,e.state.loading?r.createElement("i",{className:"spinner"}):r.createElement("div",{className:"modal-field"},r.createElement("label",{htmlFor:"project-permissions-template"},Object(d.translate)("template"),r.createElement("em",{className:"mandatory"},"*")),e.state.permissionTemplates&&r.createElement(s.a,{clearable:!1,id:"project-permissions-template",onChange:e.handlePermissionTemplateChange,options:e.state.permissionTemplates.map((function(e){return{label:e.name,value:e.id}})),value:e.state.permissionTemplate})))),r.createElement("footer",{className:"modal-foot"},r.createElement(m.a,{className:"spacer-right",loading:l}),!e.state.done&&r.createElement(i.SubmitButton,{disabled:l||!e.state.permissionTemplate},Object(d.translate)("apply")),r.createElement(i.ResetButtonLink,{onClick:o},Object(d.translate)(e.state.done?"close":"cancel"))))}))},t}(r.PureComponent);t.a=h},2258:function(e,t,n){"use strict";n.r(t);var o,r=n(666),i=n(764),a=n(668),s=n(712),l=n.n(s),c=n(13),p=n(677),u=n(37),m=n(859),d=n(1416),f=n(1039),g=(n(1413),n(706)),h=n.n(g),b=n(1448),y=n(1414),v=n(947),_=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleToggleUser=function(e,n){return e.permissions.includes(n)?t.props.revokePermissionFromUser(e.login,n):t.props.grantPermissionToUser(e.login,n)},t.handleToggleGroup=function(e,n){return e.permissions.includes(n)?t.props.revokePermissionFromGroup(e.name,n):t.props.grantPermissionToGroup(e.name,n)},t.handleSelectPermission=function(e){t.props.onPermissionSelect(e)},t}return _(t,e),t.prototype.render=function(){var e=this.props,t=e.filter,n=e.groups,o=e.groupsPaging,r=e.users,i=e.usersPaging,a=v.a[this.props.component.qualifier];"public"===this.props.visibility&&(a=l()(a,"user","codeviewer"));var s=Object(v.e)(a,"projects_role"),p=0,u=0;return"users"!==t&&(p+=n.length,u+=o?o.total:n.length),"groups"!==t&&(p+=r.length,u+=i?i.total:r.length),c.createElement(c.Fragment,null,c.createElement(b.a,{filter:this.props.filter,groups:this.props.groups,onSelectPermission:this.handleSelectPermission,onToggleGroup:this.handleToggleGroup,onToggleUser:this.handleToggleUser,permissions:s,query:this.props.query,selectedPermission:this.props.selectedPermission,users:this.props.users},c.createElement(y.a,{filter:this.props.filter,onFilter:this.props.onFilterChange,onSearch:this.props.onQueryChange,query:this.props.query})),c.createElement(h.a,{count:p,loadMore:this.props.onLoadMore,total:u}))},t}(c.PureComponent),P=n(659),O=n(1418),j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.state={applyTemplateModal:!1},t.handleApplyTemplate=function(){t.setState({applyTemplateModal:!0})},t.handleApplyTemplateClose=function(){t.mounted&&t.setState({applyTemplateModal:!1})},t}return j(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props.component,t=e.configuration,n=null!=t&&t.canApplyPermissionTemplate,o=["VW","SVW","APP"].includes(e.qualifier)?Object(u.translate)("roles.page.description_portfolio"):Object(u.translate)("roles.page.description2"),r="TRK"===e.qualifier&&e.visibility?Object(u.translate)("visibility",e.visibility,"description",e.qualifier):void 0;return c.createElement("header",{className:"page-header"},c.createElement("h1",{className:"page-title"},Object(u.translate)("permissions.page")),this.props.loading&&c.createElement("i",{className:"spinner"}),n&&c.createElement("div",{className:"page-actions"},c.createElement(P.Button,{className:"js-apply-template",onClick:this.handleApplyTemplate},Object(u.translate)("projects_role.apply_template")),this.state.applyTemplateModal&&c.createElement(O.a,{onApply:this.props.loadHolders,onClose:this.handleApplyTemplateClose,organization:e.organization,project:e})),c.createElement("div",{className:"page-description"},c.createElement("p",null,o),r&&c.createElement("p",null,r)))},t}(c.PureComponent),T=n(693),w=n.n(T),S=n(674);function k(e){var t=e.component,n=e.onClose,o=e.onConfirm,r=t.qualifier;return c.createElement(w.a,{confirmButtonText:Object(u.translate)("projects_role.turn_project_to_public",r),header:Object(u.translateWithParameters)("projects_role.turn_x_to_public",t.name),onClose:n,onConfirm:o},c.createElement(S.Alert,{variant:"warning"},Object(u.translate)("projects_role.are_you_sure_to_turn_project_to_public.warning",r)),c.createElement("p",null,Object(u.translate)("projects_role.are_you_sure_to_turn_project_to_public",r)))}var z=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),N=function(){return(N=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},x=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,r++)o[r]=i[a];return o},U=function(e){function t(t){var n=e.call(this,t)||this;return n.mounted=!1,n.stopLoading=function(){n.mounted&&n.setState({loading:!1})},n.loadUsersAndGroups=function(e,t){var o=n.props.component,r=n.state,i=r.filter,a=r.query,s=r.selectedPermission,l="groups"!==i?m.n({projectKey:o.key,q:a||void 0,permission:s,organization:o.organization,p:e}):Promise.resolve({paging:void 0,users:[]}),c="users"!==i?m.m({projectKey:o.key,q:a||void 0,permission:s,organization:o.organization,p:t}):Promise.resolve({paging:void 0,groups:[]});return Promise.all([l,c])},n.loadHolders=function(){return n.setState({loading:!0}),n.loadUsersAndGroups().then((function(e){var t=e[0],o=e[1];n.mounted&&n.setState({groups:o.groups,groupsPaging:o.paging,loading:!1,users:t.users,usersPaging:t.paging})}),n.stopLoading)},n.onLoadMore=function(){var e=n.state,t=e.usersPaging,o=e.groupsPaging;return n.setState({loading:!0}),n.loadUsersAndGroups(t?t.pageIndex+1:1,o?o.pageIndex+1:1).then((function(e){var t=e[0],o=e[1];n.mounted&&n.setState((function(e){var n=e.groups,r=e.users;return{groups:x(n,o.groups),groupsPaging:o.paging,loading:!1,users:x(r,t.users),usersPaging:t.paging}}))}),n.stopLoading)},n.handleFilterChange=function(e){n.mounted&&n.setState({filter:e},n.loadHolders)},n.handleQueryChange=function(e){n.mounted&&n.setState({query:e},n.loadHolders)},n.handlePermissionSelect=function(e){n.mounted&&n.setState((function(t){return{selectedPermission:t.selectedPermission===e?void 0:e}}),n.loadHolders)},n.addPermissionToGroup=function(e,t){return n.state.groups.map((function(n){return n.name===e?N(N({},n),{permissions:x(n.permissions,[t])}):n}))},n.addPermissionToUser=function(e,t){return n.state.users.map((function(n){return n.login===e?N(N({},n),{permissions:x(n.permissions,[t])}):n}))},n.removePermissionFromGroup=function(e,t){return n.state.groups.map((function(n){return n.name===e?N(N({},n),{permissions:l()(n.permissions,t)}):n}))},n.removePermissionFromUser=function(e,t){return n.state.users.map((function(n){return n.login===e?N(N({},n),{permissions:l()(n.permissions,t)}):n}))},n.grantPermissionToGroup=function(e,t){return n.mounted?(n.setState({loading:!0,groups:n.addPermissionToGroup(e,t)}),m.o({projectKey:n.props.component.key,groupName:e,permission:t,organization:n.props.component.organization}).then(n.stopLoading,(function(){n.mounted&&n.setState({loading:!1,groups:n.removePermissionFromGroup(e,t)})}))):Promise.resolve()},n.grantPermissionToUser=function(e,t){return n.mounted?(n.setState({loading:!0,users:n.addPermissionToUser(e,t)}),m.p({projectKey:n.props.component.key,login:e,permission:t,organization:n.props.component.organization}).then(n.stopLoading,(function(){n.mounted&&n.setState({loading:!1,users:n.removePermissionFromUser(e,t)})}))):Promise.resolve()},n.revokePermissionFromGroup=function(e,t){return n.mounted?(n.setState({loading:!0,groups:n.removePermissionFromGroup(e,t)}),m.t({projectKey:n.props.component.key,groupName:e,permission:t,organization:n.props.component.organization}).then(n.stopLoading,(function(){n.mounted&&n.setState({loading:!1,groups:n.addPermissionToGroup(e,t)})}))):Promise.resolve()},n.revokePermissionFromUser=function(e,t){return n.mounted?(n.setState({loading:!0,users:n.removePermissionFromUser(e,t)}),m.u({projectKey:n.props.component.key,login:e,permission:t,organization:n.props.component.organization}).then(n.stopLoading,(function(){n.mounted&&n.setState({loading:!1,users:n.addPermissionToUser(e,t)})}))):Promise.resolve()},n.handleOrganizationUpgrade=function(){var e=n.props,t=e.component,o=e.organization;o&&(n.props.onComponentChange({configuration:N(N({},t.configuration),{canUpdateProjectVisibilityToPrivate:!0})}),n.props.fetchOrganization(o.key))},n.handleVisibilityChange=function(e){"public"===e?n.openDisclaimer():n.turnProjectToPrivate()},n.turnProjectToPublic=function(){n.props.onComponentChange({visibility:"public"}),m.e(n.props.component.key,"public").then((function(){n.loadHolders()}),(function(){n.props.onComponentChange({visibility:"private"})}))},n.turnProjectToPrivate=function(){n.props.onComponentChange({visibility:"private"}),m.e(n.props.component.key,"private").then((function(){n.loadHolders()}),(function(){n.props.onComponentChange({visibility:"public"})}))},n.openDisclaimer=function(){n.mounted&&n.setState({disclaimer:!0})},n.closeDisclaimer=function(){n.mounted&&n.setState({disclaimer:!1})},n.state={disclaimer:!1,filter:"all",groups:[],loading:!0,query:"",users:[]},n}return z(t,e),t.prototype.componentDidMount=function(){this.mounted=!0,this.loadHolders()},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e,t=this.props,n=t.component,o=t.organization,r=n.configuration&&n.configuration.canUpdateProjectVisibilityToPrivate;o&&!r&&(e=o.actions&&o.actions.admin&&"TRK"===this.props.component.qualifier&&!o.canUpdateProjectsVisibilityToPrivate);return c.createElement("div",{className:"page page-limited",id:"project-permissions-page"},c.createElement(p.a,{defer:!1,title:Object(u.translate)("permissions.page")}),c.createElement(E,{component:n,loadHolders:this.loadHolders,loading:this.state.loading}),c.createElement("div",null,c.createElement(d.a,{canTurnToPrivate:r,className:"big-spacer-top big-spacer-bottom",onChange:this.handleVisibilityChange,visibility:n.visibility}),e&&o&&c.createElement(f.a,{className:"big-spacer-bottom",onOrganizationUpgrade:this.handleOrganizationUpgrade,organization:o}),this.state.disclaimer&&c.createElement(k,{component:n,onClose:this.closeDisclaimer,onConfirm:this.turnProjectToPublic})),c.createElement(C,{component:n,filter:this.state.filter,grantPermissionToGroup:this.grantPermissionToGroup,grantPermissionToUser:this.grantPermissionToUser,groups:this.state.groups,groupsPaging:this.state.groupsPaging,onFilterChange:this.handleFilterChange,onLoadMore:this.onLoadMore,onPermissionSelect:this.handlePermissionSelect,onQueryChange:this.handleQueryChange,query:this.state.query,revokePermissionFromGroup:this.revokePermissionFromGroup,revokePermissionFromUser:this.revokePermissionFromUser,selectedPermission:this.state.selectedPermission,users:this.state.users,usersPaging:this.state.usersPaging,visibility:n.visibility}))},t}(c.PureComponent),M={fetchOrganization:i.f};t.default=Object(r.connect)((function(e,t){var n=t.component;return{currentUser:Object(a.getCurrentUser)(e),organization:Object(a.getOrganizationByKey)(e,n.organization)}}),M)(U)},689:function(e,t,n){"use strict";function o(e,t){return t+"("+(e.displayName||e.name||"Component")+")"}n.d(t,"a",(function(){return o}))},693:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(13),s=n(37),l=n(665),c=n(659),p=n(772),u=n(683),m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mounted=!1,t.handleSubmit=function(){var e=t.props.onConfirm(t.props.confirmData);return e?e.then(t.props.onClose,(function(){})):void t.props.onClose()},t.renderModalContent=function(e){var n=e.onCloseClick,o=e.onFormSubmit,r=e.submitting,i=t.props,u=i.children,m=i.confirmButtonText,d=i.confirmDisable,f=i.header,g=i.headerDescription,h=i.isDestructive,b=i.cancelButtonText,y=void 0===b?s.translate("cancel"):b;return a.createElement(p.default,null,a.createElement("form",{onSubmit:o},a.createElement("header",{className:"modal-head"},a.createElement("h2",null,f),g),a.createElement("div",{className:"modal-body"},u),a.createElement("footer",{className:"modal-foot"},a.createElement(l.default,{className:"spacer-right",loading:r}),a.createElement(c.SubmitButton,{autoFocus:!0,className:h?"button-red":void 0,disabled:r||d},m),a.createElement(c.ResetButtonLink,{disabled:r,onClick:n},y))))},t}return r(t,e),t.prototype.componentDidMount=function(){this.mounted=!0},t.prototype.componentWillUnmount=function(){this.mounted=!1},t.prototype.render=function(){var e=this.props,t={header:e.header,onClose:e.onClose,noBackdrop:e.noBackdrop,size:e.size};return a.createElement(u.default,i({onSubmit:this.handleSubmit},t),this.renderModalContent)},t}(a.PureComponent);t.default=m},727:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o,r=n(13),i=n(666),a=n(668),s=n(689),l=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function p(e){var t=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return l(n,t),n.prototype.render=function(){return r.createElement(e,c({},this.props))},n.displayName=Object(s.a)(e,"withCurrentUser"),n}(r.Component);return Object(i.connect)((function(e){return{currentUser:Object(a.getCurrentUser)(e)}}))(t)}},747:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var o=n(685),r=n(91),i=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((o=o.apply(e,t||[])).next())}))},a=function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},s=!1;function l(e,t){return void 0===t&&(t="body"),new Promise((function(n){var r=document.createElement("script");r.src=""+Object(o.getBaseUrl)()+e,r.onload=n,document.getElementsByTagName(t)[0].appendChild(r)}))}function c(e){return i(this,void 0,void 0,(function(){var t,o;return a(this,(function(i){switch(i.label){case 0:return(t=Object(r.a)(e))?[2,Promise.resolve(t)]:s?[3,2]:[4,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(301)]).then(n.bind(null,885))];case 1:(0,i.sent().default)(),s=!0,i.label=2;case 2:return[4,l("/static/"+e+".js")];case 3:return i.sent(),(o=Object(r.a)(e))?[2,o]:[2,Promise.reject()]}}))}))}},762:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return p}));var o=n(682);function r(e,t){return t.endsWith("/")||(t+="/"),l(e)?t.replace("github.com/","github.com/orgs/")+"people":t+"profile/members"}function i(e){return Object(o.b)(e)&&e.externalProvider?p(e.externalProvider):void 0}function a(e){return Object(o.b)(e)&&(s(e.externalProvider)||l(e.externalProvider))}function s(e){return!!e&&e.startsWith("bitbucket")}function l(e){return"github"===e}function c(e){return"microsoft"===e}function p(e){return s(e)?"bitbucket":e}},832:function(e,t,n){var o=n(742)((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]}));e.exports=o},837:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=n(658),a=n(13);n(838);var s=n(664),l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.renderOption=function(e){var n=e.value===t.props.value,o=t.props.name+"__"+e.value;return a.createElement("li",{key:e.value.toString()},a.createElement("input",{checked:n,disabled:e.disabled,id:o,name:t.props.name,onChange:function(){return t.props.onCheck(e.value)},type:"radio"}),a.createElement(s.default,{overlay:e.tooltip||void 0},a.createElement("label",{htmlFor:o},e.label)))},t}return r(t,e),t.prototype.render=function(){return a.createElement("ul",{className:i("radio-toggle",this.props.className)},this.props.options.map(this.renderOption))},t.defaultProps={disabled:!1,value:null},t}(a.PureComponent);t.default=l},838:function(e,t,n){var o=n(660),r=n(839);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},839:function(e,t,n){(t=n(661)(!1)).push([e.i,".radio-toggle{font-size:0;white-space:nowrap}.radio-toggle,.radio-toggle>li{display:inline-block;vertical-align:middle}.radio-toggle>li{font-size:12px}.radio-toggle>li:first-child>label{border-top-left-radius:2px;border-bottom-left-radius:2px}.radio-toggle>li:last-child>label{border-top-right-radius:2px;border-bottom-right-radius:2px}.radio-toggle>li+li>label{border-left:none}.radio-toggle>li>label{display:inline-block;padding:0 12px;margin:0;border:1px solid #236a97;color:#236a97;height:22px;line-height:22px;cursor:pointer;font-weight:600}.radio-toggle input[type=radio]{display:none}.radio-toggle input[type=radio]:checked+label{background-color:#236a97;color:#fff}.radio-toggle input[type=radio]:disabled+label{color:#bbb;border-color:#ddd;background:#ebebeb;cursor:not-allowed}",""]),e.exports=t},926:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return f}));var o,r=n(861),i=n.n(r),a=n(37),s=n(667),l=n(778),c=n(939),p=(n(762),"sonarcloud.import_org.binding_in_progress"),u="sonarcloud.import_org.redirect_to_projects",m="sonarcloud.bind_org.key",d="sonarcloud.bind_org.redirect_to_org";function f(e,t){var n=Object(s.formatMeasure)(e,"FLOAT").replace(/[.|,]0$/,"").replace(/([.|,]\d)$/,"$10");return t?n:Object(a.translateWithParameters)("billing.price_format",n)}!function(e){e[e.OrganizationDetails=0]="OrganizationDetails",e[e.Plan=1]="Plan"}(o||(o={}));i()((function(e){void 0===e&&(e={});var t=void 0,n=void 0;if(e.installation_id)n="github",t=Object(l.parseAsOptionalString)(e.installation_id);else if(e.clientKey)n="bitbucket",t=Object(l.parseAsOptionalString)(e.clientKey);else if(e.jwt){var o=Object(c.decodeJwt)(e.jwt);o&&o.iss&&(n="bitbucket",t=o.iss)}return{almInstallId:t,almKey:n}}))}}]);
//# sourceMappingURL=337.1588858339197.chunk.js.map