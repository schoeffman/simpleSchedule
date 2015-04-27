'use strict';

angular.module('simpleScheduleApp')
.directive('calendartable', [ 'calendar',
function(calendar) {
	return {
		templateUrl: 'templates/calendarTable.html',
		link: function(scope) {
    
      
      var timeStart = 1;
      var timeEnd = 23;
      var open = 'time-open';

      //Add The clas to the json object so table will show up while empty
      while(timeStart <= timeEnd) {
          calendar.timeTable.push({  
                                monday:     {time: timeStart, booked: open},
                                tuesday:    {time: timeStart, booked: open},
                                wednesday:  {time: timeStart, booked: open},
                                thursday:   {time: timeStart, booked: open},
                                friday:     {time: timeStart, booked: open},
                                saturday:   {time: timeStart, booked: open},
                                sunday:     {time: timeStart, booked: open}
                              });
        timeStart++;
      } 
    
    }
  };
}]);
