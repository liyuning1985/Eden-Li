define([
], function() {
    'use strict';
    var Ctrl = ["$scope"];
    var fn = function($scope){
        $scope.ccc = "sssssss";
    }
    Ctrl.push(fn);
    return Ctrl;
});
