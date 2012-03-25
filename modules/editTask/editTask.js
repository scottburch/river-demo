defineModule(function(that) {
    var editTaskView;

    that.do_editTask = function(task) {
        editTaskView = EditTaskView(that,task);
        that.doAction('renderKoTemplate', {name:'editTask', to:'main', template:'templates/editTask.html', viewModel:editTaskView});
    };


    function EditTaskView(mod,task) {
        var that = {
            title: ko.observable(task.title),
            description: ko.observable(task.description)
        };


        that.update = function() {
            mod.doAction('renderKoTemplate', {name:'waitingForUpdate', to:'main', template:'templates/updating.html'});
            mod.doAction('updateTask', {id:task.id, title:that.title(), description:that.description()});
        };
        return that;

    }



});