// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var a=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+t(n):t(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=a(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=a(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):n.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,_=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function E(e){var r,t,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);a=e.arg}switch(e.specifier){case"e":case"E":t=a.toExponential(e.precision);break;case"f":case"F":t=a.toFixed(e.precision);break;case"g":case"G":p(a)<1e-4?((r=e.precision)>0&&(r-=1),t=a.toExponential(r)):t=a.toPrecision(e.precision),e.alternate||(t=f.call(t,v,"$1e"),t=f.call(t,b,"e"),t=f.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,_,"$1.e")),a>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function I(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function S(e,r,i){var t=r-e.length;return t<0?e:e=i?e+I(t):I(t)+e}var y=String.fromCharCode,N=isNaN,m=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,i,t,n,o,p,l,u,f;if(!m(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=O(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,N(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):y(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=E(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=S(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function D(e){var r,i,t,a;for(i=[],a=0,t=x.exec(e);t;)(r=e.slice(a,x.lastIndex-t[0].length)).length&&i.push(r),i.push(C(t)),a=x.lastIndex,t=x.exec(e);return(r=e.slice(a)).length&&i.push(r),i}function T(e){return"string"==typeof e}function A(e){var r,i,t;if(!T(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=D(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return k.apply(null,i)}var L=Object.prototype,M=L.toString,R=L.__defineGetter__,U=L.__defineSetter__,V=L.__lookupGetter__,j=L.__lookupSetter__;var $=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===M.call(i))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(V.call(e,r)||j.call(e,r)?(t=e.__proto__,e.__proto__=L,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&R&&R.call(e,r,i.get),o&&U&&U.call(e,r,i.set),e};function F(e,r,i){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})}var W=24,H=168,P=864e5,Y=36e5,Z=6e4,G=1e3,K=6048e5,X=1440,z=60,q=10080,B=12,J=86400,Q=3600,ee=60,re=604800,ie={};F(ie,"HOURS_IN_DAY",24),F(ie,"HOURS_IN_WEEK",168),F(ie,"MILLISECONDS_IN_DAY",864e5),F(ie,"MILLISECONDS_IN_HOUR",36e5),F(ie,"MILLISECONDS_IN_MINUTE",6e4),F(ie,"MILLISECONDS_IN_SECOND",1e3),F(ie,"MILLISECONDS_IN_WEEK",6048e5),F(ie,"MINUTES_IN_DAY",1440),F(ie,"MINUTES_IN_HOUR",60),F(ie,"MINUTES_IN_WEEK",10080),F(ie,"MONTHS_IN_YEAR",12),F(ie,"SECONDS_IN_DAY",86400),F(ie,"SECONDS_IN_HOUR",3600),F(ie,"SECONDS_IN_MINUTE",60),F(ie,"SECONDS_IN_WEEK",604800);export{W as HOURS_IN_DAY,H as HOURS_IN_WEEK,P as MILLISECONDS_IN_DAY,Y as MILLISECONDS_IN_HOUR,Z as MILLISECONDS_IN_MINUTE,G as MILLISECONDS_IN_SECOND,K as MILLISECONDS_IN_WEEK,X as MINUTES_IN_DAY,z as MINUTES_IN_HOUR,q as MINUTES_IN_WEEK,B as MONTHS_IN_YEAR,J as SECONDS_IN_DAY,Q as SECONDS_IN_HOUR,ee as SECONDS_IN_MINUTE,re as SECONDS_IN_WEEK,ie as default};
//# sourceMappingURL=mod.js.map