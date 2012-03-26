defineModule({name:'loaders', category:'River', description:'Loaders for css...'}, function (that) {

    that.do_loadCss = function(data, mod) {
        var el = document.createElement('link');
        el.setAttribute('rel', 'stylesheet');
        el.setAttribute('href', (window.requireConfig.baseUrl || '') + mod.modulePath + '/' + data.href);
        document.getElementsByTagName("head")[0].appendChild(el);
    };
});
