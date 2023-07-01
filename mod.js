// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,r=Object.prototype,_=r.toString,o=r.__defineGetter__,n=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;var i=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,i){var N,I,u,c;if("object"!=typeof e||null===e||"[object Array]"===_.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof i||null===i||"[object Array]"===_.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((I="value"in i)&&(a.call(e,t)||l.call(e,t)?(N=e.__proto__,e.__proto__=r,delete e[t],e[t]=i.value,e.__proto__=N):e[t]=i.value),u="get"in i,c="set"in i,I&&(u||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&o&&o.call(e,t,i.get),c&&n&&n.call(e,t,i.set),e};function N(e,t,r){i(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}var I=24,u=168,c=864e5,S=36e5,E=6e4,p=1e3,O=6048e5,f=1440,b=60,y=10080,D=12,d=86400,v=3600,s=60,C=604800,M={};N(M,"HOURS_IN_DAY",24),N(M,"HOURS_IN_WEEK",168),N(M,"MILLISECONDS_IN_DAY",864e5),N(M,"MILLISECONDS_IN_HOUR",36e5),N(M,"MILLISECONDS_IN_MINUTE",6e4),N(M,"MILLISECONDS_IN_SECOND",1e3),N(M,"MILLISECONDS_IN_WEEK",6048e5),N(M,"MINUTES_IN_DAY",1440),N(M,"MINUTES_IN_HOUR",60),N(M,"MINUTES_IN_WEEK",10080),N(M,"MONTHS_IN_YEAR",12),N(M,"SECONDS_IN_DAY",86400),N(M,"SECONDS_IN_HOUR",3600),N(M,"SECONDS_IN_MINUTE",60),N(M,"SECONDS_IN_WEEK",604800);export{I as HOURS_IN_DAY,u as HOURS_IN_WEEK,c as MILLISECONDS_IN_DAY,S as MILLISECONDS_IN_HOUR,E as MILLISECONDS_IN_MINUTE,p as MILLISECONDS_IN_SECOND,O as MILLISECONDS_IN_WEEK,f as MINUTES_IN_DAY,b as MINUTES_IN_HOUR,y as MINUTES_IN_WEEK,D as MONTHS_IN_YEAR,d as SECONDS_IN_DAY,v as SECONDS_IN_HOUR,s as SECONDS_IN_MINUTE,C as SECONDS_IN_WEEK,M as default};
//# sourceMappingURL=mod.js.map