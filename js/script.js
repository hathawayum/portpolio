$(document).ready(function () {

    const circle = document.querySelector('.circle');
        console.log(circle)
        let mouseX
        let mouseY
        window.addEventListener('mousemove', function(e){
            mouseX = e.clientX
            mouseY = e.clientY
            circle.style.left = mouseX+'px'
            circle.style.top = mouseY+'px'
        })
      

        



    let menu = $('header nav li');
    menu.click(function () {
        let menuIndex = $(this).index();
        console.log(menuIndex)
        let contPage = $('.cont').eq(menuIndex);
        let contPageTop = contPage.offset().top;
        console.log(contPageTop)
       
        $('html, body').animate({
            scrollTop: contPageTop
        }, 700 )
    })//menu.click()

    let hd = $('header');
    let headerTop = hd.offset().top;
    console.log(headerTop) 

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        console.log(scrollBar)

        if (headerTop < scrollBar) {
            hd.addClass('on')
        } else (
            hd.removeClass('on')
        )

        if ($('.main_visual').offset().top <= scrollBar) {
            menu.removeClass('on')
            menu.eq(0).addClass('on');
        } else {
            menu.removeClass('on')
        }

        if ($('.aboutme').offset().top <= scrollBar) {
            menu.removeClass('on')
            menu.eq(1).addClass('on');
        }

        if ($('#web').offset().top <= scrollBar) {
            menu.removeClass('on')
            menu.eq(2).addClass('on');  
  
        }
        if ($('#design').offset().top <= scrollBar) {
            menu.removeClass('on')
            menu.eq(3).addClass('on');
        }
        if ($('#photograph').offset().top <= scrollBar) {
            menu.removeClass('on')
            menu.eq(4).addClass('on');
        }

        
        if (scrollBar >= 600 && scrollBar < 1500) {
            $(".aboutme_skill").animate({ 
                opacity: "1", 
                marginTop: "0" 
            }, 500, function () {
                $("#skillbox li:eq(0) .skillbox2").stop().animate({ width: "90%" }, 600)
                $("#skillbox li:eq(1) .skillbox2").stop().animate({ width: "90%" }, 600)
                $("#skillbox li:eq(2) .skillbox2").stop().animate({ width: "80%" }, 600)
                $("#skillbox li:eq(3) .skillbox2").stop().animate({ width: "60%" }, 600)
                $("#skillbox li:eq(4) .skillbox2").stop().animate({ width: "60%" }, 600)
                $("#skillbox li:eq(5) .skillbox2").stop().animate({ width: "80%" }, 600)
               
            })

        }

        const tb1 = $('#tablet1');
        const mb1 = $('#mobile1');
        if (scrollBar >= 1800 && scrollBar < 3000) {
            tb1.addClass('on')
            mb1.addClass('on');
        }else {
            tb1.removeClass('on')
            mb1.removeClass('on')
        }


        const tb2 = $('#tablet2');
        const mb2 = $('#mobile2');
        if (scrollBar >= 4700 && scrollBar < 5700) {
            tb2.addClass('on')
            mb2.addClass('on');
        }else {
            tb2.removeClass('on')
            mb2.removeClass('on')
        }







    })//scroll()







}) //jquery end