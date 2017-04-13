
pizzaApp.controller('CartController', ['PizzaService', function(PizzaService){
  console.log('CartController sourced!');

  var cart = this;

  cart.test = PizzaService.test;
  cart.pizzaObj = PizzaService.pizzaObj;




  cart.testPizzaOrder = function() {
    var pizza1 = {
      size: small,
      topings: pinneapple,
      total: 7
    };
    var pizza2 = {
      size: large,
      topings: salmon,
      total: 7
    };

    var pizzaArray = [pizza1, pizza2];

    var pizzaOrder = {
      order: pizzaArray};

    console.log(pizzaOrder);

  };

}]);
