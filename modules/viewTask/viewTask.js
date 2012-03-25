defineModule(function(that) {

    that.on_taskList_taskSelected = that.on_domain_taskUpdated = that.on_domain_taskAdded = function(task) {
        that.doAction('renderKoTemplate', {name:'viewTask', to:'main', template:'templates/viewTask.html', viewModel:ViewTaskView(that, task)});
    };

    function ViewTaskView(mod, task) {
        return {
            title:ko.observable(task.title),
            description:ko.observable(task.description),
            edit: function() {
                mod.doAction('editTask', task);
            }
        }
    }

});