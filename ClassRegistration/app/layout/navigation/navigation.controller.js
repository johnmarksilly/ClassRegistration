(function () {
    'use strict';

    angular
        .module('umn')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$state', '$location'];

    function NavigationController($state, $location) {
        /* jshint validthis:true */
        var vm = this;

        // Variables
        vm.currentState;

        // Method Declarations
        vm.go = go;
        vm.init = init;

        // Initialization
        vm.init();

        // Method Definitions
        function init() {
            vm.currentState = $location.path().split('/')[1];
        }

        function go(state) {
            $state.go(state);
        }
    }
})();
