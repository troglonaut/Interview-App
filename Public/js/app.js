var app = angular.module('hiredApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
    .when('/welcome', {
		templateUrl: 'views/page-home.html',
		controller: 'welcomeCtrl',
	})
    .when('/dashboard', {
		templateUrl: 'views/page-dash.html',
		controller: 'dashCtrl'
	})
    .when('/login', {
		templateUrl: 'views/page-login.html',
		controller: 'loginCtrl'
	})
    .when('/register', {
		templateUrl: 'views/page-register.html',
		controller: 'registerCtrl'
	})
    .when('/testPage', {
		templateUrl: 'views/page-test.html',
		controller: 'testPageCtrl'
	})
    .when('/result', {
		templateUrl: 'views/page-result.html',
		controller: 'result.Ctrl'
	})
    .otherwise({ 
        redirectTo: '/welcome' 
    })
});