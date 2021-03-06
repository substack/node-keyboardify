var $ = require('jquery-browserify');
var keyboardify = require('keyboardify');

$(window).ready(function () {
    var keyboard = keyboardify()
        .appendTo($('#keyboard'))
        .on('key', function (key) {
            $('#box').val($('#box').val() + key)
        })
    ;
    keyboard.element.hide();
    
    $('#toggle').toggle(
        function (ev) {
            ev.preventDefault();
            keyboard.element.show();
            $(this).text('hide');
        },
        function (ev) {
            ev.preventDefault();
            keyboard.element.hide();
            $(this).text('show');
        }
    );
});
