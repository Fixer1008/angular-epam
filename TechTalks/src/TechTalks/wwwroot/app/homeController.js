'use strict';

angular.module('app.home', [])

.controller("homeController", ['$scope', '$http', function ($scope, $http) {
  $scope.helloMessage = "Hi, EPAM!";
  $scope.TechEvents = [];
  $scope.filterPlaceholder = "Enter name of instructor here";
  $scope.filterValue = "";
  $scope.newEvent = {};

  $scope.formatDate = function (date) {
    var some = (new Date(date)).toLocaleString();
    return some;
  };

  $scope.saveEvent = function (event,newEventForm) {
    if (newEventForm.$valid === true) {
      $scope.TechEvents.push($scope.newEvent);
      $scope.newEvent = {};
      newEventForm.$setSubmitted();
    }
  }

  $scope.resetEvent = function (newEventForm) {
    $scope.newEvent = {};
    newEventForm.$submitted = false;
  }

  $http.get('/api/techtalk/').
    success(function (data) {
      for (var i = 0; i < data.length; i++) {
        $scope.TechEvents.push(data[i]);
      }
    });

}])


