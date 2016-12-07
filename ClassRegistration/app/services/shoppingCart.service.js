(function () {
    'use strict';

    angular
        .module('umn')
        .factory('shoppingCartService', shoppingCartService)

    shoppingCartService.$inject = [];

    function shoppingCartService() {
        var _classes = [];

        var service = {
            classes: _classes,
            add: add,
            remove: remove
        };
        return service;

        function add(course, section) {
            var item = {
                course: course,
                section: section
            }
            _classes.push(item);
        }

        function remove(index) {
            if (_classes.length > 0) {
                _classes.splice(index, 1);
            }
            else {
                $log.warn('Shopping cart is empty');
            }
        }
    }
})();