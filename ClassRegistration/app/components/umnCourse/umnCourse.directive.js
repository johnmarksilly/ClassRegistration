(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnCourse', umnCourse);

    function umnCourse() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            bindToController: true,
            templateUrl: 'app/components/umnCourse/umnCourse.view.html',
            controller: 'UmnCourseController',
            controllerAs: 'courseVm'
        }
    }
})();