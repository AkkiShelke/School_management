var app = angular.module("mainApp", ["ngRoute"]);

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/login", {
        templateUrl : "login.html"
    })
     .when("/register", {
        templateUrl : "register.html"
    })
    .otherwise({
        redirectTo: '/login'
      })
});
