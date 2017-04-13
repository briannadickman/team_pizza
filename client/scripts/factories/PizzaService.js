pizzaApp.factory('PizzaService', function() {

  var toppings = ['salmon', 'mushroom', 'pineapple', 'mashed potatoes', 'macNcheese', 'shrimp'];
  var pizzaObj = {
    sm: 6,
    md: 7,
    lg: 8,
    toppings: toppings
  };

  var newPizzaOrder = {
    size : '',
    toppings : [],
    total: 0
  };

  var orderedPizzas = [];

  var pizzaOrder = {
    orderedPizzas : orderedPizzas
  };


  function submitOrder(){
    console.log("inside addPizzaToOrder with: ", newPizzaOrder);
    // console.log("insdie addPizzaToOrder array of ordered pizzas, orderedPizza", orderedPizzas);
    var copy = angular.copy(newPizzaOrder);
    orderedPizzas.push(copy);
    console.log("inside addPizzaToOrder, copy of object, array of orders", copy, orderedPizzas);
    newPizzaOrder.total = 0;
    newPizzaOrder.toppings = [];
    console.log('newPizzaOrder: ', newPizzaOrder);

  }//ends add PizzaToOrder

  return {
    pizzaObj: pizzaObj,
    pizzaOrder: pizzaOrder,
    orderedPizzas: orderedPizzas,
    submitOrder: submitOrder,
    newPizzaOrder : newPizzaOrder
  };

});
