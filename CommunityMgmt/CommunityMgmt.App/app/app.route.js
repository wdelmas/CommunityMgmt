
(function () {
    'use strict';

    angular
      .module('CmtMgmt')
      .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('topic', {
              url: '/topic',
              templateUrl: '/Topic',
              controller: 'topicCtrl',
              controllerAs: 'topicCtrl'
          });

        $urlRouterProvider.otherwise('/topic');
    }

})();
