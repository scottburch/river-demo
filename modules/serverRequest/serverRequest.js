defineModule({name:'serverRequest', category:'flow', description:'Server request'}, function(that) {

    var idCounter = 0;

    that.on_taskCreator_taskEntered = function(values) {
        values.id = idCounter++;
        that.fireEvent('taskReceived', values);
    };

    that.on_taskList_taskUpdated = function(data) {
        that.fireEvent('taskUpdated', data);
    };

});