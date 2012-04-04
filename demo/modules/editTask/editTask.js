defineModule(function(that) {
    var editTaskView;

    that.do_editTask = function(task) {
        that.require('views/EditTaskView.js', function(EditTaskView) {
            editTaskView = EditTaskView(editTaskViewHelpers, task);
            that.doAction('renderKoTemplate', {name:'editTask', to:'main', template:'templates/editTask.html', viewModel:editTaskView});
        });
    };

    var editTaskViewHelpers = {
        update: function(data) {
            that.doAction('renderKoTemplate', {name:'waitingForUpdate', to:'main', template:'templates/updating.html'});
            that.doAction('updateTask', {id:data.id, title:data.title, description:data.description});
        }

}


});