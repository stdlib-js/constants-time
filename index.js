// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,_;e=this,_=function(e){"use strict";var _="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,N=r.__defineGetter__,I=r.__defineSetter__,n=r.__lookupGetter__,S=r.__lookupSetter__,E=function(){try{return _({},"x",{}),!0}catch(e){return!1}}()?t:function(e,_,t){var E,a,l,i;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((a="value"in t)&&(n.call(e,_)||S.call(e,_)?(E=e.__proto__,e.__proto__=r,delete e[_],e[_]=t.value,e.__proto__=E):e[_]=t.value),l="get"in t,i="set"in t,a&&(l||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&N&&N.call(e,_,t.get),i&&I&&I.call(e,_,t.set),e};function a(e,_,t){E(e,_,{configurable:!1,enumerable:!0,writable:!1,value:t})}var l=864e5,i=36e5,u=6048e5,O=604800,c={};a(c,"HOURS_IN_DAY",24),a(c,"HOURS_IN_WEEK",168),a(c,"MILLISECONDS_IN_DAY",l),a(c,"MILLISECONDS_IN_HOUR",i),a(c,"MILLISECONDS_IN_MINUTE",6e4),a(c,"MILLISECONDS_IN_SECOND",1e3),a(c,"MILLISECONDS_IN_WEEK",u),a(c,"MINUTES_IN_DAY",1440),a(c,"MINUTES_IN_HOUR",60),a(c,"MINUTES_IN_WEEK",10080),a(c,"MONTHS_IN_YEAR",12),a(c,"SECONDS_IN_DAY",86400),a(c,"SECONDS_IN_HOUR",3600),a(c,"SECONDS_IN_MINUTE",60),a(c,"SECONDS_IN_WEEK",O),e.HOURS_IN_DAY=24,e.HOURS_IN_WEEK=168,e.MILLISECONDS_IN_DAY=l,e.MILLISECONDS_IN_HOUR=i,e.MILLISECONDS_IN_MINUTE=6e4,e.MILLISECONDS_IN_SECOND=1e3,e.MILLISECONDS_IN_WEEK=u,e.MINUTES_IN_DAY=1440,e.MINUTES_IN_HOUR=60,e.MINUTES_IN_WEEK=10080,e.MONTHS_IN_YEAR=12,e.SECONDS_IN_DAY=86400,e.SECONDS_IN_HOUR=3600,e.SECONDS_IN_MINUTE=60,e.SECONDS_IN_WEEK=O,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?_(exports):"function"==typeof define&&define.amd?define(["exports"],_):_((e="undefined"!=typeof globalThis?globalThis:e||self).constants={});
//# sourceMappingURL=index.js.map
