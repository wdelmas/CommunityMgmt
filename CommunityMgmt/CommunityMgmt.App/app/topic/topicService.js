(function () {
    'use strict';
    angular.module('CmtMgmt')
		.service('topicService', topicService)

    var tokenName = 'ngStorage-tokens';

    /** @ngInject */
    function topicService($rootScope, $q) {

        return {
            get: getAll
        };

        function getAll() {

        }
    }
})();