var app = angular.module('hiredApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
    .when('/home', {
		templateUrl: 'views/page-home.html',
		controller: 'welcomeCtrl',
	})
    .when('/dashboard', {
		templateUrl: 'views/page-dash.html',
		controller: 'dashCtrl'
	})
    .when('/html', {
		templateUrl: 'views/page-html.html',
		controller: 'htmlCtrl',
        resolve: {
            htmlQuestions: function (questionService) {
                return questionService.getQuestion('html')
        }
	}})
    .when('/css', {
		templateUrl: 'views/page-css.html',
//		controller: 'registerCtrl'
	})
    .when('/javascript', {
		templateUrl: 'views/page-javascript.html',
//		controller: 'testPageCtrl'
	})
    .when('/angular', {
		templateUrl: 'views/page-angular.html',
//		controller: 'result.Ctrl'
	})
    .when('/node', {
		templateUrl: 'views/page-node.html',
//		controller: 'result.Ctrl'
	})
    .when('/mongo', {
		templateUrl: 'views/page-mongo.html',
//		controller: 'result.Ctrl'
	})
    .otherwise({ 
        redirectTo: '/home' 
    })
});