pizzaApp.controller('OrderController', ['PizzaService', function(PizzaService){
  console.log('OrderController sourced!');

  var order = this;
  var newPizzaOrder = {
    size : '',
    toppings : [],
    total: 0
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

  order.addTopping = function(topping){

    console.log("the topping", topping);
    newPizzaOrder.toppings.push(topping);
    console.log("newPizzaOrder toppings array", newPizzaOrder.toppings);
    console.log("newPizzaOrder", newPizzaOrder);
  };


  order.submitOrder = function(){
    console.log("I'm trying to submit an order");
    console.log("And this is the pizza I have for you.", newPizzaOrder);
    var total = 0;
    total = newPizzaOrder.size + newPizzaOrder.toppings.length;
    console.log("total", total);
    newPizzaOrder.total = total;
    console.log("And this is the pizza I have for you.", newPizzaOrder);

  };//ends pizzaTotal

}]);
