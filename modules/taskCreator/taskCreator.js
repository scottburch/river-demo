defineModule({name:'taskCreator', category:'task', description:'Task creator'}, function (that) {

    that.on_desktop_ready = function () {
        renderCreator();
    };

    function renderCreator() {
        that.doAction('renderReplace', {selector:'#createTask', template:'taskCreator.html', cb: attachSubmit});
    }

    function attachSubmit() {
        that.doAction('addSubmitEvent', {selector:'#createTaskForm', clear: true, onSubmit:function (values) {
            that.fireEvent('taskEntered', values);
        }});
    }
});