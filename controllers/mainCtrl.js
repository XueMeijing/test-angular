(function(){
  angular.module('maycur.controllers')
    .controller('mainCtrl', mainCtrl);
    mainCtrl.$inject = ['$scope', '$state'];
    
    function mainCtrl($scope, $state) {
      var vm = this;
      vm.go = function (state) {
        $state.go('main.page2');
      }
    }
})();