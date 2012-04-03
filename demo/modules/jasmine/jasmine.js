defineModule(function(that) {

    that.on_moduleManager_modulesLoaded = function() {
        /jasmine|spec=/.test(window.location.href) && loadJasmine();
    };

    that.filterEvents = function(data, cb) {
        if(/jasmine|spec=/.test(window.location.href) && data.event === 'modulesLoaded') {
            cb(data.module.name === 'jasmine');
        } else {
            cb(true);
        }
    };


    function loadJasmine() {
        document.querySelector('body').innerHTML = '';
        that.doAction('loadCss', {href:'vendor/jasmine/jasmine.css'});
        that.require('vendor/jasmine/jasmine.js', function() {
            that.require('vendor/jasmine/jasmine-html.js', loadTests);
        });
    }


    function loadTests() {
        async.forEach(require('river/lib/ModuleManager').getModules(), function(mod, cb) {
            mod.jasmineSpecs ? mod.require(mod.jasmineSpecs, cb) : cb();
        }, runTests);
    }

    function runTests() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 1000;

        var trivialReporter = new jasmine.TrivialReporter();

        jasmineEnv.addReporter(trivialReporter);

        jasmineEnv.specFilter = function(spec) {
            return trivialReporter.specFilter(spec);
        };

        jasmineEnv.execute();
    }
});