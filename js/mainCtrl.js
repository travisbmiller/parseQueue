var app = angular.module('parseQ');

app.controller('mainCtrl', function ($scope, mainService) {
  
  $scope.color = "red"; 

  $scope.postQuestion = function (message) {
    mainService.createQuestion(message)
    .then(function (res) {
      console.log("success", res);
      $scope.message = "";
      $scope.getQuestions();
    }, function (res) {
      console.log("fail", res);
    })
  }

  $scope.getQuestions = function () {
    mainService.getQuestions()
    .then(function (res) {
      console.log(res)
      $scope.messages = res
    })
  };

  $scope.changeStatus = function (objectId) {
    console.log("objectId")
    mainService.updateStatus(objectId).then(function() {
      $scope.getQuestions();
    })
  };

  $scope.deleteMessage = function (objectId) {
    mainService.deleteQuestion(objectId).then(function() {
      $scope.getQuestions()
    })
  }

  $scope.getQuestions();

});

//objectId