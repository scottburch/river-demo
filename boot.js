(function() {
    "use strict";


    window.river({
        riverPath:'vendor/river',
        modulesPath:'modules', 
        modules: [
            // modules can be loaded remotely as well as locally
            {path: 'http://scottburch.github.com/river-demo/demo/modules/loaders'},
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
