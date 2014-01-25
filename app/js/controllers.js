'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

  .controller('MyCtrl1', ['$scope', '$http', function($scope, $http) {
	
	$http.get('data/phones.json').success(function(data) {
    	$scope.phones = data;
  	});

  }])



  .controller('MyCtrl2', [function() {

  }]);