var meter = angular.module('level-meter', [])
  .directive( 'levelMeter', function() {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        level: '='
      },
      templateUrl: 'level-meter',
      link: function (scope, element, attrs) {
        scope.high = 
        scope.med  = 
        scope.low  = "level-meter__bar-empty";
        if (scope.level >= 1) {
          scope.low = "level-meter__bar-low";
        }
        if (scope.level >= 3) {
          scope.med = "level-meter__bar-med";
        }
        if (scope.level >= 5) {
          scope.high = "level-meter__bar-high";
        }
      }
    };
  });
