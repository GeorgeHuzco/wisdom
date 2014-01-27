'use strict';

/* global angular */

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/main', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
	$routeProvider.when('/contact', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
	$routeProvider.otherwise({redirectTo: '/main'});
}]);




