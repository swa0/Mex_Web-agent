//header滑動時改變背景
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 50)
        {
            $("header")
            .addClass("scroll");
        }
        else
        {
            $("header")
            .removeClass("scroll");
        }
    })
})

//jumpWindow
$(function(){
    $(".jumpWindow .close_ic,.jumpWindow .close").on("click",function(){
        $(".filter,.jumpWindow")
        .removeClass("display");
    })

    //代理申請
    $("header .joinAgent, .agentWrap .agBlock.joinUS .joinAgent").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.agentWindow")
        .addClass("display");
    })

    $(".agentWindow .check p").on("click",function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter,.jumpWindow.ruleWindow")
        .addClass("display");
    })
})

//goTop
$(function(){
	$(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 0){
                $(".goTop")
                .addClass("display")
        } else{
                $(".goTop")
                .removeClass("display");
        };
	})

    $(".goTop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop: 0
        },500)
    })
})