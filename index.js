!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.lapse=n():e.lapse=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var r={en:{seconds:function(e){return"Less than a minute ago"},minutes:function(e){return 1===e?e+" minute ago":e+" minutes ago"},hours:function(e){return 1===e?e+" hour ago":e+" hours ago"},days:function(e){return 1===e?e+" day ago":e+" days ago"},weeks:function(e){return 1===e?e+" week ago":e+" weeks ago"},months:function(e){return 1===e?e+" month ago":e+" months ago"},years:function(e){return 1===e?e+" year ago":e+" years ago"}},es:{seconds:function(e){return"Hace menos de un minuto"},minutes:function(e){return 1===e?"Hace "+e+" minuto":"Hace "+e+" minutos"},hours:function(e){return 1===e?"Hace "+e+" hora":"Hace "+e+" horas"},days:function(e){return 1===e?"Hace "+e+" dia":"Hace "+e+" dias"},weeks:function(e){return 1===e?"Hace "+e+" semana":"Hace "+e+" semanas"},months:function(e){return 1===e?"Hace "+e+" mes":"Hace "+e+" meses"},years:function(e){return 1===e?"Hace "+e+" año":"Hace "+e+" años"}}};function o(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return(n=t-n)<6e4?r[e].seconds():n<36e5?r[e].minutes(parseInt(n/1e3/60)):n<864e5?r[e].hours(parseInt(n/1e3/60/60)):n<216e6?r[e].days(parseInt(n/1e3/60/60/24)):n<24192e5?r[e].weeks(Number((n/6048e5).toFixed(1))):n<290304e5?r[e].months(Number((n/24192e5).toFixed(1))):r[e].years(Number((n/31536e6).toFixed(1)))}}])}));
//# sourceMappingURL=index.js.map