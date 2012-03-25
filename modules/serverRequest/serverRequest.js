defineModule({name:'serverRequest', category:'flow', description:'Server request'}, function(that) {

    var idCounter = 0;

    that.do_createTask = function(values) {
        values.id = idCounter++;
        that.fireEvent('taskReceived', values);
    };

    that.on_taskList_taskUpdated = function(data) {
        that.fireEvent('taskReceived', data);
    };

    that.on_taskList_taskDeleted = function(data) {
        that.fireEvent('taskDeleted', data);
    };

    that.do_loadTasks = function() {
        [{id:idCounter++, title:'Create river demo', description:'Create river demo using knockout.'}].forEach(function(task){
            that.fireEvent('taskReceived', task);
        })
    };

});