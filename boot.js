define(function() {
    "use strict";
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