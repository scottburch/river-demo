defineModule(function(that) {

    that.do_showCreateTask = function() {
        that.require('views/CreateTaskView.js', function(CreateTaskView) {
            that.doAction('renderKoTemplate', {name:'createTask',to:'main',template:'templates/createTask.html', viewModel: CreateTaskView(createTaskViewHelpers)});
        });
    };

    that.on_nav_ready = function() {
        that.doAction('addNavButton', {text:'Add Task',action:'showCreateTask'});
    };

    var createTaskViewHelpers = {
        create: function(title, description) {
            that.doAction('renderKoTemplate', {name:'waitingForCreation', to:'main', template:'templates/waiting.html'});
            that.doAction('createTask', {title:title, description:description});
        }
    }

});