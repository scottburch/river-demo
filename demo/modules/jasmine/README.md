### INTRODUCTION

This module is used to test other modules.  It provides an easy way to run all tests across modules.

### USE

Install this module as normal.

In any other module write the jasmine spec files as normal and then place the following into the module file

    that.jasmineSpecs = [
        'specs/loadersSpec'  // the path to the local spec file within this module directory
    ];

Here is an example spec file from the [loaders](https://github.com/scottburch/river-loaders) module.  See the [jasmine](http://pivotal.github.com/jasmine) documentation for more information.

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

In the browser type in the url as normal except add the word jasmine any place in the url.
This is most easily done by adding __'?jasmine'__ to the end.

For an example see the [river demo](https://github.com/scottburch/river-demo)