/* 菜单 v1.0
 *
 * 使用方法： $.menuMobile(option);
 *   option 为可选参数，不传参数，使用默认颜色和样式。可传的参数列表如下：
 *   {icon:'', //只支持 fa 图标 如 fa-home
 *   content:[['linkAdd1','name1'],['linkAdd2','name2'],['linkAdd3','name3']],//列表链接数组，默认是空的
 *   bgColor:''//背景颜色，16进制，rgb等均可
 *   width:''//菜单宽度，只能传入 px单位的数值，如 200
 *   }
 * -------------------------------------------------------------
 * 菜单 v2.0（向下兼容）
 * 改动：1、使用原生 js 实现（暂时仍使用 jQuery ）
 *      2、代码内容写在 html 中（方便修改；功能更加直观）
 *      3、取消了icon、content参数的自定义（实际作用不大，有另外两个参数足够了），剩下可用参数为 bgColor、width（与 v1.0 使用要求相同。只会识别这两个参数，多余参数传入无效）
 *      4、新增了两个参数 menu 和 mask ，这两个参数分别传侧滑菜单内容和灰色mask的 id，一定要传 id 的名字。不加 “#”，不传默认用的是 cl-menu 和 cl-mask。在 HTML 中写上就可以了。
 * */



//  改进目标：   1、目录代码写在 HTML 中 2、可用方法自定 背景颜色，宽度
//  增加可复用性，内容不限制。必须元素减少。遮罩层必须，菜单触发按钮必须，滑出容器的位置必须。 {click:'',menu:'',mask:'',bgColor:'',width:'',}
//  在 angular 中实现。应该也能用于 vue、小程序。
(function(){
    /* 首先判断是否有 jQuery ，没有不能使用 */
    if(typeof jQuery === typeof void(0)){
        console.info('Method of menu mobile requires jQuery.');
        return false;
    }
    /* 判断是否引用了 requirejs ，没有的话，也可以直接使用 */
    typeof define === typeof void(0) ?  (menuMobile(jQuery)) : (define(['jquery'],menuMobile));
    function menuMobile(){
        (function($){
            $.menuMobile = function(option){
                var menuShow = true;
                var $parent = $('*[data-cl-menu="true"]'),
                    opt = {
                        icon:'fa-bars', //支持fa图标库
                        /*content:[
                            ['index.html','<span class="fa fa-home"></span> 主页'],
                            ['article/article.html?id=1','<span class="fa fa-file-text-o"></span> 文章']
                        ],//二维数组格式，第一项为链接地址，第二项为名称*/
                        bgColor:'#777',
                        width:208
                    };
                $.extend(opt,option);
                if($(window).width()>768){
                    $parent.hide();
                }
                $(window).scroll(function(){
                    if($(window).width()>768){
                        $parent.hide();
                    }else{
                        $parent.show();
                    }
                });
                var content ='';
                for(var i = 0;i < opt.content.length;i++){
                    content += '<li><a href="'+opt.content[i][0]+'">'+opt.content[i][1]+'</a></li>';
                }
                content = '<ul id="cl-li" data-menu-show="false">'+content+'</ul>';
                $parent.html('<div id="cl-mask"></div><span id="cl-ul" class="fa '+opt.icon+'"></span>' + content);
                $parent.css({
                    'text-align':'right',
                    position:'relative'
                });
                var $ul = $('#cl-ul'),
                    $li = $('#cl-li'),
                    $mask = $('#cl-mask');
                $li.css({
                    padding:0,
                    height:$(window).height(),
                    background:opt.bgColor,
                    display:'none',
                    position:'relative',
                    width:opt.width,
                    right:-$(window).width(),
                    'padding-right':20
                });
                $mask.css({
                    height: $(window).height(),
                    position: 'absolute',
                    width: $(window).width(),
                    background: 'rgba(0,0,0,0.4)',
                    left: -15,
                    top: 50,
                    display:'none'
                }).off('click').on('click', menuToggle);
                function menuToggle(){
                    function getCss(dis,time){
                        return {
                            'transform':'translate3d(' + dis + 'px,0,0)',
                            'transition':'all '+time+'ms',
                            '-webkit-transform':'translate3d(' + dis + 'px,0,0)',
                            '-webkit-transition':'all '+time+'ms',
                            '-moz-transform':'translate3d(' + dis + 'px,0,0)',
                            '-moz-transition':'all '+time+'ms',
                            '-ms-transform':'translate3d(' + dis + 'px,0,0)',
                            '-ms-transition':'all '+time+'ms'};
                    }
                    var dis = -(opt.width+15),time = 500;
                    if(menuShow){
                        menuShow = false;
                        if(!$li.data('menu-show')){
                            $mask.fadeIn();
                            $('body').css({
                                height: $(window).height(),
                                'overflow-y':'hidden'
                            });
                            $li.show().data('menu-show',true).css(getCss(dis,time));
                            $('.main').css(getCss(-dis,time));
                            setTimeout(function(){menuShow = true;},time);
                        }else{
                            $mask.fadeOut();
                            $('body').css({
                                height:'auto',
                                'overflow-y':'auto'
                            });
                            $li.hide().css(getCss(0,time)).data('menu-show',false);

                            setTimeout(function(){menuShow = true;},time);
                        }
                    }
                }
                $ul.off('click').on('click',menuToggle);
            }
        })(jQuery);
    }
})();