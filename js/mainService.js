var app = angular.module('parseQ');

app.service('mainService', function ($http) {

  this.createQuestion = function (message) {
    
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/messages',
      data: { 
        message: message,
        status: "red"
      }
    })
  }

  this.getQuestions = function () {

    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/messages',
    }).then(function(res){
      return res.data.results
    })

  };

  this.updateStatus = function (objectId) {
    
    return $http({
      method: 'PUT',
      url: 'https://api.parse.com/1/classes/messages/' + objectId, 
      data: {
        status: "yellow"
      }
    });

  };

  this.deleteQuestion = function (objectId) {

    return $http({
      method: 'DELETE',
      url: 'https://api.parse.com/1/classes/messages/' + objectId, 
    })

  }

});