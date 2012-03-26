defineModule({category:'logging', description:'Event logging'}, function(that) {

    that.on_moduleManager_eventFired = function(data) {
        that.doAction('log', ['Event: '+data.moduleName, data.event, data.data]);
    };

    that.on_moduleManager_actionRequested = function(data) {
        if(data.action !== 'log') {
            that.doAction('log', ['Action: '+data.module.name, data.action, data.data]);
        }
    };

});



