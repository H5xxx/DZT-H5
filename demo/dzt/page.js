define(function(require, exports) {

    var Page = Spine.Stack.sub({

        controllers: {
            'home': require('../controller/car-home')
        },

        routes: {
            '/': 'home'
        },

        'default': 'home',

        squenceNum: 0,

        add: function(controller){
            var page = this;

            controller.page = page;
            controller.squenceId = page.squenceNum = page.squenceNum + 1;

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