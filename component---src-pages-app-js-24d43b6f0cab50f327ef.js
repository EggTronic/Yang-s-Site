(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{156:function(e,t,n){"use strict";n.r(t);n(95);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(5),l=n.n(c),s=n(40),m=n.n(s);n(160),o.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func;n(163);n.d(t,"Cover",function(){return u});var u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.refs.c,t=this.refs.c.getContext("2d");e.height=window.innerHeight,e.width=window.innerWidth/2;var n="EggTronicYangEggTronicXu";n=n.split("");for(var a=10,r=e.width/a,i=[],o=0;o<r;o++)i[o]=1;console.log(1),setInterval(function(){t.fillStyle="rgba(0, 0, 0, 0.05)",t.fillRect(0,0,e.width,e.height),t.fillStyle="#0f0",t.font=a+"px arial";for(var r=0;r<i.length;r++){var o=n[Math.floor(Math.random()*n.length)];t.fillText(o,r*a,i[r]*a),i[r]*a>e.height&&Math.random()>.975&&(i[r]=0),i[r]++}},33)},n.render=function(){return o.a.createElement("div",{className:"cover"},o.a.createElement("div",{className:"left"},o.a.createElement("h1",{className:"text"},"Producer"),o.a.createElement(m.a,{className:"link",to:"/Home"},o.a.createElement("button",{className:"btn"}))),o.a.createElement("div",{className:"right"},o.a.createElement("canvas",{ref:"c"}),o.a.createElement("h1",{className:"text"},"Software Developer"),o.a.createElement(m.a,{className:"link",to:"/Home"},o.a.createElement("button",{className:"btn"}))))},t}(i.Component);t.default=u},157:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),c=n(164),l=n(166),s=n(156),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={foo:"bar"},l.a.initialize("UA-110570651-1"),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){l.a.pageview(window.location.pathname)},n.render=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c.Helmet,null,o.a.createElement("meta",{charset:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),o.a.createElement("meta",{name:"theme-color",content:"#000000"}),o.a.createElement("link",{rel:"manifest",href:"%PUBLIC_URL%/manifest.json"}),o.a.createElement("link",{rel:"shortcut icon",href:"./../statics/favicon.ico"}),o.a.createElement("link",{rel:"manifest",href:"./../statics/manifest.json"})),o.a.createElement(s.default,null))},t}(i.Component);t.default=m},160:function(e,t,n){var a;e.exports=(a=n(161))&&a.default||a},161:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(64),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-app-js-24d43b6f0cab50f327ef.js.map