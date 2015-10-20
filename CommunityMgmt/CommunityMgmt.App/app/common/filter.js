(function () {
    'use strict';
    angular.
        module('CmtMgmt')
        .filter('momentFormat', momentFormat
        );
    /** @ngInject */
    function momentFormat(moment) {
        return function (dateString, format) {
            return moment(dateString).format(format);
        };
    };



})();