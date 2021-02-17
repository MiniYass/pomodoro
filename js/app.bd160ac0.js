(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],m=0,p=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pomodoro/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2f12":function(t,e,r){"use strict";r("f002")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),i=Object(n["e"])("h1",null,"Pomodoro",-1),a={id:"app"};function o(t,e,r,o,c,s){var u=Object(n["g"])("Timer");return Object(n["f"])(),Object(n["c"])(n["a"],null,[i,Object(n["e"])("div",a,[Object(n["e"])(u)])],64)}var c={id:"upperBtn"},s={class:"base-timer"},u={class:"timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},l={class:"timer__circle"},m=Object(n["e"])("circle",{class:"timer__path-elapsed",cx:"50",cy:"50",r:"45"},null,-1),p={class:"timer__label"},h={id:"lowerBtn"};function f(t,e,r,i,a,o){return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("div",c,[Object(n["e"])("button",{id:"pomodoro",onClick:e[1]||(e[1]=function(t){return o.timerChange(1500)})},"Pomodoro"),Object(n["e"])("button",{id:"shBreak",onClick:e[2]||(e[2]=function(t){return o.timerChange(300)})},"ShortBreak"),Object(n["e"])("button",{id:"lgBreak",onClick:e[3]||(e[3]=function(t){return o.timerChange(600)})},"LongBreak")]),Object(n["e"])("div",s,[(Object(n["f"])(),Object(n["c"])("svg",u,[Object(n["e"])("g",l,[m,Object(n["e"])("path",{class:{break:t.isOnBreak,work:!t.isOnBreak},"stroke-dasharray":o.circleDasharray,d:"\r\n            M 50 50 \r\n            m-45, 0\r\n            a 45,45 0 1,0 90,0\r\n            a 45,45 0 1,0 -90,0\r\n          "},null,10,["stroke-dasharray"])])])),Object(n["e"])("span",p,Object(n["h"])(o.minutes)+" : "+Object(n["h"])(o.seconds),1)]),Object(n["e"])("div",h,[t.timerState?Object(n["d"])("",!0):(Object(n["f"])(),Object(n["c"])("button",{key:0,id:"start",onClick:e[4]||(e[4]=function(){return o.timerStart&&o.timerStart.apply(o,arguments)})},"Start")),t.timerState?(Object(n["f"])(),Object(n["c"])("button",{key:1,id:"pause",onClick:e[5]||(e[5]=function(){return o.timerPause&&o.timerPause.apply(o,arguments)})},"Pause")):Object(n["d"])("",!0),t.resetBtn?(Object(n["f"])(),Object(n["c"])("button",{key:2,id:"reset",onClick:e[6]||(e[6]=function(){return o.timerReset&&o.timerReset.apply(o,arguments)})},"Reset")):Object(n["d"])("",!0)])],64)}r("b680");var d=1500,b=new Audio("https://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"),O={data:function(){return{totalTime:1500,timePassed:0,resetBtn:!1,timerState:null,isOnBreak:!1,currentStep:0,step:[{name:"Pomodoro",time:1500},{name:"Short Break",time:300},{name:"Pomodoro",time:1500},{name:"Long break",time:600}]}},computed:{minutes:function(){var t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds:function(){var t=this.totalTime-60*this.minutes;return this.padTime(t)},circleDasharray:function(){return"".concat((283*this.timeFraction).toFixed(0)," 283")},timeFraction:function(){var t=this.totalTime/d;return t-1/this.totalTime*(1-t)}},methods:{timerStart:function(){var t=this;this.resetBtn=!0,this.timerState=setInterval((function(){if(t.timerCount(),t.totalTime<=0)return b.play(),t.currentStep+=1,void t.timerChange(t.step[t.currentStep].time);t.currentStep>3&&t.timerReset()}),1e3)},timerPause:function(){clearInterval(this.timerState),this.timerState=null,this.resetBtn=!0},timerChange:function(t){t==this.step[3].time?(this.isOnBreak=!0,this.currentStep=3):t==this.step[1].time?(this.isOnBreak=!0,this.currentStep=1):this.isOnBreak=!1,this.totalTime=t,this.timePassed=0,clearInterval(this.timerState),this.timerState=null,this.timerStart()},timerReset:function(){this.currentStep=0,this.totalTime=1500,this.timePassed=0,clearInterval(this.timerState),this.timerState=null,this.resetBtn=!1,this.isOnBreak=!1},timerCount:function(){this.totalTime-=1,this.timePassed+=1},padTime:function(t){return(t<10?"0":"")+t}}};r("d7e1");O.render=f;var j=O,v={name:"App",components:{Timer:j}};r("2f12");v.render=o;var k=v;Object(n["b"])(k).mount("#app")},d7e1:function(t,e,r){"use strict";r("e151")},e151:function(t,e,r){},f002:function(t,e,r){}});
//# sourceMappingURL=app.bd160ac0.js.map