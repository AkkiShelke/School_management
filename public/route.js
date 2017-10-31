var app = angular.module('appRoutes',['ngRoute'])

app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider

    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/student", {
        templateUrl : "student.html"
    })
    .when("/studentAdd", {
        templateUrl : "studentAdd.html"
    })
    .when("/studentProfile", {
        templateUrl : "studentProfile.html"
    })
    .when("/studentTC", {
        templateUrl : "studentTC.html"
    })
    .when("/studentBonafied", {
        templateUrl : "studentBonafied.html"
    })
    .when("/teacher", {
        templateUrl : "teacher.html"
    })
    .when("/teacherAdd", {
        templateUrl : "teacherAdd.html"
    })
    .when("/teacherProfile", {
        templateUrl : "teacherProfile.html"
    })
    .otherwise({
        redirectTo: '/home'
    })
});

//app.controller('routeController', ['$scope', '$location', function($scope, $location) {
//    $scope.showPageHero = $location.path() === '/one';
//  }]);




