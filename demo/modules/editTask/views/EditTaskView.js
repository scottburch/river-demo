define(function () {
    return function (helpers, task) {
        var that = {
            title:ko.observable(task.title),
            description:ko.observable(task.description)
        };

        that.update = function () {
            helpers.update({id:task.id, title:that.title(), description:that.description()});
        };
        return that;
    }
});