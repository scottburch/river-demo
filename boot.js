define(function() {
    "use strict";
    window.environment = window.location.hostname === 'localhost' ? 'development' : 'production';

    window.assert = function (test, text) {
        if (!test) {
            setTimeout(function () {
                throw text;
            }, 0);
        }
    };

    var riverModulesDir = 'vendor/river/modules';

    require(['lib/Application'], function(Application) {
        window.Application = Application;
        Application.start('js', [
            {dir: riverModulesDir, name:'module'},
            {dir: riverModulesDir, name:'model'},
            {dir: riverModulesDir, name:'logging'},
            {dir: riverModulesDir, name:'eventLogging'},
            {dir: riverModulesDir, name:'commonUtils'},
            {name:'desktop'},
            {name:'taskCreator'},
            {name: 'jquery'},
            {name: 'serverRequest'},
            {name: 'taskList'},
            {name: 'mustache'}
        ]);
    });
});