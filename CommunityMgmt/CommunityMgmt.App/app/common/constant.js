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