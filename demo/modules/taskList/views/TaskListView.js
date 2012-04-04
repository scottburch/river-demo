define(function () {
    return function(helpers) {
        return {
            tasks:ko.observableArray([]),
            taskSelected:helpers.taskSelected
        };
    }
});
