'use strict';

angular.module('app.home', [])

.controller("homeController", ['$scope', function ($scope) {
  $scope.helloMessage = "Hi, EPAM!";

}]);
