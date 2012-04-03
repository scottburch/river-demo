defineModule(function(that) {

    that.on_knockout_ready = function() {
        that.doAction('loadCss', {href:"css/tasker.css"});
        that.doAction('renderKoTemplate', {name:'tasker', to:'page', template:'templates/tasker.html', viewModel:{}});
    };
});