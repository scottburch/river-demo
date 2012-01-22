define(function() {
    "use strict";
    var riverModulesDir = 'vendor/river/modules';

    window.requireConfig = {
        paths: {lib: 'vendor/river/lib',modules:'modules', riverModules:'vendor/river/modules'}
    };
    require.config(requireConfig);



    require(['lib/Application'], function(App) {
        App.start('js', [
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