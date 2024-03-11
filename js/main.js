$(function () {
  // go top 버튼 누르면 화면 최상단으로 스르륵 움직이게
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1200) {
      $(".gotop").fadeIn();
    } else {
      $(".gotop").fadeOut();
    }
  });
  $(".gotop").click(function (e) {
    e.preventDefault();
    $("html,body").stop().animate(
      {
        scrollTop: 0,
      },
      600
    );
  });
  $(".name").click(function (e) {
    e.preventDefault();
    $("html,body").stop().animate(
      {
        scrollTop: 0,
      },
      400
    );
  });


  // section00:상세페이지 부분
  $(".section00 .item-nav li").click(function (e) {
    e.preventDefault();
    $(".section00 .item-nav li a").removeClass("active");
    $(".section00 .item-nav li").removeClass("click");
    $(this).addClass("click");
    $(this).find("a").addClass("active");

    $(".section00 .item").hide();
    let idx = $(this).index();
    $(".section00 .item").eq(idx).fadeIn(600);
  });
  $(".section00 .item-nav li").eq(0).trigger("click");

  // section02:웹리디자인부분
  $(".section02 .item-nav li").click(function (e) {
    e.preventDefault();
    $(".section02 .item-nav li a").removeClass("active");
    $(".section02 .item-nav li").removeClass("click");
    $(this).addClass("click");
    $(this).find("a").addClass("active");

    $(".section02 .item").hide();
    let idx = $(this).index();
    $(".section02 .item").eq(idx).fadeIn(600);
  });
  $(".section02 .item-nav li").eq(0).trigger("click");

  // section03:클론코딩부분
  $(".section03 .item-nav li").click(function (e) {
    e.preventDefault();
    $(".section03 .item-nav li a").removeClass("active");
    $(".section03 .item-nav li").removeClass("click");
    $(this).addClass("click");
    $(this).find("a").addClass("active");

    $(".section03 .item").hide();
    let idx = $(this).index();
    $(".section03 .item").eq(idx).fadeIn(600);
  });
  $(".section03 .item-nav li").eq(0).trigger("click");

  // etc-design 이미지 누를 때 나오는 팝업
  $(".etc-image").click(function (e) {
    e.preventDefault();
    $(".etc-design-popup-mask").addClass("active");
    $(".etc-design-popup").addClass("active");
  });

  $(".etc-design-popup-wrapper").click(function () {
    $(".etc-design-popup-wrapper").removeClass("active");
    $(".etc-design-popup").removeClass("active");
  });

  $(".etc-design-popup-img-box > .exit").click(function (e) {
    e.preventDefault();
    $(".etc-design-popup-wrapper").removeClass("active");
    $(".etc-design-popup").removeClass("active");
  });

  // etc-design 이미지 클릭했을 때 해당이미지가 팝업창에 뜨게
  const popupImg = [
    "images/개고몰-mainbanner-cat1.png",
    "images/개고몰-mainbanner-cat2.png",
    "images/개고몰-mainbanner-dog2.png",
    "images/뚜레쥬르 말차 sns 이미지3.jpg",
    "images/쉼 포스터 아트웍.jpg",
  ];

  const firstTitle = [
    "배너디자인",
    "배너디자인",
    "배너디자인",
    "SNS 디자인",
    "포스터 디자인&아트웍",
  ];
  const secondTitle = [
    '"퍼펙트 카사바 고양이 모래 3종 출시 기념 20% 할인 배너디자인"',
    '"프리미요츄 고양이 츄르 4종 출시 기념 체험단 30인 모집 배너디자인"',
    '"30% 세일하는 강아지 장난감 모음 배너디자인"',
    '"출시예정인 뚜레쥬르의 말차크림빵 소개 sns 디자인"',
    '"쉼(휴식)이라는 주제의 전시 초대 포스터 디자인과 아트워크 디자인"',
  ];

  $(".etc-design-image").each(function (index) {
    $(this).find(".etc-image").click(function () {
        $(".etc-design-img-box .img").attr("src", popupImg[index]);
        $(".etc-design-img-box .first-title").text(firstTitle[index]);
        $(".etc-design-img-box .second-title").text(secondTitle[index]);
      });
  });


   // detail view 버튼 누를 때 나오는 팝업
   $(".detailview").click(function (e) {
    e.preventDefault();
    $(".detailview-popup-mask").addClass("active");
    $(".detailview-popup").addClass("active");
  });

   $(".item-box-click").click(function (e) {
    e.preventDefault();
    $(".detailview-popup-mask").addClass("active");
    $(".detailview-popup").addClass("active");
  });



  // detail view 팝업 밖 영역이나 x누르면 팝업이 사라지게
  $(".detailview-popup-wrapper").click(function () {
    $(".detailview-popup-wrapper").removeClass("active");
    $(".detailview-popup").removeClass("active");
  });

  $(".detailview-popup-img-box > .exit").click(function (e) {
    e.preventDefault();
    $(".detailview-popup-wrapper").removeClass("active");
    $(".detailview-popup").removeClass("active");
  });
  
  const DpopupImg = [
    "images/카사바고양이모래 상세페이지 작업.jpg",
    "images/스파오 레더자켓 상세페이지3.jpg",
    "images/NANU 대나무칫솔 상세페이지 작업-최종.jpg",
  ];

  $(".button").each(function (index) {
    $(this).find(".detailview").click(function () {
        $(".detailview-popup-img-box .detail-img").attr("src", DpopupImg[index]);
      });
  });

  $(".item").each(function (index) {
    $(this).find(".item-box-click").click(function () {
        $(".detailview-popup-img-box .detail-img").attr("src", DpopupImg[index]);
      });
  });

  // li를 누르면 해당 section으로 이동
  $("header ul li").click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    let section = $("main section").eq(idx);
    let sectionH = section.offset().top;
    $("html, body").animate(
      {
        scrollTop: sectionH,
      },
      500
    );
  });

  // popup li 누르면 해당영역으로 이동되면서 팝업 꺼지게
  $(".popup-inner ul li").click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    let section = $("main section").eq(idx);
    let sectionH = section.offset().top;
    $("html, body").animate(
      {
        scrollTop: sectionH,
      },
      500
    );
    $(".hamburger-popup").removeClass("active");
  });

  // hamburger popup
  $(".menu-hamburger").click(function () {
    $(this).toggleClass("active");
    $(".hamburger-popup").toggleClass("active");
    $(this).toggleClass("close");
  });
});

