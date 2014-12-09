'use strict';

angular.module('app.home', ['ngResource'])

.controller("homeController", ['$scope', '$http', 'dataService', function ($scope, $http, dataService) {
  $scope.helloMessage = "Hi, EPAM!";
  $scope.filterPlaceholder = "Enter name of instructor here";
  $scope.filterValue = "";

  $scope.formatDate = function (date) {
    var some = (new Date(date)).toLocaleString();
    return some;
  };

  $scope.TechEvents = dataService.TechEvents.query();

  /*
  $http.get('/api/techtalk/').
    success(function (data) {
      for (var i = 0; i < data.length; i++) {
        $scope.TechEvents.push(data[i]);
      }
    });
    */
}])


