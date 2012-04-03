describe('logging module', function() {

    var oldConsole = window.console;
    var loggingMod = require('loggingModule');

    beforeEach(function() {
        window.console = {log: function() {}};
        spyOn(window.console, 'log')
    });

    it('wraps a non array in array',  function() {
        loggingMod.do_log('testing');
        expect(console.log).toHaveBeenCalledWith(['testing']);
    });

    it('passes arrays directly to log', function() {
        var arr = [1,2,3];
        loggingMod.do_log(arr);
        expect(console.log).toHaveBeenCalledWith(arr);
    });

    afterEach(function() {
        window.console = oldConsole;
    });
});