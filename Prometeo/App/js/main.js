var app = angular.module('Prometeo', ['ui', '$strap.directives']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/blog', { templateUrl: 'App/partials/blog.html', controller: 'blogController' })  
        .when('/about', { templateUrl: 'App/partials/about.html', controller: 'aboutController' })
        .otherwise({ redirectTo: '/blog' });
    
});

app.controller('mainController', function ($scope, $location, dataservice) {
    
    $scope.$location = $location;
    
    dataservice.onEntityChange(function (args) {
        $scope.$apply();
    });
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



