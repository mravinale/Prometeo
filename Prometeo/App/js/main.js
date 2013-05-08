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

app.controller('mainController', function ($scope, $location) {
    $scope.$location = $location;
});

app.controller('homeController', function ($scope) {
     
});

app.controller('blogController', function ($scope, breeze, dataservice) {

    var pageEntity = null;

    dataservice.getPage().then(function(page) {
        pageEntity = page;
        dataservice.getComments().then(succeeded);
    });
    
    function succeeded(data) {
        $scope.data = pageEntity;
        
        $scope.$apply();
        console.log($scope.data);
    }
   
});

app.controller('aboutController', function ($scope) {
    
});

app.value('breeze', window.breeze);



