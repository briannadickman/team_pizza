pizzaApp.factory('PizzaService', function() {
  var test = "testing testing 123";

  var pizzaObj = {
    sm: 6,
    md: 7,
    lg: 8,
    toppings: toppings
  };

  var toppings = ['salmon', 'mushroon', 'pineapple', 'macNcheese', 'shrimp'];

  //toppings: salmon, mushroom, pinneapple, macNcheese, shrimp
  var pizzaOrder = {};
  var orderedPizza = [];

  function addPizzaToOrder(object){


  }//ends add PizzaToOrder

  return {
    test: test,
    pizzaOrder: pizzaOrder,
    orderedPizza: orderedPizza
  };

});
