defineModule(function(that) {

    var tasks = {};

    that.on_serverRequest_taskReceived = function(rawTask) {
        var task = tasks[rawTask.id];
        if(task) {
            that.fireEvent('taskUpdated', task);
        } else {
            task = tasks[rawTask.id] = rawTask;
            that.fireEvent('taskAdded', task);
        }
    }

});