describe('loaders module', function() {

    var loaders = require('loadersModule');

    describe('loadCss action', function() {
        it('adds a css header', function() {
            loaders.do_loadCss({href: 'loadersTest.css'}, {modulePath:''});
            waitsFor(function() {
                var links = document.getElementsByTagName('link');
                for(var i=links.length;i--;) {
                    if(/loadersTest.css$/.test(links[i].href)) {
                        return true;
                    }
                }
            });
        });
    });

    describe('loadScript action', function() {
        it('adds a script in head', function() {
            loaders.do_loadScript({src: 'loadersTest.js'}, {modulePath:''});
            waitsFor(function() {
                var scripts = document.getElementsByTagName('script');
                for(var i=scripts.length;i--;) {
                    if(/loadersTest.js$/.test(scripts[i].src)) {
                        return true;
                    }
                }
            });
        });
    });


});