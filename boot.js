define(function() {
    "use strict";

    window.requireConfig = {
        paths: {river: 'vendor/river',modules:'modules'}
    };
    require.config(requireConfig);



    require(['river/lib/Application'], function(App) {
        App.start('js', [
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
