var $ = require('jquery-browserify');
var EventEmitter = require('events').EventEmitter;

module.exports = function () {
    var self = new EventEmitter;
    
    var style = {
        container : {
            'background-color' : 'rgb(100,100,100)'
        },
        row : {
            'text-align' : 'center',
            display : 'block'
        },
        key : {
            display : 'inline-block',
            cursor : 'pointer',
            width : '45px',
            height : '45px',
            'font-size' : '35px',
            'background-color' : 'rgb(200,200,200)',
            'text-align' : 'center',
            margin : '2px'
        }
    };
    
    var div = self.element = $('<div>')
        .css(style.container)
        .width(500)
        .height(300)
    ;
    
    [ 'qwertyuiop', 'asdfghjkl', 'zxcvbnm' ]
        .map(function (row) { return row.split('') })
        .forEach(function (keys) {
            $('<div>').css(style.row).append(
                keys.map(function (key) {
                    $('<div>')
                        .text(key)
                        .css(style.key)
                        .appendTo(div)
                    ;
                })
            );
        })
    ;
    
    self.appendTo = function () {
        div.appendTo.apply(div, arguments);
        return self;
    };
    
    return self;
};
