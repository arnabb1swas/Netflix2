(this.webpackJsonpnetflix2=this.webpackJsonpnetflix2||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},48:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),o=n(17),r=n.n(o),s=(n(28),n(29),n(5)),l=n.n(s),d=n(6),u=n(4),h=n(18),f=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),v=(n(48),n(19)),b=n(22),j=n.n(b);var p=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,o=Object(a.useState)([]),r=Object(u.a)(o,2),s=r[0],h=r[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),g=p[0],m=p[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,h(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("div",{className:"row_posters",children:s.map((function(e){return Object(c.jsx)("img",{onClick:function(){return function(e){g?m(""):j()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);m(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row_poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),g&&Object(c.jsx)(v.a,{videoId:g,opts:{height:"390",width:"100%",playerVars:{autoPlay:1}}})]})},g="e3205308906e64a5afda5ac8d1ea1dec",m={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOrignals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(g,"&with_genres=10749"),fetchDocumentries:"/discover/movie?api_key=".concat(g,"&with_genres=99")};n(64);var O=function(){var e,t,n=Object(a.useState)([]),i=Object(u.a)(n,2),o=i[0],r=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(m.fetchNetflixOrignals);case 2:return t=e.sent,r(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(o),Object(c.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n            "https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(c.jsxs)("div",{className:"banner__contents",children:[Object(c.jsx)("h1",{className:"banner__title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.orignal_name)}),Object(c.jsxs)("div",{className:"banner__buttons",children:[Object(c.jsx)("button",{className:"banner__button",children:"Play"}),Object(c.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(c.jsx)("h1",{className:"banner__description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(c.jsx)("div",{})]})};n(65);var _=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(c.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(c.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),Object(c.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Netflix Logo"})]})};var x=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(_,{}),Object(c.jsx)(O,{}),Object(c.jsx)(p,{title:"NETFLIX ORIGNALS",fetchUrl:m.fetchNetflixOrignals,isLargeRow:!0}),Object(c.jsx)(p,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(c.jsx)(p,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(c.jsx)(p,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(c.jsx)(p,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(c.jsx)(p,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(c.jsx)(p,{title:"Romantic Movies",fetchUrl:m.fetchRomanceMovies}),Object(c.jsx)(p,{title:"Documentries",fetchUrl:m.fetchDocumentries})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),w()}},[[66,1,2]]]);
//# sourceMappingURL=main.214f45fb.chunk.js.map