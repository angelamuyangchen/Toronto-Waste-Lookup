(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(79)},36:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,a){},49:function(e,t){},79:function(e,t,a){"use strict";a.r(t);a(28),a(14),a(30),a(31);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),s=(a(36),a(2)),i=a(3),l=a(5),u=a(4),m=a(6),h=(a(38),a(39),a(13)),v=a.n(h),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchResult,a=e.toggleFavourite;return r.a.createElement("div",{className:"pt-4"},t.map(function(e,t){return r.a.createElement("div",{key:t,className:"row"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("span",{className:"glyphicon glyphicon-star ".concat(e.IsFavourite?"text-success":"text-secondary"),onClick:function(){return a(e.title)}})," ",e.title),r.a.createElement("div",{className:"col-xs-6"},v()(v()(e.body))))}))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({searchKey:e.target.value}),""===e.target.value&&a.props.handleSubmit({searchKey:""})},a.submitForm=function(e){e.preventDefault(),a.props.handleSubmit(a.state)},a.initialState={searchKey:""},a.state=a.initialState,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.searchKey;return r.a.createElement("div",{className:"pt-4"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("input",{type:"text",name:"searchKey",className:"form-control",value:e,onChange:this.handleChange}),r.a.createElement("button",{type:"button",className:"btn btn-success"},r.a.createElement("span",{className:"glyphicon glyphicon-search",onClick:this.submitForm})))))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).twlData={},a.state={lookupResult:[],favourites:[]},a.toggleFavourite=function(e){var t=a.twlData.findIndex(function(t){return t.title===e});a.twlData[t].IsFavourite?a.twlData[t].IsFavourite=!1:a.twlData[t].IsFavourite=!0;var n=a.twlData.filter(function(e){return e.IsFavourite});a.setState({favourites:n})},a.handleSubmit=function(e){var t=[];""!==e.searchKey&&(t=a.twlData.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.searchKey.toLowerCase())})),a.setState({lookupResult:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then(function(e){return e.json()}).then(function(t){e.twlData=t})}},{key:"render",value:function(){var e=this.state.lookupResult,t=this.state.favourites;return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"App-header"},"Toronto Waste Lookup"),r.a.createElement("div",{className:"container"},r.a.createElement(d,{handleSubmit:this.handleSubmit}),r.a.createElement(p,{searchResult:e,toggleFavourite:this.toggleFavourite}),r.a.createElement("div",{className:"".concat(t.length>0?"visible":"invisible")},r.a.createElement("h3",{className:"text-success"},"Favourites")),r.a.createElement(p,{searchResult:t,toggleFavourite:this.toggleFavourite})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.eed199c0.chunk.js.map