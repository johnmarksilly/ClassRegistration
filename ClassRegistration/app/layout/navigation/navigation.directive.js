(function() {
    'use strict';

    angular
        .module('umn')
        .directive('umnNavigation', umnNavigation);

    umnNavigation.$inject = [];
    
    function umnNavigation() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                showSearch: '=',
                searchFunction: '='
            },
            bindToController: true,
            templateUrl: 'app/layout/navigation/navigation.view.html',
            controller: 'NavigationController',
            controllerAs: 'navVm'
        };
    }
})();