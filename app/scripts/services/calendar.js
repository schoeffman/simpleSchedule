'use strict';

/**
 * @ngdoc service
 * @name simpleScheduleApp.calendar
 * @description
 * # calendar
 * Factory in the simpleScheduleApp.
 */
angular
.module('simpleScheduleApp')
  .factory('calendar', function () {

    var booked = 'time-booked';

    var service = {
      timeTable: [],          //array that stores the calendar data for booked times
      rowCollection: [],      //array for the schedule agenda list
      repeatOptions: [        //select for the repeat option - angular expects an array name and value
        { name: 'Never',            value: 1 },
        { name: 'Every day',        value: 2 },
        { name: 'Weekdays',         value: 3 },
        { name: 'Every Other Day',  value: 4 }
      ], 
      addEvent : function (start, end, name, repeatOption) {

        //if the repeat is left undefined (nothing selected)
        if(!repeatOption){
            repeatOption= {name:'Never', value: 1};
        }

        service.rowCollection.push({
                                    startTime: start,
                                    endTime: end,
                                    eventName: name,
                                    repeat: repeatOption 
                                  });

        
        //Iterate from start to end times  and set to time-booked when conditions met    
        var startingArray = start.getHours() - 1;
        var endingArray   = end.getHours() - 1;
        
        while(startingArray <= endingArray ) {

          service.timeTable[startingArray].monday.booked = booked;

          //repeat conditions from dropdown
          if(repeatOption.value ===  2){ //everyday
            service.timeTable[startingArray].tuesday.booked     = booked;
            service.timeTable[startingArray].wednesday.booked   = booked;
            service.timeTable[startingArray].thursday.booked    = booked;
            service.timeTable[startingArray].friday.booked      = booked;
            service.timeTable[startingArray].saturday.booked    = booked;
            service.timeTable[startingArray].sunday.booked      = booked;

          } else if(repeatOption.value === 3){ //weekdays
            service.timeTable[startingArray].tuesday.booked     = booked;
            service.timeTable[startingArray].wednesday.booked   = booked;
            service.timeTable[startingArray].thursday.booked    = booked;
            service.timeTable[startingArray].friday.booked      = booked;
          } else if(repeatOption.value === 4){ //Everyother day
            service.timeTable[startingArray].wednesday.booked   = booked;
            service.timeTable[startingArray].friday.booked      = booked;
            service.timeTable[startingArray].sunday.booked      = booked;
          }

          startingArray++;
        }
      }, //end addEvent
      removeEvent : function(index) {
        service.rowCollection.splice(index, 1); 
      }
    };

    return service;
  });
