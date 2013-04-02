var app = angular.module('Prometeo', []);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/:page', { templateUrl: 'App/partials/page.html', controller: 'RouteController' })
      .otherwise({ redirectTo: '/home' });
});

app.controller('MainController', function ($scope) {
    // Set the selected page for menu active class
    $scope.$on('dataLoaded', function (event, args) {
        $scope.selectedPage = args.selectedPage;
    });
});

app.controller('RouteController', function ($scope, $routeParams, pageService) {
    pageService.load($scope, $routeParams.page);
});

app.factory('pageService', function ($http) {
    return {
        load: function (model, page) {
            $http.get('api/values').success(function (data) {
                model.page = data[page];
                model.$emit('dataLoaded', { selectedPage: page });
            });
        }
    };
});



