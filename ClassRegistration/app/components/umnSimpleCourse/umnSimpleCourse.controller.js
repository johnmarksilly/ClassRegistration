(function () {
    'use strict';

    angular
        .module('umn')
        .controller('UmnSimpleCourseController', UmnSimpleCourseController);

    UmnSimpleCourseController.$inject = ['shoppingCartService'];

    function UmnSimpleCourseController(shoppingCartService) {
        var vm = this;

        // Variables
        vm.course;

        // Method Declarations
        vm.remove = remove;

        // Initialization

        // Method Definitions
        function remove(course) {
            shoppingCartService.remove(course);
        }
    }
})();