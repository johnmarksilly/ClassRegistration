(function () {
    'use strict';

    angular
        .module('umn')
        .controller('UmnDropdownController', UmnDropdownController);

    UmnDropdownController.$inject = [];

    function UmnDropdownController() {
        var vm = this;

        vm.isOpen = false;

        vm.itemList = [
            {
                title: "Fall"
            },
            {
                title: "Spring"
            }
        ]

        vm.selected = vm.itemList[0];

        // Method Declarations
        vm.toggle = _toggle;
        vm.select = _select;

        // Initialization

        // Method Definitions
        function _toggle() {
            vm.isOpen = !vm.isOpen;
        }

        function _select(index) {
            vm.selected = vm.itemList[index];
            vm.isOpen = false;
        }
    }
})();