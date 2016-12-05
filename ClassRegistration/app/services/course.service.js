(function () {
    'use strict';

    angular
        .module('umn')
        .factory('courseService', courseService);

    courseService.$inject = ['$http', '$q', '$log'];

    function courseService($http, $q, $log) {
        var service = {
            get: get
        }
        return service;

        function get(search) {
            return $http.get('api/course/search?search=' + search)
                .then(getComplete)
                .catch(getFailed);

            function getComplete(response) {
                return response;
            }

            function getFailed(error) {
                $log.error(error);
                return $q.reject(error);
            }
        }
    }
})();