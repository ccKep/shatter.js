parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nW4d":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=function(e,n,t,r){return new(t||(t=Promise))(function(o,u){function i(e){try{c(r.next(e))}catch(n){u(n)}}function a(e){try{c(r.throw(e))}catch(n){u(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(i,a)}c((r=r.apply(e,n||[])).next())})},n=function(e,n){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(e,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};function t(t){return e(this,void 0,void 0,function(){var e;return n(this,function(n){return e=document.createElement("img"),[2,new Promise(function(n,r){e.onload=function(){return n(e)},e.onerror=r,e.src=t})]})})}
},{}],"jFX7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function t(t){this.x={min:0,max:0},this.y={min:0,max:0},this.x.min=this.x.max=t[0],this.y.min=this.y.max=t[1]}return t.prototype.update=function(t){t[0]>this.x.max&&(this.x.max=t[0]),t[0]<this.x.min&&(this.x.min=t[0]),t[1]>this.y.max&&(this.y.max=t[1]),t[1]<this.y.min&&(this.y.min=t[1])},t}(),i=t;exports.default=i;
},{}],"xL3V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("./lib/loadImage")),t=n(require("./lib/Bounds"));function n(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t,n,i){return new(n||(n=Promise))(function(r,o){function a(e){try{l(i.next(e))}catch(t){o(t)}}function u(e){try{l(i.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,u)}l((i=i.apply(e,t||[])).next())})},r=function(e,t){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=function(){function n(e,t){var n;this.url="",this.numPieces=4,this.pieces=[],this.images=[],this.url=e||"",this.numPieces=null!==(n=null==t?void 0:t.numPieces)&&void 0!==n?n:this.numPieces}return n.prototype.setImage=function(e){this.originalImage=e},n.prototype.setPieces=function(e){this.pieces=e},n.prototype.shatter=function(){return i(this,void 0,void 0,function(){var n,o,a,u,l=this;return r(this,function(s){switch(s.label){case 0:if(this.originalImage)return[3,4];s.label=1;case 1:return s.trys.push([1,3,,4]),n=this,[4,(0,e.default)(this.url)];case 2:return n.originalImage=s.sent(),[3,4];case 3:return o=s.sent(),console.error(o),[2];case 4:return a=this.pieces.map(function(n){return i(l,void 0,void 0,function(){var o=this;return r(this,function(a){return[2,new Promise(function(a,u){return i(o,void 0,void 0,function(){var i,o,l,s,c,h,f,d,m,g,p;return r(this,function(r){switch(r.label){case 0:for(this.originalImage||u("Image not set"),(i=document.createElement("canvas")).width=null!==(d=null===(f=this.originalImage)||void 0===f?void 0:f.width)&&void 0!==d?d:0,i.height=null!==(g=null===(m=this.originalImage)||void 0===m?void 0:m.height)&&void 0!==g?g:0,o=i.getContext("2d"),l=new t.default(n[0]),s=0;s<n.length;s++)0!==s?(null==o||o.lineTo(n[s][0],n[s][1]),s===n.length-1&&(null==o||o.lineTo(n[0][0],n[0][1])),l.update(n[s])):(null==o||o.beginPath(),null==o||o.moveTo(n[s][0],n[s][1]));return null==o||o.clip(),null==o||o.drawImage(null!==(p=this.originalImage)&&void 0!==p?p:new Image,0,0),[4,(0,e.default)(i.toDataURL("image/png"))];case 1:return c=r.sent(),null==o||o.clearRect(0,0,i.width,i.height),i.height=l.y.max-l.y.min,i.width=l.x.max-l.x.min,null==o||o.drawImage(c,-l.x.min,-l.y.min),[4,(0,e.default)(i.toDataURL("image/png"))];case 2:return h=r.sent(),a({image:h,x:l.x.min,y:l.y.min}),[2]}})})})]})})}),u=this,[4,Promise.all(a)];case 5:return u.images=s.sent(),[2,Promise.resolve(this.images)]}})})},n}(),a=o;exports.default=a;
},{"./lib/loadImage":"nW4d","./lib/Bounds":"jFX7"}],"sIoa":[function(require,module,exports) {
"use strict";function e(e){return function(){return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"dPrD":[function(require,module,exports) {
"use strict";function e(e){return e[0]}function t(e){return e[1]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.x=e,exports.y=t;
},{}],"ageH":[function(require,module,exports) {
"use strict";function C(){this._=null}function t(C){C.U=C.C=C.L=C.R=C.P=C.N=null}function i(C,t){var i=t,L=t.R,e=i.U;e?e.L===i?e.L=L:e.R=L:C._=L,L.U=e,i.U=L,i.R=L.L,i.R&&(i.R.U=i),L.L=i}function L(C,t){var i=t,L=t.L,e=i.U;e?e.L===i?e.L=L:e.R=L:C._=L,L.U=e,i.U=L,i.L=L.R,i.L&&(i.L.U=i),L.R=i}function e(C){for(;C.L;)C=C.L;return C}Object.defineProperty(exports,"__esModule",{value:!0}),exports.RedBlackNode=t,exports.default=void 0,C.prototype={constructor:C,insert:function(C,t){var s,R,n;if(C){if(t.P=C,t.N=C.N,C.N&&(C.N.P=t),C.N=t,C.R){for(C=C.R;C.L;)C=C.L;C.L=t}else C.R=t;s=C}else this._?(C=e(this._),t.P=null,t.N=C,C.P=C.L=t,s=C):(t.P=t.N=null,this._=t,s=null);for(t.L=t.R=null,t.U=s,t.C=!0,C=t;s&&s.C;)s===(R=s.U).L?(n=R.R)&&n.C?(s.C=n.C=!1,R.C=!0,C=R):(C===s.R&&(i(this,s),s=(C=s).U),s.C=!1,R.C=!0,L(this,R)):(n=R.L)&&n.C?(s.C=n.C=!1,R.C=!0,C=R):(C===s.L&&(L(this,s),s=(C=s).U),s.C=!1,R.C=!0,i(this,R)),s=C.U;this._.C=!1},remove:function(C){C.N&&(C.N.P=C.P),C.P&&(C.P.N=C.N),C.N=C.P=null;var t,s,R,n=C.U,r=C.L,l=C.R;if(s=r?l?e(l):r:l,n?n.L===C?n.L=s:n.R=s:this._=s,r&&l?(R=s.C,s.C=C.C,s.L=r,r.U=s,s!==l?(n=s.U,s.U=C.U,C=s.R,n.L=C,s.R=l,l.U=s):(s.U=n,n=s,C=s.R)):(R=C.C,C=s),C&&(C.U=n),!R)if(C&&C.C)C.C=!1;else{do{if(C===this._)break;if(C===n.L){if((t=n.R).C&&(t.C=!1,n.C=!0,i(this,n),t=n.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,L(this,t),t=n.R),t.C=n.C,n.C=t.R.C=!1,i(this,n),C=this._;break}}else if((t=n.L).C&&(t.C=!1,n.C=!0,L(this,n),t=n.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,i(this,t),t=n.L),t.C=n.C,n.C=t.L.C=!1,L(this,n),C=this._;break}t.C=!0,C=n,n=n.U}while(!C.C);C&&(C.C=!1)}}};var s=C;exports.default=s;
},{}],"pD4W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createEdge=r,exports.createBorderEdge=i,exports.setEdgeEnd=f,exports.clipEdges=s;var e=require("./Diagram");function r(r,i,t,n){var s=[null,null],l=e.edges.push(s)-1;return s.left=r,s.right=i,t&&f(s,r,i,t),n&&f(s,i,r,n),e.cells[r.index].halfedges.push(l),e.cells[i.index].halfedges.push(l),s}function i(e,r,i){var f=[r,i];return f.left=e,f}function f(e,r,i,f){e[0]||e[1]?e.left===i?e[1]=f:e[0]=f:(e[0]=f,e.left=r,e.right=i)}function t(e,r,i,f,t){var n,s=e[0],l=e[1],u=s[0],a=s[1],d=0,o=1,g=l[0]-u,c=l[1]-a;if(n=r-u,g||!(n>0)){if(n/=g,g<0){if(n<d)return;n<o&&(o=n)}else if(g>0){if(n>o)return;n>d&&(d=n)}if(n=f-u,g||!(n<0)){if(n/=g,g<0){if(n>o)return;n>d&&(d=n)}else if(g>0){if(n<d)return;n<o&&(o=n)}if(n=i-a,c||!(n>0)){if(n/=c,c<0){if(n<d)return;n<o&&(o=n)}else if(c>0){if(n>o)return;n>d&&(d=n)}if(n=t-a,c||!(n<0)){if(n/=c,c<0){if(n>o)return;n>d&&(d=n)}else if(c>0){if(n<d)return;n<o&&(o=n)}return!(d>0||o<1)||(d>0&&(e[0]=[u+d*g,a+d*c]),o<1&&(e[1]=[u+o*g,a+o*c]),!0)}}}}}function n(e,r,i,f,t){var n=e[1];if(n)return!0;var s,l,u=e[0],a=e.left,d=e.right,o=a[0],g=a[1],c=d[0],p=d[1],h=(o+c)/2,v=(g+p)/2;if(p===g){if(h<r||h>=f)return;if(o>c){if(u){if(u[1]>=t)return}else u=[h,i];n=[h,t]}else{if(u){if(u[1]<i)return}else u=[h,t];n=[h,i]}}else if(l=v-(s=(o-c)/(p-g))*h,s<-1||s>1)if(o>c){if(u){if(u[1]>=t)return}else u=[(i-l)/s,i];n=[(t-l)/s,t]}else{if(u){if(u[1]<i)return}else u=[(t-l)/s,t];n=[(i-l)/s,i]}else if(g<p){if(u){if(u[0]>=f)return}else u=[r,s*r+l];n=[f,s*f+l]}else{if(u){if(u[0]<r)return}else u=[f,s*f+l];n=[r,s*r+l]}return e[0]=u,e[1]=n,!0}function s(r,i,f,s){for(var l,u=e.edges.length;u--;)n(l=e.edges[u],r,i,f,s)&&t(l,r,i,f,s)&&(Math.abs(l[0][0]-l[1][0])>e.epsilon||Math.abs(l[0][1]-l[1][1])>e.epsilon)||delete e.edges[u]}
},{"./Diagram":"kqrB"}],"v5QX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createCell=l,exports.cellHalfedgeStart=t,exports.cellHalfedgeEnd=a,exports.sortCellHalfedges=n,exports.clipCells=o;var e=require("./Edge"),s=require("./Diagram");function l(e){return s.cells[e.index]={site:e,halfedges:[]}}function r(e,s){var l=e.site,r=s.left,t=s.right;return l===t&&(t=r,r=l),t?Math.atan2(t[1]-r[1],t[0]-r[0]):(l===r?(r=s[1],t=s[0]):(r=s[0],t=s[1]),Math.atan2(r[0]-t[0],t[1]-r[1]))}function t(e,s){return s[+(s.left!==e.site)]}function a(e,s){return s[+(s.left===e.site)]}function n(){for(var e,l,t,a,n=0,o=s.cells.length;n<o;++n)if((e=s.cells[n])&&(a=(l=e.halfedges).length)){var i=new Array(a),d=new Array(a);for(t=0;t<a;++t)i[t]=t,d[t]=r(e,s.edges[l[t]]);for(i.sort(function(e,s){return d[s]-d[e]}),t=0;t<a;++t)d[t]=l[i[t]];for(t=0;t<a;++t)l[t]=d[t]}}function o(l,r,n,o){var i,d,f,g,h,p,c,u,M,b,v,x,E=s.cells.length,B=!0;for(i=0;i<E;++i)if(d=s.cells[i]){for(f=d.site,g=(h=d.halfedges).length;g--;)s.edges[h[g]]||h.splice(g,1);for(g=0,p=h.length;g<p;)v=(b=a(d,s.edges[h[g]]))[0],x=b[1],u=(c=t(d,s.edges[h[++g%p]]))[0],M=c[1],(Math.abs(v-u)>s.epsilon||Math.abs(x-M)>s.epsilon)&&(h.splice(g,0,s.edges.push((0,e.createBorderEdge)(f,b,Math.abs(v-l)<s.epsilon&&o-x>s.epsilon?[l,Math.abs(u-l)<s.epsilon?M:o]:Math.abs(x-o)<s.epsilon&&n-v>s.epsilon?[Math.abs(M-o)<s.epsilon?u:n,o]:Math.abs(v-n)<s.epsilon&&x-r>s.epsilon?[n,Math.abs(u-n)<s.epsilon?M:r]:Math.abs(x-r)<s.epsilon&&v-l>s.epsilon?[Math.abs(M-r)<s.epsilon?u:l,r]:null))-1),++p);p&&(B=!1)}if(B){var y,C,H,q=1/0;for(i=0,B=null;i<E;++i)(d=s.cells[i])&&(H=(y=(f=d.site)[0]-l)*y+(C=f[1]-r)*C)<q&&(q=H,B=d);if(B){var w=[l,r],A=[l,o],_=[n,o],j=[n,r];B.halfedges.push(s.edges.push((0,e.createBorderEdge)(f=B.site,w,A))-1,s.edges.push((0,e.createBorderEdge)(f,A,_))-1,s.edges.push((0,e.createBorderEdge)(f,_,j))-1,s.edges.push((0,e.createBorderEdge)(f,j,w))-1)}}for(i=0;i<E;++i)(d=s.cells[i])&&(d.halfedges.length||delete s.cells[i])}
},{"./Edge":"pD4W","./Diagram":"kqrB"}],"wsGb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.attachCircle=c,exports.detachCircle=l,exports.firstCircle=void 0;var e,r=require("./RedBlackTree"),i=require("./Diagram"),t=[];function s(){(0,r.RedBlackNode)(this),this.x=this.y=this.arc=this.site=this.cy=null}function c(r){var c=r.P,l=r.N;if(c&&l){var a=c.site,o=r.site,f=l.site;if(a!==f){var n=o[0],p=o[1],u=a[0]-n,x=a[1]-p,h=f[0]-n,v=f[1]-p,d=2*(u*v-x*h);if(!(d>=-i.epsilon2)){var y=u*u+x*x,C=h*h+v*v,k=(v*y-x*C)/d,R=(u*C-h*y)/d,N=t.pop()||new s;N.arc=r,N.site=o,N.x=k+n,N.y=(N.cy=R+p)+Math.sqrt(k*k+R*R),r.circle=N;for(var P=null,b=i.circles._;b;)if(N.y<b.y||N.y===b.y&&N.x<=b.x){if(!b.L){P=b.P;break}b=b.L}else{if(!b.R){P=b;break}b=b.R}i.circles.insert(P,N),P||(exports.firstCircle=e=N)}}}}function l(s){var c=s.circle;c&&(c.P||(exports.firstCircle=e=c.N),i.circles.remove(c),t.push(c),(0,r.RedBlackNode)(c),s.circle=null)}exports.firstCircle=e;
},{"./RedBlackTree":"ageH","./Diagram":"kqrB"}],"oH3D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.removeBeach=d,exports.addBeach=h;var e=require("./RedBlackTree"),r=require("./Cell"),i=require("./Circle"),t=require("./Edge"),c=require("./Diagram"),a=[];function s(){(0,e.RedBlackNode)(this),this.edge=this.site=this.circle=null}function l(e){var r=a.pop()||new s;return r.site=e,r}function n(r){(0,i.detachCircle)(r),c.beaches.remove(r),a.push(r),(0,e.RedBlackNode)(r)}function d(e){var r=e.circle,a=r.x,s=r.cy,l=[a,s],d=e.P,h=e.N,u=[e];n(e);for(var o=d;o.circle&&Math.abs(a-o.circle.x)<c.epsilon&&Math.abs(s-o.circle.cy)<c.epsilon;)d=o.P,u.unshift(o),n(o),o=d;u.unshift(o),(0,i.detachCircle)(o);for(var f=h;f.circle&&Math.abs(a-f.circle.x)<c.epsilon&&Math.abs(s-f.circle.cy)<c.epsilon;)h=f.N,u.push(f),n(f),f=h;u.push(f),(0,i.detachCircle)(f);var g,v=u.length;for(g=1;g<v;++g)f=u[g],o=u[g-1],(0,t.setEdgeEnd)(f.edge,o.site,f.site,l);o=u[0],(f=u[v-1]).edge=(0,t.createEdge)(o.site,f.site,null,l),(0,i.attachCircle)(o),(0,i.attachCircle)(f)}function h(e){for(var a,s,n,d,h=e[0],f=e[1],g=c.beaches._;g;)if((n=u(g,f)-h)>c.epsilon)g=g.L;else{if(!((d=h-o(g,f))>c.epsilon)){n>-c.epsilon?(a=g.P,s=g):d>-c.epsilon?(a=g,s=g.N):a=s=g;break}if(!g.R){a=g;break}g=g.R}(0,r.createCell)(e);var v=l(e);if(c.beaches.insert(a,v),a||s){if(a===s)return(0,i.detachCircle)(a),s=l(a.site),c.beaches.insert(v,s),v.edge=s.edge=(0,t.createEdge)(a.site,v.site),(0,i.attachCircle)(a),void(0,i.attachCircle)(s);if(s){(0,i.detachCircle)(a),(0,i.detachCircle)(s);var p=a.site,C=p[0],b=p[1],E=e[0]-C,q=e[1]-b,x=s.site,M=x[0]-C,N=x[1]-b,k=2*(E*N-q*M),B=E*E+q*q,P=M*M+N*N,R=[(N*B-q*P)/k+C,(E*P-M*B)/k+b];(0,t.setEdgeEnd)(s.edge,p,x,R),v.edge=(0,t.createEdge)(p,e,null,R),s.edge=(0,t.createEdge)(e,x,null,R),(0,i.attachCircle)(a),(0,i.attachCircle)(s)}else v.edge=(0,t.createEdge)(a.site,v.site)}}function u(e,r){var i=e.site,t=i[0],c=i[1],a=c-r;if(!a)return t;var s=e.P;if(!s)return-1/0;var l=(i=s.site)[0],n=i[1],d=n-r;if(!d)return l;var h=l-t,u=1/a-1/d,o=h/d;return u?(-o+Math.sqrt(o*o-2*u*(h*h/(-2*d)-n+d/2+c-a/2)))/u+t:(t+l)/2}function o(e,r){var i=e.N;if(i)return u(i,r);var t=e.site;return t[1]===r?t[0]:1/0}
},{"./RedBlackTree":"ageH","./Cell":"v5QX","./Circle":"wsGb","./Edge":"pD4W","./Diagram":"kqrB"}],"kqrB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=h,exports.edges=exports.circles=exports.cells=exports.beaches=exports.epsilon2=exports.epsilon=void 0;var e=require("./Beach"),r=require("./Cell"),t=require("./Circle"),s=require("./Edge"),l=i(require("./RedBlackTree"));function i(e){return e&&e.__esModule?e:{default:e}}var n=1e-6;exports.epsilon=n;var o,a,c,u,f=1e-12;function d(e,r,t){return(e[0]-t[0])*(r[1]-e[1])-(e[0]-r[0])*(t[1]-e[1])}function p(e,r){return r[1]-e[1]||r[0]-e[0]}function h(i,n){var f,d,h,g=i.sort(p).pop();for(exports.edges=u=[],exports.cells=a=new Array(i.length),exports.beaches=o=new l.default,exports.circles=c=new l.default;;)if(h=t.firstCircle,g&&(!h||g[1]<h.y||g[1]===h.y&&g[0]<h.x))g[0]===f&&g[1]===d||((0,e.addBeach)(g),f=g[0],d=g[1]),g=i.pop();else{if(!h)break;(0,e.removeBeach)(h.arc)}if((0,r.sortCellHalfedges)(),n){var x=+n[0][0],v=+n[0][1],b=+n[1][0],y=+n[1][1];(0,s.clipEdges)(x,v,b,y),(0,r.clipCells)(x,v,b,y)}this.edges=u,this.cells=a,exports.beaches=o=exports.circles=c=exports.edges=u=exports.cells=a=null}exports.epsilon2=f,exports.beaches=o,exports.cells=a,exports.circles=c,exports.edges=u,h.prototype={constructor:h,polygons:function(){var e=this.edges;return this.cells.map(function(t){var s=t.halfedges.map(function(s){return(0,r.cellHalfedgeStart)(t,e[s])});return s.data=t.site.data,s})},triangles:function(){var e=[],r=this.edges;return this.cells.forEach(function(t,s){if(i=(l=t.halfedges).length)for(var l,i,n,o=t.site,a=-1,c=r[l[i-1]],u=c.left===o?c.right:c.left;++a<i;)n=u,u=(c=r[l[a]]).left===o?c.right:c.left,n&&u&&s<n.index&&s<u.index&&d(o,n,u)<0&&e.push([o.data,n.data,u.data])}),e},links:function(){return this.edges.filter(function(e){return e.right}).map(function(e){return{source:e.left.data,target:e.right.data}})},find:function(e,r,t){for(var s,l,i=this,n=i._found||0,o=i.cells.length;!(l=i.cells[n]);)if(++n>=o)return null;var a=e-l.site[0],c=r-l.site[1],u=a*a+c*c;do{l=i.cells[s=n],n=null,l.halfedges.forEach(function(t){var s=i.edges[t],o=s.left;if(o!==l.site&&o||(o=s.right)){var a=e-o[0],c=r-o[1],f=a*a+c*c;f<u&&(u=f,n=o.index)}})}while(null!==n);return i._found=s,null==t||u<=t*t?l.site:null}};
},{"./Beach":"oH3D","./Cell":"v5QX","./Circle":"wsGb","./Edge":"pD4W","./RedBlackTree":"ageH"}],"gmfk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=o(require("./constant")),n=require("./point"),t=u(require("./Diagram"));function r(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r();if(n&&n.has(e))return n.get(e);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}return t.default=e,n&&n.set(e,t),t}function o(e){return e&&e.__esModule?e:{default:e}}function i(){var r=n.x,u=n.y,o=null;function i(e){return new t.default(e.map(function(n,o){var i=[Math.round(r(n,o,e)/t.epsilon)*t.epsilon,Math.round(u(n,o,e)/t.epsilon)*t.epsilon];return i.index=o,i.data=n,i}),o)}return i.polygons=function(e){return i(e).polygons()},i.links=function(e){return i(e).links()},i.triangles=function(e){return i(e).triangles()},i.x=function(n){return arguments.length?(r="function"==typeof n?n:(0,e.default)(+n),i):r},i.y=function(n){return arguments.length?(u="function"==typeof n?n:(0,e.default)(+n),i):u},i.extent=function(e){return arguments.length?(o=null==e?null:[[+e[0][0],+e[0][1]],[+e[1][0],+e[1][1]]],i):o&&[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},i.size=function(e){return arguments.length?(o=null==e?null:[[0,0],[+e[0],+e[1]]],i):o&&[o[1][0]-o[0][0],o[1][1]-o[0][1]]},i}
},{"./constant":"sIoa","./point":"dPrD","./Diagram":"kqrB"}],"Vsfo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"voronoi",{enumerable:!0,get:function(){return e.default}});var e=r(require("./voronoi"));function r(e){return e&&e.__esModule?e:{default:e}}
},{"./voronoi":"gmfk"}],"osGj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var t=require("d3-voronoi");function r(r){var e=r.height,o=void 0===e?100:e,n=r.width,i=void 0===n?100:n,a=r.numPieces,u=Array(void 0===a?4:a).fill(0).map(function(){return[Math.floor(Math.random()*i),Math.floor(Math.random()*o)]});return(0,t.voronoi)().extent([[0,0],[i,o]])(u).polygons().map(function(t){return t.filter(function(r){return r!==t.data}).map(function(t){return[Math.ceil(t[0]),Math.ceil(t[1])]})})}
},{"d3-voronoi":"Vsfo"}],"WdSo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Shatter",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"VoronoiPieces",{enumerable:!0,get:function(){return r.default}});var e=t(require("./shatter")),r=t(require("./generators/voronoi"));function t(e){return e&&e.__esModule?e:{default:e}}
},{"./shatter":"xL3V","./generators/voronoi":"osGj"}],"fRxd":[function(require,module,exports) {
"use strict";var e=require("../../src/index"),t=i(require("../../src/lib/loadImage"));function i(e){return e&&e.__esModule?e:{default:e}}async function r(){const i="/img/BlueMarbleNasa.png",r=document.querySelector(".js-original"),o=await(0,t.default)(i);r.appendChild(o);const s="1rem";let l=document.querySelector(".js-result"),n=document.querySelector(".js-result-assembled");async function a(t=10){for(;l.firstChild;)l.firstChild.remove();for(;n.firstChild;)n.firstChild.remove();const r=(0,e.VoronoiPieces)({height:o.width,width:o.height,numPieces:t}),a=new e.Shatter(i);a.setPieces(r);let u=await a.shatter();l.style.position="relative",u.forEach((e,t)=>{e.image.style.marginRight=s,l.appendChild(e.image);const i=e.image.cloneNode();i.setAttribute("style",`position: absolute; top: ${e.y}px; left: ${e.x}px;`),n.appendChild(i)})}document.querySelector("form").addEventListener("submit",e=>{var t,i;e.preventDefault();const r=null===(t=e.target.elements)||void 0===t?void 0:null===(i=t.pieces)||void 0===i?void 0:i.value;r&&NaN!==Number(r)&&a(Number(r))}),a()}r();
},{"../../src/index":"WdSo","../../src/lib/loadImage":"nW4d"}]},{},["fRxd"], null)
//# sourceMappingURL=/dom.js.map