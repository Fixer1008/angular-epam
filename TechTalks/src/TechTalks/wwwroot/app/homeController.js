'use strict';

angular.module('app.home', ['ngResource'])

.controller("homeController", ['$scope', '$http', 'dataService','$log', function ($scope, $http, dataService, $log) {
  $scope.helloMessage = "Hi, EPAM!";
  $scope.filterPlaceholder = "Enter name of instructor here";
  $scope.filterValue = "";

  $scope.formatDate = function (date) {
    var some = (new Date(date)).toLocaleString();
    return some;
  };

  $scope.TechEvents = dataService.TechEvents.query();
}])


