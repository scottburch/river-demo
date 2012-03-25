defineModule(function(that) {

    var viewTaskView;

    that.on_taskList_taskSelected = that.on_domain_taskUpdated = that.on_domain_taskAdded = function(task) {
        viewTaskView = ViewTaskView(that, task);
        that.doAction('renderKoTemplate', {name:'viewTask', to:'main', template:'templates/viewTask.html', viewModel:viewTaskView});
    };

    that.on_serverRequest_taskMarkedDone = function() {
        viewTaskView.done(true);
    };

    function ViewTaskView(mod, task) {
        return {
            title:ko.observable(task.title),
            description:ko.observable(task.description),
            done: ko.observable(task.done),
            edit: function() {
                mod.doAction('editTask', task);
            },
            markDone: function() {
                mod.doAction('markTaskDone', {task:task});
            }
        }
    }

});