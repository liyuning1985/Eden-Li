define(function (require) {
    "use strict";
    var mod = [
        require('app/home/homeConfig')
    ];
    for (var i in mod){
        var func = mod[i];
        if (typeof func == "function"){
            func();
        }
    }
});
