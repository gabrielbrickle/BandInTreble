module.exports = function(app) {
    app.controller('HomeController',['MusicFactory','$scope','$location',function(MusicFactory,$scope, $location) {
        $scope.loginClick = function() {
          MusicFactory.postThis($scope.username)
            console.log('clicked')
            if ($scope.username != null){
              $location.path('/home');
            } else {
              alert ('Please enter a username');
            }
        }
    $scope.bandManagerSelect = function() {
            console.log('clicked band manger options')
            // $location.path('/available');
        }
        $scope.musicianSelect = function($scope, $location) {
            console.log('clicked musical instruments')
            ////need to make sure they can select multiple before they are redirected to the lookingfor page
            // $location.path('/lookingfor');
        }
    }]);
};
