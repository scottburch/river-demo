defineModule(function(that) {

    that.do_showCreateTask = function() {
        that.doAction('renderKoTemplate', {name:'createTask',to:'main',template:'templates/createTask.html', viewModel: CreateTaskView(that)});
    };

    that.on_nav_ready = function() {
        that.doAction('addNavButton', {text:'Add Task',action:'showCreateTask'});
    };

    function CreateTaskView(mod) {
        var that = {
            title: ko.observable(),
            description: ko.observable()
        };

        that.create = function() {
            mod.doAction('renderKoTemplate', {name:'waitingForCreation', to:'main', template:'templates/waiting.html'});
            mod.doAction('createTask', {title:that.title(), description:that.description()});
        };
        return that;
    }
});