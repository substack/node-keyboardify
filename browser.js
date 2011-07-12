var $ = require('jquery-browserify');
var EventEmitter = require('events').EventEmitter;

module.exports = function () {
    var self = new EventEmitter;
    
    var div = self.element = $('<div>')
        .text('meow')
    ;
    
    self.appendTo = function () {
        div.appendTo.apply(div, arguments);
        return self;
    };
    
    return self;
};
