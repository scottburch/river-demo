(function() {
    "use strict";


    var modules = [
        // modules can be loaded remotely as well as locally
        {path: 'http://scottburch.github.com/river-demo/demo/modules/loaders'},
        {path: 'http://scottburch.github.com/river-demo/demo/modules/logging'},
        {path: 'http://scottburch.github.com/river-demo/demo/modules/eventLogging'},
        {path: 'http://scottburch.github.com/river-demo/demo/modules/knockout'},
        {path: 'http://scottburch.github.com/river-demo/demo/modules/jasmine'},
        {path: 'serverRequest'},
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
