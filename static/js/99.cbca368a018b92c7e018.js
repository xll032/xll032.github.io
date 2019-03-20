webpackJsonp([99],{201:function(t,e,n){var a=n(78)(n(331),n(482),null,null,null);t.exports=a.exports},298:function(t,e,n){"use strict";e.a={data:function(){var t=this.$store.state.initialBlogData;return{thisBlog:t[t.length-1-this.order()],table_14:[{name:"pointer",intro:"手（ie5 用的是 hand）"},{name:"crosshair",intro:"十字准心（切图的感觉）"},{name:"wait",intro:"等待/沙漏（一般为一块表或者一个沙漏，新版 windows 是蓝圈圈）"},{name:"help",intro:"帮助（一般为问号或者气球）"},{name:"no-drop",intro:"无法释放（chrome下是禁止的标志，和not-allowed一样）"},{name:"text",intro:"文字/编辑"},{name:"move",intro:"可移动对象"},{name:"n-resize",intro:"向上改变大小（北，north 上下箭头）"},{name:"s-resize",intro:"向下改变大小（南，south 上下箭头）"},{name:"e-resize",intro:"向右改变大小（东，east 左右箭头）"},{name:"w-resize",intro:"向左改变大小（西，west 左右箭头）"},{name:"ne-resize",intro:"向上右改变大小（north east 右斜箭头）"},{name:"sw-resize",intro:"向下左改变大小（south west 右斜箭头）"},{name:"nw-resize",intro:"向上左改变大小（north west 左斜箭头）"},{name:"se-resize",intro:"向下右改变大小（south east 左斜箭头）"},{name:"auto",intro:"自动（浏览器设置一个游标，效果不确定）"},{name:"not-allowed",intro:"禁止"},{name:"progress",intro:"处理中（鼠标边上一个小沙漏，新版 windows 是蓝圈圈）"},{name:"default",intro:"系统默认（鼠标箭头）"},{name:'url("#")',intro:"自定义（可用动画，文件格式必须是.cur或.ani），此项无效果展示"},{name:"none",intro:"无指针"}],count_21:0,table_37:[{name:"false",type:"boolean",value:"假值"},{name:"0",type:"number",value:"假值"},{name:'""（空字符串）',type:"string",value:"假值"},{name:"null",type:"object",value:"空值"},{name:"undefined",type:"undefined",value:"空值"}],table_42_1:[{name:"矩形",tagName:"rect",child:[{attr:"x",intro:"矩形左上角的 x 位置"},{attr:"y",intro:"矩形左上角的 y 位置"},{attr:"rx",intro:"x 方位的圆角半径"},{attr:"ry",intro:"y 方位的圆角半径"},{attr:"width",intro:"矩形宽度"},{attr:"height",intro:"矩形高度"}]},{name:"矩形",tagName:"rect",child:[{attr:"x",intro:"矩形左上角的 x 位置"},{attr:"y",intro:"矩形左上角的 y 位置"},{attr:"rx",intro:"x 方位的圆角半径"},{attr:"ry",intro:"y 方位的圆角半径"},{attr:"width",intro:"矩形宽度"},{attr:"height",intro:"矩形高度"}]},{name:"圆形",tagName:"circle",child:[{attr:"r",intro:"圆的半径"},{attr:"cx",intro:"圆心的 x 位置"},{attr:"cy",intro:"圆心的 y 位置"}]},{name:"椭圆",tagName:"ellipse",child:[{attr:"rx",intro:"椭圆的 x 半径"},{attr:"ry",intro:"椭圆的 y 半径"},{attr:"cx",intro:"椭圆中心的 x 位置"},{attr:"cy",intro:"椭圆中心的 y 位置"}]},{name:"椭圆",tagName:"ellipse",child:[{attr:"rx",intro:"椭圆的 x 半径"},{attr:"ry",intro:"椭圆的 y 半径"},{attr:"cx",intro:"椭圆中心的 x 位置"},{attr:"cy",intro:"椭圆中心的 y 位置"}]},{name:"线条",tagName:"line",child:[{attr:"x1",intro:"起点的 x 位置"},{attr:"x2",intro:"终点的 x 位置"},{attr:"y1",intro:"起点的 y 位置"},{attr:"y2",intro:"终点的 y 位置"}]},{name:"折线",tagName:"polyline",child:[{attr:"points",intro:'每次都要有两个坐标点，由空格和逗号分隔，例如：points="60 110,50 20,11 22" '}]},{name:"多边形",tagName:"polygon",child:[{attr:"points",intro:"与折线用法一样，区别是：多边形会自动回到第一个点连接"}]},{name:"路径",tagName:"path",child:[{attr:"d",intro:"点集数列（比较复杂，后面会展开介绍）"}]}],table_42_2:[{directive:"M",explain:"移动至",useage:'"M10 10"',intro:"将画笔移动到 (10,10) 的位置（并没有画线）"},{directive:"L",explain:"画至",useage:'"L20 20"',intro:"会在指定的位置和画笔位置之间画一条直线"},{directive:"H",explain:"绘制平行线",useage:'"H 90"',intro:"在 x 轴上移动距离画出垂直线"},{directive:"V",explain:"绘制垂直线",useage:'"V 90"',intro:"在 y 轴上移动距离画出平行线"},{directive:"M",explain:"移动至",useage:'"M10 10"',intro:"将画笔移动到(10,10)的位置（并没有画线"},{directive:"Z(z)",explain:"闭合路径命令",useage:'"M10 10 H 90 V 90 H 10 z"',intro:"闭合所指的路径"}],table_42_3:[{directive:"C(c)",explain:"三次贝塞尔曲线",useage:'"Cx1 y1,x2 y2,x y"',intro:"1 是起点控制点，2 是终点控制点，x y 是曲线终点（曲线起点就是画笔位置，控制点类似于 ps 中的锚点）"},{directive:"S",explain:"复制一相同曲线（三次）",useage:'"C20 20,40 20,50 10 S x2 y2,x y"',intro:"如果S命令跟在一个 C 命令或者另一个 S 命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。如果 S 命令单独使用，前面没有 C 命令或者另一个 S 命令，那么它的两个控制点就会被假设为同一个点（参数含义跟 C 命令差不多）"},{directive:"Q",explain:'二次贝塞尔曲线 "Qx1 y1,x y"',useage:'"H 90"',intro:"只有一个控制点 x1,y1 用来确定起点终点的斜率（通俗的讲，就是三点画出一个曲线）"},{directive:"T",explain:"复制一相同曲线（二次）",useage:'"C20 20,40 20 Tx y"',intro:"控制点会自动推断，只需定义曲线终点即可"},{directive:"Z(z)",explain:"闭合路径命令",useage:'"M10 10 H 90 V 90 H 10 z"',intro:"闭合所指的路径"}],table_42_4:[{directive:"A",explain:"弧形命令",useage:'"Arx ry x-axis-rotation large-arc-flag sweep-flag x y"',intro:"弧形可视为圆形或椭圆形的一部分"}],table_42_5:[{name:"fill",intro:"设置对象内部的颜色"},{name:"stroke",intro:"设置绘制对象的线条的颜色，可以用 css 颜色命名方案定义颜色（颜色英文名、rgb、十六进制、rgba）"},{name:"fill-opacity",intro:"控制填充色的不透明度"},{name:"stroke-opacity",intro:"控制描边的不透明度"},{name:"stroke-linecap",intro:"描边方式 属性值：butt（用直边结束线段，不会超出描边） square（会稍微超出描边，超出量由 stroke-width 控制） round（边框终点是圆角，也由 stroke-width 控制）"},{name:"stroke-width",intro:"描边宽度（以路径为中心线绘制的）"},{name:"stroke-linejoin",intro:"控制两条描边线段之间用什么方式连接 属性值：miter（尖角转折） round（圆角转折） bevel（斜接转折）"},{name:"stroke-dasharray",intro:"属性值：a,b,c（三个数字，必须用逗号隔开）第一个表示填色区域的长度，第二个表示非填色区域的长度，第三个表示填色区域长度"},{name:"stroke-miterlimit",intro:"定义什么情况下绘制或不绘制边框连接的 miter 效果"},{name:"stroke-dashoffset",intro:"定义虚线开始的位置"},{name:"fill-rule",intro:"定义如何给图形重叠的区域上色（不太清楚如何使用）"}],table_45:[{name:"host",intro:"返回 url 的主机部分，如：www.xxxx.com （host包含端口号，如：www.xxxx.com:81）"},{name:"hostname",intro:"返回 www.xxxx.com (hostname不包含端口号，默认的80是不显示的）"},{name:"href",intro:"返回 url 字符串（在浏览器中就是完整的地址栏）"},{name:"pathname",intro:"返回 地址路径 如 www.xxxx.com/aaa/bb/c  得到 /aaa/bb/c"},{name:"protocol",intro:"返回 url 的协议部分 如 http:,ftp:,maito: 等等"},{name:"port",intro:"返回 url 的端口部分，如果采用默认的 80 端口，返回的是空字符而不是默认的 80"}],table_62:[{name:"ajaxStart",type:"全局",intro:"开始的方法"},{name:"beforeSend",type:"局部",intro:"发送前的方法，可用于验证"},{name:"ajaxSend",type:"全局",intro:"发送时的方法"},{name:"success",type:"局部",intro:"成功后的回调"},{name:"ajaxSuccess",type:"全局",intro:"成功后的方法"},{name:"error",type:"局部",intro:"错误后的回调"},{name:"ajaxError",type:"全局",intro:"错误后的方法"},{name:"complete",type:"局部",intro:"完成后的回调，无论失败成功"},{name:"ajaxComplete",type:"全局",intro:"完成后的方法，无论失败成功"},{name:"ajaxStop",type:"全局",intro:"停止的方法"}],table_66_1:[{name:"range",type:"Array",def:"[]",intro:"mode 为 selector 时，range 有效"},{name:"value",type:"Number",def:"0",intro:"mode 为 selector 时，是数字，表示选择了 range 中的第几个"},{name:"bindchange",type:"Function（EventHandle）",def:"",intro:"value 值改变后触发 change 事件，event.detail={value:value}"}],table_66_2:[{name:"value",type:"String",def:"",intro:"表示选中的时间，格式为 “hh:mm”"},{name:"start",type:"String",def:"",intro:"表示有效时间范围的开始，格式为 “hh:mm”"},{name:"end",type:"String",def:"",intro:"表示有效时间范围的结束，格式为 “hh:mm”"},{name:"bindchange",type:"Function（EventHandle）",def:"",intro:"value 值改变后触发 change 事件，event.detail={value:value}"}],table_66_3:[{name:"value",type:"String",def:"0",intro:"表示选中的日期，格式为 “yyyy-MM-dd”"},{name:"start",type:"String",def:"",intro:"表示有效日期范围的开始，格式为 “yyyy-MM-dd”"},{name:"end",type:"String",def:"",intro:"表示有效日期范围的结束，格式为 “yyyy-MM-dd”"},{name:"bindchange",type:"Function（EventHandle）",def:"",intro:"value 值改变后触发 change 事件，event.detail={value:value}"}],val_76:0,table_90:[{name:"2D-Position",intro:"允许通过拖曳移动绝对定位的对象"},{name:"AbsolutePosition",intro:"设定元素的 position 属性为“absolute”(绝对)"},{name:"BackColor",intro:"设置或获取当前选中区的背景颜色"},{name:"BlockDirLTR",intro:"目前尚未支持"},{name:"BlockDirRTL",intro:"目前尚未支持"},{name:"Bold",intro:"切换当前选中区的粗体显示与否"},{name:"BrowseMode",intro:"目前尚未支持"},{name:"Copy",intro:"将当前选中区复制到剪贴板"},{name:"CreateBookmark",intro:"创建一个书签锚或获取当前选中区或插入点的书签锚的名称"},{name:"CreateLink",intro:"在当前选中区上插入超级链接，或显示一个对话框允许用户指定要为当前选中区插入的超级链接的 URL"},{name:"Cut",intro:"将当前选中区删除并复制到剪贴板"},{name:"Delete",intro:"删除当前选中区"},{name:"DirLTR",intro:"目前尚未支持"},{name:"DirRTL",intro:"目前尚未支持"},{name:"EditMode",intro:"目前尚未支持"},{name:"FontName",intro:"设置或获取当前选中区的字体"},{name:"FontSize",intro:"设置或获取当前选中区的字体大小"},{name:"ForeColor",intro:"设置或获取当前选中区的前景(文本)颜色"},{name:"FormatBlock",intro:"设置当前块格式化标签"},{name:"Indent",intro:"增加选中文本的缩进"},{name:"InlineDirLTR",intro:"目前尚未支持"},{name:"InlineDirRTL",intro:"目前尚未支持。"},{name:"InsertButton",intro:"用按钮控件覆盖当前选中区"},{name:"InsertFieldset",intro:"用方框覆盖当前选中区"},{name:"InsertHorizontalRule",intro:"用水平线覆盖当前选中区"},{name:"InsertIFrame",intro:"用内嵌框架覆盖当前选中区"},{name:"InsertImage",intro:"用图像覆盖当前选中区"},{name:"InsertInputButton",intro:"用按钮控件覆盖当前选中区。"},{name:"InsertInputCheckbox",intro:"用复选框控件覆盖当前选中区"},{name:"InsertInputFileUpload",intro:"用文件上载控件覆盖当前选中区"},{name:"InsertInputHidden",intro:"插入隐藏控件覆盖当前选中区"},{name:"InsertInputImage",intro:"用图像控件覆盖当前选中区"},{name:"InsertInputPassword",intro:"用密码控件覆盖当前选中区"},{name:"InsertInputRadio",intro:"用单选钮控件覆盖当前选中区"},{name:"InsertInputReset",intro:"用重置控件覆盖当前选中区"},{name:"InsertInputSubmit",intro:"用提交控件覆盖当前选中区"},{name:"InsertInputText",intro:"用文本控件覆盖当前选中区"},{name:"InsertMarquee",intro:"用空字幕覆盖当前选中区"},{name:"InsertOrderedList",intro:"切换当前选中区是编号列表还是常规格式化块"},{name:"InsertParagraph",intro:"用换行覆盖当前选中区"},{name:"InsertSelectDropdown",intro:"用下拉框控件覆盖当前选中区"},{name:"InsertSelectListbox",intro:"用列表框控件覆盖当前选中区"},{name:"InsertTextArea",intro:"用多行文本输入控件覆盖当前选中区"},{name:"InsertUnorderedList",intro:"切换当前选中区是项目符号列表还是常规格式化块"},{name:"Italic",intro:"切换当前选中区斜体显示与否"},{name:"JustifyCenter",intro:"将当前选中区在所在格式化块置中。"},{name:"JustifyFull",intro:"目前尚未支持。"},{name:"JustifyLeft",intro:"将当前选中区所在格式化块左对齐"},{name:"JustifyNone",intro:"目前尚未支持"},{name:"JustifyRight",intro:"将当前选中区所在格式化块右对齐"},{name:"LiveResize",intro:"迫使 MSHTML 编辑器在缩放或移动过程中持续更新元素外观，而不是只在移动或缩放完成后更新"},{name:"MultipleSelection",intro:"允许当用户按住 Shift 或 Ctrl 键时一次选中多于一个站点可选元素"},{name:"Open",intro:"打开"},{name:"Outdent",intro:"减少选中区所在格式化块的缩进"},{name:"OverWrite",intro:"切换文本状态的插入和覆盖"},{name:"Paste",intro:"用剪贴板内容覆盖当前选中区"},{name:"PlayImage",intro:"目前尚未支持"},{name:"Print",intro:"打开打印对话框以便用户可以打印当前页"},{name:"Redo",intro:"重做"},{name:"Refresh",intro:"刷新当前文档"},{name:"RemoveFormat",intro:"从当前选中区中删除格式化标签"},{name:"RemoveParaFormat",intro:"目前尚未支持"},{name:"SaveAs",intro:"将当前 Web 页面保存为文件"},{name:"SelectAll",intro:"选中整个文档"},{name:"SizeToControl",intro:"目前尚未支持"},{name:"SizeToControlHeight",intro:"目前尚未支持"},{name:"SizeToControlWidth",intro:"目前尚未支持"},{name:"Stop",intro:"停止"},{name:"StopImage",intro:"目前尚未支持"},{name:"StrikeThrough",intro:"目前尚未支持"},{name:"Subscript",intro:"目前尚未支持。"},{name:"Superscript",intro:"目前尚未支持。"},{name:"UnBookmark",intro:"从当前选中区中删除全部书签"},{name:"Underline",intro:"切换当前选中区的下划线显示与否"},{name:"Undo",intro:"撤消"},{name:"Unlink",intro:"从当前选中区中删除全部超级链接"},{name:"Unselect",intro:"清除当前选中区的选中状态"}],name_93:"",popover_93:[{no:"001",name:"张三",age:"18",state:!1},{no:"002",name:"李四",age:"18",state:!1},{no:"003",name:"王五",age:"18",state:!1},{no:"004",name:"赵钱孙李",age:"18",state:!1}],table_98:[{name:"Ctrl+C",intro:"终止当前命令的快捷键，可以跳入下一行"},{name:"Tab",intro:"命令打到一半的时候会自动补全，甚至目录也能补全"},{name:"Ctrl+D",intro:"退出当前终端，和 exit 效果相同"},{name:"Ctrl+Z",intro:"暂停当前进程，正在运行的命令，如果觉得有问题可以暂停它"},{name:"Ctrl+L",intro:"清屏"},{name:"man",intro:"查看帮助（例如 man ls）"},{name:"fg",intro:"将后台命令调至前台继续运行"},{name:"bg",intro:"将一个在后台暂停的命令，变成继续执行"},{name:"jobs",intro:"查看当前有多少后台运行的命令"},{name:"mkdir",intro:"创建一个目录"},{name:"rmdir",intro:"删除一个目录（不能删不为空的）"},{name:"rm",intro:"删除目录或文件"}],table_104:[{name:'<span class="code">get(target,propKey,receive)</span>',intro:"拦截对象属性的读取。"},{name:'<span class="code">set(target,propKey,value,receive)</span>',intro:"拦截对象属性的设置，返回一个布尔值。"},{name:'<span class="code">has(target, propKey)</span>',intro:'拦截 <span class="code">propKey in proxy</span> 的操作，返回一个布尔值。'},{name:'<span class="code">deleteProperty(target, propKey)</span>',intro:'拦截 <span class="code">delete proxy[propKey]</span> 的操作，返回一个布尔值。'},{name:'<span class="code">ownKeys(target)</span>',intro:'拦截 <span class="code">Object.getOwnPropertyNames(proxy)</span>、<span class="code">Object.getOwnPropertySymbols(proxy)</span>、<span class="code">Object.keys(proxy)</span>，返回一个数组。'},{name:'<span class="code">getOwnPropertyDescriptor(target, propKey)</span>',intro:'拦截 <span class="code">Object.getOwnPropertyDescriptor(proxy, propKey)</span>，返回属性的描述对象。'},{name:'<span class="code">defineProperty(target, propKey, propDesc)</span>',intro:'拦截 <span class="code">Object.defineProperty(proxy, propKey, propDesc)</span>、<span class="code">Object.defineProperties(proxy, propDescs)</span>，返回一个布尔值。'},{name:'<span class="code">preventExtensions(target)</span>',intro:'拦截 <span class="code">Object.preventExtensions(proxy)</span>，返回一个布尔值。'},{name:'<span class="code">getPrototypeOf(target)</span>',intro:'拦截 <span class="code">Object.getPrototypeOf(proxy)</span>，返回一个对象。'},{name:'<span class="code">isExtensible(target)</span>',intro:'拦截<span class="code">Object.isExtensible(proxy)</span>，返回一个布尔值。'},{name:'<span class="code">setPrototypeOf(target, proto)</span>',intro:'拦截 <span class="code">Object.setPrototypeOf(proxy, proto)</span>，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。'},{name:'<span class="code">apply(target, object, args)</span>',intro:'拦截 <span class="code">Proxy</span> 实例作为函数调用的操作，比如 <span class="code">proxy(...args)、proxy.call(object, ...args)</span>、<span class="code">proxy.apply(...)</span>。'},{name:'<span class="code">construct(target, args)</span>',intro:'拦截 <span class="code">Proxy</span> 实例作为构造函数调用的操作，比如 <span class="code">new proxy(...args)</span>。'}]}},methods:{order:function(){return window.location.href.substring(window.location.href.indexOf("_")+1)-1},tableRowClass_14:function(t){return t.row.name},input_76:function(t){if(null===t)return"0";if(""===t)return"0";var e=void 0;return e="string"==typeof t?parseInt(t):t,e<0?0:e<9999?e:e<99999999?Math.round(e/1e4*100)/100+"万":e<999999999999?Math.round(e/1e8*100)/100+"亿":e<1e16?Math.round(e/1e8*100)/100+"万亿":e<1e20?Math.round(e/1e8*100)/100+"亿亿":"太多了，不玩了"},click_93:function(t){this.name_93=t},del_93:function(){var t=this;this.popover_93.forEach(function(e,n){e.name===t.name_93&&t.popover_93.splice(n,1)})}},mounted:function(){document.documentElement.scrollTop=document.body.scrollTop=0,location.hash.includes("blog_")&&(document.title=this.thisBlog.title+" - 龙")}}},331:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(46),r=n.n(a),s=n(298);e.default=r()({},s.a)},482:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("header",[n("p",{staticClass:"title"},[t._v(t._s(t.thisBlog.title))]),t._v(" "),n("p",{staticClass:"time"},[t._v("\n            "+t._s(t.thisBlog.time)+"\n            "),t._l(t.thisBlog.tags,function(e){return n("el-tag",{key:e.name,attrs:{type:e.type}},[t._v(t._s(e.name))])})],2)]),t._v(" "),n("section",[n("p",{staticClass:"subtitle"},[t._v("前言")]),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.thisBlog.brief)}},[t._v(t._s(t.thisBlog.brief))]),t._v(" "),n("p",{staticClass:"subtitle"},[t._v("正文")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n            直接上一个使用 "),n("span",{staticClass:"code"},[t._v("index()")]),t._v(" 方法的例子：\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"code"},[n("span",{staticClass:"arrow"},[t._v("<")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"word"},[t._v("demo1")]),n("span",{staticClass:"arrow"},[t._v("</")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"com"},[t._v(" \x3c!-- 下标 0 --\x3e ")]),n("br"),n("span",{staticClass:"arrow"},[t._v("<")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"word"},[t._v("demo2")]),n("span",{staticClass:"arrow"},[t._v("</")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"com"},[t._v(" \x3c!-- 下标 1 --\x3e ")]),n("br"),n("span",{staticClass:"arrow"},[t._v("<")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"word"},[t._v("demo3")]),n("span",{staticClass:"arrow"},[t._v("</")]),n("span",{staticClass:"tag"},[t._v("div")]),n("span",{staticClass:"arrow"},[t._v(">")]),n("span",{staticClass:"com"},[t._v(" \x3c!-- 下标 2 --\x3e")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n            获取上面三个 "),n("span",{staticClass:"code"},[t._v("div")]),t._v(" 的下标，操作如下：\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{staticClass:"code"},[n("span",{staticClass:"spe"},[t._v("$")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"str"},[t._v("'body'")]),n("span",{staticClass:"word"},[t._v(")")]),n("span",{staticClass:"word"},[t._v(".")]),n("span",{staticClass:"method"},[t._v("on")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"str"},[t._v("'click'")]),n("span",{staticClass:"word"},[t._v(", ")]),n("span",{staticClass:"str"},[t._v("'div'")]),n("span",{staticClass:"word"},[t._v(", ")]),n("span",{staticClass:"key"},[t._v("function")]),n("span",{staticClass:"word"},[t._v("()")]),n("span",{staticClass:"flower"},[t._v("{")]),n("br"),t._v("    "),n("span",{staticClass:"key"},[t._v("var")]),t._v(" "),n("span",{staticClass:"param"},[t._v("_index")]),t._v(" "),n("span",{staticClass:"key"},[t._v("=")]),t._v(" "),n("span",{staticClass:"spe"},[t._v("$")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"str"},[t._v("'h4'")]),n("span",{staticClass:"word"},[t._v(").")]),n("span",{staticClass:"method"},[t._v("index")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"spe"},[t._v("$")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"key"},[t._v("this")]),n("span",{staticClass:"word"},[t._v("));")]),n("br"),t._v("    "),n("span",{staticClass:"spe"},[t._v("console")]),n("span",{staticClass:"word"},[t._v(".")]),n("span",{staticClass:"method"},[t._v("log")]),n("span",{staticClass:"word"},[t._v("(")]),n("span",{staticClass:"param"},[t._v("_index")]),n("span",{staticClass:"word"},[t._v(");")]),n("span",{staticClass:"com"},[t._v(" // 即为获得的下标值")]),n("br"),n("span",{staticClass:"flower"},[t._v("}")]),n("span",{staticClass:"word"},[t._v(");")])])}]}}});
//# sourceMappingURL=99.cbca368a018b92c7e018.js.map