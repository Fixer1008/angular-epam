'use strict';

angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.home'
])
.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/event/:id", {
    templateUrl: '/templates/event.html',
    controller: 'viewEventController'
  });

  $routeProvider.when("/newEvent", {
    templateUrl: '/templates/newEvent.html',
    controller: 'newEventController'
  });

  $routeProvider.otherwise({
    templateUrl: "/templates/home.html",
    controller: 'homeController'
  });


}]);


