'use strict';

angular.module('simpleScheduleApp')
.directive('scheduletable', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/scheduleTable.html',
		link: function(scope) {

      //no inital setup required
      
    }
  };
});
