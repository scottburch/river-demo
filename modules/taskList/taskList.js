defineModule({name:'taskList', category:'task', description:'Task creator'}, function (that) {

    that.on_desktop_ready = function () {
        renderList();
    };

    that.on_serverRequest_taskReceived = renderTask;
    that.on_serverRequest_taskUpdated = updateTask;
    that.on_serverRequest_taskDeleted = deleteTask;


    function deleteTask(data) {
        that.doAction('removeHtml', {selector: '#task-'+data.id});
    }

    function updateTask(data) {
        that.doAction('renderReplace', {selector:'#task-'+data.id, template:'task.html', view:data, cb: function() {
            attachEditButton(data);
            attachDeleteButton(data);
        }});
    };


    function renderTask(data) {
        that.doAction('renderAppend', {selector: '#taskList', template: 'task.html', view:data, cb: function() {
            attachEditButton(data);
            attachDeleteButton(data);
        }});
    }

    function renderList() {
        that.doAction('renderAppend', {selector: '#taskList', template:'taskList.html'})
    }

    function attachEditButton(data) {
        that.doAction('addClickEvent', {selector:'#taskEditBtn-'+data.id, onClick:function () {
            editTask(data);
        }});
    }

    function attachDeleteButton(data) {
        that.doAction('addClickEvent', {selector:'#taskDeleteBtn-'+data.id, onClick:function () {
            that.fireEvent('taskDeleted',data);
        }});
    }


    function editTask(data) {
        that.doAction('renderReplace', {selector: '#task-'+data.id, template: 'taskEdit.html', view:data, cb: function() {
            attachSubmitButton(data);
        }});
    }

    function attachSubmitButton(data) {
        that.doAction('addSubmitEvent', {selector:'#updateTask-'+data.id, onSubmit:function (values) {
            values.id = data.id;
            that.fireEvent('taskUpdated', values);
        }});
    }


});