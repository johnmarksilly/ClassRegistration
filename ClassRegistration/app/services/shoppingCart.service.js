(function () {
    'use strict';

    angular
        .module('umn')
        .factory('shoppingCartService', shoppingCartService)

    shoppingCartService.$inject = [];

    function shoppingCartService() {
        var _courses = [];

        var service = {
            course: _courses
        };
        return service;
    }
})();