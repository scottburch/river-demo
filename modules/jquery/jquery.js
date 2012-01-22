defineModule({name:'jquery', category:'lib', description:'jquery abstraction module', requires:['vendor/jquery.js']}, function(that, $j) {

    $j = jQuery.noConflict();

    that.do_setInnerHtml = function(data) {
        $j(data.selector).html(data.html);
        data.cb && data.cb();
    };

    that.do_addClickEvent = function(data) {
        $j(data.selector).click(data.onClick);
        data.cb && data.cb();
    };

    that.do_addSubmitEvent = function(data) {
        $j(data.selector).submit(function() {
            var values = $j(this).serializeArray().reduce(function(ret, it) {
                ret[it.name] = it.value;
                return ret;
            },{});
            data.onSubmit(values);
            data.clear === true && clearForm();
            return false;
        });
        data.cb && data.cb();

        function clearForm() {
            $j(':input', data.selector).not(':submit').val('');
        }

    };

    that.do_appendHtml = function(data) {
        $j(data.selector).append(data.html);
        data.cb && data.cb();
    };

    that.do_removeHtml = function(data) {
        $j(data.selector).remove();
    }



});
