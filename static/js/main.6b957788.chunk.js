(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(1),r=c.n(o),s=c(5),a=c.n(s),i=c(2);c(12);function d(e){return Object(n.jsx)("div",{id:"title-section",children:Object(n.jsx)("h1",{id:"title",children:e.location})})}var u=c(4),l=c.n(u),h=c(6);function j(){return(j=Object(h.a)(l.a.mark((function e(t,c,n){var o,r,s,a,d,u,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://cors-anywhere.herokuapp.com/http://api.weatherunlocked.com/api/current/".concat(t,".").concat(n,"?app_id=7e69d83c&app_key=9bd589d6ac5fb61d4fb11c3685f8f0dd")),fetch("https://us1.locationiq.com/v1/search.php?key=pk.1f851316dfd30f756fc394349c93ae98&q=".concat(n,",").concat(c,"&format=json"))]);case 2:if(o=e.sent,r=Object(i.a)(o,2),s=r[0],a=r[1],s.ok){e.next=10;break}return console.log(s),console.log(s.ok),e.abrupt("return",null);case 10:return e.next=12,s.json();case 12:return d=e.sent,e.next=15,a.json();case 15:return u=e.sent,a.ok?(h=/^[^,]+/,u=(u=u[0].display_name).match(h)[0]):u="What's the Weather?",e.abrupt("return",[d,u]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=[{country:"United+States",code:"us"},{country:"United+Kingdom",code:"uk"},{country:"Argentina",code:"ar"},{country:"Austria",code:"at"},{country:"Belgium",code:"be"},{country:"Brazil",code:"br"},{country:"Australia",code:"au"},{country:"Canada",code:"ca"},{country:"Denmark",code:"dk"},{country:"Finland",code:"fi"},{country:"France",code:"fr"},{country:"Germany",code:"de"},{country:"Ireland",code:"ie"},{country:"Italy",code:"it"},{country:"Netherlands",code:"nl"},{country:"Norway",code:"no"},{country:"Spain",code:"es"},{country:"Sweden",code:"se"}];function b(e){var t=Object(o.useState)(""),c=Object(i.a)(t,2),r=c[0],s=c[1],a=Object(o.useState)("United+States"),d=Object(i.a)(a,2),u=d[0],l=d[1],h=Object(o.useState)("us"),b=Object(i.a)(h,2),f=b[0],m=b[1],O=Object(o.useState)(!1),y=Object(i.a)(O,2),x=y[0],g=y[1];return Object(n.jsxs)("div",{id:"search-section",children:[Object(n.jsx)("label",{htmlFor:"search-input",children:"Enter Location (Zip/Postal Code):"}),Object(n.jsxs)("div",{id:"search",children:[Object(n.jsx)("select",{name:"countries",id:"countries",className:"search",onChange:function(e){m(e.target.value),l(e.target.options[e.target.selectedIndex].id)},children:p.map((function(e){return"us"===e.code?Object(n.jsx)("option",{value:"us",id:"United+States",defaultValue:!0,children:"US"},"us"):Object(n.jsx)("option",{value:e.code,id:e.country,children:e.code.toUpperCase()},e.code)}))}),Object(n.jsx)("input",{type:"text",placeholder:"Zip or Postal Code",id:"search-input",name:"search",onChange:function(e){g(!1),s(e.target.value)}}),Object(n.jsx)("button",{type:"button",id:"search-submit",name:"search",className:"search",onClick:function(){e.setMode("load"),"us"!==f?e.setUnits("metric"):e.setUnits("imperial"),console.log([f,u,r]),function(e,t,c){return j.apply(this,arguments)}(f,u,r).then((function(t){null===t?(g(!0),e.setMode("enter")):(e.setMode("found"),setTimeout((function(){e.setInfo(t[0]),e.setLocation(t[1]),e.setMode("result")}),1e3))}))},children:"Go"})]}),x&&Object(n.jsx)("p",{id:"error-message",style:{color:"red"},children:"Please Enter Valid Zip/Post Code"})]})}var f=c.p+"static/media/enter.f3e5df42.png",m=c.p+"static/media/found.f994392f.png",O=c.p+"static/media/load.9f848ea6.gif",y=function(e,t){return void 0===e||void 0===t?"#000000":"Clear skies"===t||0===e?"#0496FF":-1===e?"#000000":1<=e<=10||39<=e<=49?"#817C6E":11<=e<=38?"#7B7565":50<=e<=67||80<=e<=82?"#00487C":68<=e<=79||83<=e<=90?"#4BB3FD":91<=e<=94?"#4E6E58":"#000000"};function x(e){var t="f",c="mph";"metric"===e.units&&(t="c",c="kmh");var r=t.toUpperCase(),s=c.toUpperCase(),a={enter:f,found:m,load:O},i=e.info,d=i["temp_".concat(t)],u=i.wx_desc,l=i.wx_code,h=i["feelslike_".concat(t)],j=i["windspd_".concat(c)],p=i.winddir_compass,b=i.humid_pct;return Object(o.useEffect)((function(){document.body.style.backgroundColor=y(l,u)})),Object(n.jsxs)("div",{id:"results-section",children:["result"!==e.mode&&Object(n.jsx)("img",{src:a[e.mode],alt:"cloud logo"}),"result"===e.mode&&Object(n.jsxs)("div",{id:"results",children:[Object(n.jsxs)("h2",{id:"temp",children:[d,"\xb0",r]}),Object(n.jsx)("h3",{id:"desc",children:u}),Object(n.jsxs)("p",{id:"feels-like",children:["Feels Like: ",h,"\xb0",r]}),Object(n.jsxs)("p",{id:"wind",children:["Wind: ",j," ",s," ",p]}),Object(n.jsxs)("p",{id:"humid",children:["Humidity: ",b,"%"]})]})]})}var g=function(){var e=Object(o.useState)("What's The Weather?"),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(o.useState)("imperial"),a=Object(i.a)(s,2),u=a[0],l=a[1],h=Object(o.useState)("enter"),j=Object(i.a)(h,2),p=j[0],f=j[1],m=Object(o.useState)({}),O=Object(i.a)(m,2),y=O[0],g=O[1];return Object(n.jsxs)("div",{id:"app",children:[Object(n.jsx)(d,{location:c}),"result"===p&&Object(n.jsx)("button",{type:"button",id:"new-search",className:"search",onClick:function(){g({}),f("enter"),r("What's the Weather")},children:"New Search"}),"result"!==p&&Object(n.jsx)(b,{setInfo:g,setMode:f,setUnits:l,setLocation:r}),Object(n.jsx)(x,{mode:p,info:y,units:u})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),r(e),s(e)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.6b957788.chunk.js.map