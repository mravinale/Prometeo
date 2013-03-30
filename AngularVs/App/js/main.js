var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
    $routeProvider
      .when('/:page', { templateUrl: 'App/partials/page.html', controller: 'RouteController' })
      .otherwise({ redirectTo: '/home' });
});

function AppController($scope) {
    
    // Set the selected page for menu active class
    $scope.$on('dataLoaded', function (event, args) {
        $scope.selectedPage = args.selectedPage;
    });
}

function RouteController($scope, $rootScope, $http, $routeParams) {

    // Load data infromation about the pages on startup
    $http.get('api/values').success(function (data) {
        $scope.page = data[$routeParams.page];
        $scope.$emit('dataLoaded', { selectedPage: $routeParams.page });
    });

}