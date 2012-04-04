define(function () {
    return function (helpers) {
        var that = {
            title:ko.observable(),
            description:ko.observable()
        };

        that.create = function () {
            helpers.create(that.title(), that.description());
        };
        return that;
    }
});