(function(){
  angular.module('maycur.controllers')
    .controller('pagectrl', pagectrl);
    pagectrl.$inject = ['$scope', '$state'];
    
    function pagectrl($scope, $state) {
      var vm = this;
      console.log('page2')
      
    }
})();