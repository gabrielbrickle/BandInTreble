module.exports = function(app) {
    app.controller('HomeController', ['MusicFactory', '$scope', '$location', function(MusicFactory, $scope, $location) {
        $scope.loginClick = function() {
            MusicFactory.postThis($scope.username)
            console.log('clicked')
            if ($scope.username != null) {
                $location.path('/home');
            } else {
                alert('Please enter a username');
            }
        }
        $scope.instrument = "";
        $scope.managers = "";
        $scope.musicians= [];
        $scope.Musicianzzz=[]
        //Left side box on homepage
        $scope.bandManagerSelect = function() {
                // console.log($scope.instrument
                $location.path(`/lookingfor/${$scope.instrument}`);
                // $scope.musicians = MusicFactory.getMusician($scope.instrument);
            }
            ///Right side box on homepage
        $scope.musicianSelect = function() {
            console.log($scope.managers)
                // $location.path('/available');
            $location.path(`/lookingfor/${$scope.managerzzz}`)
            console.log(logan);

        }
    }]);
};
