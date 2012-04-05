defineModule(function (that) {

    var tasks = {};

    that.on_serverRequest_taskReceived = function (rawTask) {
        var task = tasks[rawTask.id];
        if (task) {
            task.update(rawTask);
            that.fireEvent('taskUpdated', task);
        } else {
            that.require('Task', function (Task) {
                task = tasks[rawTask.id] = Task(rawTask);
                that.fireEvent('taskAdded', task);
            });
        }
    };

    that.on_serverRequest_taskDeleted = function (data) {
        tasks[data.id] = undefined;
        that.fireEvent('taskDeleted', {id:data.id});
    };


});