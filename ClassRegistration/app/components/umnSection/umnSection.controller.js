(function () {
    'use strict';

    angular
        .module('umn')
        .controller('UmnSectionController', UmnSectionController);

    UmnSectionController.$inject = ['shoppingCartService'];

    function UmnSectionController(shoppingCartService) {
        var vm = this;

        // Variables
        vm.section;
        vm.course;

        // Method Declarations
        vm.add = add;

        // Initialization

        // Method Definitions
        function add(course, section) {
            shoppingCartService.add(course, section);
        }
    }
})();