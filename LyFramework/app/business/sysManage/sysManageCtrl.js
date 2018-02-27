define([
], function() {
    'use strict';
    var Ctrl = ["$scope"];
    var fn = function($scope){
        $scope.ccc = "cccccccc";
    }
    Ctrl.push(fn);
    return Ctrl;
});
