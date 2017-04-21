var space = '&nbsp;&nbsp;&nbsp;&nbsp;';

var AllData = {
  "1":{
    "title":"new Date() 兼容问题",
    "type":16,
    "time":"2016/9/13 10:00",
    "content":
        "<p>时间格式为：var _time = 2016-09-13 09:51:57</p>"+
        "<p>1、主流浏览器：</p>"+
        "<p>用new Date( _time )会返回标准时间 Tue Sep 13 2016 00:00:00 GMT+0800</p>"+
        "<p>2、IE及iphone：</p>"+
        "<p>使用1的方法会返回NaN，需要使用：new Date( yy,MM,dd,hh,mm,ss );</p>"+
        "<p>3、兼容解决</p>"+
        "<p>方法2在主流浏览器下也可以使用，可直接使用2的写法解决兼容。或者去判断浏览器版本</p>"
  },
  "2":{
    "title":"ios网页取消自动识别手机号码",
    "type":64,
    "time":"2016/9/14 14:28",
    "content":
        "<p>ios下会自动将10、11位号码识别，点击后会进入到拨号，并且颜色会变黑</p>"+
        "<p>注：该问题仅在iPhone手机上运行web时才会出现，PC端无法检查到该问题。添加下列标签，可完美解决该问题</p>"+
        "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>meta</span> <span class='attr'>name=</span><span class='str'>\"format-detection\"</span> <span class='attr'>content=</span><span class='str'>\"telephone=no\"</span><span class='arrow'>/></span></pre>"
  },
  "3":{
    "title":"图片限宽高",
    "type":32,
    "time":"2016/9/29 9:36",
    "content":
        "<p>1、限宽不限高</p>"+
        "<p>width设为定值或百分比，不设高度，图片自动按比例缩放为指定宽度（百分比可以自适应）</p>"+
        "<p>2、限高不限宽</p>"+
        "<p>height设为定值（设为百分比无效），图片自动按比例缩放为指定高度（缺点：不能设为百分比，无法做到自适应大小）</p>"+
        "<p>用 JS 写绑定事件自然也可以</p>"
  },
  "4":{
    "title":"for...in在ie8下不兼容",
    "type":16,
    "time":"2016/9/30 9:59",
    "content":
        "<p>ie8的indexOf函数不好用。原因说明及解决方法如下：</p>"+
        "<p>Don't use for...in for arrays. It's best to use the traditional for loop in that case.</p>"+
        "<p>The reason is because for...in looks at the array as an object, and therefore properties likeindexOf or length may be included in the loop. The normal for loop only deals with numeric keys,so this problem is avoided.</p>"+
        "<p>On a side note, unwanted properties could show up when iterating over plain objects as well(as others have noted, properties you add to the object's prototype will show up). You canget around this by writing your for...in loops this way:</p>"+
        "<pre class='code'><span class='key'>var</span> <span class='param'>obj</span> <span class='key'>=</span> <span class='flower'>{</span> <span class='word'>...</span> <span class='flower'>}</span><span class='word'>;</span><br>"+
        "<span class='key'>for</span> <span class='word'>(</span><span class='key'>var</span> <span class='param'>prop</span> <span class='key'>in</span> <span class='param'>obj</span><span class='word'>)</span> <span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>if</span><span class='word'>(</span><span class='param'>obj</span><span class='word'>.</span><span class='method'>hasOwnProperty</span><span class='word'>(</span><span class='param'>prop</span><span class='word'>))</span><span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>var</span> <span class='param'>item</span> <span class='key'>=</span> <span class='param'>obj</span><span class='word'></span><span class='param'>prop</span><span class='word'>;</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='word'>...</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><br>"+
        "<span class='flower'>}</span></pre>"+
        "<p>To be clear though: you still shouldn't use this method on arrays.</p>"
  },
  "5":{
    "title":"后台请求到的数据处理",
    "type":16,
    "time":"2016/10/8 17:42",
    "content":
      "<p>这一条本来不想发上来的，想想毕竟是年少时不懂事，那时候总结了很多，现在归纳说明一下好了</p>"+
      "<p>获取到的数据不可能永远是理想状态，有时会出现空字段，\"\"、\" \"、null、undefined等情况。</p>"+
      "<p>在这种情况下，应当做好特殊处理</p>"
  },
  "6":{
    "title":"$.proxy()函数的this指向",
    "type":1,
    "time":"2016/10/9 11:07",
    "content":
        "<p>使用计时器里面的this指向点击的元素的写法如下：</p>"+
        "<pre class='code'><span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#myElement</span><span class='str'>'</span><span class='word'>).</span><span class='method'>click</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>var</span> <span class='param'>that</span> <span class='key'>=</span> <span class='key'>this</span><span class='word'>;</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='method'>setTimeout</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>$</span><span class='word'>(</span><span class='param'>that</span><span class='word'>).</span><span class='method'>addClass</span><span class='word'>(</span><span class='str'>'aNewClass'</span><span class='word'>);</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><span class='word'>,</span><span class='word'>1000);</span><br>"+
        "<span class='flower'>}</span><span class='word'>);</span></pre>"+
        "<p>在使用jQuery时，可以使用$.proxy(context,name)方法</p>"+
        "<p>context可以是对象，函数等；name是传入的操作参数</p>"+
        "<p>以上述方法为例：</p>"+
        "<pre class='code'><span class='spe'>$</span><span class='word'>(</span><span class='str'>'#myElement'</span><span class='word'>).</span><span class='method'>click</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='method'>setTimeout</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>.</span><span class='method'>proxy</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>$</span><span class='word'>(</span><span class='key'>that</span><span class='word'>).</span><span class='method'>addClass</span><span class='word'>(</span><span class='str'>'aNewClass'</span><span class='word'>);</span><br>"+
        "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><span class='word'>,</span><span class='key'>this</span><span class='word'>),</span><span class='word'>1000);</span><br>"+
        "<span class='flower'>}</span><span class='word'>);</span></pre>"+
        "<p>修改属性的时候也可以使用。BTW：感觉还是用 var that = this；舒服</p>"
  },
  "7":{
    "title":"查找父级元素",
    "type":1,
    "time":"2016/10/11 11:09",
    "content":
        "<p>百度上搜索了一下，发现网上有一些说的是不对的，下面是整理出来的正确使用方法</p>"+
        "<p>1、 .parent()</p>"+
        "<p>若填写了参数则找到符合条件的上一级元素，若上一级元素不符合条件，返回空值；</p>"+
        "<p>若不填写参数则直接返回上一级元素</p>"+
        "<p>2、 .parents()</p>"+
        "<p>若填写了参数则查找符合条件的父级元素（一直找到根节点），若都不符合条件，返回空值</p>"+
        "<p>若不填写参数则直接返回所有的父级元素</p>"+
        "<p>参数填写的是 CSS选择器</p>"
  },
  "8":{
    "title":"EChart（图表）  缺一个demo",
    "type":256,
    "time":"2016/10/11 11:11",
    "content":
          "<p>这是一款功能比较丰富强大的图表插件</p>"+
          "<p>百度官方文档写的很全面。传送门：<a href='http://echarts.baidu.com/api.html#echarts' target='_blank'>百度EChart 官方API</a></p>"+
          "<p>自己写的demo。传送门：<a href='#'>现在还没有</a></p>"
  },
  "9":{
    "title":".remove()的元素找回",
    "type":1,
    "time":"2016/10/11 11:38",
    "content":
        "<p>.remove() 方法的确将元素从 DOM 树中移除了，但该方法本身的返回值就是这个元素的信息，</p>"+
        "<p>即用以下方法可以找回删除的节点</p>"+
        "<pre class='code'><span class='key'>var</span> <span class='param'>ele</span> <span class='key'>=</span> <span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='word'>.</span><span class='key'>removeEle</span><span class='str'>'</span><span class='word'>).</span><span class='method'>remove</span><span class='word'>();</span><span class='com'>//移除</span><br>"+
        "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='word'>.</span><span class='key'>parent</span><span class='str'>'</span><span class='word'>).</span><span class='method'>append</span><span class='word'>(</span><span class='param'>ele</span><span class='word'>)</span><span class='com'>//重新添加</span></pre>"
  },
  "10":{
    "title":"form 下的 button",
    "type":64,
    "time":"2016/10/11 15:27",
    "content":
      "<p>这条原本也觉得没什么好写的。不过毕竟也算是一个脚印</p>"+
      "<p>在默认情况下，form 有 button 时，在敲回车和点击后页面会发生刷新</p>"
  },
  "11":{
    "title":"单位rem",
    "type":32,
    "time":"2016/10/17 9:38",
    "content":
      "<p>提到rem（font-size of root element），就把常用的 px 和 em 都说说</p>"+
      "<p>1、px（pixel）：像素。用的很多，但由于现在的设备大小五花八门，设置这么一个固定值，显示的效果就不尽如人意了。需要用媒体查询写大量的CSS</p>"+
      "<p>2、em：与 rem 相比少了一个 r（root），它是找上一级设置过像素的元素，相对于最近的一个上级元素进行缩放。修改样式可能会影响到子元素。个人觉得不便于维护</p>"+
      "<p>3、rem：相对于根节点设置的像素进行缩放。优点：只需要设置 html 元素的 font-size即可，写 媒体查询或 js 控制时的工作量小，便于维护</p>"

  },
  "12":{
    "title":"height 百分比",
    "type":32,
    "time":"2016/10/17 9:56",
    "content":
      "<p>要使以下属性能够生效，需在父级上设置一个高度，必须是一个数值。</p>"+
      "<p>CSS：</p>"+
      "<pre class='code'><span class='key'>.parent div</span><span class='flower'>{</span><span class='fun'>height</span><span class='word'>:</span><span class='str'>100%</span><span class='flower'>}</span><br>"+
      "<span class='key'>.parent</span><span class='flower'>{</span><span class='fun'>height</span><span class='word'>:</span><span class='str'>200px;</span><span class='flower'>}</span></pre>"+
      "<p>否则 100% 得到的是0 。事实上width属性也是这样的，只不过在没有设置的情况下，宽度是容器宽度（body宽度默认是屏幕宽度），而高度默认都是0</p>"
  },
  "13":{
    "title":"单行隐藏文本内容",
    "type":32,
    "time":"2016/10/17 10:38",
    "content":
      "<p>使用 text-overflow，属性值：clip（默认，切掉多余部分）、ellipsis（溢出后显示省略号）</p>"+
      "<p>只有块元素才能生效，即对行级元素需将 display 设置为 block 或 inline-block。此外，还需配合一些其他的属性。代码如下：</p>"+
      "<p>CSS：</p>"+
      "<pre class='code'><span class='word'>.</span><span class='key'>element</span><span class='flower'>{</span><br>"+
      "&nbsp;<span class='fun'>overflow</span><span class='word'>:</span><span class='str'>hidden</span><span class='word'>;</span><br>"+
      "&nbsp;<span class='fun'>white-space</span><span class='word'>:</span><span class='str'>nowrap</span><span class='word'>;</span><br>"+
      "&nbsp;<span class='fun'>width</span><span class='word'>:</span><span class='str'>50%</span><span class='word'>;</span><span class='com'>/*宽度随意设定*/</span><br>"+
      "&nbsp;<span class='fun'>-ms-text-overflow</span><span class='word'>:</span><span class='str'>ellipsis</span><span class='word'>;</span></span><br>"+
      "&nbsp;<span class='fun'>text-overflow</span><span class='word'>:</span><span class='str'>ellipsis</span><span class='word'>;</span></span><br>"+
      "&nbsp;<span class='fun'>display</span><span class='word'>:</span><span class='str'>inline-block</span><span class='word'>;</span><span class='com'>/*块级元素无需设定*/</span><br>"+
      "<span class='flower'>}</span></pre>"+
      "除此之外，"
  },
  "14":{
    "title":"cursor 属性值汇总",
    "type":32,
    "time":"2016/10/17 15:47",
    "content":
      "<p>cursor 有很多种属性（这里列出所有的）：</p>" +
      "<table class='table table-responsive table-striped'><tbody>" +
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
      "</tbody></table>"
  },
  "15":{
    "title":"My97datapicker（日历） {{缺一个demo}}",
    "type":256,
    "time":"2016/10/17 10:38",
    "content":
      "<p>将整个插件包导入</p>"+
      "<p>默认不显示时间，只显示 \"yy-MM-dd\"</p>"+
      "<p>配置文件中修改配置：（下面为默认值）</p>"+
      "<p>dateFmt:\"yyyy-MM-dd\"；realDateFmt:\"yyyy-MM-dd\"；realTimeFmt:\"HH:mm:ss\"</p>"+
      "<p>在所有属性后面加上 \"HH-mm-ss\" 就会补全时间的显示（也可以使用HH:mm:ss）</p>"+
      "<p>时间范围设置：minDate:\"1960-01-10 00:00:00\"；maxDate:\"2100-12-31 23:59:59\"</p>"+
      "<p>其他的选项没什么大用。皮肤包可以设置</p>"

  },
  "16":{
    "title":"each() 函数跳出循环",
    "type":1,
    "time":"2016/10/20 16:59",
    "content":
      "<p>使用方法有以下两种写法：</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='spe'>$</span><span class='word'>.</span><span class='method'>each</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>,</span><span class='key'>function</span><span class='word'>(i,e)</span><span class='flower'>{</span><span class='word'> ... </span><span class='flower'>}</span><span class='word'>);</span><br>"+
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>).</span><span class='method'>each</span><span class='word'>(</span><span class='key'>function</span><span class='word'>(i,e)</span><span class='flower'>{</span><span class='word'> ... </span><span class='flower'>}</span><span class='word'>);</span></pre>"+
      "<p>i 表示当前元素的下标，e 表示相应的dom元素。这里不详细说明</p>"+
      "<p>现有一个需求，找到符合条件的值之后，就跳出循环。这时，使用 break 和 continue 只能跳出本次循环。</p>"+
      "<p>在 each() 函数中，break => return false （跳出所有循环）；continue => return true （跳出当前循环，进入下一个循环）</p>"+
      "<p>如此看来，不能直接返回一个想要的值，需要将 each() 封装成一个函数，引入一个外部变量辅助。</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='key'>function</span> <span class='fun'>test</span><span class='word'>()</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>var</span> <span class='param'>temp</span> <span class='key'>=</span> <span class='str'>'not found'</span><span class='word'>;</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>$</span><span class='word'>(</span><span class='str'>'element'</span><span class='word'>).</span><span class='method'>each</span><span class='word'>(</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>if</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>(e).</span><span class='method'>text</span><span class='word'>()</span><span class='key'></span>==<span class='word'>1)</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='param'>temp</span> <span class='key'>=</span> <span class='str'>'found'</span><span class='word'>;</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>return</span> <span class='key'>false</span><span class='word'>;</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><span class='word'>);</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>return</span> <span class='param'>temp</span><span class='word'>;</span><br>"+
      "<span class='flower'>}</span></pre>"

  },
  "17":{
    "title":"input、textarea等获焦",
    "type":16,
    "time":"2016/10/17 10:38",
    "content":
      "<p>使用 .focus()即可，原生JS 和 jQuery 都直接支持</p>"

  },
  "18":{
    "title":"判断元素在父级元素下是第几个（在父级元素下的下标）",
    "type":1,
    "time":"2016/10/31 12:49",
    "content":
      "<p>想得到的效果如下</p>"+
      "<p>HTML：</p>"+
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>1111</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出0</span><br>"+
      "<span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>2222</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出1</span><br>"+
      "<span class='arrow'>&lt;</span><span class='tag'>div</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><span class='com'> // => 输出2</span></pre>"+
      "<p>使用以下代码可得到此效果：</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='spe'>$</span><span class='word'>(</span><span class='str'>'body'</span><span class='word'>)</span><span class='word'>.</span><span class='method'>on</span><span class='word'>(</span><span class='str'>'click'</span><span class='word'>,</span><span class='str'>'div'</span><span class='word'>,</span><span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>var</span> <span class='param'>_index</span> <span class='key'>=</span> <span class='spe'>$</span><span class='word'>(</span><span class='str'>'h4'</span><span class='word'>).</span><span class='method'>index</span><span class='word'>(</span><span class='spe'>$</span><span class='word'>(</span><span class='key'>this</span><span class='word'>));</span><span class='com'>// 得到的是当前元素在符合条件的元素集的下标（从 0 开始）</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='param'>_index</span><span class='word'>);</span><span class='com'>// 得到上面想要的结果</span><br>"+
      "<span class='flower'>}</span><span class='word'>);</span></pre>"

  },
  "19":{
    "title":"地址栏转码",
    "type":16,
    "time":"2016/11/1 15:09",
    "content":
      "<p>在 IE 浏览器上使用的是 utf-8 格式的地址栏，中文内容无法被识别，显示的格式为：http://www.xxxx.com?title= %E7%AC%AC21%E5%B1%8A%E4%B8%89%E6%98%9F%E8%BD%A6%E9%99%A9%E6%9D%AF%E5%8D%8A%E5%86%B3%E8%B5%9B%E7 %AC%AC%E4%B8%89%E5%B1%80&id=8429&PB=%E6%9F%AF%E6%B4%81&BR=%E4%B9%9D%E6%AE%B5&PW=%E6%9D%8E%E4%B8 %96%E7%9F%B3&WR=%E4%B9%9D%E6%AE%B5</p>"+
      "<p>而在现代浏览器上会自动进行转码，可以识别中文内容，会显示成：http://www.xxxx.com?title=第21届三星车险杯半决赛第三局&id=8429&PB=柯洁&BR=九段&PW=李世石&WR=九段</p>"+
      "<p>转码的使用方法如下：</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='method'>encode</span><span class='word'>(</span><span class='str'>'url'<span class='word'>);</span><span class='com'> // 可能会需要两次转码，视情况而定。encode(encode('url'))</span></pre>"+
      "<p>转码的方法无需对 IE 做判断，因为现代浏览器会自动识别再转回来。</p>"+
      "<p>转码正确的格式应该是： %两个字符（英文或数字）%两个字符（英文或数字）…… 应该是十六进制吧</p>"

  },
  "20":{
    "title":"event.target 和 this 的区别",
    "type":16,
    "time":"2016/11/7 10:00",
    "content":
      "<p>两者的共同点：</p>"+
      "<p>this 和 event.target 都是原生的方法</p>"+
      "<p>两者的不同点：</p>"+
      "<p>js中事件是会冒泡的，所以 this 的值会发生变化；但是 event.target 不会发生变化，它是直接接受事件的目标DOM元素</p>"

  },
  "21":{
    "title":"a标签内不能再包裹a标签",
    "type":64,
    "time":"2016/11/7 15:37",
    "content":
      "<p>这个其实没什么好说的，算是那时候的一个发现吧</p>"+
      "<p>多次套a就会出错，例如："+"HTML：</p>"+
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.taobao.com\"</span><span class='arrow'>></span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span><span class='arrow'>></span><span class='word'>百度</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span><br>"+
      "<span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span></pre>"+
      "<p>在Chrome下，解析后，HTML 的结构变成了这样：</p>"+
      "<p>HTML：</p>"+
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.taobao.com\"</span><span class='arrow'>>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span><span class='com'>&lt;!--这个标签高宽都为0，没有文字内容，是不能点击的--></span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span><span class='arrow'>></span><span class=''></span><span class='word'>百度</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span></pre>"

  },
  "22":{
    "title":"preventDefault() 函数",
    "type":16,
    "time":"2016/11/7 15:44",
    "content":
      "<p>preventDefault() 函数的功能是阻止浏览器的默认行为</p>"+
      "<p>实例说明：</p>"+
      "<p>HTML：</p>"+
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.baidu.com\"</span> <span class='attr'>target=</span><span class='str'>\"_blank\"</span><span class='arrow'>></span><br>"+
      "<span class='arrow'>&lt;</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"panel panel-default\"</span><span class='arrow'>></span><br>"+
      "<span class='arrow'>&lt;</span><span class='tag'>span</span> <span class='attr'>onclick=</span><span class='str'>\"</span><span class='fun'>click</span><span class='word'>()</span><span class='str'>\"</span><span class='arrow'>></span><span class='word'>编辑</span><span class='arrow'>&lt;/</span><span class='tag'>span</span><span class='arrow'>></span><br>"+
      "<span class='com'>&lt;!--内容--></span><br>"+
      "<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br>"+
      "<span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span></pre>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='key'>var</span> <span class='param'>click</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='str'>'我要被编辑了！'</span><span class='word'>);</span><br>"+
      "<span class='flower'>}</span></pre>"+
      "<p>在上面 a 包裹的情况下，点击 div 中的任何内容都会触发跳转，会导致“编辑”的点击出问题。</p>"+
      "<p>这时，就需要使用 preventDefault() 来阻止浏览器的默认行为</p>"+
      "<p>将点击函数做如下修改：</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='key'>var</span> <span class='param'>clickEdit</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>(e)</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='word'>e</span><span class='word'>.</span><span class='method'>preventDefault</span><span class='word'>();</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>console</span><span class='word'>.</span><span class='method'>log</span><span class='word'>(</span><span class='str'>'我要被编辑了！'</span><span class='word'>);</span><br>"+
      "<span class='flower'>}</span></pre>"

  },
  "23":{
    "title":"ajax 回调 window.open 被截获",
    "type":16,
    "time":"2016/11/14 14:50",
    "content":
      "<p>当点击一个 button 按钮（或其他元素）后，需要跳转页面。可以直接使用 a 标签</p>"+
      "<p>HTML：</p>"+
      "<span class='arrow'>&lt;</span><span class='tag'>a</span> <span class='attr'>href=</span><span class='str'>\"//www.xxxx.com\"</span><span class='arrow'>></span><span class='word'>链接</span><span class='arrow'>&lt;/</span><span class='tag'>a</span><span class='arrow'>></span>"+
      "<p>还可以编写 JS 进行控制</p>"+
      "<p>HTML：</p>"+
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>button</span> <span class='attr'>onclick=</span><span class='str'>\"</span><span class='fun'>click</span><span class='word'>()</span><span class='str'>\"</span><span class='arrow'>></span><span class='word'>点击我</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span></pre>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='key'>var</span> <span class='param'>click</span> <span class='key'>=</span> <span class='key'>function</span><span class='word'>()</span><span class='flower'>{</span><span class='spe'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'这里是url'</span><span class='word'>);</span><span class='flower'>}</span></pre>"+
      "<p>这样并不能满足所有的需求，有时候可能需要在 ajax 回调之后再进行相应的跳转。</p>"+
      "<p>由于浏览器对回调之后打开窗口有一个安全机制，例如请求一个数据以后，跳转到一个不安全的页面之类的，所以回调后会阻止跳转。并且这个动作是浏览器默认的</p>"+
      "<p>如果要让它能起作用，除非用户设置了“不对js进行安全拦截”，用户不会这么做的，我自己都不会这么做。</p>"+
      "<p>这个时候，并不是没有办法解决，有如下 2 种解决方案（方便起见，ajax写法使用的是jQuery，解决的方法都能适用）：</p>"+
      "<p>1、将一个 window.open() 存入一个变量，先打开该页面，回调后将其改为指定页面。这样可以避免回调后被阻止。</p>"+
      "<p>缺点：网速再快也会事先打开一个空白页面，再进行跳转，用户体验不太好。网速如果慢的话，就……</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='key'>var</span> <span class='globe'>_newLink</span> <span class='key'>=</span> <span class='key'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'about:blank'</span><span class='word'>);</span><br>"+
      "<span class='spe'>$</span><span class='word'>.</span><span class='method'>ajax</span><span class='word'>(</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>/* ... */</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>success</span><span class='word'>:</span><span class='key'>function</span><span class='word'>(data)</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='globe'>_newLink</span><span class='word'>.</span><span class='spe'>location</span><span class='word'>.</span><span class='spe'>href</span> <span class='key'>=</span> <span class='str'>'ajax传入的url'</span><span class='word'>;</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><br>"+
      "<span class='flower'>}</span><span class='word'>);</span></pre>"+
      "<p>2、将 ajax 改成同步请求，也可以正常跳转。不会有第 1 种情况的空白页跳出，用户体验尚可</p>"+
      "<p>倘若这个办法是万能的，那还有其他方法什么事。所以，它也有缺点：ajax 设置为同步请求，就失去了 ajax 设计的初衷，若服务器长时间不响应，代码卡死了</p>"+
      "<p>第 1 种和第 2 种方法需要进行权衡，对服务器放心可以用第 2 种，对浏览器不放心也不太在乎用户体验的话，可以用第 1 种</p>"+
      "<p>JS：</p>"+
      "<pre class='code'><span class='spe'>$</span><span class='word'>.</span><span class='method'>ajax</span><span class='word'>(</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>/* ... */</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>async</span><span class='word'>:</span><span class='key'>false</span><span class='word'>,</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>success</span><span class='word'>:</span><span class='key'>function</span><span class='word'>(data)</span><span class='flower'>{</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>window</span><span class='word'>.</span><span class='method'>open</span><span class='word'>(</span><span class='str'>'ajax传入的url'</span><span class='word'>);</span><br>"+
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='flower'>}</span><br>"+
      "<span class='flower'>}</span><span class='word'>);</span></pre>"+
      "<p>3、为什么会有第 3 种呢？其实是没有的。</p>"+
      "<p>说一下第 3 种的思路：设置一个定时器，在回调之后极短的时间内再打开页面。就怕网速不行，计时器时间到了，地址还没拿到</p>"+
      "<p>好在这种情况也不必太担心，因为就算定时器时间设置的再长，本质还是回调后打开页面，浏览器照样会阻止操作</p>"+
      "<p>既然脑洞大开的话，其实用 while(true) 循环直到url不为空的时候，跳转并跳出循环不就好啦。单线程的 JS 这么一搞，那就永远等待下去吧...</p>"
  },
  "24":{
    "title":"清除登录记录（浏览器清空cookie）",
    "type":512,
    "time":"2016/11/15 17:09",
    "content":"<p>这个，其实没什么好说的。比如 Chrome ，打开调试工具，清除 cookie 就好了。旧版在 resource 里，新版在 Application 里</p>"+
      "<p>其他的嘛，反正删掉缓存就可以了。要让账号变成未登录状态，可能需要在不刷新页面的前提下，删掉cookie。</p>"
  },
  "25":{
    "title":"button 按钮之间存在小间距",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":
      "<p>由于 button 本身就是inline-block，所以排列起来会有一个小间距，下面介绍的方法可以用于将 inline-block 的元素之间的小间隙去掉</p>" +
      "<p>1、将元素连在一行书写</p>" +
      "<p>HTML：</p>" +
      "<pre class='code'><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>1111</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>2222</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span></pre>"+
      "<p>但是连在一起代码就比较难读了，下面介绍三种换行仍能回避换行符的方法。</p>"+
      "<p>HTML：</p>"+
      "<pre class='code'><span class='com'>/* 1、结束标签换行 */</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>1111</span><br><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>2222</span><br><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><br>" +
      "<span class='com'>/* 2、最后一个“>”符号换行 */</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>1111</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><br><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>2222</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><br><span class='arrow'>></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><br>" +
      "<span class='com'>/* 3、利用注释换行 */</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>1111</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='com'>&lt;!--<br>--></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>2222</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><span class='com'>&lt;!--<br>--></span><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span><br>"+
      "<span class='com'>/* 4、不写闭合标签（H5中甚至最后一个都可以不写，但是在IE6/IE7下必须要加） */</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>1111</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>2222</span><br><span class='arrow'>&lt;</span><span class='tag'>button</span><span class='arrow'>></span><span class='word'>3333</span><span class='arrow'>&lt;/</span><span class='tag'>button</span><span class='arrow'>></span></pre>"+
      "<p>2、给 margin 负值</p>" +
      "<p>这个负值的大小与上下文的字体和文字大小相关，需要进行很多调试。这里有一个之前看到的一个博客文章，写的很不错。不过我觉得这个方法似乎是麻烦了点。这里是传送门，可以学习学习：<a href='http://www.zhangxinxu.com/wordpress/?p=1194'>好文章分享</a></p>"+
      "<p>3、使用 font-size:0;</p>" +
      "<p>这种方法在 IE7 等浏览器上可能还是会有1px的间距。而旧版的Chrome浏览器有最小字体的限制，也无效。Chrome可做兼容</p>" +
      "<p>CSS：</p>" +
      "<pre class='code'><span class='key'>.space</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>font-size</span><span class='word'>:</span><span class='str'>0</span><span class='word'>;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>-webkit-text-adjust</span><span class='word'>:</span><span class='str'>none</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span></pre>" +
      "<p>4、使用letter-spacing</p>" +
      "<p>CSS：</p>" +
      "<pre class='code'><span class='key'>.space</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>letter-spacing</span><span class='word'>:</span><span class='str'>-3px</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span><br>" +
      "<span class='key'>.space a</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>letter-spacing</span><span class='word'>:</span><span class='str'>0</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span></pre>" +
      "<p>能兼容 IE6/7 但是在 Opera 下有1px，无法兼容</p>" +
      "<p>5、使用word-spacing</p>"+
      "<p>CSS：</p>" +
      "<pre class='code'><span class='key'>.space</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>word-spacing</span><span class='word'>:</span><span class='str'>-6px</span><span class='word'>;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>display</span><span class='word'>:</span><span class='str'>table</span><span class='word'>;</span><span class='com'> /* Chrome 下需要这句做兼容，或者用 inline-table */</span><br>" +
      "<span class='flower'>}</span><br>" +
      "<span class='key'>.space a</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>letter-spacing</span><span class='word'>:</span><span class='str'>0</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span></pre>" +
      "<p>综合来看，还是使用第 1 种给出的方法最为简便有效</p>"
  },
  "26":{
    "title":"浏览器的工作原理",
    "type":512,
    "time":"2016/11/18 12:11",
    "content":
      "<p>1、加载</p>" +
      "<p>根据请求的 URL 进行域名解析，向服务器发起请求，接收文件（HTML、JS、CSS、图像等）</p>" +
      "<p>2、解析</p>" +
      "<p>对加载到的资源（HTML、JS、CSS等）进行语法解析，建议相应的内部数据结构（比如 HTML 的 DOM 树；JS 的（对象）属性表、CSS 的样式规则等）</p>" +
      "<p>3、渲染</p>" +
      "<p> 构建渲染树，对各个元素进行位置计算、样式计算等等，然后根据渲染树对页面进行渲染（可以理解为画元素）</p>" +
      "<p>渲染流程基本是：layout 定位坐标和大小，是否换行，各种position、overflow，z-index等属性，然后开画</p>"
  },
  "27":{
    "title":"多图片上传 WebUploader（百度出品） {{缺一个demo}}",
    "type":256,
    "time":"2016/11/15 17:28",
    "content":
      "<p>官方文档有详尽的说明。传送门在此：<a href='//fex.baidu.com/webuploader/' target='_blank'>WebUploader官网</a></p>" +
      "<p>自己编写了一个demo。传送门：<a href='javascript:void(0);'>WebUploader demo</a></p>"
  },
  "28":{
    "title":"input 事件与微软输入法的冲突",
    "type":512,
    "time":"2016/11/23 16:01",
    "content":
      "<p>绑定 input 事件之后，使用 win10 自带的输入法（微软输入法）时，每当按下除退格键与空格键之外的键时，都会触发 input 事件 3次</p>"+
      "<p>因此，在输入中要替换输入的字符，不可使用字符串拼接。会拼接三次，出现三个替换掉的内容；如果是在中间部分输入就更加复杂了。</p>"+
      "<p>使用 .replace() 方法处理，input 事件虽然还是会多次触发（这是不可避免的），但是处理只会有一次；且同时可以完成任意部位的替换。看起来效果还比较理想</p>"+
      "<p>但是！！！这样做了以后，replace 会莫名使微软输入法输入的内容被改变成重复多次输入的样子。</p>"+
      "<p>综上，这种方法并不是很好。所以尽量要避免这种用户输入过程中去改变用户输入内容的奇葩需求。</p>"
  },
  "29":{
    "title":"select 值的获取",
    "type":16,
    "time":"2016/12/1 10:36",
    "content":
      "<p>与 select 相关的值有很多：1、当前选中的 option text 以及 value；2、所有的 option 的 text。</p>" +
      "<p>首先是 jQuery 的写法：</p>" +
      "<p>JS：</p>" +
      "<pre class='code'><span class='com'>/* 注意：option:selected 是 jQuery 的方法 */</span><br>" +
      "<span class='com'>/* 1、获得 select 当前选中 option 的 text 值： */</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel option:selected</span><span class='str'>'</span><span class='word'>).</span><span class='method'>text</span><span class='word'>();</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel</span><span class='str'>'</span><span class='word'>).</span><span class='method'>find</span><span class='word'>(</span><span class='str'>'</span><span class='key'>option:selected</span><span class='str'>'</span><span class='word'>).</span><span class='method'>text</span><span class='word'>();</span><br>" +
      "<span class='com'>/* 2、获得 Select 当前选中 option 的 value 值： */</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel option:selected</span><span class='str'>'</span><span class='word'>).</span><span class='method'>val</span><span class='word'>();</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel</span><span class='str'>'</span><span class='word'>).</span><span class='method'>find</span><span class='word'>(</span><span class='str'>'</span><span class='key'>option:selected</span><span class='str'>'</span><span class='word'>).</span><span class='method'>val</span><span class='word'>();</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel</span><span class='str'>'</span><span class='word'>).</span><span class='method'>val</span><span class='word'>();</span><br>" +
      "<span class='com'>/* 3、获得 Select 所有 option 的 text 值：（这个一般没有用） */</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'</span><span class='key'>#sel</span><span class='str'>'</span><span class='word'>).</span><span class='method'>text</span><span class='word'>();</span></pre>" +
      "<p>接下来是原生 JS 的写法，与 jQuery 有所不同：</p>" +
      "<p>JS：</p>" +
      "<pre class='code'><span class='com'>/* 取得选中值的下标（selectIndex属性） */</span><br>" +
      "<span class='key'>var</span> <span class='param'>that</span> <span class='key'>=</span> <span class='spe'>document</span><span class='word'>.</span><span class='method'>getElementById</span><span class='word'>(</span><span class='str'>'sel'</span><span class='word'>);</span><br>" +
      "<span class='key'>var</span> <span class='param'>index</span> <span class='key'>=</span> <span class='param'>that</span><span class='word'>.</span><span class='spe'>selectIndex</span><span class='word'>;</span><br>" +
      "<span class='com'>/* 利用 index 获取当前的 text 和 value */</span><br>" +
      "<span class='param'>that</span><span class='word'>.</span><span class='spe'>options</span><span class='rect'>[</span><span class='param'>index</span><span class='rect'>]</span><span class='word'>.</span><span class='spe'>innerText</span><span class='word'>;</span><br>" +
      "<span class='param'>that</span><span class='word'>.</span><span class='spe'>options</span><span class='rect'>[</span><span class='param'>index</span><span class='rect'>]</span><span class='word'>.</span><span class='spe'>value</span><span class='word'>;</span></pre>"
  },
  "30":{
    "title":"textarea 大小设置",
    "type":64,
    "time":"2016/12/01 15:00",
    "content":
      "<p>textarea 默认情况下，大小可以由用户自己缩放。而随意缩放会导致布局混乱。这就需要对 textarea 做一些设置</p>" +
      "<p>CSS：</p>" +
      "<pre class='code'><span class='com'>/* 1、加了下面的属性就会禁止缩放，但是完全不能缩放用户体验也不好 */</span><br>" +
      "<span class='key'>textarea</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>resize</span><span class='word'>:</span><span class='key'>none</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span><br>" +
      "<span class='com'>/* 2、下面有一种方法可以模拟禁止缩放，仅禁止横向缩放（仅禁止 width 变化，height 变化一般不会影响布局） */</span><br>" +
      "<span class='key'>textarea</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>max-width</span><span class='word'>:</span><span class='key'>100%</span><span class='word'>;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>width</span><span class='word'>:</span><span class='key'>1500px</span><span class='word'>;</span><span class='com'>/* 最小宽度定死后，设置一个很大的宽度，就不能横向缩放了 */</span><br>" +
      "<span class='flower'>}</span><br>" +
      "</pre>"
  },
  "31":{
    "title":"scrollTop() 方法",
    "type":1,
    "time":"2016/12/2 10:40",
    "content":"<p>取到的数值取决于滚动的对象。如果用在不滚动的对象上得到的值就是 0 </p>"
  },
  "32":{
    "title":"pre 标签换行",
    "type":64,
    "time":"2016/12/5 15:07",
    "content":
      "<p>内容超出 pre 宽度时，自动换行。默认是不换行的</p>" +
      "<pre class='code'><span class='key'>pre</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>white-space</span><span class='word'>:</span><span class='str'>pre-wrap</span><span class='word'>;</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='fun'>word-wrap</span><span class='word'>:</span><span class='str'>break-word</span><span class='word'>;</span><br>" +
      "<span class='flower'>}</span></pre>"
  },
  "33":{
    "title":"Swiper 插件使用",
    "type":256,
    "time":"2016/12/5 17:42",
    "content":
      "<p>下面做一些简单的介绍：</p>" +
      "<p>1、首先引入 JS 和 CSS 文件：</p>" +
      "<pre class='code'><span class='arrow'><</span><span class='tag'>link</span> <span class='attr'>rel=</span><span class='str'>\"path/to/swiper.min.css\"</span><span class='arrow'>></span><br>" +
      "<span class='arrow'><</span><span class='tag'>script</span> <span class='attr'>src=</span><span class='str'>\"path/to/swiper.jquery.min.js\"</span><span class='arrow'>></span><br>" +
      "</pre>" +
      "<p>2、引入之后就可以使用了</p>" +
      "HTML：" +
      "<pre class='code'><span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-container\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-wrapper\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-slide\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='word'>slide content 111</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-slide\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='word'>slide content 222</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-slide\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='word'>slide content 333</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>&lt;!-- 如果需要分页器 --></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-pagination\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>&lt;!-- 如果需要导航按钮 --></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-button-prev\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-button-next\"</span><span class='arrow'>></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>&lt;!-- 如果需要滚动条 --></span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='arrow'><</span><span class='tag'>div</span> <span class='attr'>class=</span><span class='str'>\"swiper-scrollbar\"</span><span class='arrow'>></span><br>" +
      "<span class='arrow'>&lt;/</span><span class='tag'>div</span><span class='arrow'>></span><br></pre>" +
      "导航栏等组件可以放在 swiper-container 之外。.swiper-container 可以自定义大小<br>" +
      "JS："+
      "<pre class='code'><span class='key'>var</span> <span class='param'>mySwiper</span> <span class='key'>=</span> <span class='key'>new</span> <span class='fun'>Swiper</span><span class='word'>('.</span><span class='key'>swiper-container</span><span class='word'>',</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>width</span><span class='word'>:</span><span class='word'>100,</span><span class='com'>// 传入高度宽度可以指定里面的大小</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>height</span><span class='word'>:</span><span class='word'>100,</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>width</span><span class='word'>:</span><span class='word'>100,</span><span class='com'>// 传入高度宽度可以指定里面的大小</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>direction</span><span class='word'>:</span><span class='str'>'vertical'</span><span class='word'>,</span><span class='com'>// 滑动的方向：vertical 垂直；horizontal 水平</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>loop</span><span class='word'>:</span><span class='key'>true</span><span class='word'>,</span><span class='com'>// 是否开启自动循环</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>pagination</span><span class='word'>:</span><span class='str'>'.swiper-pagination'</span><span class='word'>,</span><span class='com'>// 需要分页器写上</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>nextButton</span><span class='word'>:</span><span class='str'>'.swiper-button-next'</span><span class='word'>,</span><span class='com'>// 需要显示下一页（与上一页配对）</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>prevButton</span><span class='word'>:</span><span class='str'>'.swiper-button-prev'</span><span class='word'>,</span><span class='com'>// 需要显示上一页（与下一页配对）</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='spe'>scrollbar</span><span class='word'>:</span><span class='str'>'.swiper-scrollbar'</span><span class='word'>,</span><span class='com'>// 需要滚动条写上</span><br>" +
      "</pre>" +
      "<p>若不使用 Source Map功能，把js压缩文件最后一行//# sourceMappingURL=maps/swiper.min.js.map 删掉。以免在某些浏览器出现 500 报错</p>" +
      "<p>要使用的话，演示包里需要加入 map 文件</p>"+
    "<p>网上有详尽的 API。传送门：<a href='//www.swiper.com.cn/usage/index.html' target='_blank'>Swiper 官方 API</a></p>"
  },
  "34":{
    "title":"node.js 安装",
    "type":512,
    "time":"2016/12/06 10:35",
    "content":
      "<p>1、首先去官网下载node.js</p>" +
      "<p>2、使用node的方法：打开cmd（win + R 输入 cmd 可快速打开），进入到想安装的目录下，怎么操作这里不介绍。可用node -v 查看是否安装成功</p>" +
      "<p>PS：安装 node.js 非常简单，不详细介绍了</p>"
  },
  "35":{
    "title":"判断模块进入可视区",
    "type":16,
    "time":"2016/11/15 17:28",
    "content":
      "<p>判断模块是否进入可视区可用用来写可视区加载的插件。例如拉到底自动加载新的数据等</p>" +
      "<p>1、首先介绍 jQuery 判断模块进入可视区的方法</p>" +
      "<pre class='code'><span class='com'>/* 定义方法 */</span>" +
      "<span class='spe'>jQuery</span><span class='word'>.</span><span class='spe'>fn</span><span class='word'>.</span><span class='method'>visibleCheck</span> <span class='key'>=</span> <span class='key'>function</span><span class='flower'>{</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='com'>/* 元素在页面中距离顶端的高度  ?   当前屏幕滚动的高度 + 屏幕本身的高度 */</span><br>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;<span class='key'>return</span> <span class='spe'>$</span><span class='word'>(</span><span class='key'>this</span><span class='word'>).</span><span class='method'>offset</span><span class='word'>().</span><span class='spe'>top</span> <span class='key'><</span> <span class='word'>(</span> <span class='spe'>$</span><span class='word'>(</span><span class='spe'>document</span><span class='word'>).</span><span class='method'>scrollTop</span><span class='word'>()</span> <span class='key'>+</span> <span class='spe'>$</span><span class='word'>(</span><span class='spe'>window</span><span class='word'>).</span><span class='method'>height</span><span class='word'>() );</span><br>" +
      "<span class='flower'>}</span><br>" +
      "<span class='com'>/* 调用上面的方法 */</span><br>" +
      "<span class='spe'>$</span><span class='word'>(</span><span class='str'>'obj'</span><span class='word'>).</span><span class='method'>visibleCheck</span><span class='word'>();</span><span class='com'> // 在可视区内返回 true ，否则返回 false</span></pre>" +
      "<p>2、下面介绍原生 JS 的方法：</p>" +
      "<pre class='code'><br></pre>"
  },
  "36":{
    "title":"Grunt 工具的安装、配置及使用",
    "type":32,
    "time":"2016/12/08 14:44",
    "content":""
  },
  "37":{
    "title":"",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":""
  },
  "38":{
    "title":"",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":""
  },
  "39":{
    "title":"",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":""
  },
  "40":{
    "title":"",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":""
  }
};
var blank = {
  "":{
    "title":"",
    "type":32,
    "time":"2016/11/15 17:28",
    "content":""
  }
};
function Len(obj){
  var l = 0;
  for(var i in obj){l++;}
  return (l>>0);
}

var AllDataLength = Len(AllData);