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

  var event = dataService.TechEvents.get({ id: 1 });
  $log.info(event);
  $log.warn(event);
  $log.debug(event);
  $log.error(event);


  $scope.TechEvents = dataService.TechEvents.query();
}])


