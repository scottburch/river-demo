define(function () {
    return function(helpers, task) {
        return {
            task:task,
            title:ko.observable(task.title),
            description:ko.observable(task.description),
            done:ko.observable(task.done),
            edit:function () {
                helpers.edit(task);
            },
            markDone:function () {
                helpers.markDone(task);
            },
            remove:function () {
                helpers.remove(task);
            }
        }
    }
});