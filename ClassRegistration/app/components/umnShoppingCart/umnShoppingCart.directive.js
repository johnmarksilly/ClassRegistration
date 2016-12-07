(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnShoppingCart', umnShoppingCart);

    function umnShoppingCart() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/umnShoppingCart/umnShoppingCart.view.html',
            controller: 'UmnShoppingCart',
            controllerAs: 'cartVm'
        };
    }
})();