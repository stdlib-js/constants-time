// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,a,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,s=parseInt(a,10),!isFinite(s)){if(!i(a))throw new Error("invalid integer. Value: "+a);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(a=(-s).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=s.toString(r),s||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===o.call(e.specifier)?o.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,f=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,_=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=u.call(a,b,"$1e"),a=u.call(a,w,"e"),a=u.call(a,_,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=u.call(a,g,"e+0$1"),a=u.call(a,f,"e-0$1"),e.alternate&&(a=u.call(a,d,"$1."),a=u.call(a,h,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===l.call(e.specifier)?l.call(a):p.call(a)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}var I=String.fromCharCode,S=Array.isArray;function y(e){return e!=e}function m(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,i,a,n,o,c,p,l,u,g,f,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(a=e[l],"string"==typeof a)c+=a;else{if(r=void 0!==a.precision,!(a=m(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+a+"`.");for(a.mapping&&(p=a.mapping),i=a.flags,u=0;u<i.length;u++)switch(n=i.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[p],10),p+=1,y(a.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[p],10),p+=1,y(a.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[p],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=s(a);break;case"s":a.maxWidth=r?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!y(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=y(o)?String(a.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=v(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(g=a.arg,f=a.width,d=a.padRight,h=void 0,(h=f-g.length)<0?g:g=d?g+E(h):E(h)+g)),c+=a.arg||"",p+=1}return c}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,i,a,t;for(i=[],t=0,a=O.exec(e);a;)(r=e.slice(t,O.lastIndex-a[0].length)).length&&i.push(r),i.push(k(a)),t=O.lastIndex,a=O.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function C(e){var r,i;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return N.apply(null,r)}var D=Object.prototype,T=D.toString,L=D.__defineGetter__,A=D.__defineSetter__,M=D.__lookupGetter__,R=D.__lookupSetter__;var U=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var a,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===T.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((t="value"in i)&&(M.call(e,r)||R.call(e,r)?(a=e.__proto__,e.__proto__=D,delete e[r],e[r]=i.value,e.__proto__=a):e[r]=i.value),n="get"in i,o="set"in i,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&L&&L.call(e,r,i.get),o&&A&&A.call(e,r,i.set),e};function V(e,r,i){U(e,r,{configurable:!1,enumerable:!0,writable:!1,value:i})}var j=24,$=168,F=864e5,W=36e5,H=6e4,P=1e3,Y=6048e5,Z=1440,G=60,K=10080,X=12,z=86400,q=3600,B=60,J=604800,Q={};V(Q,"HOURS_IN_DAY",24),V(Q,"HOURS_IN_WEEK",168),V(Q,"MILLISECONDS_IN_DAY",F),V(Q,"MILLISECONDS_IN_HOUR",W),V(Q,"MILLISECONDS_IN_MINUTE",6e4),V(Q,"MILLISECONDS_IN_SECOND",1e3),V(Q,"MILLISECONDS_IN_WEEK",Y),V(Q,"MINUTES_IN_DAY",1440),V(Q,"MINUTES_IN_HOUR",60),V(Q,"MINUTES_IN_WEEK",10080),V(Q,"MONTHS_IN_YEAR",12),V(Q,"SECONDS_IN_DAY",86400),V(Q,"SECONDS_IN_HOUR",3600),V(Q,"SECONDS_IN_MINUTE",60),V(Q,"SECONDS_IN_WEEK",J);export{j as HOURS_IN_DAY,$ as HOURS_IN_WEEK,F as MILLISECONDS_IN_DAY,W as MILLISECONDS_IN_HOUR,H as MILLISECONDS_IN_MINUTE,P as MILLISECONDS_IN_SECOND,Y as MILLISECONDS_IN_WEEK,Z as MINUTES_IN_DAY,G as MINUTES_IN_HOUR,K as MINUTES_IN_WEEK,X as MONTHS_IN_YEAR,z as SECONDS_IN_DAY,q as SECONDS_IN_HOUR,B as SECONDS_IN_MINUTE,J as SECONDS_IN_WEEK,Q as default};
//# sourceMappingURL=mod.js.map
