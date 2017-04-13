pizzaApp.factory('PizzaService', function() {
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
    console.log("inside addPizzaToOrder");
    console.log("inside addPizzaToOrder pizza we are adding, object", object);
    console.log("insdie addPizzaToOrder array of ordered pizzas, orderedPizza", orderedPizza);
    var copy = angular.copy(object);
    orderedPizza.push(copy);
    console.log("inside addPizzaToOrder, copy of object, array of orders", copy, orderedPizza);
  }//ends add PizzaToOrder

  return {
    pizzaObj: pizzaObj,
    pizzaOrder: pizzaOrder,
    addPizzaToOrder: addPizzaToOrder,
    orderedPizza: orderedPizza
  };

});
