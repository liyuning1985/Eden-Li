require.config({
    baseUrl: "../",
    paths: {
        "router": "framework/config/routerConfig",
        "msg": "framework/common/Message/Ly_Message",
        "framework": "framework/framework",
        "ui-router": "lib/ui-router/angular-ui-router",
        "i18n": "lib/i18n/language",
        "module":"framework/module",
        "jquery": "lib/jquery",
        "angular":"lib/angular",
        "sprintf": "lib/sprintf/sprintf.min"
    },
    "shim": {
        "sprintf": {
            "exports": "sprintfjs"
        }
    },
    waitSeconds: 120,
    urlArgs: "v=" + (new Date()).getTime()
});

require.onError = function (error) {
    if (error && error.requireType === "timeout") {
        var message = {
            "zh": "网络异常导致页面加载失败。请检查网络连接后，刷新页面重试。",
            "en": "Failed to load the page due to network exceptions. Ensure that the network is connected and try again."
        };
    }
};

require([
    "framework"
], function (app) {
    angular.bootstrap($("html"), [app.name]);
});
