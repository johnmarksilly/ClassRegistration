(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnButton', umnButton);

    function umnButton() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                title: '=',
                icon: '=',
                direction: '='
            },
            bindToController: true,
            templateUrl: 'app/components/umnButton/umnButton.view.html',
            controller: 'UmnButtonController',
            controllerAs: 'buttonVm'
        }
    }
})();