var space = '&nbsp;&nbsp;&nbsp;&nbsp;';
var AllDataLength = 9;
var AllData = {
  "1":{
    "title":"new Date() 兼容问题",
    "type":16,
    "time":"2016/9/13 10:00",
    "content":[
        [0,"时间格式为：var _time = 2016-09-13 09:51:57"],
        [0,"1、主流浏览器："],
        [0,"用new Date( _time )会返回标准时间 Tue Sep 13 2016 00:00:00 GMT+0800"],
        [0,"2、IE及iphone："],
        [0,"使用1的方法会返回NaN，需要使用：new Date( yy,MM,dd,hh,mm,ss );"],
        [0,"3、兼容解决"],
        [0,"方法2在主流浏览器下也可以使用，可直接使用2的写法解决兼容。或者去判断浏览器版本"]
    ]
  },
  "2":{
    "title":"ios网页取消自动识别手机号码",
    "type":64,
    "time":"2016/9/14 14:28",
    "content":[
        [0,"ios下会自动将10、11位号码识别，点击后会进入到拨号，并且颜色会变黑"],
        [0,"注：该问题仅在iPhone手机上运行web时才会出现，PC端无法检查到该问题"],
        [1,"&lt;meta name = \"format-detection\" content = \"telephone=no\">"],
        [0,"添加此标签后，该问题可完美解决"]
    ]
  },
  "3":{
    "title":"图片限宽高",
    "type":32,
    "time":"2016/9/29 9:36",
    "content":[
        [0,"1、限宽不限高"],
        [0,"width设为定值或百分比，不设高度，图片自动按比例缩放为指定宽度（百分比可以自适应）"],
        [0,"2、限高不限宽"],
        [0,"height设为定值（设为百分比无效），图片自动按比例缩放为指定高度（缺点：不能设为百分比，无法做到自适应大小）"],
        [0,"用 JS 写绑定事件自然也可以"]
    ]
  },
  "4":{
    "title":"for...in在ie8下不兼容",
    "type":16,
    "time":"2016/9/30 9:59",
    "content":[
        [0,"ie8的indexOf函数不好用。原因说明及解决方法如下："],
        [0,"Don't use for...in for arrays. It's best to use the traditional for loop in that case."],
        [0,"The reason is because for...in looks at the array as an object, and therefore properties likeindexOf or length may be included in the loop. The normal for loop only deals with numeric keys,so this problem is avoided."],
        [0,"On a side note, unwanted properties could show up when iterating over plain objects as well(as others have noted, properties you add to the object's prototype will show up). You canget around this by writing your for...in loops this way:"],
        [1,"var obj = { ... };"],
        [1,"for (var prop in obj) {"],
        [1,space+"if (obj.hasOwnProperty(prop)) {"],
        [1,space+space+"var item = obj[prop];"],
        [1,space+space+"..."],
        [1,space+"}"],
        [1,"}"],
        [0,"To be clear though: you still shouldn't use this method on arrays."]
    ]
  },
  "5":{
    "title":"后台请求到的数据处理",
    "type":16,
    "time":"2016/10/8 17:42",
    "content":[
      [0,"这一条本来不想发上来的，想想毕竟是年少时不懂事，那时候总结了很多，现在归纳说明一下好了"],
      [0,"获取到的数据不可能永远是理想状态，有时会出现空字段，\"\"、\" \"、null、undefined等情况。"],
      [0,"在这种情况下，应当做好特殊处理"]
    ]
  },
  "6":{
    "title":"$.proxy()函数的this指向",
    "type":1,
    "time":"2016/10/9 11:07",
    "content":[
        [0,"使用计时器里面的this指向点击的元素的写法如下："],
        [1,"$('#myElement').click(function() {"],
        [1,space+"var that = this;"],
        [1,space+"setTimeout(function() {"],
        [1,space+space+"$(that).addClass('aNewClass');"],
        [1,space+"}, 1000);"],
        [1,"});"],
        [0,"在使用jQuery时，可以使用$.proxy(context,name)方法"],
        [0,"context可以是对象，函数等；name是传入的操作参数"],
        [0,"以上述方法为例："],
        [1,"$('#myElement').click(function() {"],
        [1,space+"setTimeout($.proxy(function() {"],
        [1,space+space+"$(that).addClass('aNewClass');"],
        [1,space+"},this), 1000);"],
        [1,"});"],
        [0,"修改属性的时候也可以使用。BTW：感觉还是用 var that = this；舒服"]
    ]
  },
  "7":{
    "title":"查找父级元素",
    "type":1,
    "time":"2016/10/11 11:09",
    "content":[
        [0,"百度上搜索了一下，发现网上有一些说的是不对的，下面是整理出来的正确使用方法"],
        [0,"1、 .parent()"],
        [0,"若填写了参数则找到符合条件的上一级元素，若上一级元素不符合条件，返回空值；"],
        [0,"若不填写参数则直接返回上一级元素"],
        [0,"2、 .parents()"],
        [0,"若填写了参数则查找符合条件的父级元素（一直找到根节点），若都不符合条件，返回空值"],
        [0,"若不填写参数则直接返回所有的父级元素"],
        [0,"参数填写的是 CSS选择器"]
    ]
  },
  "8":{
    "title":"EChart（图表）  缺一个demo",
    "type":256,
    "time":"2016/10/11 11:11",
    "content":[
          [0,"这是一款功能比较丰富强大的图表插件"],
          [0,"百度官方文档写的很全面。传送门：<a href='http://echarts.baidu.com/api.html#echarts' target='_blank'>百度EChart 官方API</a>"],
          [0,"自己写的demo。传送门：<a href='#'>现在还没有</a>"]
    ]
  },
  "9":{
    "title":".remove()的元素找回",
    "type":1,
    "time":"2016/10/11 11:38",
    "content":[
        [0,".remove() 方法的确将元素从 DOM 树中移除了，但该方法本身的返回值就是这个元素的信息，"],
        [0,"即用以下方法可以找回删除的节点"],
        [1,"var ele = $('.removeEle').remove(); //移除"],
        [1,"$('.parent').append(ele) //重新添加"]
    ]
  },
  "10":{
    "title":"form 下的 button",
    "type":64,
    "time":"2016/10/11 15:27",
    "content":[
      [0,"这条原本也觉得没什么好写的。不过毕竟也算是一个脚印"],
      [0,"在默认情况下，form 有 button 时，在敲回车和点击后页面会发生刷新"]
    ]
  },
  "11":{
    "title":"单位rem",
    "type":32,
    "time":"2016/10/17 9:38",
    "content":[
      [0,"提到rem（font-size of root element），就把常用的 px 和 em 都说说"],
      [0,"1、px（pixel）：像素。用的很多，但由于现在的设备大小五花八门，设置这么一个固定值，显示的效果就不尽如人意了。需要用媒体查询写大量的CSS"],
      [0,"2、em：与 rem 相比少了一个 r（root），它是找上一级设置过像素的元素，相对于最近的一个上级元素进行缩放。修改样式可能会影响到子元素。个人觉得不便于维护"],
      [0,"3、rem：相对于根节点设置的像素进行缩放。优点：只需要设置 html 元素的 font-size即可，写 媒体查询或 js 控制时的工作量小，便于维护"]
    ]
  },
  "12":{
    "title":"height 百分比",
    "type":32,
    "time":"2016/10/17 9:56",
    "content":[
      [0,"要使属性 <code>div{height:100%}</code> 能够生效，需在父级上设置一个高度，必须是一个数值。"],
      [0,"否则 100% 得到的是0 。事实上width属性也是这样的，只不过在没有设置的情况下，宽度是容器宽度（body宽度默认是屏幕宽度），而高度默认都是0"]
    ]
  },
  "13":{
    "title":"单行隐藏文本内容",
    "type":32,
    "time":"2016/10/17 10:38",
    "content":[
      [0,"使用 text-overflow，属性值：clip（默认，切掉多余部分）、ellipsis（溢出后显示省略号）"],
      [0,"该属性单独使用无效，需配合以下属性：<code>.element{overflow:hidden;white-space:nowrap;width:50%;}/*宽度随意设定*/</code>"],
      [0,"除此之外，只有块元素才能生效，即对行级元素需将 display 设置为 block 或 inline-block"]
    ]
  },
  "14":{
    "title":"cursor 属性值汇总",
    "type":32,
    "time":"2016/10/17 15:47",
    "content":[
      [0,"cursor 有很多种属性（这里列出所有的）："],
      [0,"<table class='table table-responsive table-striped'><tbody>" +
      "<tr><td>crosshair</td><td>十字准心（切图的感觉）</td></tr>" +
      "<tr><td>pointer/hand</td><td>手（ie5只认hand）</td></tr>" +
      "<tr><td>wait</td><td>等待/沙漏（一般为一块表或者一个沙漏）</td></tr>" +
      "<tr><td>help</td><td>帮助（一般为问号或者气球）</td></tr>" +
      "<tr><td>no-drop</td><td>无法释放（chrome下是禁止的标志，和not-allowed一样）</td></tr>" +
      "<tr><td>text</td><td>文字/编辑</td></tr>" +
      "<tr><td>move</td><td>可移动对象</td></tr>" +
      "<tr><td>n-resize</td><td>向上改变大小（北，north  上下箭头）</td></tr>" +
      "<tr><td>s-resize</td><td>向下改变大小（南，south  上下箭头）</td></tr>" +
      "<tr><td>e-resize</td><td>向右改变大小（东，east   左右箭头）</td></tr>" +
      "<tr><td>w-resize</td><td>向左改变大小（西，west   左右箭头）</td></tr>" +
      "<tr><td>ne-resize</td><td>向上右改变大小（north east  右斜箭头）</td></tr>" +
      "<tr><td>sw-resize</td><td>向下左改变大小（south west  右斜箭头）</td></tr>" +
      "<tr><td>nw-resize</td><td>向上左改变大小（north west  左斜箭头）</td></tr>" +
      "<tr><td>se-resize</td><td>向下右改变大小（south east  左斜箭头）</td></tr>" +
      "<tr><td>auto</td><td>自动（浏览器设置一个游标，效果不确定）</td></tr>" +
      "<tr><td>not-allowed</td><td>禁止</td></tr>" +
      "<tr><td>progress</td><td>处理中（鼠标边上一个小沙漏）</td></tr>" +
      "<tr><td>default</td><td>系统默认</td></tr>" +
      "<tr><td>url(\"#\")</td><td>自定义（可用动画，文件格式必须是.cur或.ani）</td></tr>" +
      "</tbody></table>"]
    ]
  },
  "15":{
    "title":"My97datapicker（日历） 缺一个demo",
    "type":1,
    "time":"2016/10/17 10:38",
    "content":[
      [0,"将整个插件包导入"],
      [0,"默认不显示时间，只显示 \"yy-MM-dd\""],
      [0,"配置文件中修改配置：（下面为默认值）"],
      [0,"dateFmt:\"yyyy-MM-dd\"；realDateFmt:\"yyyy-MM-dd\"；realTimeFmt:\"HH:mm:ss\""],
      [0,"在所有属性后面加上 \"HH-mm-ss\" 就会补全时间的显示（也可以使用HH:mm:ss）"],
      [0,"时间范围设置：minDate:\"1960-01-10 00:00:00\"；maxDate:\"2100-12-31 23:59:59\""],
      [0,"其他的选项没什么大用。皮肤包可以设置"]
    ]
  },
  "16":{
    "title":"each() 函数跳出循环",
    "type":1,
    "time":"2016/10/20 16:59",
    "content":[
      [0,"使用方法有两种：<code>$.each('element',function(i,e){ ... });</code>或者<code>$('element').each(function(i,e){ ... });</code>"],
      [0,"i 表示当前元素的下标，e 表示相应的dom元素。这里不详细说明"],
      [0,"现有一个需求，找到符合条件的值之后，就跳出循环。这时，使用 break 和 continue 只能跳出本次循环。"],
      [0,"在 each() 函数中，break => return false （跳出所有循环）；continue => return true （跳出当前循环，进入下一个循环）"],
      [0,"如此看来，不能直接返回一个想要的值，需要将 each() 封装成一个函数，引入一个外部变量辅助。见下例："],
      [1,"function test(){"],
      [1,space+"var temp = 'not found';"],
      [1,space+"$('element').each(function(){"],
      [1,space+space+"if(...){"],
      [1,space+space+space+"temp = 'found';"],
      [1,space+space+space+"return false;"],
      [1,space+space+"}"],
      [1,space+"});"],
      [1,space+"return temp;"],
      [1,"}"]
    ]
  },
  "17":{
    "title":"input、textarea等获焦",
    "type":16,
    "time":"2016/10/17 10:38",
    "content":[
      [0,"使用 .focus()即可，原生JS 和 jQuery 都直接支持"]
    ]
  },
  "18":{
    "title":"判断元素在父级元素下是第几个（在父级元素下的下标）",
    "type":1,
    "time":"2016/10/31 12:49",
    "content":[
      [0,"想得到的效果如下"],
      [1,"&lt;div>1111&lt;/div> // => 输出0"],
      [1,"&lt;div>2222&lt;/div> // => 输出1"],
      [1,"&lt;div>3333&lt;/div> // => 输出2"],
      [0,"使用以下代码可得到此效果："],
      [1,"$('body').on('click','div',function(){"],
      [1,space+"var _index = $('h4').index($(this));//得到的是当前元素在符合条件的元素集的下标（从 0 开始）"],
      [1,space+"console.log(_index);//跟上面一样的结果"],
      [1,"});"]
    ]
  },
  "19":{
    "title":"地址栏转码",
    "type":16,
    "time":"2016/11/1 15:09",
    "content":[
      [0,"在 IE 浏览器上使用的是 utf-8 格式的地址栏，中文内容无法被识别，显示的格式为：http://www.xxxx.com?title= %E7%AC%AC21%E5%B1%8A%E4%B8%89%E6%98%9F%E8%BD%A6%E9%99%A9%E6%9D%AF%E5%8D%8A%E5%86%B3%E8%B5%9B%E7 %AC%AC%E4%B8%89%E5%B1%80&id=8429&PB=%E6%9F%AF%E6%B4%81&BR=%E4%B9%9D%E6%AE%B5&PW=%E6%9D%8E%E4%B8 %96%E7%9F%B3&WR=%E4%B9%9D%E6%AE%B5"],
      [0,"而在现代浏览器上会自动进行转码，可以识别中文内容，会显示成：http://www.xxxx.com?title=第21届三星车险杯半决赛第三局&id=8429&PB=柯洁&BR=九段&PW=李世石&WR=九段"],
      [0,"方法： <code>encode('url');//可能会需要两次转码，视情况而定。encode(encode('url'))</code> "],
      [0,"转码的方法无需对 IE 做判断，因为现代浏览器会自动识别再转回来。"],
      [0,"转码正确的格式应该是： %两个字符（英文或数字）%两个字符（英文或数字）…… 应该是十六进制吧"]
    ]
  },
  "20":{
    "title":"event.target 和 this 的区别",
    "type":16,
    "time":"2016/11/7 10:00",
    "content":[
      [0,"两者的共同点："],
      [0,"this 和 event.target 都是原生的方法"],
      [0,"两者的不同点："],
      [0,"js中事件是会冒泡的，所以 this 的值会发生变化；但是 event.target 不会发生变化，它是直接接受事件的目标DOM元素"]
    ]
  },
  "21":{
    "title":"a标签内不能再包裹a标签",
    "type":64,
    "time":"2016/11/7 15:37",
    "content":[
      [0,"这个其实没什么好说的，算是那时候的一个发现吧"],
      [0,"多次套a就会出错，例如："],
      [1,"&lt;a href=\"//www.taobao.com\">"],
      [1,space+"&lt;a href=\"//www.baidu.com\">百度&lt;/a>"],
      [1,"&lt;/a>"],
      [0,"在Chrome下，解析后，HTML 的结构变成了这样："],
      [1,"&lt;a href=\"//www.taobao.com\">&lt;/a>&lt;!--这个标签高宽都为0，没有文字内容，是不能点击的-->"],
      [1,space+"&lt;a href=\"//www.baidu.com\">百度&lt;/a>"]
    ]
  },
  "22":{
    "title":"preventDefault()",
    "type":16,
    "time":"2016/11/7 15:44",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "23":{
    "title":"ajax 回调 window.open 被截获",
    "type":16,
    "time":"2016/11/14 14:50",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "24":{
    "title":"清除登录记录（浏览器清空cookie）",
    "type":512,
    "time":"2016/11/15 17:09",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  }
};
var blank = {
  "":{
    "title":"",
    "type":1,
    "time":"",
    "content":[
      [0,""],
      [1,""],
      [0,""],
      [0,""]
    ]
  }
};