defineModule({name:'moustache', category:'lib', description:'render moustache templates', requires:['modules/mustache/vendor/mustache.js']}, function (that) {

    that.do_renderReplace = function (data, module) {
        module.require('text!'+data.template, function (template) {
           var html = Mustache.render(template, data.view);
           that.doAction('setInnerHtml', {html:html, selector:data.selector, cb:data.cb});
        });
    };

    that.do_renderAppend = function(data, module) {
        module.require('text!'+data.template, function (template) {
            var html = Mustache.render(template, data.view);
            that.doAction('appendHtml', {html:html, selector:data.selector, cb:data.cb});
        });
    }
});