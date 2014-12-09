'use strict';

angular.module('app.home').factory('dataService', ['$resource', function($resource) {
  var resources = 
  {
    TechEvents: $resource('/api/techtalk/', { /* default query param */ }, {
      query: { method: "GET", isArray: true }
    })
  }

  return resources;
}])