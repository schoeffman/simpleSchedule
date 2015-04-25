'use strict';

angular.module('simpleScheduleApp')
.directive('calendartable', [
function() {
	return {
		templateUrl: 'templates/calendarTable.html',
		link: function(scope) {
    
      var timeStart = 1;
      var timeEnd = 23;

      while(timeStart <= timeEnd){
        scope.timeTable.push({  
                                monday: {time: timeStart, booked: 'time-open'},
                                tuesday: {time: timeStart, booked: 'time-open'},
                                wednesday: {time: timeStart, booked: 'time-open'},
                                thursday: {time: timeStart, booked: 'time-open'},
                                friday: {time: timeStart, booked: 'time-open'},
                                saturday: {time: timeStart, booked: 'time-open'},
                                sunday: {time: timeStart, booked: 'time-open'}
                              });
        timeStart++;
      } 
      scope.dataset = [].concat(scope.timeTable);
      
    }
  };
}]);
