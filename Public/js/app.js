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
    .when('/register', {
		templateUrl: 'views/page-register.html',
		controller: 'registerCtrl'
	})
    .when('/result', {
		templateUrl: 'views/page-result.html',
		controller: 'resultCtrl'
	})
    .when('/discussion', {
		templateUrl: 'views/page-discussion.html',
		controller: 'discussionCtrl'
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
		controller: 'cssCtrl',
        resolve: {
            cssQuestions: function (questionService) {
                return questionService.getQuestion('css')
        }
	}})
    .when('/javascript', {
		templateUrl: 'views/page-javascript.html',
		controller: 'testPageCtrl'
	})
    .when('/answer', {
		templateUrl: 'views/page-answer.html',
		controller: 'answerCtrl'
	})
    .when('/angular', {
		templateUrl: 'views/page-angular.html',
		controller: 'result.Ctrl'
	})
    .when('/express', {
		templateUrl: 'views/page-express.html',
		controller: 'result.Ctrl'
	})
    .when('/react', {
		templateUrl: 'views/page-react.html',
		controller: 'result.Ctrl'
	})
    .when('/databases', {
		templateUrl: 'views/page-databases.html',
		controller: 'result.Ctrl'
	})
    .when('/jQuery', {
		templateUrl: 'views/page-jQuery.html',
		controller: 'result.Ctrl'
	})
    .when('/node', {
		templateUrl: 'views/page-node.html',
		controller: 'result.Ctrl'
	})
    .when('/git', {
		templateUrl: 'views/page-git.html',
		controller: 'result.Ctrl'
	})
    .when('/gitHub', {
		templateUrl: 'views/page-github.html',
		controller: 'result.Ctrl'
	})
    .when('/mongo', {
		templateUrl: 'views/page-mongo.html',
		controller: 'result.Ctrl'
	})
    .otherwise({ 
        redirectTo: '/home' 
    })
});