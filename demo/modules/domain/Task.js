define(function () {
    return function (rawTask) {
        var that = {};
        that.update = function (rawTask) {
            that.id = rawTask.id;
            that.title = rawTask.title;
            that.description = rawTask.description;
        };

        that.update(rawTask);
        return that;
    };
});