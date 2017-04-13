pizzaApp.factory('PizzaService', function() {
  var test = "testing testing 123";

  var pizzaObj = {
    sm: 6,
    md: 7,
    lg: 8
  };
  
  var toppings = [];
  //toppings: salmon, mushroom, pinneapple, macNcheese, shrimp
  var pizzaOrder = {};
  var orderedPizza = [];

  return {
    test: test
  };

});
