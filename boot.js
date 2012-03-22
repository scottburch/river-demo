define(function() {
    "use strict";

    window.requireConfig = {
        paths: {river: 'vendor/river',modules:'modules'}
    };
    require.config(requireConfig);



    require(['river/lib/Application'], function(App) {
        App.start('js', [
            {name:'logging'},
            {name:'eventLogging'},
            {name:'commonUtils'},
            {name:'desktop'},
            {name:'taskCreator'},
            {name: 'jquery'},
            {name: 'serverRequest'},
            {name: 'taskList'},
            {name: 'mustache'}
        ]);
    });
});
