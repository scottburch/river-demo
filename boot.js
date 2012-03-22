define(function() {
    "use strict";

    window.requireConfig = {
        paths: {river: 'vendor/river'}
    };
    require.config(requireConfig);



    require(['river/lib/Application'], function(App) {
        App.start('modules', [
            {path:'logging'},
            {path:'eventLogging'},
            {path:'commonUtils'},
            {path:'desktop'},
            {path:'taskCreator'},
            {path: 'jquery'},
            {path: 'serverRequest'},
            {path: 'taskList'},
            {path: 'mustache'}
        ]);
    });
});
