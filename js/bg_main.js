(function(l,k){function g(a){console.dir(a)}function e(a){console.log("--------------- "+a+" ---------------")}function m(a,b,d,c,e){a>b&&(a=b);this.min=a;this.max=b;this.step=d;this.initializer=c;this.callback=e||function(){}}function h(a){this.array=a}function i(a,b,d){this.enumclass=new h(a);this.array=this.enumclass.array;this.initializer=b;this.callback=d||function(){}}function j(a,b,d){this.enumclass=new h(a);this.array=this.enumclass.array;this.initializer=b;this.callback=d||function(){};var d=
d||function(){},c=this;this.enumlinear=new i(a,b,function(a){c.index=c.enumlinear.index;c.value=a;c.history=c.history.concat(c.value);c.array=c.enumlinear.array;d(a,c.app)});for(var e in this.enumlinear)this.enumlinear.hasOwnProperty(e)&&(this[e]=this.enumlinear[e])}function f(a,b,d){this.initializer=b;this.callback=d||function(){};var d=d||function(){},c=this;this.enumlinear=new i(a,function(){b();c.repeat.init();c.shuffle.init();c.enumlinear.init()},function(a,b){e("this.enumlinear callback");g("value: "+
a);c.index=c.enumlinear.index;c.value=a;c.history=c.history.concat(c.value);c.array=c.enumlinear.array;c.enumclass=c.enumlinear.enumclass;d(c.value,b)});this.repeat=new j(["false","true","one"],"false",function(a){console.log("repeat:"+a)});this.shuffle=new j(["false","true"],"false",function(a){console.log("shuffle:::"+a);g(c.repeat.value);if(!c.orderedarray)c.orderedarray=c.enumlinear.enumclass.array||c.array||c.enumlinear.array||[];switch(a){case "true":a=(void 0===c.value||0>c.array.indexOf(c.value)?
[]:[c.value]).concat(c.orderedarray.shuffle().drop(c.value));c.changeArray(a);break;default:c.changeArray(c.orderedarray),delete c.orderedarray}});for(var f in this.enumlinear)this.enumlinear.hasOwnProperty(f)&&(this[f]=this.enumlinear[f])}Array.prototype.clone=function(){return Array.apply(null,this)};Array.prototype.drop=function(a){for(var b=[],d=0;d<this.length;d++)this[d]!==a&&(b=b.concat([this[d]]));return b};Array.prototype.shuffle=function(){for(var a=this.clone(),b=a.length,d,c,e=Math.random,
f=Math.floor;b;)d=f(e()*b),c=a[--b],a[b]=a[d],a[d]=c;return a};Array.prototype.unique=function(){var a=[],b,d,c,e,f;for(b=-1,c=this.length;b<c;++b){for(d=-1,e=a.length,f=!0;d<e;++d)a[d]===this[b]&&(d=e+1,f=!1);f&&a.push(this[b])}return a};if("undefined"!==typeof k)k.fn.texttitle=function(a){return this.text(a).attr("title",a)},k.fn.unique=Array.prototype.unique,k.fn.join=Array.prototype.join;if("undefined"!==typeof exports)exports.log=g,exports.logfn=e;m.prototype={value:void 0,at:function(a){this.value=
void 0===a||isNaN(a)?void 0===this.value?(this.min+this.max)/2:this.assert(this.value):this.assert(a);this.callback(this.value,this.app);return this.value},assert:function(a){return Math.min(Math.max(a,this.min),this.max)},increase:function(a){if(void 0===a||isNaN(a))a=this.step;return this.at(this.value+a)},decrease:function(a){if(void 0===a||isNaN(a))a=this.step;return this.increase(-a)},init:function(a){this.app=a;"function"===typeof this.initializer?this.at(this.initializer()):this.at(this.initializer)},
setToMin:function(){return this.at(this.min)},setToMax:function(){return this.at(this.max)}};if("undefined"!==typeof exports)exports.Limited=m;h.prototype={array:[],succ:function(a){return this.toEnum(1+this.fromEnum(a))},pred:function(a){return this.toEnum(-1+this.fromEnum(a))},toEnum:function(a){if(this.array&&0<=a&&a<this.array.length)return this.array[a]},fromEnum:function(a){if(this.array)for(var b=0,d=this.array.length;b<d;b++)if(this.array[b]===a)return b},enumFrom:function(a){return!this.array?
void 0:this.enumFromTo(a,this.array[this.array.length-1])},enumFromThen:function(a,b){if(this.array){for(var d=this.fromEnum(a),c=this.fromEnum(b),e=[],f=d;0<=f&&f<this.array.length;f+=c-d)e=e.concat(this.array[f]);return e}},enumFromTo:function(a,b){return this.enumFromThenTo(a,this.succ(a),b)},enumFromThenTo:function(a,b,d){if(this.array){var a=this.fromEnum(a),b=this.fromEnum(b),d=this.fromEnum(d),b=b-a,c=[];if(0===b)c=c.concat(this.array[a]);else if(0<b)for(;a<=d&&a<this.array.length;a+=b)c=c.concat(this.array[a]);
else for(;a>=d&&0<=a;a+=b)c=c.concat(this.array[a]);return c}}};if("undefined"!==typeof exports)exports.Enum=h;if("undefined"===typeof l)h=require("./enum").Enum;i.prototype={index:0,value:void 0,history:[],head:function(){e("Enumlinear.prototype.head");return this.at(0)},last:function(){e("Enumlinear.prototype.last");return this.at(this.enumclass.array.length-1)},nonvalidIndex:function(a){return void 0===a||isNaN(a)||"number"!==typeof a},at:function(a){e("Enumlinear.prototype.at");if(this.nonvalidIndex(a))a=
this.index;var b=this.enumclass.toEnum(a);if(!(void 0===b||0===this.array.length))return this.value=b,this.index=a,this.array=this.enumclass.array,this.history=this.history.concat(this.value),this.callback(this.value,this.app),this.value},atfromEnum:function(a){e("Enumlinear.prototype.atfromEnum");console.log("atfromEnum value: "+a);a=this.enumclass.fromEnum(a);return void 0===a?void 0:this.at(a)},next:function(a){e("Enumlinear.prototype.next");this.nonvalidIndex(a)&&(a=1);return this.at(this.index+
a)},prev:function(a){e("Enumlinear.prototype.prev");this.nonvalidIndex(a)&&(a=-1);return this.next(a)},init:function(a){e("Enumlinear.prototype.init");this.app=a;var b;if("function"===typeof this.initializer)try{b=this.initializer()}catch(d){b=this.array[0]}else b=this.initializer;b=this.atfromEnum(b);if(void 0===b)return this.at(0)},concat:function(a){e("Enumlinear.prototype.concat");return this.changeArray(this.enumclass.array.concat(a))},splice:function(a,b){e("Enumlinear.prototype.splice");var d=
this.enumclass.array;d.splice(a,b);return this.changeArray(d)},remove:function(a){e("Enumlinear.prototype.remove");console.log("removing : "+a);return this.splice(this.enumclass.fromEnum(a),1)},changeArray:function(a){e("Enumlinear.prototype.changeArray");console.log(a);this.enumclass=new h(a);this.array=this.enumclass.array;this.at(this.enumclass.fromEnum(this.value)||0);return this}};if("undefined"!==typeof exports)exports.Enumlinear=i;if("undefined"===typeof l)h=require("./enum").Enum,i=require("./enumlinear").Enumlinear;
j.prototype=new i;j.prototype.at=function(a){if(this.nonvalidIndex(a))a=this.index;var b=this.array.length;return this.enumlinear.at((a%b+b)%b)};j.prototype.changeArray=function(a){this.enumlinear.changeArray(a);this.array=this.enumlinear.array;this.enumclass=this.enumlinear.enumclass};if("undefined"!==typeof exports)exports.Enumcycle=j;if("undefined"===typeof l)require("./prelude"),h=require("./enum").Enum,i=require("./enumlinear").Enumlinear,j=require("./enumcycle").Enumcycle;f.prototype=new i;
f.prototype.at=function(a){e("Enumdinamic.prototype.at");if(this.nonvalidIndex(a))a=this.index;g("this:::");return this.enumlinear.at(a)};f.prototype.next=function(a){e("Enumdinamic.prototype.next");if(void 0===a||isNaN(a))a=1;a=void 0===this.index?0:this.index+a;switch(this.repeat.value){case "one":a=this.index;break;case "true":var b=this.enumclass.toEnum(a);if(void 0===b)switch(this.shuffle.value){case "true":this.shuffleOn(),a++;default:b=this.array.length,a=(a%b+b)%b}break;default:if(b=this.enumclass.toEnum(a),
void 0===b)switch(this.shuffle.value){case "true":this.shuffleOn();default:return}}return this.at(a)};f.prototype.concat=function(a){e("Enumdinamic.prototype.concat");var b=this.array||[];this.orderedarray=(this.orderedarray||this.array||[]).concat(a);this.changeArray(b.concat(a));"true"===this.shuffle.value&&this.shuffleOn()};f.prototype.remove=function(a){e("Enumdinamic.prototype.remove");if(this.orderedarray)this.orderedarray=this.orderedarray.drop(a);this.enumlinear.remove(a)};f.prototype.changeArray=
function(a){e("Enumdinamic.prototype.changeArray");g(this.value);this.enumlinear.changeArray(a);this.array=this.enumlinear.array;g("this.array: "+this.array.join(","));g("this.value: "+this.value);this.enumclass=this.enumlinear.enumclass;this.atfromEnum(this.value);for(var b in this.enumlinear)this.enumlinear.hasOwnProperty(b)&&(this[b]=this.enumlinear[b]);return this};f.prototype.setRepeat=function(a){this.repeat.atfromEnum(a)};f.prototype.repeatOff=function(){this.setRepeat("false")};f.prototype.repeatOn=
function(){this.setRepeat("true")};f.prototype.repeatOne=function(){this.setRepeat("one")};f.prototype.repeatToggle=function(){this.repeat.next()};f.prototype.repeatToggleOnOff=function(){this.setRepeat("false"===this.repeat.value?"true":"false")};f.prototype.setShuffle=function(a){this.shuffle.atfromEnum(a)};f.prototype.shuffleOff=function(){this.setShuffle("false")};f.prototype.shuffleOn=function(){this.setShuffle("true")};f.prototype.shuffleToggle=function(){this.shuffle.next()};f.prototype.shuffleToggleOnOff=
function(){this.setShuffle("false"===this.shuffle.value?"true":"false")};if("undefined"!==typeof exports)exports.Enumdinamic=f;e=function(){};g=function(){}})(this,jQuery);
