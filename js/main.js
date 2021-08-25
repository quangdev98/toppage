$(document).ready(function(){
    // 
    let d = new Date();
    document.getElementById("get-year").innerHTML = d.getFullYear();
    // 
    // let prevScrollpos = window.pageYOffset;
    // $(window).scroll(function() {
    // let heightHeader = $("header#header").outerHeight();
    // let currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         $("header#header").css("top",0);
    //     } else {
    //         $("header#header").css("top","-" + heightHeader + "px");
    //     }
    //     prevScrollpos = currentScrollPos;
    // });
    // 
    function setFooter(){
        let height = $(window).height();
        let heightMain = $("main#main").outerHeight();
        let heightFooter = $("footer#footer").outerHeight();
        if(heightMain + heightFooter <= height){
            $("footer#footer").addClass("position");
        } else{
            $("footer#footer").removeClass("position");
        }
        console.log(heightMain);
        console.log(heightFooter);
        console.log(height);
    };

    // 


    // 
    $(".icon-menu").click(function(){
        $(this).toggleClass("active");
        $(this).siblings(".menu-header-menu-container").toggleClass("active");
    })
    setFooter();
    $(window).resize(function () {
        setFooter();
    });
});