//한글자씩 나오는 타이핑 효과
// 첫 표지-01
var typingBool = false;
var typingIdx = 0;

var typingTxt =
  "안녕하세요 임예나입니다. \n 본보기, 모범이 될 수 있도록 \n 열심히 노력하는 디자이너가 되겠습니다";
typingTxt = typingTxt.split("");

if (typingBool == false) {
  typingBool = true;
  var tyInt = setInterval(typing, 100);
}

function typing() {
  if (typingIdx < typingTxt.length) {
    $(".typing").append(
      typingTxt[typingIdx] === "\n" ? "<br>" : typingTxt[typingIdx]
    );
    typingIdx++;
  } else {
    clearInterval(tyInt);
    $(".typing").addClass("line");
  }
}
// 첫 표지-02
var TypingBool = false;
var TypingIdx = 0;

var TypingTxt = "[iɡˈzampel] (명사) 본보기, 모범, 예";
TypingTxt = TypingTxt.split("");

if (TypingBool == false) {
  TypingBool = true;
  var tyInt = setInterval(Typing, 100);
}

function Typing() {
  if (TypingIdx < TypingTxt.length) {
    $(".Typing").append(
      TypingTxt[TypingIdx] === "\n" ? "<br>" : TypingTxt[TypingIdx]
    );
    TypingIdx++;
  } else {
    clearInterval(tyInt);
    $(".Typing").addClass("line");
  }
}

// 다크모드일 때
const body = document.querySelector("body"),
  toggle = document.querySelector("#toggle"),
  pName = document.querySelector("p.name"),
  pName2 = document.querySelector("p.name2"),
  pST = document.querySelector("p.small-title"),
  pTyping = document.querySelector(".typing"),
  aTyping = document.querySelector(".animate-typing"),
  pCopy = document.querySelector(".copyright"),
  dark = document.querySelectorAll(".dark-mode"),
  darkLine = document.querySelectorAll(".darkline"),
  label = document.querySelectorAll("label"),
  darkLinedark = document.querySelector(".darklinedark"),
  // leftTitle = document.querySelector(".left-animate-title"),
  leftTitle = document.querySelectorAll(".left-animate-title");

// (leftTitle = document.querySelectorAll(".left-animate-title")),
//   (rightTitle = document.querySelectorAll(".right-title")),
  toggle.addEventListener("click", function () {
    body.classList.toggle("body_dark");
    pName.classList.toggle("darkmode_text-333");
    pName2.classList.toggle("darkmode_text");
    pST.classList.toggle("darkmode_text");
    pCopy.classList.toggle("darkmode_text");
    pTyping.classList.toggle("darkmode_text");
    aTyping.classList.toggle("darkmode_text");
    leftTitle.classList.toggle("darkmode_text");

    // leftTitle.classList.toggle("darkmode_text");
    // rightTitle.classList.toggle("darkmode_text");
    // console.log(toggle.checked)
    if (toggle.checked) {
      darkLinedark.classList.toggle("darklinewhite");
      for (let i = 0; i < 4; i++) {
        leftTitle[i].classList.toggle("darkmode_text");
      }
      for (let i = 0; i < 4; i++) {
        label[i].classList.toggle("darkmode_text-333");
      }
      for (let i = 0; i < 4; i++) {
        darkLine[i].classList.toggle("darkline-fff");
      }
      for (let i = 0; i < 36; i++) {
        dark[i].classList.toggle("darkmode_text-333");
      }
    } else {
      darkLinedark.classList.remove("darklinewhite");
      for (let i = 0; i < 4; i++) {
        leftTitle[i].classList.remove("darkmode_text");
      }
      for (let i = 0; i < 4; i++) {
        label[i].classList.toggle("darkmode_text");
      }
      for (let i = 0; i < 4; i++) {
        darkLine[i].classList.remove("darkline-fff");
      }
      for (let i = 0; i < 36; i++) {
        dark[i].classList.toggle("darkmode_text");
      }
    }
  });
