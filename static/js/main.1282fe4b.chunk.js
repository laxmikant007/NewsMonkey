(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(19),r=a.n(c),i=(a(26),a(8)),l=a(9),o=a(11),j=a(10),b=(a(27),a(7)),d=a(0),h=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(b.b,{className:"navbar-brand",to:"/",children:"NewsMonkey"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(b.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"entertainment",children:[" ","Entertainment"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"general",children:[" ","General"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"business",children:[" ","Business"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"health",children:[" ","Health"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:" science",children:[" ","Science"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"sports",children:[" ","Sports"," "]})," "]}),Object(d.jsxs)("li",{className:"nav-item",children:[" ",Object(d.jsxs)(b.b,{className:"nav-link",to:"technology",children:[" ","Technology"," "]})," "]})]})})]})})})}}]),a}(n.Component),p=h,u=a(12),g=a.n(u),x=a(15),O=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imageurl,s=e.newsUrl,c=e.author,r=e.date;return Object(d.jsx)("div",{className:"my-3",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:n||"https://images.news18.com/ibnlive/uploads/2021/09/google_covid_19-16304920703x2.jpg?impolicy=website&width=510&height=356",className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("p",{class:"card-text",children:Object(d.jsxs)("small",{class:"text-muted",children:["By ",c||"Unknown"," on"," ",new Date(r).toGMTString()," "]})}),Object(d.jsx)("a",{rel:"noreferrer",href:s,target:"_blank",className:"btn btn-sm btn-primary",children:"Read More"})]})]})})}}]),a}(n.Component),m=O,v=a.p+"static/media/loading.gif.ec9c053b.gif",y=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"text-center",children:Object(d.jsx)("img",{src:v,alt:"loading"})})}}]),a}(n.Component),f=y,N=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handlePrevClick=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({page:e.state.page-1}),e.updateNews();case 2:case"end":return t.stop()}}),t)}))),e.handleNextClick=Object(x.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({page:e.state.page+1}),e.updateNews();case 2:case"end":return t.stop()}}),t)}))),e.state={articles:[],page:1,loading:!1},e}return Object(l.a)(a,[{key:"updateNews",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=974eee1dcbbc4a0ebdf0740b116923ae&page=").concat(this.state.page,"&pageSize=").concat(this.props.pageSize),this.setState({loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),this.setState({articles:n.articles,totalResults:n.totalResults,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(x.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=974eee1dcbbc4a0ebdf0740b116923ae&page1&pageSize=").concat(this.props.pageSize),this.setState({loading:!0}),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),this.setState({articles:n.articles,totalResults:n.totalResults,loading:!1});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("render"),Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{className:"text-center",children:" NewsMonkey - Top Headlines"}),this.state.loading&&Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"row",children:!this.state.loading&&this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)(m,{title:e.title?e.title:" ",description:e.description?e.description:" ",imageurl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt})},e.url)}))}),Object(d.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(d.jsx)("button",{disabled:this.state.page<=1,"my-3":!0,type:"button",className:"btn btn-dark",onClick:this.handlePrevClick,children:"\u2190 Previous"}),Object(d.jsx)("button",{disabled:this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize),type:"button",className:"btn btn-dark",onClick:this.handleNextClick,children:"Next \u2192"})]})]})}}]),a}(n.Component);N.defaultProps={country:"in",pageSize:8,category:"general"};var k=N,w=a(2),S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(w.c,{children:[Object(d.jsxs)(w.a,{exact:!0,path:"/",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"science"},"science")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/entertainment",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"entertainment"},"entertainment")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/general",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"general"},"general")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/business",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"business"},"business")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/health",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"health"},"health")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/science",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"science"},"science")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/sports",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"sports"},"sports")," "]}),Object(d.jsxs)(w.a,{exact:!0,path:"/technology",children:[" ",Object(d.jsx)(k,{pageSize:6,country:"in",category:"technology"},"technology")," "]})]})]})})}}]),a}(n.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()}},[[38,1,2]]]);
//# sourceMappingURL=main.1282fe4b.chunk.js.map