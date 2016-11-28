(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnInputDropdown', umnInputDropdown);

    function umnInputDropdown() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/umnInputDropdown/umnInputDropdown.view.html',
            controller: 'UmnInputDropdownController',
            controllerAs: 'inputVm'
        };
    }
})();