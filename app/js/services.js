'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myService = angular.module('myApp.services', ['ngResource']).
  value('version', '0.1');
 
myService.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}]);

myService.factory('YouTube', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
}]);
