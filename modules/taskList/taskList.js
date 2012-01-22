defineModule({name:'taskList', category:'task', description:'Task creator'}, function (that) {

    var tasks = [];

    that.on_desktop_ready = function () {
        renderList();
    };

    that.on_serverRequest_taskReceived = function(data) {
        renderTask(data);
    };

    that.on_serverRequest_taskUpdated = function(data) {
        that.require('text!task.html', function(template) {
            var html = Mustache.render(template, data);
            that.doAction('setInnerHtml', {html:html, selector: '#task-'+data.id, cb: function() {
                attachEditButton(data);
            }});
        });
    };

    function renderTask(data) {
        that.require('text!task.html', function(template) {
            var html = Mustache.render(template, data);
            that.doAction('appendHtml', {html:html, selector: '#taskList', cb: function() {
                attachEditButton(data);
            }});
        });
    }

    function renderList() {
        that.require('text!taskList.html', function (template) {
            that.doAction('appendHtml', {html:template, selector:'#taskList'});
        });
    }

    function attachEditButton(data) {
        that.doAction('addClickEvent', {selector:'#taskEditBtn-'+data.id, onClick:function () {
            editTask(data);
        }});
    }

    function editTask(data) {
        that.require('text!taskEdit.html', function(template) {
            that.doAction('setInnerHtml', {selector: '#task-'+data.id, html:Mustache.render(template, data), cb: function() {
                that.doAction('addSubmitEvent', {selector:'#updateTask-'+data.id, onSubmit:function (values) {
                    values.id = data.id;
                    updateTask(values);
                }});
            }})
        });
    }

    function updateTask(data) {
        that.fireEvent('taskUpdated', data);
    }
});