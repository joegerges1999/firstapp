(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1846:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return c}));var r=t(2),i=t(559),o=t(350);function s(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}class c extends r.PureComponent{componentDidMount(){this.checkPermissions()}componentDidUpdate(){this.checkPermissions()}checkPermissions(){this.isProjectAdmin()||Object(i.a)()}isProjectAdmin(){const{configuration:n}=this.props.component;return null!=n&&n.showSettings}render(){if(!this.isProjectAdmin())return null;const n=this.props,{children:e}=n,t=s(n,["children"]);return r.createElement(r.Fragment,null,r.createElement(o.a,{anchor:"admin_main"}),r.cloneElement(e,t))}}},350:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var r=t(2),i=t(5),o=t(400);function s(n){return r.createElement(o.a.Consumer,null,({addA11ySkipLink:e,removeA11ySkipLink:t})=>r.createElement(c,Object.assign({addA11ySkipLink:e,removeA11ySkipLink:t},n)))}class c extends r.PureComponent{constructor(){super(...arguments),this.getLink=()=>{const{anchor:n,label:e=Object(i.translate)("skip_to_content"),weight:t}=this.props;return{key:n,label:e,weight:t}}}componentDidMount(){this.props.addA11ySkipLink(this.getLink())}componentWillUnmount(){this.props.removeA11ySkipLink(this.getLink())}render(){const{anchor:n}=this.props;return r.createElement("span",{id:"a11y_target__".concat(n)})}}},559:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(33),i=t.n(r),o=t(538),s=t(385);function c(){const n=Object(s.default)(),e=i()(),t=window.location.pathname+window.location.search+window.location.hash;n.dispatch(Object(o.c)()),e.replace({pathname:"/sessions/new",query:{return_to:t}})}}}]);
//# sourceMappingURL=367.m.62413591.chunk.js.map