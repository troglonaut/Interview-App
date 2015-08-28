var app = angular.module('hiredApp');

app.controller('cssCtrl', function ($scope, cssQuestions, $location){
    $scope.questions = cssQuestions;
    
    $scope.totalQuestions = $scope.questions.length;
    
    $scope.thisQuestion = 0;
    
    $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    
    $scope.nextProblem = function(){
        //something to see if it's correct
        $scope.thisQuestion++;
            $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    }
});