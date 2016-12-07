(function () {
    'use strict';

    angular
        .module('umn')
        .controller('UmnShoppingCart', UmnShoppingCart);

    UmnShoppingCart.$inject = ['$scope', 'shoppingCartService'];

    function UmnShoppingCart($scope, shoppingCartService) {
        var vm = this;

        // Variables
        vm.classes = [];

        // Method Declarations
        vm.init = init;
        vm.checkout = checkout;

        // Initialization
        vm.init();

        // Method Definitions
        function init() {
            $scope.$watch(function () {
                return shoppingCartService.classes;
            }, function (newClasses) {
                vm.classes = newClasses;
            });
        }

        function checkout() {

        }
    }
})();