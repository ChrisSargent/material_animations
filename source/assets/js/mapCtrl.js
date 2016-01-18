var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/home.html',
      controller: 'homeCtrl as home'
    });
    $routeProvider.when('/map', {
      templateUrl: '/map.html',
      controller: 'mapCtrl as map'
    });
}]);

app.controller('homeCtrl', function() {

});

app.controller('mapCtrl', function() {

});
