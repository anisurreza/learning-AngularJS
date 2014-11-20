'use strict';

angular.module('learnAngularJS.studentsHome', ['ui.router','learnAngularJS.services'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('students', {
      url: "/students",
      controller: 'StudentsHomeCtrl',
      templateUrl: 'studentsHome/studentsHome.html'
    });
}])

.controller('StudentsHomeCtrl', ['$scope', 'studentsAPIservice', function($scope, api) {
  $scope.students = api.list();
  $scope.selectedStudent = null;
  $scope.details = function (id) {
    $scope.selectedStudent = api.get(id);
  };
  //$scope.students = [];
}]);