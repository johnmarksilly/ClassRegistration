(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnSimpleCourse', umnSimpleCourse);

    function umnSimpleCourse() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                course: '=',
                index: '='
            },
            bindToController: true,
            templateUrl: 'app/components/umnSimpleCourse/umnSimpleCourse.view.html',
            controller: 'UmnSimpleCourseController',
            controllerAs: 'simpleCourseVm'
        };
    }
})();