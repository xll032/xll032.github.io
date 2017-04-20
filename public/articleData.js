var space = '&nbsp;&nbsp;&nbsp;&nbsp;';
var AllDataLength = 24;
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
        [1,"<span class='arrow'>&lt;</span><span class='tag'>meta</span> <span class='attr'>name=</span><span class='str'>\"format-detection\"</span> <span class='attr'>content=</span><span class='str'>\"telephone=no\"</span><span class='arrow'>/></span>"],
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
        [3,"<span class='key'>var</span> <span class='param'>obj</span> <span class='key'>=</span> <span class='flower'>{</span> <span class='word'>...</span> <span class='flower'>}</span><span class='word'>;</span>"],
        [3,"<span class='key'>for</span> <span class='word'>(</span><span class='key'>var</span> <span class='param'>prop</span> <span class='key'>in</span> <span class='param'>obj</span><span class='word'>)</span> <span class='flower'>{</span>"],
        [3,space+"<span class='key'>if</span><span class='word'>(</span><span class='param'>obj</span><span class='word'>.</span><span class='method'>hasOwnProperty</span><span class='word'>(</span><span class='param'>prop</span><span class='word'>))</span><span class='flower'>{</span>"],
        [3,space+space+"<span class='key'>var</span> <span class='param'>item</span> <span class='key'>=</span> <span class='param'>obj</span><span class='word'>[</span><span class='param'>prop</span><span class='word'>];</span>   "],
        [3,space+space+"<span class='word'>...</span>"],
        [3,space+"<span class='flower'>}</span>"],
        [1,"<span class='flower'>}</span>"],
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
        [3,"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#myElement</span><span class='str'>'</span><span class='word'>).</span><span class='method'>click</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
        [3,space+"<span class='key'>var</span> <span class='param'>that</span> <span class='key'>=</span> <span class='key'>this</span><span class='word'>;</span>"],
        [3,space+"<span class='method'>setTimeout</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
        [3,space+space+"<span class='spe'>$</span><span class='word'>(</span><span class='param'>that</span><span class='word'>).</span><span class='method'>addClass</span><span class='word'>(</span><span class='str'>'aNewClass'</span><span class='word'>);</span>"],
        [3,space+"<span class='flower'>}</span><span class='word'>,</span><span class='word'>1000);</span>"],
        [3,"<span class='flower'>}</span><span class='word'>);</span>"],
        [0,"在使用jQuery时，可以使用$.proxy(context,name)方法"],
        [0,"context可以是对象，函数等；name是传入的操作参数"],
        [0,"以上述方法为例："],
        [3,"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'#myElement'</span><span class='word'>).</span><span class='method'>click</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
        [3,space+"<span class='method'>setTimeout</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>.</span><span class='method'>proxy</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
        [3,space+space+"<span class='spe'>$</span><span class='word'>(</span><span class='key'>that</span><span class='word'>).</span><span class='method'>addClass</span><span class='word'>(</span><span class='str'>'aNewClass'</span><span class='word'>);</span>"],
        [3,space+"<span class='flower'>}</span><span class='word'>,</span><span class='key'>this</span><span class='word'>),</span><span class='word'>1000);</span>"],
        [3,"<span class='flower'>}</span><span class='word'>);</span>"],
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
        [3,"<span class='key'>var</span> <span class='param'>ele</span> <span class='key'>=</span> <span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='word'>.</span><span class='key'>removeEle</span><span class='str'>'</span><span class='word'>).</span><span class='method'>remove</span><span class='word'>();</span><span class='com'>//移除</span> "],
        [3,"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='word'>.</span><span class='key'>parent</span><span class='str'>'</span><span class='word'>).</span><span class='method'>append</span><span class='word'>(</span><span class='param'>ele</span><span class='word'>)</span><span class='com'>//重新添加</span>"]
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
      [0,"要使以下属性能够生效，需在父级上设置一个高度，必须是一个数值。"],
      [0,"CSS："],
      [1,"<span class='key'>.parent div</span><span class='flower'>{</span><span class='fun'>height</span><span class='word'>:</span><span class='str'>100%</span><span class='flower'>}</span>"],
      [1,"<span class='key'>.parent</span><span class='flower'>{</span><span class='fun'>height</span><span class='word'>:</span><span class='str'>200px;</span><span class='flower'>}</span>"],
      [0,""],
      [0,"否则 100% 得到的是0 。事实上width属性也是这样的，只不过在没有设置的情况下，宽度是容器宽度（body宽度默认是屏幕宽度），而高度默认都是0"]
    ]
  },
  "13":{
    "title":"单行隐藏文本内容",
    "type":32,
    "time":"2016/10/17 10:38",
    "content":[
      [0,"使用 text-overflow，属性值：clip（默认，切掉多余部分）、ellipsis（溢出后显示省略号）"],
      [0,"只有块元素才能生效，即对行级元素需将 display 设置为 block 或 inline-block。此外，还需配合一些其他的属性。代码如下："],
      [0,"CSS："],
      [1,"<span class='word'>.</span><span class='key'>element</span><span class='flower'>{</span>"],
      [1,space+"<span class='fun'>overflow</span><span class='word'>:</span><span class='str'>hidden</span><span class='word'>;</span>"],
      [1,space+"<span class='fun'>white-space</span><span class='word'>:</span><span class='str'>nowrap</span><span class='word'>;</span>"],
      [1,space+"<span class='fun'>width</span><span class='word'>:</span><span class='str'>50%</span><span class='word'>;</span><span class='com'>/*宽度随意设定*/</span>"],
      [1,space+"<span class='fun'>-ms-text-overflow</span><span class='word'>:</span><span class='str'>ellipsis</span><span class='word'>;</span></span>"],
      [1,space+"<span class='fun'>text-overflow</span><span class='word'>:</span><span class='str'>ellipsis</span><span class='word'>;</span></span>"],
      [1,space+"<span class='fun'>display</span><span class='word'>:</span><span class='str'>inline-block</span><span class='word'>;</span><span class='com'>/*块级元素无需设定*/</span>"],
      [1,"<span class='flower'>}</span>"],
      [0,"除此之外，"]
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
      [0,"使用方法有以下两种写法："],
      [0,"JS："],
      [1,"<span class='spe'>$</span><span class='word'>.</span><span class='method'>each</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>,</span><span class='key'>function</span><span class='word'>(i,e)</span><span class='flower'>{</span><span class='word'> ... </span><span class='flower'>}</span><span class='word'>);</span>"],
      [1,"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>).</span><span class='method'>each</span><span class='word'>(</span><span class='key'>function</span><span class='word'>(i,e)</span><span class='flower'>{</span><span class='word'> ... </span><span class='flower'>}</span><span class='word'>);</span>"],
      [0,"i 表示当前元素的下标，e 表示相应的dom元素。这里不详细说明"],
      [0,"现有一个需求，找到符合条件的值之后，就跳出循环。这时，使用 break 和 continue 只能跳出本次循环。"],
      [0,"在 each() 函数中，break => return false （跳出所有循环）；continue => return true （跳出当前循环，进入下一个循环）"],
      [0,"如此看来，不能直接返回一个想要的值，需要将 each() 封装成一个函数，引入一个外部变量辅助。"],
      [0,"JS："],
      [3,"<span class='key'>function</span> <span class='fun'>test</span><span class='word'>()</span><span class='flower'>{</span>"],
      [3,space+"<span class='key'>var</span> <span class='param'>temp</span> <span class='key'>=</span> <span class='str'>'not found'</span><span class='word'>;</span>"],
      [3,space+"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>).</span><span class='method'>each</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
      [3,space+space+"<span class='key'>if</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>(e).</span><span class='method'>text</span><span class='word'>()</span><span class='key'></span>==<span class='word'>1)</span><span class='flower'>{</span>"],
      [3,space+space+space+"<span class='param'>temp</span> <span class='key'>=</span> <span class='str'>'found'</span><span class='word'>;</span>"],
      [3,space+space+space+"<span class='key'>return</span> <span class='key'>false</span><span class='word'>;</span>"],
      [3,space+space+"<span class='flower'>}</span>"],
      [3,space+"<span class='flower'>}</span><span class='word'>);</span>"],
      [3,space+"<span class='key'>return</span> <span class='param'>temp</span><span class='word'>;</span>"],
      [3,"<span class='flower'>}</span>"]
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
      [0,"HTML："],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>1111</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出0</span> "],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>2222</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出1</span>"],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出2</span>"],
      [0,"使用以下代码可得到此效果："],
      [0,"JS："],
      [3,"<span class='spe'>$</span><span class='word'>(</span><span class='str'>'body'</span><span class='word'>)</span><span class='word'>.</span><span class='method'>on</span><span class='word'>(</span><span class='str'>'click'</span><span class='word'>,</span><span class='str'>'div'</span><span class='word'>,</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
      [3,space+"<span class='key'>var</span> <span class='param'>_index</span> <span class='key'>=</span> <span class='spe'>$</span><span class='word'>(</span><span class='str'>'h4'</span><span class='word'>).</span><span class='method'>index</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>(</span><span class='key'>this</span><span class='word'>));</span><span class='com'>// 得到的是当前元素在符合条件的元素集的下标（从 0 开始）</span>"],
      [3,space+"<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='param'>_index</span><span class='word'>);</span><span class='com'>// 得到上面想要的结果</span>"],
      [3,"<span class='flower'>}</span><span class='word'>);</span>"]
    ]
  },
  "19":{
    "title":"地址栏转码",
    "type":16,
    "time":"2016/11/1 15:09",
    "content":[
      [0,"在 IE 浏览器上使用的是 utf-8 格式的地址栏，中文内容无法被识别，显示的格式为：http://www.xxxx.com?title= %E7%AC%AC21%E5%B1%8A%E4%B8%89%E6%98%9F%E8%BD%A6%E9%99%A9%E6%9D%AF%E5%8D%8A%E5%86%B3%E8%B5%9B%E7 %AC%AC%E4%B8%89%E5%B1%80&id=8429&PB=%E6%9F%AF%E6%B4%81&BR=%E4%B9%9D%E6%AE%B5&PW=%E6%9D%8E%E4%B8 %96%E7%9F%B3&WR=%E4%B9%9D%E6%AE%B5"],
      [0,"而在现代浏览器上会自动进行转码，可以识别中文内容，会显示成：http://www.xxxx.com?title=第21届三星车险杯半决赛第三局&id=8429&PB=柯洁&BR=九段&PW=李世石&WR=九段"],
      [0,"转码的使用方法如下："],
      [0,"JS："],
      [1,"<span class='method'>encode</span><span class='word'>(</span><span class='str'>'url'<span class='word'>);</span><span class='com'> // 可能会需要两次转码，视情况而定。encode(encode('url'))</span> "],
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
      [0,"多次套a就会出错，例如："],[0,"HTML："],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.taobao.com\"</span><span class='arrow'>></span>"],
      [1,space+"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span><span class='arrow'>></span><span class='word'>百度</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"],
      [1,"<span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"],
      [0,"在Chrome下，解析后，HTML 的结构变成了这样："],
      [0,"HTML："],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.taobao.com\"</span><span class='arrow'>>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span><span class='com'>&lt;!--这个标签高宽都为0，没有文字内容，是不能点击的--></span>"],
      [1,space+"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span><span class='arrow'>></span><span class=''></span><span class='word'>百度</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"]
    ]
  },
  "22":{
    "title":"preventDefault() 函数",
    "type":16,
    "time":"2016/11/7 15:44",
    "content":[
      [0,"preventDefault() 函数的功能是阻止浏览器的默认行为"],
      [0,"实例说明："],
      [0,"HTML："],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span> <span class='attr'>target=</span><span class='str'>\"_blank\"</span><span class='arrow'>></span>"],
      [1,space+"<span class='arrow'>&lt;</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"panel panel-default\"</span><span class='arrow'>></span>"],
      [1,space+space+"<span class='arrow'>&lt;</span><span class='tag'>span</span> <span class='attr'>onclick=</span><span class='str'>\"</span><span class='fun'>click</span><span class='word'>()</span><span class='str'>\"</span><span class='arrow'>></span><span class='word'>编辑</span><span class='arrow'>&lt;/</span><span class='tag'>span</span><span class='arrow'>></span>"],
      [1,space+space+"<span class='com'>&lt;!--内容--></span>"],
      [1,space+"<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span>"],
      [1,"<span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"],
      [0,"JS："],
      [3,space+"<span class='key'>var</span> <span class='param'>click</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span>"],
      [3,space+space+"<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='str'>'我要被编辑了！'</span><span class='word'>);</span>"],
      [3,space+"<span class='flower'>}</span>"],
      [0,"在上面 a 包裹的情况下，点击 div 中的任何内容都会触发跳转，会导致“编辑”的点击出问题。"],
      [0,"这时，就需要使用 preventDefault() 来阻止浏览器的默认行为"],
      [0,"将点击函数做如下修改："],
      [0,"JS："],
      [3,space+"<span class='key'>var</span> <span class='param'>clickEdit</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>(e)</span><span class='flower'>{</span>"],
      [3,space+space+"<span class='word'>e</span><span class='word'>.</span><span class='method'>preventDefault</span><span class='word'>();</span>"],
      [3,space+space+"<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='str'>'我要被编辑了！'</span><span class='word'>);</span>"],
      [3,space+"<span class='flower'>}</span>"]
    ]
  },
  "23":{
    "title":"ajax 回调 window.open 被截获",
    "type":16,
    "time":"2016/11/14 14:50",
    "content":[
      [0,"当点击一个 button 按钮（或其他元素）后，需要跳转页面。可以直接使用 a 标签"],
      [0,"HTML："],
      [0,"<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.xxxx.com\"</span><span class='arrow'>></span><span class='word'>链接</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"],
      [0,"还可以编写 JS 进行控制"],
      [0,"HTML："],
      [1,"<span class='arrow'>&lt;</span><span class='tag'>button</span> <span class='attr'>onclick=</span><span class='str'>\"</span><span class='fun'>click</span><span class='word'>()</span><span class='str'>\"</span><span class='arrow'>></span><span class='word'>点击我</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span>"],
      [0,"JS："],
      [3,"<span class='key'>var</span> <span class='param'>click</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><span class='spe'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'这里是url'</span><span class='word'>);</span><span class='flower'>}</span>"],
      [0,"这样并不能满足所有的需求，有时候可能需要在 ajax 回调之后再进行相应的跳转。"],
      [0,"由于浏览器对回调之后打开窗口有一个安全机制，例如请求一个数据以后，跳转到一个不安全的页面之类的，所以回调后会阻止跳转。并且这个动作是浏览器默认的"],
      [0,"如果要让它能起作用，除非用户设置了“不对js进行安全拦截”，用户不会这么做的，我自己都不会这么做。"],
      [0,"这个时候，并不是没有办法解决，有如下 2 种解决方案（方便起见，ajax写法使用的是jQuery，解决的方法都能适用）："],
      [0,"1、将一个 window.open() 存入一个变量，先打开该页面，回调后将其改为指定页面。这样可以避免回调后被阻止。"],
      [0,"缺点：网速再快也会事先打开一个空白页面，再进行跳转，用户体验不太好。网速如果慢的话，就……"],
      [0,"JS："],
      [3,"<span class='key'>var</span> <span class='globe'>_newLink</span> <span class='key'>=</span> <span class='key'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'about:blank'</span><span class='word'>);</span>"],
      [3,"<span class='spe'>$</span><span class='word'>.</span><span class='method'>ajax</span><span class='word'>(</span><span class='flower'>{</span>"],
      [3,space+"<span class='com'>/* ... */</span>"],
      [3,space+"<span class='spe'>success</span><span class='word'>:</span><span class='key'>function</span><span class='word'>(data)</span><span class='flower'>{</span>"],
      [3,space+space+"<span class='globe'>_newLink</span><span class='word'>.</span><span class='spe'>location</span><span class='word'>.</span><span class='spe'>href</span> <span class='key'>=</span> <span class='str'>'ajax传入的url'</span><span class='word'>;</span>"],
      [3,space+"<span class='flower'>}</span>"],
      [3,"<span class='flower'>}</span><span class='word'>);</span>"],
      [0,"2、将 ajax 改成同步请求，也可以正常跳转。不会有第 1 种情况的空白页跳出，用户体验尚可"],
      [0,"倘若这个办法是万能的，那还有其他方法什么事。所以，它也有缺点：ajax 设置为同步请求，就失去了 ajax 设计的初衷，若服务器长时间不响应，代码卡死了"],
      [0,"第 1 种和第 2 种方法需要进行权衡，对服务器放心可以用第 2 种，对浏览器不放心也不太在乎用户体验的话，可以用第 1 种"],
      [0,"JS："],
      [3,"<span class='spe'>$</span><span class='word'>.</span><span class='method'>ajax</span><span class='word'>(</span><span class='flower'>{</span>"],
      [3,space+"<span class='com'>/* ... */</span>"],
      [3,space+"<span class='spe'>async</span><span class='word'>:</span><span class='key'>false</span><span class='word'>,</span>"],
      [3,space+"<span class='spe'>success</span><span class='word'>:</span><span class='key'>function</span><span class='word'>(data)</span><span class='flower'>{</span>"],
      [3,space+space+"<span class='spe'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'ajax传入的url'</span><span class='word'>);</span>"],
      [3,space+"<span class='flower'>}</span>"],
      [3,"<span class='flower'>}</span><span class='word'>);</span>"],
      [0,"3、为什么会有第 3 种呢？其实是没有的。"],
      [0,"说一下第 3 种的思路：设置一个定时器，在回调之后极短的时间内再打开页面。就怕网速不行，计时器时间到了，地址还没拿到"],
      [0,"好在这种情况也不必太担心，因为就算定时器时间设置的再长，本质还是回调后打开页面，浏览器照样会阻止操作"],
      [0,"既然脑洞大开的话，其实用 while(true) 循环直到url不为空的时候，跳转并跳出循环不就好啦。单线程的 JS 这么一搞，那就永远等待下去吧"]
    ]
  },
  "24":{
    "title":"清除登录记录（浏览器清空cookie）",
    "type":512,
    "time":"2016/11/15 17:09",
    "content":[
      [0,"这个，其实没什么好说的。比如 Chrome ，打开调试工具，清除 cookie 就好了。旧版在 resource 里，新版在 Application 里"],
      [0,"其他的嘛，反正删掉缓存就可以了。要让账号变成未登录状态，可能需要在不刷新页面的前提下，删掉cookie。"]
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