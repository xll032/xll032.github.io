/* 菜单 mobile
 *
 * 使用方法： $.menuMobile(option);
 *   option 为可选参数，不传参数，使用默认颜色和样式。可传的参数列表如下：
 *   {icon:'', //只支持 fa 图标 如 fa-home
 *   content:[['linkAdd1','name1'],['linkAdd2','name2'],['linkAdd3','name3']],//列表链接数组，默认是空的
 *   bgColor:''//背景颜色，16进制，rgb等均可
 *   width:''//菜单宽度，只能传入 px单位的数值，如 200
 *   }
 *
 * */
(function(){
    /* 首先判断是否有 jQuery ，没有不能使用 */
    if(typeof jQuery == typeof void(0)){
        console.info('Method of menu mobile requires jQuery.');
        return false;
    }
    /* 判断是否引用了 requirejs ，没有的话，也可以直接使用 */
    typeof define == typeof void(0) ?  (menuMobile(jQuery)) : (define(['jquery'],menuMobile));
    function menuMobile($){
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
                            setTimeout(function(){menuShow = true;},time);
                        }else{
                            $mask.fadeOut();
                            $('body').css({
                                height:'auto',
                                'overflow-y':'auto'
                            });
                            $li.show().css(getCss(0,time)).data('menu-show',false);
                            setTimeout(function(){menuShow = true;},time);
                        }
                    }
                }
                $ul.off('click').on('click',menuToggle);
            }
        })(jQuery);
    }
})();