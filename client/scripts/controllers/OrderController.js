pizzaApp.controller('OrderController', ['PizzaService', function(PizzaService){
  console.log('OrderController sourced!');

  var order = this;
  var newPizzaOrder = {
    size : '',
    toppings : []
  };


  order.pizzaObj = PizzaService.pizzaObj;

  order.pizzaOrder = newPizzaOrder;


  order.pizzaSize = function(size) {
    console.log('size chosen: ', size);
    newPizzaOrder.size = size;
    console.log(newPizzaOrder);

    newPizzaOrder.toppings.push(topping);
  };

}]);
