define([
    "framework/Ly.js",
    "router",
    "module",
],function(){
    //这个是需要依赖的angular模块
    var dependency = [
        "ng",
        "ui.router",
        "Ly"
    ];

    var framework = angular.module("framework", dependency);
    framework.config(function($stateProvider, $controllerProvider) {
        framework.register = {
            "stateProvider": $stateProvider,
            "controllerProvider": $controllerProvider
        }
    })
    return framework;
});
