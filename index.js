(function () {function J(a){return a&&a.__esModule?{d:a.default}:{d:a}}var D,G={};!function(e){if("undefined"!=typeof window){var n,i=0,t=!1,o=!1,r="message".length,a="[iFrameSizer]",s=a.length,d=null,u=window.requestAnimationFrame,c={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},f={},l=null,m={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,mouseEvents:!0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClose:function(){return!0},onClosed:function(){},onInit:function(){},onMessage:function(){M("onMessage function not defined")},onMouseEnter:function(){},onMouseLeave:function(){},onResized:function(){},onScroll:function(){return!0}},g={};window.jQuery&&((n=window.jQuery).fn?n.fn.iFrameResize||(n.fn.iFrameResize=function(e){return this.filter("iframe").each(function(n,i){H(i,e)}).end()}):x("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof D&&D.amd?D([],B):"object"==typeof G&&(G=B()),window.iFrameResize=window.iFrameResize||B()}function h(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function w(e,n,i){e.addEventListener(n,i,!1)}function p(e,n,i){e.removeEventListener(n,i,!1)}function b(e){return a+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function y(e){return f[e]?f[e].log:t}function v(e,n){I("log",e,n,y(e))}function x(e,n){I("info",e,n,y(e))}function M(e,n){I("warn",e,n,!0)}function I(e,n,i,t){!0===t&&"object"==typeof window.console&&console[e](b(n),i)}function k(e){function n(){o("Height"),o("Width"),j(function(){W(L),R(B),y("onResized",L)},L,"init")}function i(e){return"border-box"!==e.boxSizing?0:(e.paddingTop?parseInt(e.paddingTop,10):0)+(e.paddingBottom?parseInt(e.paddingBottom,10):0)}function t(e){return"border-box"!==e.boxSizing?0:(e.borderTopWidth?parseInt(e.borderTopWidth,10):0)+(e.borderBottomWidth?parseInt(e.borderBottomWidth,10):0)}function o(e){var n=Number(f[B]["max"+e]),i=Number(f[B]["min"+e]),t=e.toLowerCase(),o=Number(L[t]);v(B,"Checking "+t+" is in range "+i+"-"+n),o<i&&(o=i,v(B,"Set "+t+" to min value")),o>n&&(o=n,v(B,"Set "+t+" to max value")),L[t]=""+o}function u(e){return A.substr(A.indexOf(":")+r+e)}function c(e,n){var i,t,o;i=function(){var i,t;C("Send Page Info","pageInfo:"+(i=document.body.getBoundingClientRect(),t=L.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:t.height,iframeWidth:t.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(t.top-i.top,10),offsetLeft:parseInt(t.left-i.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,documentHeight:document.documentElement.clientHeight,documentWidth:document.documentElement.clientWidth,windowHeight:window.innerHeight,windowWidth:window.innerWidth})),e,n)},t=32,g[o=n]||(g[o]=setTimeout(function(){g[o]=null,i()},t))}function l(e){var n=e.getBoundingClientRect();return O(B),{x:Math.floor(Number(n.left)+Number(d.x)),y:Math.floor(Number(n.top)+Number(d.y))}}function m(e){var n=e?l(L.iframe):{x:0,y:0},i={x:Number(L.width)+n.x,y:Number(L.height)+n.y};v(B,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):M(B,"Unable to scroll to requested position, window.parentIFrame not found"):(d=i,h(),v(B,"--"))}function h(){!1!==y("onScroll",d)?R(B):T()}function b(e){var n={};if(0===Number(L.width)&&0===Number(L.height)){var i=u(9).split(":");n={x:i[1],y:i[0]}}else n={x:L.width,y:L.height};y(e,{iframe:L.iframe,screenX:Number(n.x),screenY:Number(n.y),type:L.type})}function y(e,n){return F(B,e,n)}var I,k,z,H,P,$,A=e.data,L={},B=null;"[iFrameResizerChild]Ready"===A?function(){for(var e in f)C("iFrame requested init",S(e),f[e].iframe,e)}():a===(""+A).substr(0,s)&&A.substr(s).split(":")[0]in f?(z=A.substr(s).split(":"),H=z[1]?parseInt(z[1],10):0,P=f[z[0]]&&f[z[0]].iframe,$=getComputedStyle(P),L={iframe:P,id:z[0],height:H+i($)+t($),width:z[2],type:z[3]},B=L.id,f[B]&&(f[B].loaded=!0),(k=L.type in{true:1,false:1,undefined:1})&&v(B,"Ignoring init message from meta parent page"),!k&&function(e){var n=!0;return f[e]||(n=!1,M(L.type+" No settings for "+e+". Message was: "+A)),n}(B)&&(v(B,"Received: "+A),I=!0,null===L.iframe&&(M(B,"IFrame ("+L.id+") not found"),I=!1),I&&function(){var n,i=e.origin,t=f[B]&&f[B].checkOrigin;if(t&&""+i!="null"&&!(t.constructor===Array?function(){var e=0,n=!1;for(v(B,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():(n=f[B]&&f[B].remoteHost,v(B,"Checking connection is from: "+n),i===n)))throw new Error("Unexpected message received from: "+i+" for "+L.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(f[B]&&f[B].firstRun&&f[B]&&(f[B].firstRun=!1),L.type){case"close":N(L.iframe);break;case"message":a=u(6),v(B,"onMessage passed: {iframe: "+L.iframe.id+", message: "+a+"}"),y("onMessage",{iframe:L.iframe,message:JSON.parse(a)}),v(B,"--");break;case"mouseenter":b("onMouseEnter");break;case"mouseleave":b("onMouseLeave");break;case"autoResize":f[B].autoResize=JSON.parse(u(9));break;case"scrollTo":m(!1);break;case"scrollToOffset":m(!0);break;case"pageInfo":c(f[B]&&f[B].iframe,B),function(){function e(e,t){function o(){f[i]?c(f[i].iframe,i):n()}["scroll","resize"].forEach(function(n){v(i,e+n+" listener for sendPageInfo"),t(window,n,o)})}function n(){e("Remove ",p)}var i=B;e("Add ",w),f[i]&&(f[i].stopPageInfo=n)}();break;case"pageInfoStop":f[B]&&f[B].stopPageInfo&&(f[B].stopPageInfo(),delete f[B].stopPageInfo);break;case"inPageLink":e=u(9),t=e.split("#")[1]||"",o=decodeURIComponent(t),(r=document.getElementById(o)||document.getElementsByName(o)[0])?(i=l(r),v(B,"Moving to in page link (#"+t+") at x: "+i.x+" y: "+i.y),d={x:i.x,y:i.y},h(),v(B,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(t):v(B,"In page link #"+t+" not found and window.parentIFrame not found"):v(B,"In page link #"+t+" not found");break;case"reset":E(L);break;case"init":n(),y("onInit",L.iframe);break;default:0===Number(L.width)&&0===Number(L.height)?M("Unsupported message received ("+L.type+"), this is likely due to the iframe containing a later version of iframe-resizer than the parent page"):n();}var e,i,t,o,r,a}())):x(B,"Ignored: "+A)}function F(e,n,i){var t=null,o=null;if(f[e]){if("function"!=typeof(t=f[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function z(e){var n=e.id;delete f[n]}function N(e){var n=e.id;if(!1!==F(n,"onClose",n)){v(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(i){M(i)}F(n,"onClosed",n),v(n,"--"),z(e)}else v(n,"Close iframe cancelled by onClose event")}function O(n){null===d&&v(n,"Get page position: "+(d={x:window.pageXOffset!==e?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==e?window.pageYOffset:document.documentElement.scrollTop}).x+","+d.y)}function R(e){null!==d&&(window.scrollTo(d.x,d.y),v(e,"Set page position: "+d.x+","+d.y),T())}function T(){d=null}function E(e){v(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),O(e.id),j(function(){W(e),C("reset","reset",e.iframe,e.id)},e,"reset")}function W(e){function n(n){o||"0"!==e[n]||(o=!0,v(t,"Hidden iFrame detected, creating visibility listener"),function(){function e(){Object.keys(f).forEach(function(e){!function(e){function n(n){return"0px"===(f[e]&&f[e].iframe.style[n])}f[e]&&(i=f[e].iframe,null!==i.offsetParent)&&(n("height")||n("width"))&&C("Visibility change","resize",f[e].iframe,e);var i}(e)})}function n(n){v("window","Mutation observed: "+n[0].target+" "+n[0].type),P(e,16)}var i=h();i&&(t=document.querySelector("body"),new i(n).observe(t,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0}));var t}())}function i(i){!function(n){e.id?(e.iframe.style[n]=e[n]+"px",v(e.id,"IFrame ("+t+") "+n+" set to "+e[n]+"px")):v("undefined","messageData id not set")}(i),n(i)}var t=e.iframe.id;f[t]&&(f[t].sizeHeight&&i("height"),f[t].sizeWidth&&i("width"))}function j(e,n,i){i!==n.type&&u&&!window.jasmine?(v(n.id,"Requesting animation frame"),u(e)):e()}function C(e,n,i,t,o){var r,s=!1;t=t||i.id,f[t]&&(i&&"contentWindow"in i&&null!==i.contentWindow?(r=f[t]&&f[t].targetOrigin,v(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+r),i.contentWindow.postMessage(a+n,r)):M(t,"["+e+"] IFrame("+t+") not found"),o&&f[t]&&f[t].warningTimeout&&(f[t].msgTimeout=setTimeout(function(){!f[t]||f[t].loaded||s||(s=!0,M(t,"IFrame has not responded within "+f[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},f[t].warningTimeout)))}function S(e){return e+":"+f[e].bodyMarginV1+":"+f[e].sizeWidth+":"+f[e].log+":"+f[e].interval+":"+f[e].enablePublicMethods+":"+f[e].autoResize+":"+f[e].bodyMargin+":"+f[e].heightCalculationMethod+":"+f[e].bodyBackground+":"+f[e].bodyPadding+":"+f[e].tolerance+":"+f[e].inPageLinks+":"+f[e].resizeFrom+":"+f[e].widthCalculationMethod+":"+f[e].mouseEvents}function H(n,o){function r(e){var n=e.split("Callback");if(2===n.length){var i="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[i]=this[e],delete this[e],M(d,"Deprecated: '"+e+"' has been renamed '"+i+"'. The old method will be removed in the next major version.")}}var a,s,d=function(e){var r;return""===e&&(n.id=(r=o&&o.id||m.id+i++,null!==document.getElementById(r)&&(r+=i++),e=r),t=(o||{}).log,v(e,"Added missing iframe ID: "+e+" ("+n.src+")")),e}(n.id);d in f&&"iFrameResizer"in n?M(d,"Ignored iFrame, already setup."):(!function(e){var i;e=e||{},f[d]={firstRun:!0,iframe:n,remoteHost:n.src&&n.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(e),Object.keys(e).forEach(r,e),function(e){for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&(f[d][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:m[n])}(e),f[d]&&(f[d].targetOrigin=!0===f[d].checkOrigin?""===(i=f[d].remoteHost)||null!==i.match(/^(about:blank|javascript:|file:\/\/)/)?"*":i:"*")}(o),function(){switch(v(d,"IFrame scrolling "+(f[d]&&f[d].scrolling?"enabled":"disabled")+" for "+d),n.style.overflow=!1===(f[d]&&f[d].scrolling)?"hidden":"auto",f[d]&&f[d].scrolling){case"omit":break;case!0:n.scrolling="yes";break;case!1:n.scrolling="no";break;default:n.scrolling=f[d]?f[d].scrolling:"no";}}(),function(){function e(e){var i=f[d][e];1/0!==i&&0!==i&&(n.style[e]="number"==typeof i?i+"px":i,v(d,"Set "+e+" = "+n.style[e]))}function i(e){if(f[d]["min"+e]>f[d]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}i("Height"),i("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),"number"!=typeof(f[d]&&f[d].bodyMargin)&&"0"!==(f[d]&&f[d].bodyMargin)||(f[d].bodyMarginV1=f[d].bodyMargin,f[d].bodyMargin=f[d].bodyMargin+"px"),a=S(d),(s=h())&&function(e){n.parentNode&&new e(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===n&&N(n)})})}).observe(n.parentNode,{childList:!0})}(s),w(n,"load",function(){var i,t;C("iFrame.onload",a,n,e,!0),i=f[d]&&f[d].firstRun,t=f[d]&&f[d].heightCalculationMethod in c,!i&&t&&E({iframe:n,height:0,width:0,type:"init"})}),C("init",a,n,e,!0),f[d]&&(f[d].iframe.iFrameResizer={close:N.bind(null,f[d].iframe),removeListeners:z.bind(null,f[d].iframe),resize:C.bind(null,"Window resize","resize",f[d].iframe),moveToAnchor:function(e){C("Move to anchor","moveToAnchor:"+e,f[d].iframe,d)},sendMessage:function(e){C("Send Message","message:"+(e=JSON.stringify(e)),f[d].iframe,d)}}))}function P(e,n){null===l&&(l=setTimeout(function(){l=null,e()},n))}function $(){"hidden"!==document.visibilityState&&(v("document","Trigger event: Visiblity change"),P(function(){A("Tab Visable","resize")},16))}function A(e,n){Object.keys(f).forEach(function(i){(function(e){return f[e]&&"parent"===f[e].resizeFrom&&f[e].autoResize&&!f[e].firstRun})(i)&&C(e,n,f[i].iframe,i)})}function L(){w(window,"message",k),w(window,"resize",function(){var e;v("window","Trigger event: "+(e="resize")),P(function(){A("Window "+e,"resize")},16)}),w(document,"visibilitychange",$),w(document,"-webkit-visibilitychange",$)}function B(){function n(e,n){n&&(!function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),H(n,e),i.push(n))}var i;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!u;e+=1)u=window[n[e]+"RequestAnimationFrame"];u?u=u.bind(window):v("setup","RequestAnimationFrame not supported")}(),L(),function(t,o){switch(i=[],function(e){e&&e.enablePublicMethods&&M("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(t),typeof o){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(o||"iframe"),n.bind(e,t));break;case"object":n(t,o);break;default:throw new TypeError("Unexpected data type ("+typeof o+")");}return i}}}();var q={props:{config:{type:Object,default:function(){return{siteId:!1,sharePassword:!1}}}},data:function(){return{ready:!1,loaded:!1,error:!1,errors:[]}},methods:{resize:function(e){var $jwNu$$interop$default=J(G);$jwNu$$interop$default.d({},e.target),this.loaded=!0}},computed:{dashboardUrl:function(){return"https://app.usefathom.com/share/".concat(this.config.siteId,"/kirby?password=").concat(this.config.sharePassword)}},mounted:function(){var e=this;void 0!==window.fiber?this.ready=!0:this.$api.get("fathom-analytics").then(function(r){e.config.siteId=r.siteId,e.config.sharePassword=r.sharePassword,e.config.siteId||(e.error=!0,e.errors.push(e.$t("paulmorel.fathom-analytics.siteId-missing")))}).finally(function(){e.ready=!0})}};if(typeof q==="function"){q=q.options}Object.assign(q,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-inside",[_vm.ready?_c("k-view",{staticClass:"k-analytics-view"},[_c("k-header",[_vm._v(_vm._s(_vm.$t("paulmorel.fathom-analytics.analytics")))]),_vm._v(" "),_vm.error?[_c("k-box",{attrs:{"theme":"negative"}},_vm._l(_vm.errors,function(error,index){return _c("k-text",{key:"error-"+index},[_vm._v(" "+_vm._s(error)+" ")])}),1)]:_vm._e(),_vm._v(" "),!_vm.error?_c("div",[_c("k-icon",{directives:[{name:"show",rawName:"v-show",value:_vm.loaded==false,expression:"loaded == false"}],staticClass:"fathom-analytics-loader",attrs:{"type":"loader","position":"center","size":"medium"}}),_vm._v(" "),_c("iframe",{directives:[{name:"show",rawName:"v-show",value:_vm.loaded,expression:"loaded"}],staticClass:"fathom-analytics-iframe",attrs:{"src":_vm.dashboardUrl,"frameborder":"0"},on:{"load":_vm.resize}})],1):_vm._e()],2):_vm._e()],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-baab02",functional:undefined}}());panel.plugin("paulmorel/fathom-analytics",{components:{analytics:q},views:{analytics:{component:q,icon:"chart",menu:!0}}});})();