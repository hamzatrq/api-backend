parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rjjY":[function(require,module,exports) {
var e=require("@onflow/interaction"),r=require("@onflow/send"),n=require("@onflow/decode"),t=require("@qvvg/templar"),o=require("@onflow/encode"),i=e.pipe;function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a={asParam:function(e){return e},asInjection:function(e){return e}},c=[];const s=function(){function e(){}return e.prototype.then=function(r,n){const t=new e,o=this.s;if(o){const i=1&o?r:n;if(i){try{p(t,1,i(this.v))}catch(e){p(t,2,e)}return t}return this}return this.o=function(e){try{const o=e.v;1&e.s?p(t,1,r?r(o):o):n?p(t,1,n(o)):p(t,2,o)}catch(e){p(t,2,e)}},t},e}();function p(e,r,n){if(!e.s){if(n instanceof s){if(!n.s)return void(n.o=p.bind(null,e,r));1&r&&(r=n.s),n=n.v}if(n&&n.then)return void n.then(p.bind(null,e,r),p.bind(null,e,2));e.s=r,e.v=n;const t=e.o;t&&t(e)}}function f(e){return e instanceof s&&1&e.s}const l="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var d=function(e){return"function"==typeof e},m=function(e){return"number"==typeof e},y=function(e){return"string"==typeof e},v=function(e,r){if(!e){var n,t=new Error("INVARIANT "+r);t.stack=t.stack.split("\n").filter(function(e){return!/at invariant/.test(e)}).join("\n");for(var o=arguments.length,i=new Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];throw(n=console).error.apply(n,["\n\n---\n\n",t,"\n\n"].concat(i,["\n\n---\n\n"])),t}},g=function(e){return!(e.role.proposer&&!(y(e.addr)&&m(e.keyId)&&m(e.sequenceNum)&&d(e.signingFunction))||e.role.payer&&!(y(e.addr)&&m(e.keyId)&&d(e.signingFunction))||e.role.authorizer&&!(y(e.addr)&&m(e.keyId)&&d(e.signingFunction)))},h=function(e){return void 0===e&&(e=[]),e.filter(Boolean)[0]||null},k=function(e){return void 0===e&&(e=[]),e.find(function(e){return e.role.proposer})||{}},b=e.pipe([function(r){try{var n=function(){return e.Ok(r)};if(!e.isTransaction(r))return Promise.resolve(e.Ok(r));var t=function(e,r,n){if("function"==typeof e[l]){var t,o,i,u=e[l]();if(function e(n){try{for(;!(t=u.next()).done;)if((n=r(t.value))&&n.then){if(!f(n))return void n.then(e,i||(i=p.bind(null,o=new s,2)));n=n.v}o?p(o,1,n):o=n}catch(e){p(o||(o=new s),2,e)}}(),u.return){var a=function(e){try{t.done||u.return()}catch(e){}return e};if(o&&o.then)return o.then(a,function(e){throw a(e)});a()}return o}if(!("length"in e))throw new TypeError("Object is not iterable");for(var c=[],d=0;d<e.length;d++)c.push(e[d]);return function(e,r,n){var t,o,i=-1;return function n(u){try{for(;++i<e.length;)if((u=r(i))&&u.then){if(!f(u))return void u.then(n,o||(o=p.bind(null,t=new s,2)));u=u.v}t?p(t,1,u):t=u}catch(e){p(t||(t=new s),2,e)}}(),t}(c,function(e){return r(c[e])})}(Object.entries(r.accounts),function(e){var n=e[0],t=e[1];function o(){v(g(r.accounts[n]),"Account unable to fulfill role",r.accounts[n])}var i=function(){if(d(t.resolve))return Promise.resolve(t.resolve(t)).then(function(e){r.accounts[n]=e})}();return i&&i.then?i.then(o):o()});return Promise.resolve(t&&t.then?t.then(n):n())}catch(e){return Promise.reject(e)}},function(r){try{if(!e.isTransaction(r))return Promise.resolve(e.Ok(r));for(var n=function(){var e,n,i,a=o[t],c=a.addr+"|"+a.keyId;r.accounts[c]=null!=r.accounts[c]?(e=r.accounts[c],n=u({tempId:c},a),{kind:h([e.kind,n.kind]),tempId:h([e.tempId,n.tempId]),addr:h([e.addr,n.addr]),keyId:(i=[e.keyId,n.keyId],void 0===i&&(i=[]),"number"==typeof i.filter(m)[0]?i.filter(m)[0]:null),sequenceNum:"number"==typeof k([e,n]).sequenceNum?k([e,n]).sequenceNum:e.sequenceNum,signature:h([e.signature,n.signature]),signingFunction:h([e.signingFunction,n.signingFunction]),resolve:h([e.resolve,n.resolve]),role:{proposer:e.role.proposer||n.role.proposer,authorizer:e.role.authorizer||n.role.authorizer,payer:e.role.payer||n.role.payer,param:e.role.param||n.role.param}}):u({tempId:c},a),r.proposer===a.tempId&&(r.proposer=c),r.payer===a.tempId&&(r.payer=c),r.authorizations=r.authorizations.map(function(e){return e===a.tempId?c:e}),delete r.accounts[a.tempId]},t=0,o=Object.values(r.accounts);t<o.length;t++)n();for(var i=0,a=Object.values(r.accounts);i<a.length;i++){var c=a[i];v(g(c),"Account unable to fulfill roles",c)}return Promise.resolve(e.Ok(r))}catch(e){return Promise.reject(e)}}]);Object.defineProperty(exports,"isBad",{enumerable:!0,get:function(){return e.isBad}}),Object.defineProperty(exports,"isOk",{enumerable:!0,get:function(){return e.isOk}}),Object.defineProperty(exports,"pipe",{enumerable:!0,get:function(){return e.pipe}}),Object.defineProperty(exports,"why",{enumerable:!0,get:function(){return e.why}}),Object.defineProperty(exports,"send",{enumerable:!0,get:function(){return r.send}}),Object.defineProperty(exports,"decode",{enumerable:!0,get:function(){return n.decode}}),Object.defineProperty(exports,"decodeResponse",{enumerable:!0,get:function(){return n.decodeResponse}}),Object.defineProperty(exports,"cadence",{enumerable:!0,get:function(){return t.templar}}),Object.defineProperty(exports,"cdc",{enumerable:!0,get:function(){return t.templar}}),exports.authorization=function(e,r,n,t){return{addr:e,signingFunction:r,keyId:n,sequenceNum:t}},exports.authorizations=function(r){return void 0===r&&(r=[]),e.pipe(r.map(function(r){return e.makeAuthorizer(u({},"function"==typeof r?{resolve:r}:r,{role:{authorizer:!0}}))}))},exports.build=function(r){return void 0===r&&(r=[]),e.pipe(e.interaction(),r)},exports.getAccount=function(r){return e.pipe([e.makeGetAccount,function(n){return n.accountAddr=r,e.Ok(n)}])},exports.getEvents=function(r,n,t){return e.pipe([e.makeGetEvents,function(n){return n.events.eventType=r,e.Ok(n)},function(r){return r.events.start=n,e.Ok(r)},function(r){return r.events.end=t,e.Ok(r)}])},exports.getLatestBlock=function(r){return void 0===r&&(r=!1),e.pipe([e.makeGetLatestBlock,function(n){return n.latestBlock.isSealed=r,e.Ok(n)}])},exports.getTransactionStatus=function(r){return e.pipe([e.makeGetTransactionStatus,function(n){return n.transactionId=r,e.Ok(n)}])},exports.limit=function(r){return e.pipe([function(n){return n.message.computeLimit=r,e.Ok(n)}])},exports.param=function(e,r,n){return void 0===r&&(r=a),void 0===n&&(n=null),{key:n,value:e,xform:r}},exports.params=function(r){return void 0===r&&(r=[]),e.pipe(r.map(function(r){return e.makeParam("function"==typeof r?{resolve:r}:r)}))},exports.payer=function(r){return e.makePayer(u({},"function"==typeof r?{resolve:r}:r,{role:{payer:!0}}))},exports.ping=function(){return e.pipe([e.makePing])},exports.proposer=function(r){try{return Promise.resolve(e.makeProposer("function"==typeof r?{resolve:r,role:{proposer:!0}}:u({},r,{role:{proposer:!0}})))}catch(e){return Promise.reject(e)}},exports.ref=function(r){return e.pipe([function(n){return n.message.refBlock=r,e.Ok(n)}])},exports.resolve=i,exports.resolveAccounts=b,exports.resolveParams=function(r){try{var n=function(e){if(t)return e;throw new Error("Invalid Cadence Value")},t=!1;if(!e.isTransaction(r)&&!e.isScript(r))return Promise.resolve(e.Ok(r));var o=e.get(r,"ix.cadence");if("string"==typeof o)return r.message.cadence=o,Promise.resolve(e.Ok(r));var i=function(){if("function"==typeof o){var n=Object.values(r.params);return Promise.resolve(Promise.all(n.map(function(e){try{var r=!1,n=function(){if("function"==typeof e.resolve)return r=!0,Promise.resolve(e.resolve()).then(function(r){return u({},r,{tempId:e.tempId})})}();return Promise.resolve(n&&n.then?n.then(function(n){return r?n:e}):r?n:e)}catch(e){return Promise.reject(e)}}))).then(function(n){return n.forEach(function(e){r.params[e.tempId]=e}),n=Object.fromEntries(n.filter(function(e){return null!=e.key}).map(function(e){return[e.key,e.xform.asInjection(e.value)]})),r.message.cadence=o(n),t=!0,e.Ok(r)})}}();return Promise.resolve(i&&i.then?i.then(n):n(i))}catch(e){return Promise.reject(e)}},exports.resolveSignatures=function(r){try{if(!e.isTransaction(r))return Promise.resolve(e.Ok(r));var n=r.authorizations.map(function(e){return r.accounts[e]}),t=r.accounts[r.payer],i=r.accounts[r.proposer],a=o.encodeTransactionPayload({script:r.message.cadence,refBlock:r.message.refBlock||null,gasLimit:r.message.computeLimit,proposalKey:{address:i.addr,keyId:i.keyId,sequenceNum:i.sequenceNum},payer:t.addr,authorizers:n.map(function(e){return e.addr})}),c=n.map(function(e){try{return e.addr===t.addr?(r.accounts[e.tempId]=u({},r.accounts[e.tempId],{signature:null}),Promise.resolve()):Promise.resolve(e.signingFunction({message:a,addr:e.addr,keyId:e.keyId,roles:{proposer:i.addr===e.addr,authorizer:!0,payer:t.addr===e.addr},interaction:r})).then(function(n){r.accounts[e.tempId]=u({},r.accounts[e.tempId],{signature:n.signature})})}catch(e){return Promise.reject(e)}});return Promise.resolve(Promise.all(c)).then(function(){n=r.authorizations.map(function(e){return r.accounts[e]});var a=o.encodeTransactionEnvelope({script:r.message.cadence,refBlock:r.message.refBlock||null,gasLimit:r.message.computeLimit,proposalKey:{address:i.addr,keyId:i.keyId,sequenceNum:i.sequenceNum},payer:t.addr,authorizers:n.map(function(e){return e.addr}),payloadSigs:n.map(function(e){return null===e.signature?null:{address:e.addr,keyId:e.keyId,sig:e.signature}}).filter(function(e){return null!==e})});return Promise.resolve(t.signingFunction({message:a,addr:t.addr,keyId:t.keyId,roles:{proposer:i.addr===t.addr,authorizer:Boolean(n.find(function(e){return e.addr===t.addr})),payer:!0},interaction:r})).then(function(n){return r.accounts[r.payer]=u({},r.accounts[r.payer],{signature:n.signature}),e.Ok(r)})})}catch(e){return Promise.reject(e)}},exports.script=function(){return e.pipe([e.makeScript,e.put("ix.cadence",t.templar.apply(void 0,arguments))])},exports.transaction=function(){return e.pipe([e.makeTransaction,e.put("ix.cadence",t.templar.apply(void 0,arguments)),function(r){return r.message.computeLimit=r.message.computeLimit||10,r.message.refBlock=r.message.refBlock||null,r.authorizations=r.authorizations||c,e.Ok(r)}])};
},{}]},{},["rjjY"], null)
//# sourceMappingURL=/sdk.js.map