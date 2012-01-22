defineModule({name:'taskCreator', category:'task', description:'Task creator'}, function (that) {

    that.on_desktop_ready = function () {
        renderCreator();
    };

    function renderCreator() {
        that.require('text!taskCreator.html', function (template) {
            that.doAction('setInnerHtml', {html:template, selector:'#createTask'});
            that.doAction('addSubmitEvent', {selector:'#createTaskForm', onSubmit:function (values) {
                that.fireEvent('taskEntered', values);
            }});
        });
    }


});