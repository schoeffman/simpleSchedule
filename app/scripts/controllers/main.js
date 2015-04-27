'use strict';

/**
 * @ngdoc function
 * @name yeomanFunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanFunApp
 */
angular.module('simpleScheduleApp')
  .controller('MainCtrl', function ($scope, calendar) {


    $scope.calendar = calendar;  //Add the calendar to our controller scope

    //When Add is clicked call this function
    $scope.addEvent = function () {

      calendar.addEvent(  
                          $scope.startTime,   
                          $scope.endTime, 
                          $scope.calendarinput.scheduleEventName, 
                          $scope.calendarinput.scheduleOption 
                       );

      $scope.calendar.rowCollection = calendar.rowCollection;
    };

    $scope.removeEvent = function (index) {
      calendar.removeEvent(index);
      $scope.calendar.rowCollection = calendar.rowCollection;
    };
});


