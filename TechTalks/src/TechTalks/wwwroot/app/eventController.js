'use strict';

angular.module('app.home').controller("eventController", ['$scope', function ($scope) {
  $scope.helloMessage = "Hi, EPAM!";
  $scope.TechEvents = [];
  $scope.filterPlaceholder = "Enter name of instructor here";
  $scope.filterText = "";
  $scope.newEvent = {};
  $scope.selectedEvent = null;

  $scope.formatDate = function (date) {
    var some = (new Date(date)).toLocaleString();
    return some;
  };
}])


