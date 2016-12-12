(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnDay', umnDay);

    function umnDay() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                day: '=',
                dayKey: '='
            },
            bindToController: true,
            templateUrl: 'app/components/umnDay/umnDay.view.html',
            controller: 'UmnDayController',
            controllerAs: 'dayVm'
        };
    }
})();