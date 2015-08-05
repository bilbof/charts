angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {

  $scope.signIn = function(user) {
    console.log('Sign-In', user);
    window.localStorage.setItem('app.password', user.password);
    window.localStorage.setItem('app.username', user.username);
    $state.go ('tab.dash');
  };

  $scope.user = Login.all();
})

.controller('DashCtrl', function($scope, $http, Metrics) {

  // On view load do a call for all metrics in the account.
  $scope.$on('$ionicView.enter', function(e) {
    $scope.metrics = Metrics.all();
  });
  
});