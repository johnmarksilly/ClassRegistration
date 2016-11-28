(function () {
    'use strict';

    angular
        .module('umn')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = [];

    function NavigationController() {
        /* jshint validthis:true */
        var vm = this;
    }
})();
