(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('AvailableController', ['$scope', '$http', '$location', function($scope, $http, $location) {

            }]);
        }

// };

},{}],2:[function(require,module,exports){
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
    $scope.instrument = "";
    $scope.managers = "";
    $scope.renderMusician =[],
//Left side box on homepage
    $scope.bandManagerSelect = function() {
            console.log($scope.instrument)
            // if ($scope.instrument === )
            $location.path('/lookingfor');
            // MusicFactory.getMusician.user();
          $scope.musician =  MusicFactory.getMusician($scope.instrument);

          console.log(renderMusician)
        }
///Right side box on homepage
        $scope.musicianSelect = function() {
            console.log($scope.managers)
            ////need to make sure they can select multiple before they are redirected to the lookingfor page
            // $location.path('/lookingfor');
            // MusicFactory.getBandManager.user();
            let logan = MusicFactory.getBandManager();
            console.log(logan);

        }
    }]);
};

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('LookingForController', ['$scope', '$http', function($scope, $http) {
      $scope.musician = "";
      
    }]);
};

},{}],4:[function(require,module,exports){
let app = angular.module('BandInTreble', ['ngRoute']);
require('./controllers/homecontroller')(app);
require('./controllers/availablecontroller')(app);
require('./controllers/lookingforcontroller')(app);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'HomeController',
            templateUrl: 'templates/login.html',
        })
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'templates/home.html',
        })
        .when('/available', {
            controller: 'AvailableController',
            templateUrl: 'templates/available.html',
        })
        .when('/lookingfor', {
            controller: 'HomeController',
            templateUrl: 'templates/lookingfor.html',
        });
}]);

//
// THIS IS THE SERVICE BREH BRO
//
app.factory('MusicFactory', ['$http', '$location', function($http, $location) {
    let musicianPeople = [{}];
    let bandmanagerPeople = [];
    let instruments = [];
    return {
        // todo: rename this to be more specific
        postThis: function(name) {
            $http({
                url: '/login',
                method: 'POST',
                data: {
                    name: name,
                    password: "1234",
                    avatar: null,

                },
            }).then(function(results) {
                console.log("posted")
            });
        },
        getMusician: function(musicguy) {
            $http({
                url:'/band-manager',
                method: 'GET',
                 params:{ instruments: musicguy}
            }).then(function(response) {
                let musicians = response.data;
                console.log(musicians)
                musicians.forEach(function(element) {
                    musicianPeople.push({
                      name: element.user.name,
                      hourlyRate: element.hourlyRate,
                      rating: element.rating,
                      email: element.user.email,

                    })

                })
                angular.copy(musicianPeople, renderMusician)
                console.log(musicianPeople)
            });
        },
        getBandManager: function() {
            $http({
                url: '/musician',
                method: 'GET',
            }).then(function(response) {
                let bandmanager = response.data
                console.log(bandmanager);
                bandmanager.forEach(function(element) {
                    bandmanagerPeople.push(element.value);
                })
                console.log(bandmanager)

            });

        },


    }; // end return
}]);

},{"./controllers/availablecontroller":1,"./controllers/homecontroller":2,"./controllers/lookingforcontroller":3}]},{},[4])