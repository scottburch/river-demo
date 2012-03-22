define(function() {
    "use strict";

    window.river({
        riverPath:'vendor/river',
        modulesPath:'modules', 
        modules: [
            {path:'logging'},
            {path:'eventLogging'},
            {path:'commonUtils'},
            {path:'desktop'},
            {path:'taskCreator'},
            {path: 'jquery'},
            {path: 'serverRequest'},
            {path: 'taskList'},
            {path: 'mustache'}
        ]
    });
});
