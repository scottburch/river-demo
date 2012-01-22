defineModule({name:'desktop', category:'task', description:'Desktop'}, function(that) {

    that.on_moduleManager_modulesLoaded = function() {
        that.require(['text!desktop.html'], function(template){
            that.doAction('setInnerHtml', {selector: 'body', html:template});
            that.fireEvent('ready');
        });
    };


});