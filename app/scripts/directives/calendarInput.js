'use strict';

angular.module('simpleScheduleApp')
.directive('calendarinput', function($parse) {
	return {
    //require: 'ngModel',
		restrict: 'E',
		templateUrl: 'templates/calendarInput.html',
		link: function(scope, element, attrs, ctrl) {
        
       //Set the time steps for hours and minutes
       scope.hstep = 1;
       scope.mstep = 0;

       scope.startTime = new Date(2015,1,1,8); // 8:00
       scope.endTime = new Date(2015,1,1,12); // 12:00
      
    }
  };
});
