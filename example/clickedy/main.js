var $ = require('jquery-browserify');
var keyboardify = require('keyboardify');

$(window).ready(function () {
    var keyboard = keyboardify()
        .appendTo($('#keyboard'))
    ;
});
