(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnDropdown', umnDropdown);

    function umnDropdown() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/umnDropdown/umnDropdown.view.html',
            controller: 'UmnDropdownController',
            controllerAs: 'dropdownVm'
        };
    }
})();