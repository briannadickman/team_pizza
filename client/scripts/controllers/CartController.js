
pizzaApp.controller('CartController', ['PizzaService', function(PizzaService){
  console.log('CartController sourced!');

  var cart = this;

  cart.pizzaOrder = PizzaService.pizzaOrder;

}]);
