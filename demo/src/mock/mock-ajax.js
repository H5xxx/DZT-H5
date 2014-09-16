define(function(require, exports) {
    var Mock = require('mock');

    var mock = function(path, handler){
        return Mock.mock(path, function(options){
            var result = handler.apply(this, arguments);

            console.log('[MOCK]', path, 'RESULT:', result);
            return result;
        });
    };

    mock(/\/$/, function(options) {
        return ['Hello', 'World'];
    });
});