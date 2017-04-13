pizzaApp.controller('OrderController', ['PizzaService', function(PizzaService){
  console.log('OrderController sourced!');

  var order = this;
  var newPizzaOrder = {
    size : '',
    toppings : []
  };
  order.total = 0;
  order.pizzaObj = PizzaService.pizzaObj;
  order.pizzaOrder = newPizzaOrder;


  order.pizzaSize = function(size) {
    console.log('size chosen: ', size);
    newPizzaOrder.size = size;
    console.log(newPizzaOrder);

    // newPizzaOrder.toppings.push(topping);
  };

  order.submitOrder = function(topping){
    console.log("I'm trying to submit an order");
    console.log("the topping", topping);
    newPizzaOrder.toppings.push(topping);
    console.log("newPizzaOrder toppings array", newPizzaOrder.toppings);
    console.log("newPizzaOrder", newPizzaOrder);
  };


  function pizzaTotal(object){

  }//ends pizzaTotal

}]);
