'use strict';

angular.module('learnAngularJS.services', [])

.service('studentsAPIservice', ['$http',function($http){
  var students = [{"id":1,"first_name":"Larry","last_name":"Adams","email":"ladams0@dell.com","country":"China","phone":"8-(696)403-9656"},
{"id":2,"first_name":"Jessica","last_name":"Gomez","email":"jgomez1@amazon.com","country":"China","phone":"5-(276)392-0237"},
{"id":3,"first_name":"Margaret","last_name":"Henderson","email":"mhenderson2@tamu.edu","country":"Sweden","phone":"6-(806)228-2078"},
{"id":4,"first_name":"Sharon","last_name":"Flores","email":"sflores3@bloglines.com","country":"China","phone":"8-(217)841-0166"},
{"id":5,"first_name":"Steven","last_name":"Walker","email":"swalker4@desdev.cn","country":"China","phone":"8-(748)091-5047"},
{"id":6,"first_name":"Mark","last_name":"Simmons","email":"msimmons5@sciencedirect.com","country":"Albania","phone":"7-(275)591-0122"},
{"id":7,"first_name":"Maria","last_name":"Campbell","email":"mcampbell6@craigslist.org","country":"Thailand","phone":"0-(391)020-3438"},
{"id":8,"first_name":"Helen","last_name":"Murray","email":"hmurray7@webnode.com","country":"Portugal","phone":"9-(675)764-2617"},
{"id":9,"first_name":"Ronald","last_name":"Hart","email":"rhart8@bbb.org","country":"Russia","phone":"1-(102)991-7569"},
{"id":10,"first_name":"Paul","last_name":"Carpenter","email":"pcarpenter9@independent.co.uk","country":"Netherlands","phone":"8-(324)193-7769"}];
  this.list = function () {
    return students;
  };
  this.get = function(id) {
    var i = 0;
    for (i in students) {
      if (students[i].id == id) {
          return students[i];
      }
    }
  };
}]);