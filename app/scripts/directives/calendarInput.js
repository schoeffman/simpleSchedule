'use strict';

angular.module('simpleScheduleApp')
.directive('calendarinput', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/calendarInput.html',
		link: function(scope) {

   //Start and End times
   //Init default times as it is a requirment of the time picker directive
   scope.startTime= new Date();
   scope.endTime = new Date();
    
   //Set the time steps for hours and minutes
   scope.hstep = 1;
   scope.mstep = 15;


   scope.repeatOptions = [
      {name: 'Never', value: 1},
      {name: 'Every day', value: 2},
      {name: 'Weekdays', value: 3},
      {name: 'Every Other Day', value: 4}
    ];
      
    }
  };
});
