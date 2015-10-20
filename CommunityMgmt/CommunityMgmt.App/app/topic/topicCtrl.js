(function () {
    'use strict';

    angular.module('CmtMgmt')
        .controller('topicCtrl', topicCtrl);

    /** @ngInject */
    function topicCtrl($scope, topicService, $mdDialog) {
        $scope.topics = [];

        topicService.get().then(function (response) {
            $scope.topics = response.data;
            console.log($scope.topics)
        })
        $scope.displayImg = function (model, e) {
            var src = '<div style=" display: flex;align-items: center;justify-content: center;"><img src="' + model.Img[0] + '"></img></div>';
            var title = '<h2 class="theme-topic-title ">' + model.Title + '</h2>'
            var alert = $mdDialog.alert({
                parent: angular.element(document.body),
                title: model.Title,
                content: src,
                ok: 'Close',
                clickOutsideToClose: true

            });
            $mdDialog
             .show(alert)                
             .finally(function () {
                 alert = undefined;
             });
        }

    }
})();