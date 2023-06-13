$(document).ready(function () {

    const circle = document.querySelector('.circle')
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
        //eq는 css의 nth-child와 같이 eq(변수)가 됩니다
        let contPageTop = contPage.offset().top;
        //.cont가 브러우저 상단에서 얼마만큼 떨어졌는지
        //값 구하기 => offset().top;
        console.log(contPageTop)
        //변수명contPageTop값만큼 스크롤바가 이동하도록함
        //scrollTop() => 스크롤바의 수직값
        $('html, body').animate({
            scrollTop: contPageTop
        }, 700, 'easeInBack')
        //중괄호와 소괄호 사이에 , 시간, 속도
        //속도('이징효과')

    })//menu.click()

    let hd = $('header');
    let headerTop = hd.offset().top;
    console.log(headerTop) //현재값은0, 스크롤바의 값이 더 클때

    //headerTop값보다 스크롤바의 값이 더클때
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        //스크롤바의 y축값(세로로 움직이는 값)

        //화면을 스크롤했을때 실행이 된다
        //header가 가지고 있는 값보다 스크롤바가 가지는 값이 더 클때
        //header에게 클래스명 on추가 //if문 사용
        if (headerTop < scrollBar) {
            hd.addClass('on')
        } else (
            hd.removeClass('on')
        )

        //스크롤을 했을 때 각 cont에게 스크롤이 들어오면
        //nav li에게 클래스명 제어
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
        //design,resume 화면에 들어왔을때 li에게 클래스명 추가
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
            //$(".aboutme_skill").delay(300).animate({"top":"-460px","opacity":"1"},700);
        
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










    })//scroll()







}) //jquery end