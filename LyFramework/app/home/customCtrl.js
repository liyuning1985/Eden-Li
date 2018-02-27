define([
    
], function () {
    'use strict';

    var Ctrl = ["$scope", "$stateParams","$state"];
    var fn = function ($scope, $stateParams,$state) {
        $scope.ctrlLoad = false;
        $scope.customPage = $stateParams.customUrl + "?v=" + (new Date()).getTime();
        if($stateParams && $stateParams.customUrl) {
            var ctrlUrl = $stateParams.customUrl.replace(".html", "Ctrl.js");
            require([ctrlUrl], function(ctrl) {
                $scope.customController = ctrl;
                $scope.ctrlLoad = true;
                $scope.$apply("ctrlLoad");
            })
        }else{
            $state.go("home");
        }
    }
    Ctrl.push(fn);
    return Ctrl;
});

