var meter = angular.module('level-meter', [])
  .directive( 'levelMeter', function() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        level: '='
      },
      templateUrl: 'angular-level-meter.tpl.html',
      link: function (scope) {
        scope.high = 
        scope.med  = 
        scope.low  = "bar-empty";
        if (scope.level >= 1) {
          scope.low = "bar-low";
        }
        if (scope.level >= 3) {
          scope.med = "bar-med";
        }
        if (scope.level >= 5) {
          scope.high = "bar-high";
        }
      }
    };
  });
