defineModule(function (that) {

    var compiledTemplates = {};

    that.on_moduleManager_modulesLoaded = function() {
        window.requireConfig.paths.text = that.modulePath + '/vendor/text';
        require.config(window.requireConfig);
        that.require('vendor/knockout.js', function() {
            extendKo();
            that.fireEvent('ready');
        });
    };


    that.do_renderKoTemplate = function(data, module) {
        getTemplate(module, data, function(html) {
            var el = document.getElementById(data.to);
            if(!el) {
                throw "can not render template to missing element id:"+data.to;
            }
            el.innerHTML = html;
            ko.applyBindings(data.viewModel, el);
            that.fireEvent(data.name + 'TemplateRendered', data);
        });
    };

    function getTemplate(module, data, cb) {
        var path = module.modulePath + '/' + data.template;

        var template = compiledTemplates[path];
        if (!template) {
            require(['text!' + path], function (tmpl) {
                template = compiledTemplates[path] = tmpl;
                doCallback();
            });
        } else {
            doCallback();
        }
        function doCallback() {
            cb(template);
        }

    }


    function extendKo() {
        // Extend knockout
        ko.observableArray.fn.find = function(propName, value) {
            var items = this();
            for(var i=items.length;i--;) {
                var item = items[i];
                if(ko.utils.unwrapObservable(item[propName]) === value) {
                    return item;
                }
            }
        };

        ko.observableArray.fn.setAt = function(value, idx) {
            var items = this();
            items[idx] = value;
            this(items);
        };

        ko.observableArray.fn.getAt = function(idx) {
            return this()[idx];
        };

        // creates a proxy for a single element in an array that updates the array
        ko.observableArray.fn.proxy = function(idx) {
            var that = this;
            var proxy = ko.observable(that.getAt(idx));
            proxy.subscribe(function(v) {
                that.setAt(v, idx);
            });
            return proxy;
        };

        // Fixes a problem in knockout where it does not set id attributes properly
        ko.bindingHandlers.id = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                element.id = valueAccessor();
            }
        };
    }
});