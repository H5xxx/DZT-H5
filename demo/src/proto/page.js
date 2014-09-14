define(function(require, exports) {

    var Page = Spine.Stack.sub({

        controllers: {},

        routes: {
            '/': 'home'
        },

        'default': 'home',

        num: 0,

        add: function(scene){
            var page = this;

            scene.page = page;
            scene.id = page.num = page.num + 1;

            return Page.__super__.add.apply(page, arguments);
        },

        init: function(){
            var page = this;

            // 所有class="j-nav" data-nav="/xxx"的点击会跳转到/xxx
            this.el.delegate('.j-nav', 'click', function(e){
                page.navigate($(e.currentTarget).attr('data-nav'));
            });

            Spine.Route.setup();
        }
    });

    return Page;

});