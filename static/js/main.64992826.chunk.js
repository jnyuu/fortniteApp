(this.webpackJsonpfortniteshopapp=this.webpackJsonpfortniteshopapp||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(20),s=a.n(i),o=(a(28),a(7)),l=a(8),d=a(10),j=a(9),b=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{class:"jumbotron",children:[Object(n.jsx)("h1",{class:"display-4 m-5",children:"About this app!"}),Object(n.jsx)("p",{class:"lead",children:"It's just a simple react app using react.js, react navigation and Bootstrap. It displays all of the items from the daily fortnite shop, using the fortnite api, just a random one that fell into my hands :P."})]})}}]),a}(c.Component),m=a(16),h=a.n(m),u=a(21),p=(a(30),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).fetchItems=Object(u.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.theapinetwork.com/store/get");case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({items:n.data}),console.log(e.state.items);case 8:case"end":return t.stop()}}),t)}))),e.state={items:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"render",value:function(){return Object(n.jsxs)("header",{className:" text-white",children:[Object(n.jsx)("div",{class:"jumbotron text-dark",children:Object(n.jsx)("h1",{class:"display-4 m-5",children:"Welcome to the Shop!"})}),Object(n.jsx)("div",{className:"container text-center ",children:Object(n.jsx)("div",{className:"row",children:this.state.items.map((function(e){return Object(n.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(n.jsx)("div",{className:"card m-3",children:Object(n.jsx)("div",{className:"card-body shadow rounded card1",style:{backgroundImage:"url(".concat(e.item.images.icon,")").concat("legendary"==e.item.rarity?",radial-gradient(#d37841,#78371d)":"common"==e.item.rarity?",radial-gradient(#8c8c8c,#2f2f2f)":"uncommon"==e.item.rarity?",radial-gradient(#60aa3a,#175117)":"rare"==e.item.rarity?",radial-gradient(#49acf2,#143977)":"epic"==e.item.rarity?",radial-gradient(#b15be2,#4b2483)":""),backgroundSize:"cover",height:"400px",backgroundPosition:"center"}})}),Object(n.jsx)("h2",{children:Object(n.jsx)("span",{style:{backgroundImage:"".concat("legendary"==e.item.rarity?"radial-gradient(#d37841,#78371d)":"common"==e.item.rarity?"radial-gradient(#8c8c8c,#2f2f2f)":"uncommon"==e.item.rarity?"radial-gradient(#60aa3a,#175117)":"rare"==e.item.rarity?"radial-gradient(#49acf2,#143977)":"epic"==e.item.rarity?"radial-gradient(#b15be2,#4b2483)":"")},class:"badge badge-secondary",children:e.item.name})})]})}))})})]})}}]),a}(c.Component)),O=a(12),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark ",id:"mainNav",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(O.b,{to:"/",className:"navbar-brand js-scroll-trigger",children:"Main"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(n.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/about",className:"nav-link js-scroll-trigger",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(O.b,{to:"/shop",className:"nav-link js-scroll-trigger",children:"Shop"})})]})})]})})}}]),a}(c.Component),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{class:"jumbotron",children:Object(n.jsx)("h1",{class:"display-4 m-5",children:"Welcome to the fortnite daily shop app!"})})}}]),a}(c.Component),x=(a(36),a(2));var g=function(){return Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{}),Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{path:"/fortniteApp",exact:!0,component:v}),Object(n.jsx)(x.a,{path:"/fortniteApp/about",component:b}),Object(n.jsx)(x.a,{path:"/fortniteApp/shop",component:p})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.64992826.chunk.js.map