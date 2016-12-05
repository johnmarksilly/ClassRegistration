(function () {
    'use strict';

    angular
        .module('umn')
        .factory('scheduleService', scheduleService);

    scheduleService.$inject = [];

    function scheduleService() {
        var _courses = {
            'Monday': {
                visible: false,
                courses: []
            },
            'Tuesday': {
                visible: false,
                courses: []
            },
            'Wednesday': {
                visible: false,
                courses: []
            },
            'Thursday': {
                visible: false,
                courses: []
            },
            'Friday': {
                visible: false,
                courses: []
            },
            'Saturday': {
                visible: false,
                courses: []
            },
            'Sunday': {
                visible: false,
                courses: []
            }
        }

        var service = {
            courses: _courses
        }
        return service;
    }
})();