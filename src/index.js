
var $ = require('jquery');
var Str = require('./constant');

var App = function() {
    // console.log(Str);
    $('body').html(Str);
};

var app = new App();

app.get = function() {};
