pizzaApp.controller('HomeController', ['PizzaService',function(PizzaService){
  console.log('HomeController sourced!');

  var home = this;
  home.test = PizzaService.test;

}]);
