define(function() {
    "use strict";


    window.river({
        riverPath:'vendor/river',
        modulesPath:'modules', 
        modules: [
            {path:'logging'},
            {path:'eventLogging'},
            {path: 'serverRequest'},
            {path: 'knockout'},
            {path: 'tasker'}
        ]
    });
});
