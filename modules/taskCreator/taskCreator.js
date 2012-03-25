defineModule(function(that) {

    that.do_showTaskCreator = function() {
        that.doAction('renderKoTemplate', {name:'taskCreator',to:'main',template:'templates/taskCreator.html', viewModel: TaskCreatorView(that)});
    };

    function TaskCreatorView(mod) {
        var that = {
            title: ko.observable(),
            description: ko.observable()
        };

        that.create = function() {
            mod.doAction('renderKoTemplate', {name:'waitingForCreation', to:'main', template:'templates/waiting.html'});
            mod.doAction('createTask', {title:that.title(), description:that.description()});
        }
        return that;
    }
});