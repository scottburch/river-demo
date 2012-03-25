defineModule(function(that) {

    var taskListView;

    that.on_knockout_taskerTemplateRendered = function() {
        taskListView = TaskListView(that);
        that.doAction('renderKoTemplate', {name:'taskList', to:'taskList', template:'templates/taskList.html', viewModel:taskListView});
    };

    that.on_knockout_taskListTemplateRendered = function() {
        that.doAction('loadTasks');
    };

    that.on_domain_taskAdded = function(task) {
        taskListView.tasks.push(task);
    };

    function TaskListView(mod) {
        var that = {
            tasks: ko.observableArray([])
        };


        return that;

    }




});