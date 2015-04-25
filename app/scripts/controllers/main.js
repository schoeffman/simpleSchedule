'use strict';

/**
 * @ngdoc function
 * @name yeomanFunApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanFunApp
 */
angular.module('simpleScheduleApp')
  .controller('MainCtrl', function ($scope) {

    //Scoped variables:
    $scope.repeatOptions  = [];   //select for the repeat option - angular expects an array name and value
    $scope.timeTable      = [];   //array that stores the calendar data for booked times
    $scope.rowCollection  = [];   //array for the schedule agenda list


    //Main function for adding an event
    $scope.addEvent = function () {

      //if the repeat is left undefined (nothing selected)
      if(!$scope.scheduleOption){
          $scope.scheduleOption = {name:'Never', value: 1};
      }

      $scope.rowCollection.push({
                          startTime: $scope.startTime,
                          endTime:  $scope.endTime,
                          eventName: $scope.scheduleEventName,
                          repeat: $scope.scheduleOption
                        });

      $scope.scheduleEventName = '';
      
      //Iterate from start to end times  and set to time-booked when conditions met    
      var startingArray = $scope.startTime.getHours() - 1;
      var endingArray = $scope.endTime.getHours() - 1;
      
      while(startingArray <= endingArray ) {

        $scope.timeTable[startingArray].monday.booked = 'time-booked';

        //repeat conditions from dropdown
        if($scope.scheduleOption.value ===  2){ //everyday
          $scope.timeTable[startingArray].tuesday.booked = 'time-booked';
          $scope.timeTable[startingArray].wednesday.booked = 'time-booked';
          $scope.timeTable[startingArray].thursday.booked = 'time-booked';
          $scope.timeTable[startingArray].friday.booked = 'time-booked';
          $scope.timeTable[startingArray].saturday.booked = 'time-booked';
          $scope.timeTable[startingArray].sunday.booked = 'time-booked';

        } else if($scope.scheduleOption.value === 3){ //weekdays
          $scope.timeTable[startingArray].tuesday.booked = 'time-booked';
          $scope.timeTable[startingArray].wednesday.booked = 'time-booked';
          $scope.timeTable[startingArray].thursday.booked = 'time-booked';
          $scope.timeTable[startingArray].friday.booked = 'time-booked';
        } else if($scope.scheduleOption.value === 4){ //Everyother day
          $scope.timeTable[startingArray].wednesday.booked = 'time-booked';
          $scope.timeTable[startingArray].friday.booked = 'time-booked';
          $scope.timeTable[startingArray].sunday.booked = 'time-booked';
        }

        startingArray++;
      }
    }; //end addEvent
});


