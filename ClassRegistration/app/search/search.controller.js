(function () {
    'use strict';

    angular
        .module('umn')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['courseService'];

    function SearchController(courseService) {
        var vm = this;

        // Variables
        vm.courseResults = [];

        // Method Declarations
        vm.search = search;

        // Initialization

        // Method Definitions
        function search(searchText) {
            courseService.get(searchText)
                .then(function (response) {
                    vm.courseResults = response.data;
                });
        }
    }
})();