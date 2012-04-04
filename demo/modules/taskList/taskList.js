defineModule(function(that) {

    var taskListView;

    that.on_moduleManager_modulesLoaded = function() {
        that.doAction('loadCss', {href:'css/taskList.css'});
    };


    that.on_knockout_taskerTemplateRendered = function() {
        that.require('views/TaskListView', function(TaskListView) {
            taskListView = TaskListView(helpers);
            that.doAction('renderKoTemplate', {name:'taskList', to:'taskList', template:'templates/taskList.html', viewModel:taskListView});
        });
    };

    that.on_knockout_taskListTemplateRendered = function() {
        that.doAction('loadTasks');
    };

    that.on_domain_taskAdded = function(task) {
        that.require('views/TaskListEntry.js', function(TaskListEntry) {
            taskListView.tasks.push(TaskListEntry(task));
        });
    };

    that.on_domain_taskUpdated = function(task) {
        taskListView.tasks.find('id', task.id).title(task.title);
    };

    that.on_serverRequest_taskMarkedDone = function(task) {
        taskListView.tasks.find('id', task.id).done(task.done);
    };

    that.on_domain_taskDeleted = function(data) {
        taskListView.tasks.remove(function(it) {
            return it.id === data.id;
        });
    };

    var helpers = {
        taskSelected: function(entry) {
            that.fireEvent('taskSelected', entry.task);
        }
    }
});