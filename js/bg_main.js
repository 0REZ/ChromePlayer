(function(o,n){function h(a){console.dir(a)}function f(a){console.log("--------------- "+a+" ---------------")}function p(a,b,d,c,e){a>b&&(a=b);this.min=a;this.max=b;this.step=d;this.initializer=c;this.callback=e||function(){}}function i(a){this.array=a}function j(a,b,d){this.enumclass=new i(a);this.array=this.enumclass.array;this.initializer=b;this.callback=d||function(){}}function l(a,b,d){this.enumclass=new i(a);this.array=this.enumclass.array;this.initializer=b;this.callback=d||function(){};var d=
d||function(){},c=this;this.enumlinear=new j(a,b,function(a){c.index=c.enumlinear.index;c.value=a;c.history=c.history.concat(c.value);c.array=c.enumlinear.array;d(a,c.app)});for(var e in this.enumlinear)this.enumlinear.hasOwnProperty(e)&&(this[e]=this.enumlinear[e])}function g(a,b,d){this.initializer=b;this.callback=d||function(){};var d=d||function(){},c=this;this.enumlinear=new j(a,function(){b();c.repeat.init();c.shuffle.init();c.enumlinear.init()},function(a,b){f("this.enumlinear callback");h("value: "+
a);c.index=c.enumlinear.index;c.value=a;c.history=c.history.concat(c.value);c.array=c.enumlinear.array;c.enumclass=c.enumlinear.enumclass;d(c.value,b)});this.repeat=new l(["false","true","one"],"false",function(a){h("repeat:"+a)});this.shuffle=new l(["false","true"],"false",function(a){h("shuffle:::"+a);h(c.repeat.value);if(!c.orderedarray)c.orderedarray=c.enumlinear.enumclass.array||c.array||c.enumlinear.array||[];switch(a){case "true":a=(void 0===c.value||0>c.array.indexOf(c.value)?[]:[c.value]).concat(c.orderedarray.shuffle().drop(c.value));
c.changeArray(a);break;default:c.changeArray(c.orderedarray),delete c.orderedarray}});for(var e in this.enumlinear)this.enumlinear.hasOwnProperty(e)&&(this[e]=this.enumlinear[e])}function m(){}(function(){var a=this.Store=function(a,d){var c;this.name=a;if(void 0!==d)for(c in d)d.hasOwnProperty(c)&&void 0===this.get(c)&&this.set(c,d[c])};a.prototype.get=function(a){a="store."+this.name+"."+a;if(null!==localStorage.getItem(a))try{return JSON.parse(localStorage.getItem(a))}catch(d){return null}};a.prototype.set=
function(a,d){if(void 0===d)this.remove(a);else{if("function"===typeof d)d=null;else try{d=JSON.stringify(d)}catch(c){d=null}localStorage.setItem("store."+this.name+"."+a,d)}return this};a.prototype.remove=function(a){localStorage.removeItem("store."+this.name+"."+a);return this};a.prototype.removeAll=function(){var a,d;a="store."+this.name+".";for(d=localStorage.length-1;0<=d;d--)localStorage.key(d).substring(0,a.length)===a&&localStorage.removeItem(localStorage.key(d));return this};a.prototype.toObject=
function(){var a,d,c,e,f;a={};d="store."+this.name+".";for(c=localStorage.length-1;0<=c;c--)localStorage.key(c).substring(0,d.length)===d&&(e=localStorage.key(c).substring(d.length),f=this.get(e),void 0!==f&&(a[e]=f));return a};a.prototype.fromObject=function(a,d){!0!==d&&this.removeAll();for(var c in a)a.hasOwnProperty(c)&&this.set(c,a[c]);return this}})();Array.prototype.clone=function(){return Array.apply(null,this)};Array.prototype.drop=function(a){for(var b=[],d=0;d<this.length;d++)this[d]!==
a&&(b=b.concat([this[d]]));return b};Array.prototype.shuffle=function(){for(var a=this.clone(),b=a.length,d,c,e=Math.random,f=Math.floor;b;)d=f(e()*b),c=a[--b],a[b]=a[d],a[d]=c;return a};Array.prototype.unique=function(){var a=[],b,d,c,e,f;for(b=-1,c=this.length;b<c;++b){for(d=-1,e=a.length,f=!0;d<e;++d)a[d]===this[b]&&(d=e+1,f=!1);f&&a.push(this[b])}return a};Array.prototype.deepEqual=function(a){if(this.length!==a.length)return!1;for(var b=0;b<this.length;b++)if(this[b]!==a[b])return!1;return!0};
if("undefined"!==typeof n&&"undefined"!==typeof n.fn)n.fn.texttitle=function(a){return this.text(a).attr("title",a)},n.fn.unique=Array.prototype.unique,n.fn.join=Array.prototype.join;if("undefined"!==typeof exports)exports.log=h,exports.logfn=f;var q={strarr:"abcdefghijklmnopqrstuvwxyz",randomstr:function(){for(var a=this.strarr.length,b="",d=0;10>d;d++)b+=this.strarr[Math.floor(Math.random()*a)];return b},createId:function(){return(new Date).getTime().toString()+this.randomstr()},send:function(a){chrome&&
chrome.extension&&chrome.extension.sendRequest(a)}},r={prevNotification:null,createNotification:function(a,b,d){if(webkitNotifications&&0===webkitNotifications.checkPermission()){this.prevNotification&&(this.prevNotification.cancel(),delete this.prevNotification);var c=k.getSetting("notification"),e=JSON.parse(k.getSetting("notificationmsec"));if("true"===c){var f=webkitNotifications.createNotification(a,b,d);f.show();setTimeout(function(){f.cancel();delete this.prevNotification},e);this.prevNotification=
f}}}};p.prototype={value:void 0,at:function(a){this.value=void 0===a||isNaN(a)?void 0===this.value?(this.min+this.max)/2:this.assert(this.value):this.assert(a);this.callback(this.value,this.app);return this.value},assert:function(a){return Math.min(Math.max(a,this.min),this.max)},increase:function(a){if(void 0===a||isNaN(a))a=this.step;return this.at(this.value+a)},decrease:function(a){if(void 0===a||isNaN(a))a=this.step;return this.increase(-a)},init:function(a){this.app=a;"function"===typeof this.initializer?
this.at(this.initializer()):this.at(this.initializer)},setToMin:function(){return this.at(this.min)},setToMax:function(){return this.at(this.max)}};if("undefined"!==typeof exports)exports.Limited=p;i.prototype={array:[],succ:function(a){return this.toEnum(1+this.fromEnum(a))},pred:function(a){return this.toEnum(-1+this.fromEnum(a))},toEnum:function(a){if(this.array&&0<=a&&a<this.array.length)return this.array[a]},fromEnum:function(a){if(this.array)for(var b=0,d=this.array.length;b<d;b++)if(this.array[b]===
a)return b},enumFrom:function(a){return!this.array?void 0:this.enumFromTo(a,this.array[this.array.length-1])},enumFromThen:function(a,b){if(this.array){for(var d=this.fromEnum(a),c=this.fromEnum(b),e=[],f=d;0<=f&&f<this.array.length;f+=c-d)e=e.concat(this.array[f]);return e}},enumFromTo:function(a,b){return this.enumFromThenTo(a,this.succ(a),b)},enumFromThenTo:function(a,b,d){if(this.array){var a=this.fromEnum(a),b=this.fromEnum(b),d=this.fromEnum(d),b=b-a,c=[];if(0===b)c=c.concat(this.array[a]);
else if(0<b)for(;a<=d&&a<this.array.length;a+=b)c=c.concat(this.array[a]);else for(;a>=d&&0<=a;a+=b)c=c.concat(this.array[a]);return c}}};if("undefined"!==typeof exports)exports.Enum=i;if("undefined"===typeof o)i=require("./enum").Enum;j.prototype={index:0,value:void 0,history:[],head:function(){f("Enumlinear.prototype.head");return this.at(0)},last:function(){f("Enumlinear.prototype.last");return this.at(this.enumclass.array.length-1)},nonvalidIndex:function(a){return void 0===a||isNaN(a)||"number"!==
typeof a},at:function(a){f("Enumlinear.prototype.at");if(this.nonvalidIndex(a))a=this.index;var b=this.enumclass.toEnum(a);if(!(void 0===b||0===this.array.length))return this.value=b,this.index=a,this.array=this.enumclass.array,this.history=this.history.concat(this.value),this.callback(this.value,this.app),this.value},atfromEnum:function(a){f("Enumlinear.prototype.atfromEnum");a=this.enumclass.fromEnum(a);return void 0===a?void 0:this.at(a)},next:function(a){f("Enumlinear.prototype.next");this.nonvalidIndex(a)&&
(a=1);return this.at(this.index+a)},prev:function(a){f("Enumlinear.prototype.prev");this.nonvalidIndex(a)&&(a=-1);return this.next(a)},init:function(a){f("Enumlinear.prototype.init");this.app=a;var b;if("function"===typeof this.initializer)try{b=this.initializer()}catch(d){b=this.array[0]}else b=this.initializer;b=this.atfromEnum(b);if(void 0===b)return this.at(0)},concat:function(a){f("Enumlinear.prototype.concat");return this.changeArray(this.enumclass.array.concat(a))},splice:function(a,b){f("Enumlinear.prototype.splice");
var d=this.enumclass.array;d.splice(a,b);return this.changeArray(d)},remove:function(a){f("Enumlinear.prototype.remove");return this.splice(this.enumclass.fromEnum(a),1)},changeArray:function(a){f("Enumlinear.prototype.changeArray");a=a.drop(void 0);this.enumclass=new i(a);this.array=this.enumclass.array;this.at(this.enumclass.fromEnum(this.value)||0);return this}};if("undefined"!==typeof exports)exports.Enumlinear=j;if("undefined"===typeof o)i=require("./enum").Enum,j=require("./enumlinear").Enumlinear;
l.prototype=new j;l.prototype.at=function(a){if(this.nonvalidIndex(a))a=this.index;var b=this.array.length;return this.enumlinear.at((a%b+b)%b)};l.prototype.changeArray=function(a){this.enumlinear.changeArray(a);this.array=this.enumlinear.array;this.enumclass=this.enumlinear.enumclass};if("undefined"!==typeof exports)exports.Enumcycle=l;if("undefined"===typeof o)require("./prelude"),i=require("./enum").Enum,j=require("./enumlinear").Enumlinear,l=require("./enumcycle").Enumcycle;g.prototype=new j;
g.prototype.at=function(a){f("Enumdinamic.prototype.at");if(this.nonvalidIndex(a))a=this.index;h("this:::");return this.enumlinear.at(a)};g.prototype.next=function(a){f("Enumdinamic.prototype.next");if(void 0===a||isNaN(a))a=1;a=void 0===this.index?0:this.index+a;switch(this.repeat.value){case "one":a=this.index;break;case "true":var b=this.enumclass.toEnum(a);if(void 0===b)switch(this.shuffle.value){case "true":this.shuffleOn(),a++;default:b=this.array.length,a=(a%b+b)%b}break;default:if(b=this.enumclass.toEnum(a),
void 0===b)switch(this.shuffle.value){case "true":this.shuffleOn();default:return}}return this.at(a)};g.prototype.concat=function(a){f("Enumdinamic.prototype.concat");var b=this.array||[];this.orderedarray=(this.orderedarray||this.array||[]).concat(a);this.changeArray(b.concat(a));"true"===this.shuffle.value&&this.shuffleOn()};g.prototype.remove=function(a){h(this);f("Enumdinamic.prototype.remove");if(this.orderedarray)this.orderedarray=this.orderedarray.drop(a);this.enumlinear.remove(a);h(this)};
g.prototype.changeArray=function(a){f("Enumdinamic.prototype.changeArray");h(this.value);a=a.drop(void 0);this.enumlinear.changeArray(a);this.array=this.enumlinear.array;h("this.array: "+this.array.join(","));h("this.value: "+this.value);this.enumclass=this.enumlinear.enumclass;this.atfromEnum(this.value);for(var b in this.enumlinear)this.enumlinear.hasOwnProperty(b)&&(this[b]=this.enumlinear[b]);return this};g.prototype.setRepeat=function(a){this.repeat.atfromEnum(a)};g.prototype.repeatOff=function(){this.setRepeat("false")};
g.prototype.repeatOn=function(){this.setRepeat("true")};g.prototype.repeatOne=function(){this.setRepeat("one")};g.prototype.repeatToggle=function(){this.repeat.next()};g.prototype.repeatToggleOnOff=function(){this.setRepeat("false"===this.repeat.value?"true":"false")};g.prototype.setShuffle=function(a){this.shuffle.atfromEnum(a)};g.prototype.shuffleOff=function(){this.setShuffle("false")};g.prototype.shuffleOn=function(){this.setShuffle("true")};g.prototype.shuffleToggle=function(){this.shuffle.next()};
g.prototype.shuffleToggleOnOff=function(){this.setShuffle("false"===this.shuffle.value?"true":"false")};if("undefined"!==typeof exports)exports.Enumdinamic=g;var k={get:function(a){return localStorage.getItem(a)},set:function(a,b){localStorage.setItem(a,b)},remove:function(a){localStorage.removeItem(a)},clear:function(){localStorage.clear()},getSetting:function(a){return k.get("store.settings."+a)},getSettingParse:function(a){return JSON.parse(k.get("store.settings."+a))}},e={DefaultEnter:function(a){return{opt:a,
type:0,id:0,str:"Play selected file",fn:function(a){a.ui.defaultEnter()}}},PlayPause:function(a){return{opt:a,type:0,id:1,str:"Play / Pause",fn:function(a){a.ui.click("play")}}},DeleteSelected:function(a){return{opt:a,type:0,id:2,str:"Delete selected files",fn:function(a){a.ui.deleteSelected()}}},NextMusic:function(a){return{opt:a,type:0,id:3,str:"Next",fn:function(a){a.next()}}},PreviousMusic:function(a){return{opt:a,type:0,id:4,str:"Previous",fn:function(a){a.prev()}}},SeekForward:function(a){var b=
parseInt(a[0],10);return{opt:a,type:0,id:5,str:"Seek forward by "+b+" seconds",fn:function(a){a.seekBy(b)}}},SeekBackward:function(a){var b=parseInt(a[0],10);return{opt:a,type:0,id:6,str:"Seek backward by "+b+" seconds",fn:function(a){a.seekBy(-b)}}},SeekPercent:function(a){return{opt:a,type:0,id:7,str:"",fn:function(b){b.seekAt(parseInt(a[0],10))}}},OpenFile:function(a){return{opt:a,type:1,id:8,str:"Open Files",fn:function(a){a.ui.click("open")}}},Interrupt:function(a){return{opt:a,type:1,id:9,str:"Interrupt music importing",
fn:function(a){a.interrupt()}}},ToggleRepeat:function(a){return{opt:a,type:1,id:10,str:"Toggle repeat",fn:function(a){a.ui.click("repeat")}}},ToggleShuffle:function(a){return{opt:a,type:1,id:11,str:"Toggle shuffle",fn:function(a){a.ui.click("shuffle")}}},FilterStart:function(a){return{opt:a,type:1,id:12,str:"Start filter",fn:function(a){a.ui.filterStart()}}},SelectDown:function(a){return{opt:a,type:1,id:9,str:"",fn:function(a){a.ui.selectDown()}}},ExtendDown:function(a){return{opt:a,type:1,id:10,
str:"",fn:function(a){a.ui.extendDown()}}},SelectUp:function(a){return{opt:a,type:1,id:11,str:"",fn:function(a){a.ui.selectUp()}}},ExtendUp:function(a){return{opt:a,type:1,id:12,str:"",fn:function(a){a.ui.extendUp()}}},SelectHome:function(a){return{opt:a,type:1,id:13,str:"",fn:function(a){a.ui.selectHome()}}},ExtendToHome:function(a){return{opt:a,type:1,id:14,str:"",fn:function(a){a.ui.extendToHome()}}},SelectEnd:function(a){return{opt:a,type:1,id:15,str:"",fn:function(a){a.ui.selectEnd()}}},ExtendToEnd:function(a){return{opt:a,
type:1,id:16,str:"",fn:function(a){a.ui.extendToEnd()}}},SelectAll:function(a){return{opt:a,type:1,id:17,str:"",fn:function(a){a.ui.selectAll()}}},UnselectAll:function(a){return{opt:a,type:1,id:18,str:"",fn:function(a){a.ui.unselectAll()}}},SelectInvert:function(a){return{opt:a,type:1,id:19,str:"Invert select",fn:function(a){a.ui.selectInvert()}}},PageDown:function(a){return{opt:a,type:1,id:20,str:"",fn:function(a){a.ui.pageDown()}}},ExtendPageDown:function(a){return{opt:a,type:1,id:21,str:"",fn:function(a){a.ui.extendPageDown()}}},
PageUp:function(a){return{opt:a,type:1,id:22,str:"",fn:function(a){a.ui.pageUp()}}},ExtendPageUp:function(a){return{opt:a,type:1,id:23,str:"",fn:function(a){a.ui.extendPageUp()}}},SelectNowplaying:function(a){return{opt:a,type:1,id:25,str:"",fn:function(a){a.ui.selectNowplaying()}}},ShiftLock:function(a){return{opt:a,type:1,id:26,str:"",fn:function(a){a.key.lock("shiftKey")}}},CtrlLock:function(a){return{opt:a,type:1,id:27,str:"",fn:function(a){a.key.lock("ctrlKey")}}},AltLock:function(a){return{opt:a,
type:1,id:28,str:"",fn:function(a){a.key.lock("altKey")}}},ShiftUnlock:function(a){return{opt:a,type:1,id:29,str:"",fn:function(a){a.key.unlock("shiftKey")}}},CtrlUnlock:function(a){return{opt:a,type:1,id:30,str:"",fn:function(a){a.key.unlock("ctrlKey")}}},AltUnlock:function(a){return{opt:a,type:1,id:31,str:"",fn:function(a){a.key.unlock("altKey")}}},ShiftToggleLock:function(a){return{opt:a,type:1,id:32,str:"",fn:function(a){a.key.togglelock("shiftKey")}}},CtrlToggleLock:function(a){return{opt:a,
type:1,id:33,str:"",fn:function(a){a.key.togglelock("ctrlKey")}}},AltToggleLock:function(a){return{opt:a,type:1,id:34,str:"",fn:function(a){a.key.togglelock("altKey")}}},VolumeUp:function(a){return{opt:a,type:2,id:35,str:"Volume up",fn:function(a){a.volumeup()}}},VolumeDown:function(a){return{opt:a,type:2,id:36,str:"Volume down",fn:function(a){a.volumedown()}}},VolumeMute:function(a){return{opt:a,type:2,id:37,str:"Volume mute",fn:function(a){a.ui.click("mute")}}},VolumeResume:function(a){return{opt:a,
type:2,id:38,str:"Resume from mute",fn:function(a){a.ui.click("volumeon")}}},VolumeToggleMute:function(a){return{opt:a,type:2,id:39,str:"Toggle mute",fn:function(a){a.ui.click(a.ismute()?"volumeon":"mute")}}},ToggleHelp:function(a){return{opt:a,type:3,id:40,str:"Keyboard shortcut",fn:function(a){a.ui.toggleHelp()}}},ToggleAbout:function(a){return{opt:a,type:3,id:41,str:"Application Information",fn:function(a){a.ui.toggleAbout()}}},OpenConfig:function(a){return{opt:a,type:3,id:42,str:"Configuration",
fn:function(a){a.ui.click("conf")}}},ViewInformation:function(a){return{opt:a,type:3,id:44,str:"Music information",fn:function(a){a.ui.viewInformation()}}},Escape:function(a){return{opt:a,type:3,id:45,str:"",fn:function(a){a.ui.escape()}}},FocusToggle:function(a){return{opt:a,type:3,id:46,str:"",fn:function(a){a.ui.focusToggle()}}},FocusToggleReverse:function(a){return{opt:a,type:3,id:47,str:"",fn:function(a){a.ui.focusToggleReverse()}}},FullScreenOn:function(a){return{opt:a,type:3,id:48,str:"",fn:function(a){a.ui.fullScreenOn()}}},
FullScreenOff:function(a){return{opt:a,type:3,id:49,str:"",fn:function(a){a.ui.fullScreenOff()}}},FullScreenToggle:function(a){return{opt:a,type:3,id:50,str:"Toggle fullscreen",fn:function(a){a.ui.fullScreenToggle()}}},Nop:function(a){return{opt:a,type:4,id:52,str:"",fn:function(){}}},Define:function(a){return{opt:a,type:4,id:53,str:"",fn:function(){}}}},s={regex:{white:/^((\s*)\s)/,keygroup:/^((<((([cmasg]\-)*)(f(10|11|12|1|2|3|4|5|6|7|8|9)|backspace|tab|enter|shift|ctrl|alt|esc|space|pgup|pgdn|end|home|left|up|right|down|insert|delete|ctrl|numlock|[*+/:;,\-.\/@\[\\\]\^]|[a-z]|[0-9])))>)/,
specialkeys:/^(f(10|11|12|1|2|3|4|5|6|7|8|9)|backspace|tab|enter|shift|ctrl|alt|esc|space|pgup|pgdn|end|home|left|up|right|down|insert|delete|ctrl|numlock|[*+/:;,\-.\/@\[\\\]\^])/,metakey:/^([cmasg])/,metakeypyphen:/^([cmasg]\-)/,smallalphabets:/^([a-z])/,number:/^([0-9])/,onekey:/^((<((([cmasg]\-)*)(f(10|11|12|1|2|3|4|5|6|7|8|9)|backspace|tab|enter|shift|ctrl|alt|esc|space|pgup|pgdn|end|home|left|up|right|down|insert|delete|ctrl|numlock|[*+/:;,\-.\/@\[\\\]\^]|[a-z]|[0-9])))>|f(10|11|12|1|2|3|4|5|6|7|8|9)|backspace|tab|enter|shift|ctrl|alt|esc|space|pgup|pgdn|end|home|left|up|right|down|insert|delete|ctrl|numlock|[*+/:;,\-.\/@\[\\\]\^]|[a-z]|[0-9]|<nop>)/,
command:/^((map|unmap|avoid)\s)/,rhscommand:/^([A-Z]([a-zA-Z]*))/,rhs:/^(((([A-Z]([a-zA-Z]*))((\s*)\s))*)([A-Z]([a-zA-Z]*)))/,comment:/^(#(.*))/},match:function(a,b){var d=b.str,c=this.regex[a].exec(d);return c?(c=c[0],d=d.slice(c.length),{result:c,length:c.length,col:b.col+c.length,line:b.line,str:d}):{str:d,col:b.col,line:b.line}},delwhite:function(a){return this.match("white",a)},delcomment:function(a){return this.match("comment",a)},delwhiteandcomment:function(a){return this.delcomment(this.delwhite(a))},
getallkey:function(a){for(var b=[],a=this.match("onekey",a);a.result;)b.push(a.result),""!==a.str?(a=this.delwhiteandcomment(a),a=this.match("onekey",a)):delete a.result;a.result=b;return a},parsekey:function(a){a={str:a,col:0,line:0};a=this.getallkey(a);return a.result},parseerror:function(a){h(a);throw a.str+"\nParse Error at line: "+a.line+" column: "+a.col;},parseavoid:function(){},errorifnullstr:function(a){""===a.str&&this.parseerror(a)},getcommand:function(a){a=this.match("command",a);if(a.result)return a.result=
a.result.slice(0,-1),a;this.parseerror(a)},parseline:function(a){a=this.delwhiteandcomment(a);if(""===a.str)return null;a=this.getcommand(a);if(a.result){var b=a.result;if("avoid"===b)this.parseavoid(a);else if("unmap"===b||"gunmap"===b)if(a=this.delwhiteandcomment(a),this.errorifnullstr(a),a=this.getallkey(a),a.result===[])this.parseerror(a);else{var d=a.result,a=this.delwhiteandcomment(a);""!==a.str&&this.parseerror(a);return{obj:a,result:{command:b,result:d}}}else{a=this.delwhiteandcomment(a);
this.errorifnullstr(a);a=this.getallkey(a);d=a.result;a=this.delwhiteandcomment(a);if(""===a.str)return{obj:a,result:{command:b,result:d}};if(a.result!==[]&&(a=this.delwhiteandcomment(a),this.errorifnullstr(a),a=this.match("rhscommand",a),a.result)){var c=a.result,a=this.delwhiteandcomment(a);""!==a.str&&this.parseerror(a);return{obj:a,result:{command:b,result:d,rhscommand:c}}}this.parseerror(a)}}else this.parseerror(a);return a},parselines:function(a){for(var b,d=[],c=0;c<a.length;c++)(b=this.parseline({str:a[c],
col:0,line:c+1}))&&d.push(b.result);return d}};if("undefined"!==typeof exports)exports.Rc=s;m.prototype={start:function(){for(var a in this)if(this[a]&&this[a].init)this[a].init(this),this[a].app=this,h("init: "+a)}};m.prototype.message={init:function(){chrome.extension.onRequest.addListener(function(a){console.dir(a);switch(a.type){case "notification":r.createNotification(a.icon,a.title,a.message);break;case "globalkeydown":h(a);var b=k.getSetting("globalcontrol");if(void 0===b||"false"===b)break;
a.type="globalkeydown-bg";q.send(a);break;case "changeplayerrc":console.log(a);break;case "get-globalkeybind":q.send({type:"ans-globalkeybind",ans:"",to:a.from})}})}};m.prototype.setting={defaultSetting:{notification:!0,notificationmsec:5E3,globalcontrol:!0,scheme:"classic-default",playerrc:"\n# This is configuration of Local Player\n\n# Vim like keymappings\nmap j <down>\nmap k <up>\nmap gg <home>\nmap <s-g> <end>\nmap <c-f> PageDown\nmap <c-b> PageUp\n\n\n\nmap m VolumeToggleMute\nmap <rd> RemoveDuplicated\nmap <c-j> Nop\nmap <c-h> Nop\n\n# unmap keybind registered once\nunmap f\n\n# do not import musics matching regular expression\navoid /[iI]nstrument|[oO]ff vocal|([rR]e)?mix/\n\n"},
init:function(){this.settings=new Store("settings",this.defaultSetting);this.reloadplayerrc()},reset:function(){this.settings.fromObject(this.defaultSetting)},reloadplayerrc:function(){var a=k.getSetting("playerrc");s.parselines(a.split("\\n").slice(1).slice(0,-1))}};m.prototype.version={toString:function(){return"2.0"},init:function(a){this.app=a;var b=this.app.version.toString();this.app.version.notify(k.get("version")!==b);setTimeout(function(){k.set("version",b)},1E3)},notify:function(a){a&&r.createNotification("../icon_128.png",
"Local Player","Updated to version "+this.app.version)}};var t=new m;o.onload=function(){t.start()};this.resetSettings=function(){t.setting.reset()};m.prototype.key=new Key({"<space>":e.PlayPause([]),"<c-space>":"<space>","<g-c-space>":"<space>","<c-right>":e.NextMusic([]),"<g-c-right>":"<c-right>","<c-left>":e.PreviousMusic([]),"<g-c-left>":"<c-left>","<c-o>":e.OpenFile([]),":o":"<c-o>",":e":"<c-o>","<right>":e.SeekForward(["10"]),"<s-right>":e.SeekForward(["30"]),l:"<right>",w:"<s-right>","<left>":e.SeekBackward(["10"]),
"<s-left>":e.SeekBackward(["30"]),h:"<left>",b:"<s-left>","<s-4>":e.SeekPercent(["100"]),"<c-c>":e.Interrupt([]),"<c-r>":e.ToggleRepeat([]),"<c-u>":e.ToggleShuffle([]),"<c-up>":e.VolumeUp([]),"<g-c-up>":"<c-up>","<c-down>":e.VolumeDown([]),"<g-c-down>":"<c-down>","<c-a-down>":e.VolumeToggleMute([]),"<g-c-a-down>":"<c-a-down>",9:e.VolumeDown([]),"0":e.VolumeUp([]),"<down>":e.SelectDown([]),j:"<down>","<s-down>":e.ExtendDown([]),"<s-j>":"<s-down>","<up>":e.SelectUp([]),k:"<up>","<s-up>":e.ExtendUp([]),
"<s-k>":"<s-up>","<home>":e.SelectHome([]),gg:"<home>","<s-home>":e.ExtendToHome([]),"<end>":e.SelectEnd([]),"<s-g>":"<end>","<s-end>":e.ExtendToEnd([]),"<c-a>":e.SelectAll([]),"<c-s-a>":e.UnselectAll([]),"<c-i>":e.SelectInvert([]),"<pgdn>":e.PageDown([]),"<s-pgdn>":e.ExtendPageDown([]),"<pgup>":e.PageUp([]),"<c-b>":"<pgup>","<s-pgup>":e.ExtendPageUp([]),"<s-/>":e.ToggleHelp([]),"<f1>":e.ToggleAbout([]),"[":"<f1>","<c-,>":e.OpenConfig([]),"<delete>":e.DeleteSelected([]),"<backspace>":"<delete>",d:"<delete>",
"<esc>":e.Escape([]),"<s-esc>":"<esc>","<c-[>":"<esc>","<c-s-[>":"<esc>","<enter>":e.DefaultEnter([]),"<a-enter>":e.ViewInformation([]),pp:e.ViewInformation([]),"<tab>":e.FocusToggle([]),"<s-tab>":e.FocusToggleReverse([]),f:e.FullScreenToggle([]),"<c-s-f>":"f","<c-f>":e.FilterStart([]),"/":"<c-f>","<c-p>":"<nop>","<c-j>":"<nop>","<c-h>":"<nop>","<nop>":e.Nop([])});f=function(){};h=function(){}})(this,"undefined"!==typeof jQuery?jQuery:{});
