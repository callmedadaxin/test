(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,c,n){e.exports=n(32)},26:function(e,c,n){},27:function(e,c,n){},32:function(e,c,n){"use strict";n.r(c);var l=n(0),a=n.n(l),t=n(15),o=n.n(t),i=(n(26),n(18)),r=n(5),d=(n(27),n(16)),b=n(17),s=n(8),p=window.BMap,f=function(){function e(){Object(d.a)(this,e)}return Object(b.a)(e,[{key:"addWindow",value:function(e){return new window.BMapLib.SearchInfoWindow(this.map,'<a href="/list/'.concat(e.place,'">\u70b9\u51fb\u67e5\u770b\u56fe\u7247\u5217\u8868</a>'),{title:e.place,width:290,height:40,panel:"panel",enableAutoPan:!0,searchTypes:[]})}},{key:"addMarker",value:function(e){var c=e.location?e.location.location:{},n=new p.Point(c.lng,c.lat),l=new p.Marker(n),a=this.addWindow(e);this.map.addOverlay(l),l.addEventListener("click",function(e){a.open(l)})}},{key:"addMarkers",value:function(){var e=this;s.forEach(function(c){e.addMarker(c)})}},{key:"init",value:function(){var e=new p.Map("container");e.centerAndZoom(new p.Point(116.404,39.915),11),e.setCurrentCity("\u5317\u4eac"),e.enableScrollWheelZoom(!0),this.map=e}}]),e}();var v=function(){return Object(l.useEffect)(function(){var e=new f;e.init(),e.addMarkers()},[]),a.a.createElement("div",{id:"container"})},u="http://cert-chain.com/";function m(e){var c=e.match.params,n=void 0===c?{}:c,l=s.find(function(e){return e.place===n.place}).list,t=void 0===l?[]:l;return a.a.createElement("div",{className:"img-list"},t.map(function(e){return a.a.createElement("div",{className:"img-list-item"},a.a.createElement("img",{src:"".concat(u).concat(e),alt:e}))}))}var g=function(){return a.a.createElement(i.a,null,a.a.createElement(r.c,null,a.a.createElement(r.a,{path:"/list/:place",component:m}),a.a.createElement(r.a,{path:"/",component:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports=[{place:"hex\u65f6\u95f4\u57ce\u5821\u5bc6\u5ba4\u9003\u8131",location:{location:{lng:116.326296,lat:39.854313},precise:1,confidence:80,level:"\u4f11\u95f2\u5a31\u4e50"},list:["4b0bb910-9271-11e9-934c-635679a0c29b"]},{place:"\u4e50\u7ffb\u4e86\u8e66\u5e8a\u516c\u56ed",location:{location:{lng:117.172023,lat:40.25565},precise:0,confidence:25,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b0e5120-9271-11e9-934c-635679a0c29b"]},{place:"\u5317\u4eac798\u827a\u672f\u4e2d\u5fc3",location:{location:{lng:116.501142,lat:39.99289},precise:1,confidence:75,level:"\u6559\u80b2"},list:["90dbd7f0-9270-11e9-b3c9-61985ebe8417"]},{place:"\u5317\u4eac\u56ed\u535a\u56ed",location:{location:{lng:116.203324,lat:39.881953},precise:0,confidence:30,level:"UNKNOWN"},list:["90dc2610-9270-11e9-b3c9-61985ebe8417","90dc4d20-9270-11e9-b3c9-61985ebe8417"]},{place:"\u5317\u4eac\u5e02\u671d\u9633\u533a\u5927\u5c6f\u8def14\u53f7",location:{location:{lng:116.403043,lat:40.008566},precise:1,confidence:80,level:"\u9053\u8def"},list:["4b0e7830-9271-11e9-934c-635679a0c29b","90dc7431-9270-11e9-b3c9-61985ebe8417"]},{place:"\u5317\u4eac\u6b22\u4e50\u8c37",location:{location:{lng:116.500822,lat:39.872926},precise:0,confidence:40,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b0ec650-9271-11e9-934c-635679a0c29b","4b0eed60-9271-11e9-934c-635679a0c29b"]},{place:"\u5317\u4eac\u79d1\u6280\u5927\u5b66",location:{location:{lng:116.365976,lat:39.996547},precise:0,confidence:40,level:"UNKNOWN"},list:["4b0f1470-9271-11e9-934c-635679a0c29b"]},{place:"\u5317\u4eac\u91ce\u751f\u52a8\u7269\u56ed",location:{location:{lng:116.341687,lat:39.500935},precise:0,confidence:30,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b0f3b80-9271-11e9-934c-635679a0c29b","90dce961-9270-11e9-b3c9-61985ebe8417"]},{place:"\u534e\u4e3a\u516c\u53f8\u5317\u4eac\u7814\u7a76\u6240(\u73af\u4fdd\u56ed)",location:{location:{lng:116.185456,lat:40.060753},precise:1,confidence:80,level:"UNKNOWN"},list:["90dd1070-9270-11e9-b3c9-61985ebe8417"]},{place:"\u53e4\u5317\u6c34\u9547",location:{location:{lng:117.286357,lat:40.659982},precise:0,confidence:30,level:"\u65c5\u6e38\u666f\u70b9"},list:["90dd3780-9270-11e9-b3c9-61985ebe8417"]},{place:"\u56fd\u5bb6\u4f53\u80b2\u573a(\u9e1f\u5de2)",location:{location:{lng:116.402932,lat:39.999088},precise:0,confidence:60,level:"\u4f11\u95f2\u5a31\u4e50"},list:["90dd3781-9270-11e9-b3c9-61985ebe8417"]},{place:"\u5706\u660e\u56ed\u9057\u5740\u516c\u56ed",location:{location:{lng:116.310106,lat:40.012486},precise:0,confidence:30,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b0f6290-9271-11e9-934c-635679a0c29b","4b0f89a0-9271-11e9-934c-635679a0c29b"]},{place:"\u6000\u5317\u56fd\u9645\u6ed1\u96ea\u573a",location:{location:{lng:116.66782,lat:40.449034},precise:0,confidence:60,level:"UNKNOWN"},list:["90dd85a0-9270-11e9-b3c9-61985ebe8417","90dd85a1-9270-11e9-b3c9-61985ebe8417"]},{place:"\u60a0\u5510\u8d2d\u7269\u4e2d\u5fc3",location:{location:{lng:116.445977,lat:39.927563},precise:1,confidence:80,level:"\u8d2d\u7269"},list:["90ddacb0-9270-11e9-b3c9-61985ebe8417","90ddd3c0-9270-11e9-b3c9-61985ebe8417"]},{place:"\u6211\u7231\u5496\u5561(\u5b66\u9662\u8def\u5e97)",location:{location:{lng:116.352293,lat:39.991856},precise:1,confidence:80,level:"\u9910\u996e"},list:["4b0fd7c0-9271-11e9-934c-635679a0c29b","4b0fd7c1-9271-11e9-934c-635679a0c29b"]},{place:"\u7389\u6e0a\u6f6d\u516c\u56ed",location:{location:{lng:116.326636,lat:39.922517},precise:0,confidence:40,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b1025e0-9271-11e9-934c-635679a0c29b"]},{place:"\u7389\u6e21\u5c71\u98ce\u666f\u533a",location:{location:{lng:115.904069,lat:40.537234},precise:0,confidence:25,level:"\u65c5\u6e38\u666f\u70b9"},list:["4b104cf0-9271-11e9-934c-635679a0c29b","4b104cf1-9271-11e9-934c-635679a0c29b","4b107400-9271-11e9-934c-635679a0c29b","90de7000-9270-11e9-b3c9-61985ebe8417"]},{place:"\u7ea2\u53f6\u5cad",location:{location:{lng:116.029711,lat:40.355369},precise:0,confidence:25,level:"\u6751\u5e84"},list:["90de7001-9270-11e9-b3c9-61985ebe8417","90de9710-9270-11e9-b3c9-61985ebe8417"]},{place:"\u84dd\u8272\u6e2f\u6e7e",location:{location:{lng:116.482486,lat:39.95509},precise:0,confidence:50,level:"UNKNOWN"},list:["90de9711-9270-11e9-b3c9-61985ebe8417"]},{place:"\u87d2\u5c71\u56fd\u5bb6\u68ee\u6797\u516c\u56ed",location:{location:{lng:116.297866,lat:40.268061},precise:0,confidence:25,level:"\u65c5\u6e38\u666f\u70b9"},list:["90debe20-9270-11e9-b3c9-61985ebe8417","90dee530-9270-11e9-b3c9-61985ebe8417"]}]}},[[21,1,2]]]);
//# sourceMappingURL=main.e126e06f.chunk.js.map