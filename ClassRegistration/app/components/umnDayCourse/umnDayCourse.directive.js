(function () {
    'use strict';

    angular
        .module('umn')
        .directive('umnDayCourse', umnDayCourse);

    function umnDayCourse() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                section: '=',
                course: '='
            },
            bindToController: true,
            templateUrl: 'app/components/umnDayCourse/umnDayCourse.view.html',
            controller: 'UmnDayCourseController',
            controllerAs: 'courseVm'
        };
    }
})();