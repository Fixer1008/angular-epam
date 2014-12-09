'use strict';

angular.module('app.home')

.controller("viewEventController", ['$scope', '$http', 'dataService', '$routeParams', function ($scope, $http, dataService, $routeParams) {
  console.log($routeParams.id);
  $scope.event = dataService.TechEvents.get({
    id: $routeParams.id
  });

}])


