(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnSection', umnSection);

    function umnSection() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                section: '='
            },
            bindToController: true,
            templateUrl: 'app/components/umnSection/umnSection.view.html',
            controller: 'UmnSectionController',
            controllerAs: 'sectionVm'
        };
    }
})();