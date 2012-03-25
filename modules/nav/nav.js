defineModule(function(that) {

    that.on_knockout_taskerTemplateRendered = function() {
        that.doAction('renderKoTemplate', {name:'nav', to:'navigation', template:'templates/nav.html', viewModel:navView});
    };

    var navView = {
        addTask: function() {
            that.doAction('showTaskCreator');
        }
    }
});