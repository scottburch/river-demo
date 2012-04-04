defineModule(function(that) {

    var viewTaskView;

    that.on_taskList_taskSelected = that.on_domain_taskUpdated = that.on_domain_taskAdded = function(task) {
        that.require('views/ViewTaskView.js', function(ViewTaskView){
            viewTaskView = ViewTaskView(helpers, task);
            that.doAction('renderKoTemplate', {name:'viewTask', to:'main', template:'templates/viewTask.html', viewModel:viewTaskView});
        });
    };

    that.on_serverRequest_taskMarkedDone = function() {
        viewTaskView.done(true);
    };

    that.on_domain_taskDeleted = function(data) {
        if(viewTaskView.task.id === data.id) {
            that.doAction('renderKoTemplate', {name:'taskDeleted', to:'main', template:'templates/taskDeleted.html'});
        }
    };

    var helpers = {
        edit: function(task) {
            that.doAction('editTask', task);
        },
        markDone: function(task) {
            that.doAction('markTaskDone', {task:task});
        },
        remove: function(task) {
            that.doAction('renderKoTemplate', {name:'deletingTask', to:'main', template:'templates/deletingTask.html'});
            that.doAction('deleteTask', {task:task});
        }
    }
});