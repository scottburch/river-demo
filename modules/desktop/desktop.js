defineModule({name:'desktop', category:'task', description:'Desktop'}, function(that) {

    that.on_moduleManager_modulesLoaded = function() {
        that.doAction('renderReplace', {selector:'body', template:'desktop.html',  cb: function() {
            that.fireEvent('ready');
        }});
    };


});