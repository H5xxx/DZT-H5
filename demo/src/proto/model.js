define(function(require, exports) {
    var util = require('../util');

    var Model = Spine.Model.sub();

    Model.extend({
        url: '',

        fetch: util.currilize(function(params, callback){
            var fetched = Model.fetched = Model.fetched || {},
                url = util.format(Model.url, params);

            // with cache
            if(fetched[url]){
                cb(null, fetched[url]);

            // without cache
            }else{
                $.getJSON(url, function(list){

                    list.forEach(function(item){
                        Model.create(item);
                    });

                    // cache result
                    fetched[url] = list;

                    cb(null, list);
                });
            }
        })

    });

    return Model;
});