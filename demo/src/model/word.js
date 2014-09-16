define(function(require, exports) {
    var url = require('../url/index');

    var Word = require('../proto/model').sub();

    Word.configure('Word', 'id', 'name', 'message');

    Word.extend({
        url: url.getWord
    });

    return Word;
});