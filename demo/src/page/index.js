define(function(require, exports) {

    var Page = require('../proto/page');

    var page = new Page({
        el: $('#main-container')
    });

    return page;

});