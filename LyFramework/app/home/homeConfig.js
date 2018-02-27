define(["router"],
    function (router) {
        "use strict";
        var urlPath = "";
        router.state("home","app/home/home.html", "app/home/homeCtrl.js");
        router.state("home.custom","app/home/custom.html","app/home/customCtrl.js",["customUrl","customParams"]);
        router.home("home");
        //router.state("home",ngixUrl+"app/portal/home/home_new.html",ngixUrl+"app/portal/home/homeCtrl",["label"]);
        return function () {
            //router.menu("main", ["home"], "home", i18n.common_term_homePage_label || "首页");
        }
    }
);

