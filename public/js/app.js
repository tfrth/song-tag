var app = angular.module('SongTag', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/artist.html',
      controller: 'ArtistCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
