(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnInfoBox', umnInfoBox);

    function umnInfoBox() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/umnInfoBox/umnInfoBox.view.html',
            controller: 'UmnInfoBoxController',
            controllerAs: 'infoBoxVm',
            scope: {
                ibIcon: '=',
                ibTitle: '=',
                ibContent: '='
            },
            bindToController: true
        };
    }
})();