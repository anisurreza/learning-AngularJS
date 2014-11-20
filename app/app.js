'use strict';

// Declare app level module which depends on views, and components
var learnAngularJS = angular.module('learnAngularJS', [
  'ui.router',
  'learnAngularJS.studentsHome',
  'learnAngularJS.studentDetails',
  'learnAngularJS.services'
]).
config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('students');
}]);
