(function () {
    'use strict';
    angular.module('CmtMgmt',
        [
            'ngSanitize',
            'ngMaterial',
            'ngMdIcons',
            'ui.router'
        ]);   
})();




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
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

})();


(function () {
    'use strict';

    angular
      .module('CmtMgmt')
      .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, chrome, $http) {

        /*app RUN**/
    }
    runBlock.$inject = ["$rootScope", "chrome", "$http"];

})();



(function () {
    'use strict';
    angular.
        module('CmtMgmt')
        .value('chrome', window.chrome);

    angular
		.module('CmtMgmt')
		.constant('storageTypes', {
		    local: 'local',
		    sync: 'sync'
		});

    angular.module('CmtMgmt')
       .constant('domainEvents', {
           rulesChanged: 'rulesChanged',
           profileLoaded: 'profileLoaded',
           openMenu: 'openMenu'
       });

})();
(function () {
    'use strict';

    angular.module('CmtMgmt')
        .controller('topicCtrl', topicCtrl);

    /** @ngInject */
    function topicCtrl($scope) {
    }
    topicCtrl.$inject = ["$scope"];
})();
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
    topicService.$inject = ["$rootScope", "$q"];
})();