'use strict';

angular.module('app.home')

.controller("newEventController", ['$scope', 'dataService', '$route', '$location', function ($scope, dataService, $route, $location) {
  $scope.event = {};
  $scope.saveEvent = function() {
    dataService.TechEvents.save($scope.event);
    $location.path('/home');
  };

  $scope.resetForm = function() {
    $route.reload();
  }
}])


