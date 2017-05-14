var len = 40;
var app = angular.module('article',[]);
app.controller('aCtrl',function($scope,$http){
    function getId(){
        var href = location.href;
        return (href.substring(href.indexOf('?')+4))>>0;
    }
    function switchType(type){
        switch(type){
            case 1:return 'jQuery';
            case 2:return 'AngularJS';
            case 4:return 'React';
            case 8:return 'Vue';
            case 16:return '原生JS';
            case 32:return 'CSS';
            case 64:return 'HTML';
            case 128:return '微信小程序';
            case 256:return '插件';
            case 512:return '其他';
        }
    }
    $scope.id = getId();
    $scope.up = (($scope.id-1)>0)?'article.html?id='+($scope.id-1):'javascript:void(0)';
    $scope.down = (($scope.id)<len)?'article.html?id='+($scope.id+1):'javascript:void(0)';
    $scope.upText = (($scope.id-1)>0)?'上一篇':'首篇';
    $scope.downText = (($scope.id)<len)?'下一篇':'末篇';
    var promise = $http({
        url:'../public/articleData/article'+$scope.id+'.json',
        method:'get'
    });
    promise.then(function(res){
        var _data = res.data;
        $scope.content = _data.content;
        $scope.title = _data.title;
        $scope.time = _data.time;
        $scope.type = switchType(_data.type);
        document.getElementsByTagName('article')[0].innerHTML = $scope.content;
    });
    promise.catch(function(res){
        if(res.status ==='404'){
            window.location.href = '../public/404.html';
        }
    });
});