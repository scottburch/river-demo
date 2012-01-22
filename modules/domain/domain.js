defineModule({name:'domain', category:'flow', description:'Flow domain'}, function(that) {

    that.on_serverRequest_taskReceived = function(values) {
        that.fireEvent('taskReceived', values);
    };

});