var app = angular.module('Prometeo', ['ui', '$strap.directives']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'App/partials/home.html', controller: 'homeController' })
        .when('/blog', { templateUrl: 'App/partials/blog.html', controller: 'blogController' })
        .when('/about', { templateUrl: 'App/partials/about.html', controller: 'aboutController' })
        .otherwise({ redirectTo: '/home' });
    
});

app.value('ui.config', {
    jq: {
        cslider: { autoplay: true, bgincrement: 450 }
    }
});

app.controller('mainController', function ($scope, $location, dataservice) {
    
    $scope.$location = $location;
    
    dataservice.onEntityChange(function (args) {
        $scope.$apply();
       // console.log(args);
    });
});

app.controller('homeController', function ($scope) {
     
});

app.controller('blogController', function ($scope, breeze, dataservice) {

    var hub = $.connection.PrometeoHub;
    var pageEntity = null;
    
    $.connection.hub.start();
    
    hub.client.changePage = function (message) {
        pageEntity.title = message.Content;
    };

    hub.client.changePostNames = function (message) {
        angular.forEach(pageEntity.posts, function (post) {
            post.name = message.Content;
        });
    };
    
    hub.client.changeCommentNames = function (message) {
        angular.forEach(pageEntity.posts, function (post) {
            angular.forEach(post.comments, function (comment) {
                comment.content = message.Content;
            });
        });
    };

    $scope.changePage = function () {
        hub.server.changePage({ Content: $scope.newPageName });
    };

    $scope.changePosts = function() {
        hub.server.changePostNames({ Content: $scope.newPostName });
    };
    
    $scope.changeComments = function () {
        hub.server.changeCommentNames({ Content: $scope.newCommentName });
    };
    

    dataservice.getPage().then(function(page) {
        pageEntity = page;
        dataservice.getComments().then(succeeded);
    });
    
    function succeeded(data) {
        $scope.data = pageEntity;
        $scope.$apply();
    }
   
});

app.controller('aboutController', function ($scope) {
    
});

app.value('breeze', window.breeze);



