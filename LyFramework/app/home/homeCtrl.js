define([

], function() {
    'use strict';
    var Ctrl = ["$scope","$state"];
    var fn = function($scope,$state){
        $scope.test = "这个是home的测试";


        $scope.goView = function(param){
            var ci_view = "app/business/"
            if(param == 1) {
                ci_view = ci_view+"sysManage/sysManage.html";
            }else if(param == 2){
                ci_view = ci_view+"userManage/userManage.html";
            }
            $state.go("home.custom", {customUrl: ci_view});
        }
    };
    Ctrl.push(fn);
    return Ctrl;
});
