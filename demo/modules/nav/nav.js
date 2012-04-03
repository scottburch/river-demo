defineModule(function(that) {

    var navView;

    that.on_knockout_taskerTemplateRendered = function() {
        navView = NavView(that);
        that.doAction('renderKoTemplate', {name:'nav', to:'navigation', template:'templates/nav.html', viewModel:navView});
    };


    that.on_knockout_navTemplateRendered = function(data) {
        that.fireEvent('ready');
    };

    that.do_addNavButton = function(data) {
        navView.buttons.push({text:data.text, action:data.action});
    };

    function NavView(mod) {
        var that = {
            buttons: ko.observableArray([]),
            buttonClicked: function(data) {
                mod.doAction(data.action);
            }
        };

        return that;
    }

});