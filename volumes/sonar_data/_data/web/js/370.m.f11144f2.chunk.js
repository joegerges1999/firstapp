(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1857:function(s,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var t=n(2),o=n(331),i=n(806);function r(s){return t.createElement(t.Fragment,null,t.createElement(i.a,{isFavorite:!1,organization:s.organization}),t.createElement(o.a,{suggestions:"organization_projects"}))}},331:function(s,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n(2),o=n(357);function i({suggestions:s}){return t.createElement(o.a.Consumer,null,({addSuggestions:e,removeSuggestions:n})=>t.createElement(r,{addSuggestions:e,removeSuggestions:n,suggestions:s}))}class r extends t.PureComponent{componentDidMount(){this.props.addSuggestions(this.props.suggestions)}componentDidUpdate(s){s.suggestions!==this.props.suggestions&&(this.props.removeSuggestions(this.props.suggestions),this.props.addSuggestions(s.suggestions))}componentWillUnmount(){this.props.removeSuggestions(this.props.suggestions)}render(){return null}}}}]);
//# sourceMappingURL=370.m.f11144f2.chunk.js.map