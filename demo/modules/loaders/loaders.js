defineModule({name:'loaders', category:'River', description:'Loaders for css...'}, function (that) {

    that.do_loadCss = function(data, mod) {
        var el = document.createElement('link');
        el.setAttribute('rel', 'stylesheet');
        el.setAttribute('href', toUrl(data.href, mod));
        document.getElementsByTagName("head")[0].appendChild(el);
    };

    that.do_loadScript = function(data, mod) {
        var el = document.createElement('script');
        el.setAttribute('type', 'text/javascript');
        el.setAttribute('src', toUrl(data.src, mod));

        if(data.name) {
            el.addEventListener('load', function() {
                that.fireEvent(data.name + 'Loaded');
            });
        }

        document.getElementsByTagName('head')[0].appendChild(el);
    };

    function toUrl(path, mod) {
        return (window.requireConfig.baseUrl || '') + mod.modulePath + '/' + path;
    }

    that.jasmineSpecs = [
        'specs/loadersSpec.js'
    ];

});
