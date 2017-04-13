
pizzaApp.controller('CartController', ['PizzaService', function(PizzaService){
  console.log('CartController sourced!');

  var cart = this;


//Mock pizza order to test appending method
  var pizza1 = {
    size: "small",
    toppings: "pinneapple",
    total: 6
  };
  var pizza2 = {
    size: "large",
    toppings: "salmon",
    total: 8
  };
  var pizzaArray = [pizza1, pizza2];


  cart.pizzaOrder = {order: pizzaArray};




}]);
