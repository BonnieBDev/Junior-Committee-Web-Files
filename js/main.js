var app = {

    init: function(){   

        this.tabshow() 

    },

    tabshow: function(){   

        $('.tab').on('click', function(){
            $(this).parent().find('.tab').removeClass('active');
            $(this).addClass('active')

            var index = $(this).index();
            $(this).parent().next().find('.tab-box').removeClass('active').eq(index).addClass('active');
        });

    },

}


$(function() {  app.init() });
