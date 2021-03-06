/* ngRouter injection, allows pizzaApp to use angular-route */

var pizzaApp = angular.module('pizzaApp', ['ngRoute']);

pizzaApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/templates/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
  .when('/order', {
    templateUrl: 'views/templates/order.html',
    controller: 'OrderController',
    controllerAs: 'order'
  })
  .when('/cart', {
    templateUrl: 'views/templates/cart.html',
    controller: 'CartController',
    controllerAs: 'cart'
  })
  .when('/confirm', {
    templateUrl: 'views/templates/confirm.html',
    controller: 'ConfirmController',
    controllerAs: 'confirm'
  })
  .otherwise({
      redirectTo: 'home'
    });
}]);
