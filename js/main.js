$(document).ready(function(){

    $(".show-popup").click(function(){
        $(this).toggleClass("active");
        $(this).siblings(".hide-show-popup").slideToggle(400);
        $(this).children("img").toggleClass("active");
        $(this).children("span").toggleClass("active");
    });
    
    $(".show-box-detail-service").click(function(){
        $(this).parents(".item-box-price").toggleClass("active");
    });
    $(function(){
        $(".show-video-list-servece").click(function () {
           $(this).children(".animation-text-video").text(function(i, text){
               return text === "動画で簡単説明" ? "閉じる" : "動画で簡単説明";
           });
           $(this).children(".animation-text-video").css("transition","all .4s")
        });
        $(".show-box-detail-service").click(function () {
            $(this).children(".animation-box-detail").text(function(i, text){
                return text === "詳細をみる" ? "詳細を閉じる" : "詳細をみる";
            })
        });
        $(".show-map-gym").click(function(){
            $(this).children(".animation-text-map").text(function(i, text){
                return text === "MAPを見る" ? "MAPを閉じる" : "MAPを見る";
            })
         });
     })

    $('#slide-gym').owlCarousel({
        center: true,
        items:2,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:21,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
    $('#wrap-slide-app').owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            1081:{
                items:1
            }
        }
    });
    $('#slide-service').owlCarousel({
        center: true,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:47,
        responsive:{
            0:{
                items:1
            },
            1081:{
                items:3
            }
        }
    });
    // slde-2-service
    $('#slde-2-service').owlCarousel({
        center: true,
        loop:true,
        autoplay:false,
        autoplayTimeout:5000,
        margin:47,
        responsive:{
            0:{
                items:1
            },
            1081:{
                items:3
            }
        }
    });
    var marquee = $('div.marquee');
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/50));
    });
    // 
    $(".box-control-slide").click(function(){
        $(this).css("display","none");
    })
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('header#header').addClass('active');
        } else{
            $('header#header').removeClass('active')
        }
    });
    // 
    $('.item-list-service').on('click', function (e) {
        var href = $(this).children("a.show-tabs").attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 70
        }, 'slow');
        e.preventDefault();
    });
    // 
    function swipMobile(){
        let widthOffset = $(document).width();
        console.log(widthOffset);
        if(widthOffset <= 1080){
            $(".box-text-swipe").swipe({
                swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                    $(".box-control-slide").css("display","none");
                },
                allowPageScroll:"vertical"
            });
        } else{
            $(".box-background").click(() => $(".carousel").carousel("next"));
        }
    }
    // 
    // 
    let d = new Date();
    document.getElementById("get-year").innerHTML = d.getFullYear();
    // 
    function setHeightHeader(){
        let heightHeader = $(".background-gray header#header").outerHeight();
        console.log(heightHeader);
        $(".background-gray main#main").css({"margin-top":heightHeader + 30 + "px"});
    }
    function setHeigthSlider(){
        let heights = $("section#service .owl-carousel .owl-stage").outerHeight();
        $("section#service .owl-carousel.owl-drag .owl-item").css("height", heights + "px");
    }
    setHeigthSlider();
    setHeightHeader();
    swipMobile();
    $(window).resize(function () {
        setHeightHeader();
        swipMobile();
        setHeigthSlider();
    });
    
});