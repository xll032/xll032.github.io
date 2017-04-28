var space = '&nbsp;&nbsp;&nbsp;&nbsp;';

var AllData = {
  "1":{
    "title":"new Date() 兼容问题",
    "type":16,
    "time":"2016/9/13 10:00"
  },
  "2":{
    "title":"ios网页取消自动识别手机号码",
    "type":64,
    "time":"2016/9/14 14:28"
  },
  "3":{
    "title":"图片限宽高",
    "type":32,
    "time":"2016/9/29 9:36"
  },
  "4":{
    "title":"for...in在ie8下不兼容",
    "type":16,
    "time":"2016/9/30 9:59"
  },
  "5":{
    "title":"后台请求到的数据处理",
    "type":16,
    "time":"2016/10/8 17:42"
  },
  "6":{
    "title":"$.proxy()函数的this指向",
    "type":1,
    "time":"2016/10/9 11:07"
  },
  "7":{
    "title":"查找父级元素",
    "type":1,
    "time":"2016/10/11 11:09"
  },
  "8":{
    "title":"EChart（图表）  缺一个demo",
    "type":256,
    "time":"2016/10/11 11:11"
  },
  "9":{
    "title":".remove()的元素找回",
    "type":1,
    "time":"2016/10/11 11:38"
  },
  "10":{
    "title":"form 下的 button",
    "type":64,
    "time":"2016/10/11 15:27"
  },
  "11":{
    "title":"单位rem",
    "type":32,
    "time":"2016/10/17 9:38"
  },
  "12":{
    "title":"height 百分比",
    "type":32,
    "time":"2016/10/17 9:56"
  },
  "13":{
    "title":"单行隐藏文本内容",
    "type":32,
    "time":"2016/10/17 10:38"
  },
  "14":{
    "title":"cursor 属性值汇总",
    "type":32,
    "time":"2016/10/17 15:47"
  },
  "15":{
    "title":"My97datapicker（日历） {{缺一个demo}}",
    "type":256,
    "time":"2016/10/17 10:38"
  },
  "16":{
    "title":"each() 函数跳出循环",
    "type":1,
    "time":"2016/10/20 16:59"
  },
  "17":{
    "title":"input、textarea等获焦",
    "type":16,
    "time":"2016/10/17 10:38"
  },
  "18":{
    "title":"判断元素在父级元素下是第几个（在父级元素下的下标）",
    "type":1,
    "time":"2016/10/31 12:49"
  },
  "19":{
    "title":"地址栏转码",
    "type":16,
    "time":"2016/11/1 15:09"
  },
  "20":{
    "title":"event.target 和 this 的区别",
    "type":16,
    "time":"2016/11/7 10:00"
  },
  "21":{
    "title":"a标签内不能再包裹a标签",
    "type":64,
    "time":"2016/11/7 15:37"
  },
  "22":{
    "title":"preventDefault() 函数",
    "type":16,
    "time":"2016/11/7 15:44"
  },
  "23":{
    "title":"ajax 回调 window.open 被截获",
    "type":16,
    "time":"2016/11/14 14:50"
  },
  "24":{
    "title":"清除登录记录（浏览器清空cookie）",
    "type":512,
    "time":"2016/11/15 17:09"
  },
  "25":{
    "title":"button 按钮之间存在小间距",
    "type":32,
    "time":"2016/11/15 17:28"
  },
  "26":{
    "title":"浏览器的工作原理",
    "type":512,
    "time":"2016/11/18 12:11"
  },
  "27":{
    "title":"多图片上传 WebUploader（百度出品） {{缺一个demo}}",
    "type":256,
    "time":"2016/11/15 17:28"
  },
  "28":{
    "title":"input 事件与微软输入法的冲突",
    "type":512,
    "time":"2016/11/23 16:01"
  },
  "29":{
    "title":"select 值的获取",
    "type":16,
    "time":"2016/12/1 10:36"
  },
  "30":{
    "title":"textarea 大小设置",
    "type":64,
    "time":"2016/12/01 15:00"
  },
  "31":{
    "title":"scrollTop() 方法",
    "type":1,
    "time":"2016/12/2 10:40"
  },
  "32":{
    "title":"pre 标签换行",
    "type":64,
    "time":"2016/12/5 15:07"
  },
  "33":{
    "title":"Swiper 插件使用",
    "type":256,
    "time":"2016/12/5 17:42"
  },
  "34":{
    "title":"node.js 安装",
    "type":512,
    "time":"2016/12/06 10:35"
  },
  "35":{
    "title":"判断模块进入可视区",
    "type":16,
    "time":"2016/11/15 17:28"
  },
  "36":{
    "title":"Grunt 工具的安装、配置及使用",
    "type":32,
    "time":"2016/12/08 14:44"
  },
  "37":{
    "title":"比较好的配色（看到好的会持续加入）",
    "type":32,
    "time":"2016/12/13 12:16"
  },
  "38":{
    "title":"twbsPagination 插件",
    "type":256,
    "time":"2016/12/14 9:31"
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