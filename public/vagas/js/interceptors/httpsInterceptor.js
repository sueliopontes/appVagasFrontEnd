angular.module("escola").factory('DisableSSL', function($location, $window){
    return {
      activate: function() {
        if ($location.protocol() !== 'http') {
          $window.location.href = $location.absUrl().replace('https', 'http');
        }
      }
    };
  })