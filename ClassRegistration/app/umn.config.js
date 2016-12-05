(function () {
    'use strict';

    angular
        .module('umn')
        .config(umnConfig);

    umnConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function umnConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('search');

        $stateProvider
            .state('search', {
                url: '/search',
                templateUrl: 'app/search/search.view.html',
                controller: 'SearchController',
                controllerAs: 'searchVm'
            })
            .state('schedule', {
                url: '/schedule',
                templateUrl: 'app/schedule/schedule.view.html',
                controller: 'ScheduleController',
                controllerAs: 'scheduleVm'
            });
    }
})();