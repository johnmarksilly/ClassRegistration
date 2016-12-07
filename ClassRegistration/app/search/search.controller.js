(function () {
    'use strict';

    angular
        .module('umn')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['courseService', 'shoppingCartService'];

    function SearchController(courseService, shoppingCartService) {
        var vm = this;

        var test = [{"id":"e5fc06ba-a8f8-4182-a5bd-e3dd266848e3","key":"GDES 1311","major":"GDES","number":1311,"title":"Foundations: Drawing and Design in Two and Three Dimensions","description":"Design elements and principles in context of observational drawing. Integrative approach to two-dimensional design, three-dimensional design, and drawing. Broad conceptual framework for design exploration. Emphasizes perceptual aspects of visual forms.","semester":"Spring","credits":4,"prerequisites":null,"sections":[{"id":0,"name":"Laboratory Section 0","information":[{"icon":"group","title":"Available Seats","content":"1/73"},{"icon":"today","title":"Available Waitlist Seats","content":"10/14"},{"icon":"person","title":"Professor","content":"Matt Smith"},{"icon":"location_on","title":"Location","content":"McNeal Hall 5"},{"icon":"schedule","title":"Meetings","content":"M,W from 5:00pm to 6:00pm"}]}]}]

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

        function addToCart() {
            shoppingCartService.add()
        }
    }
})();