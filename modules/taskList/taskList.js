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
        taskListView.tasks.push(TaskListEntry(task));
    };

    that.on_domain_taskUpdated = function(task) {
        taskListView.tasks.find('id', task.id).title(task.title);
    };

    function TaskListView(mod) {
        var that = {
            tasks: ko.observableArray([])
        };

        that.taskSelected = function(entry) {
            mod.fireEvent('taskSelected', entry.task);
        };

        return that;
    }

    function TaskListEntry(task) {
        var that = {
            title: ko.observable(task.title),
            task: task,
            id: task.id
        };
        return that;
    }


});