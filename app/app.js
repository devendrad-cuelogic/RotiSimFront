(function() {
    angular.module('RotimaticApp', ['ngRoute']);

    angular.module('RotimaticApp')
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/views/login.html',
                    controller: 'loginController'
                })
                .when('/devicelist', {
                    templateUrl: 'app/views/deviceList.html',
                    controller: 'deviceListController'
                })
                .when('/devicedetails/:id', {
                    templateUrl: 'app/views/deviceDetails.html',
                    controller: 'deviceDetailsController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}());
