pizzaApp.controller('OrderController', [function(){
  console.log('OrderController sourced!');
  var order = this;

  var pizzaOrder = {
    sm: 6,
    md: 7,
    lg: 8
  };

  order.pizzaOrder = pizzaOrder;



}]);
