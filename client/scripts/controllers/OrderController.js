pizzaApp.controller('OrderController', ['PizzaService', function(PizzaService){
  console.log('OrderController sourced!');

  var order = this;
  order.newPizzaOrder = PizzaService.newPizzaOrder;
  // order.total = 0;
  order.pizzaObj = PizzaService.pizzaObj;
  // order.pizzaOrder = newPizzaOrder;


  order.pizzaSize = function(size) {
    console.log('size chosen: ', size);
    order.newPizzaOrder.size = size;
    order.newPizzaOrder.total += size;

    if (order.newPizzaOrder.size == 6) {
      order.newPizzaOrder.size = 'Small';
    } else if (order.newPizzaOrder.size == 7) {
      order.newPizzaOrder.size = 'Medium';
    } else if (order.newPizzaOrder.size == 8) {
      order.newPizzaOrder.size = 'Large';
    }
    
    console.log(order.newPizzaOrder);

    // newPizzaOrder.toppings.push(topping);
  };

  order.addTopping = function(topping){
    order.newPizzaOrder.toppings.push(topping);
    order.newPizzaOrder.total += 1;
    console.log("newPizzaOrder", order.newPizzaOrder);
  };

  order.submitOrder = PizzaService.submitOrder;

}]);
