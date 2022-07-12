/** 
* guage 눈금선
* @version 1.0.0
* @since 2022-06-27
* @author 이유라 (Nico)
* @memo
* issue : for 반복문을 이용한 10의배수 별도 긴 눈금선 적용(눈금자css)
*/
// ** for 반복문 : 조건식이 참이면 반복. 조건식이 거짓이면 for문 종료
// ** 반복문은 반복 횟수가 정해져 있을 때 유용
// for (초기화식; 조건식; 증감식){
//     실행문장;
// }

let html = '';// for반복문 담아야하니가 재선언 let선언
for (let i = 0; i < 100; i++) {//0부터 100개 span선언
    // html += '<span></span>'; 첫 번째 span에 무조건 들어가는 위치이므로 주석
    if (i % 10 == 0 || i == 99) { 
    /* 
    % 는 나머지를 뜻함, i % 10 == 0은 10의 배수를 의미, 
    i는 0부터 시작이니까 마지막 숫자 99로 선택하여 눈금 긴선 적용!!
    else 아니라면, 기본너비적용조건을 의미
    */ 
        html += '<span class="long"></span>';
        
    }else{
        html += '<span></span>';
    }
    
}
$('.guage .line').append(html)







/** 
* header 로고이모지 변경됨
* @version 1.0.0
* @since 2022-06-27
* @author 이유라 (Nico)
* @memo
* issue : 로고 이모지가 반복적으로 일정시간 후 변경됨
*/
function intro (){
    for (let i = 1; i < 5; i++) {//i에 1담고, indesc가 6보가 작을때까지 i가 1씩 증가
        setTimeout(function(){//일정시간 뒤 실행
            $('.logo__img').attr('src',`./asset/images/icon/intro-icon${i}.png`)//attr() 메서드는 선택자에 의해 선택된 요소들 중에서 제일 처음 요소의 속성값을 가지고 오는 함수
        },500*i)// .5초  *(곱하기) 변수(1~4까지)
    }
}
intro ()//실행

setInterval(() => {//일정시간 뒤에 무한반복실행
    intro ()//실행
}, 500*4);//300*4초(4개의 이미지니까 1초당 한이미지씩 뜨게 설정)






/** 
* header 포트폴리오 text 스크롤 시, 회전
* @version 1.0.0
* @since 2022-06-27
* @author 이유라 (Nico)
* @memo
* issue : 로고 이모지가 스크롤 시, 회전됨
*/
gsap.to('.logo__svg',{
    scrollTrigger:{
        trigger:'.header',
        start:'top top',
        end:'+=300%',
        // markers:true,
        scrub:1,
        // pin:true,
        // onLeave:function(){
        //     gsap.to(window, {duration: 1, scrollTo:"#main"});//id:main영역(특정영역)으로 이동 
        // }
    },
    rotation:300,
})





/** 
* 스크롤 시, 일정 구간에 배경색 변화
* @version 1.0.0
* @since 2022-06-27
* @author 이유라 (Nico)
* @memo
* issue01 : foreach문 사용 및 onEnter, onEnterBack 사용(css는 부드럽게 적용되지않기 때문에 gsap적용)
*/
gsap.utils.toArray('[data-background]').forEach(function (elem) {//data-background가 들어간 태그 개수만큼
    var color = elem.getAttribute('data-background');//선택한 data-background의 값 을 갖고옴
    ScrollTrigger.create({
        trigger: elem,
        start: "top 60%",
        end: "bottom 80%",
        // markers:true,
        onEnter: function () {//도달했을 때 컬러 선언
            // $("body").css('background', color) //css는 자연스럽게 변화되지않음
            gsap.to('body',{background:color})//자연스럽게 변경하기 위해 gsap사용
        },
        onEnterBack: function () {//내스크롤 end값이 나이 end랑 만나는(돌아가는)지점에서 실행됨
            gsap.to('body',{background:color})//자연스럽게 변경하기 위해 gsap사용
        },
        // onLeave: function () {
        //     $("body").attr("data-theme", 'light')
        // },
        // onLeaveBack: function () {
        //     $("body").attr("data-theme", 'light')
        // },

    })
})









/** 
* 눈금선 항목 선택 시, 타겟 영역으로 이동
* @version 1.0.0
* @since 2022-06-27
* @author 이유라 (Nico)
* @memo
*/

$('.guage a').click(function(e){
    e.preventDefault();
    target = $(this).attr('href');
    gsap.to(window, {duration: 1, scrollTo:target});
})



gsap.to('.guage__curr',{
    scrollTrigger:{
        trigger:'body',
        start:'top top',
        end:'bottom bottom',
        // markers:true,
        scrub:1,
    },
    ease:"none",
    height:'100%',
})














$(function(){
    $('.sc-work .work-item').hover(function(){

        $(this).find('.line-bottom').addClass('hover');
    },function(){

        $(this).find('.line-bottom').removeClass('hover');
    })




    $('[data-up]').each(function(index,element){

        gsap.fromTo(element,{
            opacity:0,
            y:50,
        },{
            scrollTrigger:{
                trigger:element,
                start:"0% 80%",
                end:"100% 0%",
                // markers:true,
            },
            opacity:1,
            y:0,
            duration: 1,
            stagger:0.4,

        }) 
    })//





})//end