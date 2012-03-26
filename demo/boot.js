(function() {
    "use strict";


    var modules = [
        // modules can be loaded remotely as well as locally
        {path: 'http://scottburch.github.com/river-demo/demo/modules/loaders'},
        {path:'logging'},
        {path:'eventLogging'},
        {path: 'serverRequest'},
        {path: 'knockout'},
        {path: 'tasker'},
        {path: 'nav'},
        {path: 'viewTask'},
        {path: 'editTask'},
        {path: 'domain'},
        {path: 'taskList'}
    ];

    if(/nocreate/.test(window.location.href) === false) {
        modules.push({path: 'createTask'});
    }

    window.river({
        riverPath:'vendor/river',
        modulesPath:'modules', 
        modules: modules
    });
}());
