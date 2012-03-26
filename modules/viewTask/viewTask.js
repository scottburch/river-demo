defineModule(function(that) {

    var viewTaskView;

    that.on_taskList_taskSelected = that.on_domain_taskUpdated = that.on_domain_taskAdded = function(task) {
        viewTaskView = ViewTaskView(that, task);
        that.doAction('renderKoTemplate', {name:'viewTask', to:'main', template:'templates/viewTask.html', viewModel:viewTaskView});
    };

    that.on_serverRequest_taskMarkedDone = function() {
        viewTaskView.done(true);
    };

    that.on_domain_taskDeleted = function(data) {
        if(viewTaskView.task.id === data.id) {
            that.doAction('renderKoTemplate', {name:'taskDeleted', to:'main', template:'templates/taskDeleted.html'});
        }
    }




    function ViewTaskView(mod, task) {
        return {
            task:task,
            title:ko.observable(task.title),
            description:ko.observable(task.description),
            done: ko.observable(task.done),
            edit: function() {
                mod.doAction('editTask', task);
            },
            markDone: function() {
                mod.doAction('markTaskDone', {task:task});
            },
            remove: function() {
                mod.doAction('deleteTask', {task:task});
            }
        }
    }

});