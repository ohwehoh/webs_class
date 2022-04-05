(function($){
    // $(".submenu").css("display","block");
    
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });

    //탭메뉴
    var tabMenu = $(".section3");

    // tabMenu.find(".section3__article").hide();
    // tabMenu.find(".section3__article.active").show();

    function tabList(e){
        e.preventDefault();
        var target = $(this);  //사용자가 클릭한 메뉴
        target.parent(".section3A").parent(".section3__article").addClass("active").siblings(".section3__article").removeClass("active");
    }

    tabMenu.find(".section3__article > .section3A > .section3_title").click(tabList);

    //이미지 슬라이드
    var currentIndex = 0;
    setInterval(function(){
        if(currentIndex < 2){
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        var slidePosition = currentIndex * (-1000) + "px";
        $(".slideList").animate({left: slidePosition});
    }, 3000);

    //레이어 팝업
    $(".right").click(function(){
        $(".layer").slideDown(300);
        $(".layer_bg").show();
    });
    $(".layer .close").click(function(){
        $(".layer").slideUp(300);
        $(".layer_bg").hide();
    })
})(jQuery);