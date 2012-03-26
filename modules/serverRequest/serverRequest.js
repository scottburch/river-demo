defineModule({name:'serverRequest', category:'flow', description:'Server request'}, function(that) {

    var idCounter = 0;

    that.do_createTask = function(values) {
        setTimeout(function() {
            values.id = idCounter++;
            that.fireEvent('taskReceived', values);
        },500);
    };

    that.do_updateTask = function(task) {
        setTimeout(function() {
            that.fireEvent('taskReceived', {id:task.id, title:task.title, description:task.description});
        },500);
    };

    that.do_markTaskDone = function(data) {
        setTimeout(function() {
            data.task.done = true;
            that.fireEvent('taskMarkedDone',data.task);
        },500);
    };

    that.do_deleteTask = function(data) {
        setTimeout(function() {
            that.fireEvent('taskDeleted', {id:data.task.id});
        },500);
    };

    that.do_loadTasks = function() {
        [{id:idCounter++, title:'Create river demo', description:'Create river demo using knockout.'}].forEach(function(task){
            that.fireEvent('taskReceived', task);
        })
    };

});