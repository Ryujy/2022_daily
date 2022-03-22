// javascript Document

$(".menu>li").mouseover(function() {
    $(this).children(".submenu").stop().slideDown();
});

$(".menu>li").mouseleave(function() {
    $(this).children(".submenu").stop().slideUp();
});

// slide
var idx = 0;        //함수 호출 횟수
var i = 0;          //이미지 인덱스 값
var imgNum = 3;     //이미지 개수
var imgSize = 850;  //이미지 크기

function imgSlide() {
    idx = idx + 1;          //함수 호출 회수 증가
    i = (idx-1)%imgNum      
    //이미지 3개를 돌려 쓸거라서.. i = 1,2,3 반복
    //idx-1 을 해주는 이유 : idx > 1 일 때부터 리스트 삭제, 추가가 이뤄짐 (1초 뒤부터 리스트)
    if (i == 0) {
        i=imgNum        // 1,2,3,1,2,3 이 반복
    }

    $('.slide').css({"left" : "0px"});
    $('.slide').stop().animate({ "left" : -imgSize + "px" }, "slow")
    if(idx>1){
        $('.slide>li:fist').remove();
        $('.slide').append('<li><img src="imges/slide0' + i + '.jpg" alt=""></li>' )
    }
}
setInterval(function() { imgSlide() } , 3000);

//탭 메뉴
$(function(){
    $(".tab>ul>li").click(function() {
        $(".tab>ul>li").removeClass('on');
        $(".tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });
});

function modalpop() {
    $("#modal").addClass("active");
}

$("#modal button").click(function(){
    $('#modal').removeClass("active");
});