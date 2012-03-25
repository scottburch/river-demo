defineModule(function(that) {

    that.on_moduleManager_modulesLoaded = function() {
        that.doAction('renderKoTemplate', {name:'tasker', to:'page', template:'templates/tasker.html', viewModel:{}});
    };
});