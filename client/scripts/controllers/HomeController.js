pizzaApp.controller('HomeController', [function(){
  console.log('HomeController sourced!');

  var home = this;
  home.test = PizzaService.test;

}]);
