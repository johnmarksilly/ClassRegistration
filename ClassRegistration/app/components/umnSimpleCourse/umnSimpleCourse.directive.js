(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnSimpleCourse', umnSimpleCourse);

    function umnSimpleCourse() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/umnSimpleCourse/umnSimpleCourse.view.html',
            controller: 'UmnSimpleCourseController',
            controllerAs: 'simpleCourseVm'
        };
    }
})();