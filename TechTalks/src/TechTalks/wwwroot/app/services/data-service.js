'use strict';

angular.module('app.home').factory('dataService', ['$resource', function($resource) {
  var resources = 
  {
    TechEvents: $resource('/api/techtalk/:id', { /* default query param */ }, {
      query: { method: "GET", isArray: true },
      get: { method: "GET" },
      save: { method: "POST"}
    })
  }

  return resources;
}])