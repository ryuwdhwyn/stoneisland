$("document").ready(function () {

    $(".m-btn, .m-nav ul li").click(function(){
        $(".m-btn").toggleClass("on")
        $(".m-nav").toggleClass("on")
        })

        const swiper = new Swiper(".content-menu.swiper",{
            slidesPerView: 3,
        })
        
    $(".menu .content .arrow a").click(function(e){
        let menu_time = false;

        e.preventDefault();
        let arrow = $(".menu .content .arrow a").index(this)
        // if(menu_time == true){
        //     return;
        // }
        // setTimeout(() => {
        //     menu_time = false;
        // }, 1000);
        // menu_time = true;

        if(arrow == 6 || arrow == 7){
            return;
        }
        
        if(arrow == 0 || arrow == 2 || arrow == 4 ){
            $(".menu .content .content-wrap .content-menu .menu-content").stop().animate({
                left: "0%"
            }, 500)
        }else{
            $(".menu .content .content-wrap .content-menu .menu-content").stop().animate({
                left: "-100%"
            }, 500)
        }
    })


// const swiper = new Swiper(".content.web-swiper".{
    
//     slidesPerView: 1,
//     loop: true,
//     navigation:{
//         nextEl : ".arrow a:nth-child(1)",
//         prevEl : ".arrow a:nth-child(2)"
//     },
//     pagination:{
//         el: ".arrow",
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<a class="' + className + '">' + (index + 1) + "</a>";
//         },

//         breakpoints: {
//             640:{spaceBetween: 10, slidesPerView: 1},
//             1024:{spaceBetween: 20, slidesPerView: 2},
//             1400:{spaceBetween: 30, slidesPerView: 3},
//         }

//     }

// })




    let i = 0;


    let timer = setInterval(auto_play, 3000);
    function auto_play(){

        $(".title .title-content ul li").stop().eq(i).animate({
            left: "-100%"
        }, 1000)
        i++;
        $(".title .title-content ul li").eq(i).stop().css("left", "100%").animate({
            left: "0%"
        }, 1000)
        
    
    }

    let count = 0;
    setInterval(function(){
        count++
        if(count > $(".title .title-content .title-img ul li").length-1){
            count = 0
        }
        console.log(count,$(".title .title-content .title-img ul li").length)
        $(".title .title-content .title-img ul li").hide().eq(count).fadeIn()
    }, 4000)


    


    $(".section .section-werp .section-item .item-list1").addClass("on")

    $(".section > ul li:nth-child(1)").addClass("on")
    $(".section .section-list ul li").click(function(){
        i = $(this).index();
        $(".section .section-list ul li").removeClass("on").eq(i).addClass("on")
    })

    $(".section .section-list ul li:nth-child(1)").click(function(){
        $(".section > ul li:nth-child(1)").addClass("on")
        $(".section > ul li:not(:nth-child(1))").removeClass("on")
        $(".section .section-werp .section-item .item-list1").addClass("on")
        $(".section .section-werp .section-item .item-list2").removeClass("on")
        $(".section .section-werp .section-item .item-list3").removeClass("on")
        $(".section .section-werp .section-item .item-list4").removeClass("on")
    })
    $(".section .section-list ul li:nth-child(2)").click(function(){
        $(".section > ul li:nth-child(2)").addClass("on")
        $(".section > ul li:not(:nth-child(2))").removeClass("on")
        $(".section .section-werp .section-item .item-list1").removeClass("on")
        $(".section .section-werp .section-item .item-list2").addClass("on")
        $(".section .section-werp .section-item .item-list3").removeClass("on")
        $(".section .section-werp .section-item .item-list4").removeClass("on")
    })
    $(".section .section-list ul li:nth-child(3)").click(function(){
        $(".section > ul li:nth-child(3)").addClass("on")
        $(".section > ul li:not(:nth-child(3))").removeClass("on")
        $(".section .section-werp .section-item .item-list1").removeClass("on")
        $(".section .section-werp .section-item .item-list2").removeClass("on")
        $(".section .section-werp .section-item .item-list3").addClass("on")
        $(".section .section-werp .section-item .item-list4").removeClass("on")
    })
    $(".section .section-list ul li:nth-child(4)").click(function(){
        $(".section > ul li:nth-child(4)").addClass("on")
        $(".section > ul li:not(:nth-child(4))").removeClass("on")
        $(".section .section-werp .section-item .item-list1").removeClass("on")
        $(".section .section-werp .section-item .item-list2").removeClass("on")
        $(".section .section-werp .section-item .item-list3").removeClass("on")
        $(".section .section-werp .section-item .item-list4").addClass("on")
    })
    

    $(".section .section-list ul li").eq(0).addClass("on")
    i = $(this).index();

    $(".news .news-content .news-item:nth-child(1)").hover(function(){
        $(".news .news-content .news-item:nth-child(1) a img").toggleClass("on")
        $(".news .news-content .news-item:nth-child(1) a p").toggleClass("on")
    })
    $(".news .news-content .news-item:nth-child(2)").hover(function(){
        $(".news .news-content .news-item:nth-child(2) a img").toggleClass("on")
        $(".news .news-content .news-item:nth-child(2) a p").toggleClass("on")
    })

    $(".news .news-content2 .news-item:nth-child(1)").hover(function(){
        $(".news .news-content2 .news-item:nth-child(1) a img").toggleClass("on")
        $(".news .news-content2 .news-item:nth-child(1) a p").toggleClass("on")
    })
    $(".news .news-content2 .news-item:nth-child(2)").hover(function(){
        $(".news .news-content2 .news-item:nth-child(2) a img").toggleClass("on")
        $(".news .news-content2 .news-item:nth-child(2) a p").toggleClass("on")
    })

    
    
    // $(".section .section-list ul li").click(function(e){
    //     e.preventDefault();
        

    //     if(i < $(this).index()){
    //         $(".section > ul li").eq(i).stop().animate({
    //             left: "0%"
    //         })
    //         i = $(this).index();
    //         $(".section > ul li").eq(i).stop().css("left", "0%").animate({
    //                     left: "0%"
    //                 })
    //     }else if(i == $(this).index()){
    //         return;
    //     }else{
    //         $(".section > ul li").eq(i).stop().animate({
    //             left: "100%"
    //         })
    //         i = $(this).index();
    //         $(".section > ul li").eq(i).stop().css("left", "-100%").animate({
    //                     left: "0%"
    //                 })
    //     }
        
    //     $(".section .section-list ul li").removeClass("on").eq(i).addClass("on")

    // })
    // $(".section .section-list ul li").eq(0).addClass("on")


});