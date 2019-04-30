$(document).ready(function(){
    /*----------------------------------------*/
        $(".k  ").hover(
        function(){
            $(this).css("z-index","5");
            
        }
                ,
        function(){
            $(this).css("z-index","1");
        });
    $(".bt-contact").click(function(){
        
        $(".contact").slideToggle(500);
    });
    
    /*----------------------------------------*/
    $(".section-2 .container-fluid .row .k , .section-3 .container-fluid .row .bi ").hover(
        function(){
            $(this).children(".cont").children(".info").css("display","block");
            
        }
                ,
        function(){
             $(this).children(".cont").children(".info").css("display","none");
        });
    /*-----------------------*/
    $(".bt-contact").click(function(){
        
        $(".contact").slideDown(1000);
    });
    /*----------------------------------*/
    if($(window).scrollTop()>2550){
        $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
        });
    }

    /*-------------------------------------*/
    $("body").niceScroll();
});