(function() {
    "use strict";


    window.river({
        riverPath:'vendor/river',
        modulesPath:'modules', 
        modules: [
            {path:'logging'},
            {path:'eventLogging'},
            {path: 'serverRequest'},
            {path: 'knockout'},
            {path: 'tasker'},
            {path: 'nav'},
            {path: 'taskCreator'},
            {path: 'viewTask'},
            {path: 'editTask'},
            {path: 'domain'},
            {path: 'taskList'}
        ]
    });
}());
