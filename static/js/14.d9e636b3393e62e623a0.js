webpackJsonp([14],{166:function(t,e,o){function r(t){o(459)}var n=o(78)(o(301),o(600),r,null,null);t.exports=n.exports},301:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{timer:"",ratio:.001}},methods:{goTop:function(){var t=this;if(this.$store.state.isScroll)return!1;var e=this.getPageScroll()[1],o=e;this.timer=setInterval(function(){t.$store.state.isScroll||(t.$store.state.isScroll=!t.$store.state.isScroll);var r=80*e/o;r=r<1?1:r,e-=r,document.body.scrollTop=e-r,document.documentElement.scrollTop=e-r,parseInt(e)<=0&&(t.$store.state.isScroll=!1,clearInterval(t.timer))},10)},scrollController:function(){var t=this.getPageScroll()[1],e=0,o=0;this.$store.state.isScroll?(e=this.ratio*t,o=1-this.ratio*t,this.$store.state.menuOpacity=o>.7?1:o,this.$store.state.btnOpacity=e<.3?0:e):(e=1-this.ratio*t,o=this.ratio*t,this.$store.state.menuOpacity=e<.3?.3:e,this.$store.state.btnOpacity=o>.3?.3:o)},getPageScroll:function(){var t=void 0,e=void 0;return self.pageYOffset?(e=self.pageYOffset,t=self.pageXOffset):document.documentElement&&document.documentElement.scrollTop?(e=document.documentElement.scrollTop,t=document.documentElement.scrollLeft):document.body&&(e=document.body.scrollTop,t=document.body.scrollLeft),[t,e]},stopScroll:function(){this.$store.state.isScroll&&(clearInterval(this.timer),this.$store.state.isScroll=!1)}},mounted:function(){this.scrollController(),window.addEventListener("onmousewheel",this.stopScroll),window.addEventListener("onclick",this.stopScroll),window.addEventListener("scroll",this.scrollController)}}},443:function(t,e,o){e=t.exports=o(171)(!0),e.push([t.i,"#Go{text-align:center;background:#99a9bf;opacity:.2;position:fixed;z-index:8888;bottom:100px;right:40px;width:50px;height:50px;border-radius:50%}#triangle-up{width:0;height:0;margin:14px 0 0 10px;border-left:14px solid transparent;border-right:14px solid transparent;border-bottom:16px solid #eff2f7}@media screen and (max-width:768px){#Go{width:38px;height:38px;right:20px}#triangle-up{margin:10px 0 0 6px;border-left:12px solid transparent;border-right:12px solid transparent;border-bottom:14px solid #eff2f7}}","",{version:3,sources:["D:/my/personal_blog_vue/src/components/GoTop.vue"],names:[],mappings:"AACA,IACI,kBAAmB,AACnB,mBAAoB,AACpB,WAAa,AACb,eAAgB,AAChB,aAAc,AACd,aAAc,AACd,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAmB,CACtB,AACD,aACI,QAAS,AACT,SAAU,AACV,qBAAsB,AACtB,mCAAoC,AACpC,oCAAqC,AACrC,gCAAkC,CACrC,AACD,oCACA,IACQ,WAAY,AACZ,YAAa,AACb,UAAY,CACnB,AACD,aACQ,oBAAqB,AACrB,mCAAoC,AACpC,oCAAqC,AACrC,gCAAkC,CACzC,CACA",file:"GoTop.vue",sourcesContent:["\n#Go{\n    text-align: center;\n    background: #99A9BF;\n    opacity: 0.2;\n    position: fixed;\n    z-index: 8888;\n    bottom: 100px;\n    right: 40px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}\n#triangle-up {\n    width: 0;\n    height: 0;\n    margin: 14px 0 0 10px;\n    border-left: 14px solid transparent;\n    border-right: 14px solid transparent;\n    border-bottom: 16px solid #EFF2F7;\n}\n@media screen and (max-width: 768px) {\n#Go{\n        width: 38px;\n        height: 38px;\n        right: 20px;\n}\n#triangle-up {\n        margin: 10px 0 0 6px;\n        border-left: 12px solid transparent;\n        border-right: 12px solid transparent;\n        border-bottom: 14px solid #EFF2F7;\n}\n}\n"],sourceRoot:""}])},459:function(t,e,o){var r=o(443);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o(172)("63c06e6a",r,!0,{})},600:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:{opacity:t.$store.state.btnOpacity,display:t.$store.state.btnOpacity<.05?"none":"block",cursor:t.$store.state.isScroll?"not-allowed":"pointer"},attrs:{id:"Go"},on:{click:t.goTop}},[o("div",{attrs:{id:"triangle-up"}})])},staticRenderFns:[]}}});
//# sourceMappingURL=14.d9e636b3393e62e623a0.js.map