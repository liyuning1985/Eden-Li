define([
    "ui-router",
    "router"
], function(router,mod) {
    'use strict';
    var dependency = [
        "ng",
        "ui.router"
    ];
    var Ly = angular.module("Ly", dependency);
    Ly.run(function ($rootScope, $q) {
        var rootScope = $rootScope;
        rootScope.mainPage = "framework/menu/menu.html";
        rootScope.pageTitle = "ServiceOM Home";
    });
    return Ly;
});
