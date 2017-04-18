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
        [0,"修改属性的时候也可以使用"]
    ]
  },
  "7":{
    "title":"jQuery 查找父级元素",
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
    "title":"EChart 图表插件 （缺一个demo）",
    "type":256,
    "time":"2016-1-1",
    "content":[
          [0,"这是一款功能比较丰富强大的图表插件"],
          [0,"百度官方文档写的很全面。传送门：<a href='http://echarts.baidu.com/api.html#echarts' target='_blank'>百度EChart 官方API</a>"],
          [0,"自己写的demo。传送门：<a href='#'>现在还没有</a>"]
    ]
  },
  "10":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
        [0,""],
        [0,""],
        [0,""],
        [0,""]
    ]
  },
  "11":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "12":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "13":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "14":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "15":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "16":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "17":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "18":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "19":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "20":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "21":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "22":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "23":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
    "content":[
      [0,""],
      [0,""],
      [0,""],
      [0,""]
    ]
  },
  "24":{
    "title":"示例9",
    "type":1,
    "time":"2016-1-1",
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