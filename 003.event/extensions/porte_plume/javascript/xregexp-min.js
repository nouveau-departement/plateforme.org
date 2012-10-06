//XRegExp 1.2.0 <xregexp.com> MIT License
var XRegExp;if(!XRegExp){(function(){XRegExp=function(r,l){if(XRegExp.isRegExp(r)){if(l!==undefined){throw TypeError("can't supply flags when constructing one RegExp from another")}return r.addFlags("")}if(h){throw Error("can't call the XRegExp constructor within token definition functions")}var l=l||"",k=[],s=0,p=XRegExp.OUTSIDE_CLASS,m={hasNamedCapture:false,captureNames:[],hasFlag:function(u){if(u.length>1){throw SyntaxError("flag can't be more than one character")}return l.indexOf(u)>-1}},n,q,o,t;while(s<r.length){n=j(r,s,p,m);if(n){k.push(n.output);s+=Math.max(n.matchLength,1)}else{o=r.charAt(s);if(q=i.exec.call(f[p],r.slice(s))){k.push(q[0]);s+=q[0].length}else{if(o==="["){p=XRegExp.INSIDE_CLASS}else{if(o==="]"){p=XRegExp.OUTSIDE_CLASS}}k.push(o);s++}}}t=RegExp(k.join(""),i.replace.call(l,e,""));t._xregexp={source:r,captureNames:m.hasNamedCapture?m.captureNames:null};return t};var b=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,e=/[^gimy]+|(.)(?=[\s\S]*\1)/g,a=/()??/.exec("")[1]===undefined,c=function(){var k=/^/g;k.test("");return !k.lastIndex}(),d=function(){var k=/x/g;"x".replace(k,"");return !k.lastIndex}(),i={exec:RegExp.prototype.exec,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split,test:RegExp.prototype.test},j=function(s,n,r,q){var p=g.length,l,o,k;h=true;while(p--){o=g[p];if((r&o.scope)&&(!o.trigger||o.trigger.call(q))){o.pattern.lastIndex=n;k=o.pattern.exec(s);if(k&&k.index===n){l={output:o.handler.call(q,k,r),matchLength:k[0].length};break}}}h=false;return l},h=false,f={},g=[];XRegExp.INSIDE_CLASS=1;XRegExp.OUTSIDE_CLASS=2;f[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/;f[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/;XRegExp.addToken=function(n,m,l,k){g.push({pattern:XRegExp(n).addFlags("g"),handler:m,scope:l||XRegExp.OUTSIDE_CLASS,trigger:k||null})};RegExp.prototype.exec=function(o){var m=i.exec.apply(this,arguments),l,k;if(m){if(!a&&m.length>1&&XRegExp._indexOf(m,"")>-1){k=RegExp("^"+this.source+"$(?!\\s)",XRegExp._getNativeFlags(this));i.replace.call(m[0],k,function(){for(var p=1;p<arguments.length-2;p++){if(arguments[p]===undefined){m[p]=undefined}}})}if(this._xregexp&&this._xregexp.captureNames){for(var n=1;n<m.length;n++){l=this._xregexp.captureNames[n-1];if(l){m[l]=m[n]}}}if(!c&&this.global&&this.lastIndex>(m.index+m[0].length)){this.lastIndex--}}return m};if(!c){RegExp.prototype.test=function(l){var k=i.exec.call(this,l);if(k&&this.global&&this.lastIndex>(k.index+k[0].length)){this.lastIndex--}return !!k}}String.prototype.match=function(l){if(!XRegExp.isRegExp(l)){l=RegExp(l)}if(l.global){var k=i.match.apply(this,arguments);l.lastIndex=0;return k}return l.exec(this)};String.prototype.replace=function(m,n){var o=XRegExp.isRegExp(m),l,k,p;if(o&&typeof n.valueOf()==="string"&&n.indexOf("${")===-1&&d){return i.replace.apply(this,arguments)}if(!o){m=m+""}else{if(m._xregexp){l=m._xregexp.captureNames}}if(typeof n==="function"){k=i.replace.call(this,m,function(){if(l){arguments[0]=new String(arguments[0]);for(var q=0;q<l.length;q++){if(l[q]){arguments[0][l[q]]=arguments[q+1]}}}if(o&&m.global){m.lastIndex=arguments[arguments.length-2]+arguments[0].length}return n.apply(null,arguments)})}else{p=this+"";k=i.replace.call(p,m,function(){var q=arguments;return i.replace.call(n,b,function(s,r,v){if(r){switch(r){case"$":return"$";case"&":return q[0];case"`":return q[q.length-1].slice(0,q[q.length-2]);case"'":return q[q.length-1].slice(q[q.length-2]+q[0].length);default:var t="";r=+r;if(!r){return s}while(r>q.length-3){t=String.prototype.slice.call(r,-1)+t;r=Math.floor(r/10)}return(r?q[r]||"":"$")+t}}else{var u=+v;if(u<=q.length-3){return q[u]}u=l?XRegExp._indexOf(l,v):-1;return u>-1?q[u+1]:s}})})}if(o&&m.global){m.lastIndex=0}return k};String.prototype.split=function(o,k){if(!XRegExp.isRegExp(o)){return i.split.apply(this,arguments)}var q=this+"",m=[],p=0,n,l;if(k===undefined||+k<0){k=Infinity}else{k=Math.floor(+k);if(!k){return[]}}o=o.addFlags("g");while(n=o.exec(q)){if(o.lastIndex>p){m.push(q.slice(p,n.index));if(n.length>1&&n.index<q.length){Array.prototype.push.apply(m,n.slice(1))}l=n[0].length;p=o.lastIndex;if(m.length>=k){break}}if(!n[0].length){o.lastIndex++}}if(p===q.length){if(!i.test.call(o,"")||l){m.push("")}}else{m.push(q.slice(p))}return m.length>k?m.slice(0,k):m}})();RegExp.prototype.addFlags=function(b){var c=XRegExp(this.source,(b||"")+XRegExp._getNativeFlags(this)),a=this._xregexp;if(a){c._xregexp={source:a.source,captureNames:a.captureNames?a.captureNames.slice(0):null}}return c};RegExp.prototype.apply=function(b,a){return this.exec(a[0])};RegExp.prototype.call=function(a,b){return this.exec(b)};RegExp.prototype.forEachExec=function(e,f,c){var d=this.addFlags("g"),b=-1,a;while(a=d.exec(e)){f.call(c,a,++b,e,d);if(!a[0].length){d.lastIndex++}}if(this.global){this.lastIndex=0}};RegExp.prototype.validate=function(b){var a=RegExp("^(?:"+this.source+")$(?!\\s)",XRegExp._getNativeFlags(this));if(this.global){this.lastIndex=0}return b.search(a)===0};XRegExp.cache=function(c,a){var b="/"+c+"/"+(a||"");return XRegExp.cache[b]||(XRegExp.cache[b]=XRegExp(c,a))};XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&")};XRegExp.freezeTokens=function(){XRegExp.addToken=null};XRegExp.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"};XRegExp.matchWithinChain=function(e,a,b){var c;function d(g,l){var j=a[l].addFlags("g"),f=[],k,h;for(h=0;h<g.length;h++){if(b){k=[];j.forEachExec(g[h][0],function(i){i.index+=g[h].index;k.push(i)})}else{k=g[h].match(j)}if(k){f.push(k)}}f=Array.prototype.concat.apply([],f);if(a[l].global){a[l].lastIndex=0}return l===a.length-1?f:d(f,l+1)}if(b){c={"0":e,index:0}}return d([b?c:e],0)};XRegExp._getNativeFlags=function(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")};XRegExp._indexOf=function(d,b,c){for(var a=c||0;a<d.length;a++){if(d[a]===b){return a}}return -1};(function(){var a=/^(?:[?*+]|{\d+(?:,\d*)?})\??/;XRegExp.addToken(/\(\?#[^)]*\)/,function(b){return a.test(b.input.slice(b.index+b[0].length))?"":"(?:)"});XRegExp.addToken(/\((?!\?)/,function(){this.captureNames.push(null);return"("});XRegExp.addToken(/\(\?<([$\w]+)>/,function(b){this.captureNames.push(b[1]);this.hasNamedCapture=true;return"("});XRegExp.addToken(/\\k<([\w$]+)>/,function(c){var b=XRegExp._indexOf(this.captureNames,c[1]);return b>-1?"\\"+(b+1)+(isNaN(c.input.charAt(c.index+c[0].length))?"":"(?:)"):c[0]});XRegExp.addToken(/\[\^?]/,function(b){return b[0]==="[]"?"\\b\\B":"[\\s\\S]"});XRegExp.addToken(/(?:\s+|#.*)+/,function(b){return a.test(b.input.slice(b.index+b[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")});XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})})();XRegExp.version="1.2.0"};