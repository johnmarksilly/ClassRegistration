(function () {
    'use strict';

    angular
        .module('umn')
        .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject = ['$scope','scheduleService'];

    function ScheduleController($scope, scheduleService) {
        var vm = this;

        // Variables
        vm.courses;

        // Method Declarations
        vm.init = init;

        // Initialization
        vm.init();

        // Method Definitions
        function init() {
            vm.courses = scheduleService.courses;

            $scope.$watch(function () {
                return scheduleService.courses;
            }, function (newVal, oldVal) {
                vm.courses = newVal;
            });
        }
    }
})();