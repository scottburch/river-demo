defineModule(function(that) {

    var tasks = {};

    that.on_serverRequest_taskReceived = function(rawTask) {
        var task = tasks[rawTask.id];
        if(task) {
            task.update(rawTask);
            that.fireEvent('taskUpdated', task);
        } else {
            task = tasks[rawTask.id] = Task(rawTask);
            that.fireEvent('taskAdded', task);
        }
    };

    function Task(rawTask) {
        var that = {};
        that.update = function(rawTask) {
            that.id = rawTask.id;
            that.title = rawTask.title;
            that.description = rawTask.description;
        };

        that.update(rawTask);
        return that;
    };



});