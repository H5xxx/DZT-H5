define(function(require, exports) {

	require('../mock/mock-ajax');

    var Page = require('../proto/page').sub({

        controllers: {
        	'home': require('../scene/home')
        },

        routes: {
            '/': 'home'
        }

    });

    var page = new Page({
        el: $('#main-container')
    });

    return page;

});