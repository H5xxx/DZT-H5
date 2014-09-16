/*
 * Scene - Home
 */
define(function(require, exports) {
    var util = require('../util/index');

    var Word = require('../model/word');

    var Home = require('../proto/scene').sub({

        el: $('#home'),

        title: 'HOME',

        template: 'tpl-home',

        getData: function(params, callback) {

            util.finish([
                Word.fetch(params)
            ], function(words){
                callback(null, {
                    words: words
                });
            });

        }
    });

    return Home;
});