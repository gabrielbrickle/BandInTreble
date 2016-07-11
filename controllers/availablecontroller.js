module.exports = function(app) {
    app.controller('AvailableController', ['$scope', '$http','MusicFactory','$routeParams', '$location', function($scope,$http,$MusicFactory,$routeParams,$location) {
      $scope.musicianSelect = function() {
              $location.path('/booking');
          // let logan = MusicFactory.getBandManager();
          console.log("logan");
      }
      }]);
        }

// };
