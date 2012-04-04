define(function() {
    return function(helpers) {
        var that = {
            buttons: ko.observableArray([]),
            buttonClicked: function(data) {
                helpers.doAction(data.action);
            }
        };

        return that;
    };
});