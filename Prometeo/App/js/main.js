var app = angular.module('Prometeo', ['ui', '$strap.directives']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'App/partials/home.html', controller: 'homeController' })
        .when('/contact', { templateUrl: 'App/partials/contact.html', controller: 'contactController' })
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

app.controller('homeController', function ($scope, pageService) {
    
});

app.controller('contactController', function ($scope, pageService) {
    
});

app.controller('aboutController', function ($scope, pageService) {
    
});

app.service('pageService', function ($http) {
    return {
        load: function (model, page) {
            $http.get('api/values').success(function (data) {
                model.page = data[page]; 
            });
        }
    };
});



