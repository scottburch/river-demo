define(function() {
    return function(task) {
        var that = {
            title: ko.observable(task.title),
            done: ko.observable(task.done),
            task: task,
            id: task.id
        };
        return that;
    }
});