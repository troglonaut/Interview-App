var app = angular.module('hiredApp');

app.controller('htmlCtrl', function ($scope, htmlQuestions, $location){
    $scope.questions = htmlQuestions;
    
    $scope.totalQuestions = $scope.questions.length;
    $scope.thisQuestion = 0;
    $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    $scope.nextProblem = function(){
        //something to see if it's correct
        $scope.thisQuestion++;
            $scope.currentQuestion = $scope.questions[$scope.thisQuestion];
    }
});