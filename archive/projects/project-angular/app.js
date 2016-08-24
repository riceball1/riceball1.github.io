// wrapping your javascript in a closure
// good habit

(function(){
  var app = angular.module('store', []);

  // specify the name of the controller
  app.controller('StoreController', function(){
    // set this gem to a property of the controller
    this.products = gems;


  });


  // multiple gem variables
  var gems = [
  {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine..Dodeca is one of those gems.',
    canPurchase: true,
    soldOut: false
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "Origin of the Pentagonal Gem is unknown, hence its low value. It has a very high shine and 12 sides.",
    canPurchase: true,
    soldOut: false
  }

  ]; 


})();

