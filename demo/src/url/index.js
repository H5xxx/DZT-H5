define(function(require, exports) {
    var config = require('../config');

    return ({
        getWord: '/word'
    }).map(function(url){
        return config.host + url;
    });
});