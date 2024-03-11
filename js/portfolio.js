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

  // section02
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

  // section03
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

  // section04
  $(".section04 .item-nav li").click(function (e) {
    e.preventDefault();
    $(".section04 .item-nav li a").removeClass("active");
    $(".section04 .item-nav li").removeClass("click");
    $(this).addClass("click");
    $(this).find("a").addClass("active");

    $(".section04 .item").hide();
    let idx = $(this).index();
    $(".section04 .item").eq(idx).fadeIn(600);
  });
  $(".section04 .item-nav li").eq(0).trigger("click");

  // etc design부분 슬라이더
  new Swiper(".etcSwiper", {
    slidesPerView: 4.5,
    loop: true,
    spaceBetween: 50,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      clickable: true,
      draggable: true,
      dragSize: 550,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // swiper-slide-active 된 이미지 누를 때 나오는 팝업
  $(".slide-img").click(function (e) {
    e.preventDefault();
    $(".etc-design-popup-mask").addClass("active");
    $(".etc-design-popup").addClass("active");
  });
  $(".etc-design-img-box > .exit").click(function (e) {
    e.preventDefault();
    $(".etc-design-popup-mask").removeClass("active");
    $(".etc-design-popup").removeClass("active");
  });

  $(".etc-design-popup-wrapper").click(function () {
    $(".etc-design-popup-wrapper").removeClass("active");
    $(".etc-design-popup").removeClass("active");
  });

  // swiper slide active클릭했을 때 해당이미지가 팝업창에 뜨게
  const popupImg = [
    "images/힐링이필요해2.jpg",
    "images/쉼 포스터.jpg",
    "images/거리예술마켓  포스터.jpg",
    "images/12월마켓오픈인포.jpg",
    "images/힐링이 필요해.jpg",
    "images/몽쪼만하우스-테라스-인스타2-02.jpg",
    "images/몽쪼만하우스-키친-인스타-02.jpg",
    "images/몽쪼만하우스-방-인스타1-02.jpg",
    "images/slide-img9.png",
  ];

  const firstTitle = [
    "그래픽 디자인 - 아트웍",
    "그래픽 디자인 - 포스터",
    "그래픽 디자인 - 포스터",
    "그래픽 디자인 - 포스터",
    "그래픽 디자인 - 아트웍",
    "일러스트",
    "일러스트",
    "일러스트",
    "일러스트",
  ];
  const secondTitle = [
    '"힐링이 필요해"',
    '"쉼"',
    '"거리예술마켓 "',
    '"크리스마스 마켓 오픈 공지"',
    '"힐링이 필요해"',
    '"TERRACE"',
    '"KITCHEN"',
    '"GAME ROOM"',
    '"none"',
  ];

  $(".swiper-slide").each(function (index) {
    $(this)
      .find(".slide-img")
      .click(function () {
        $(".etc-design-img-box .img").attr("src", popupImg[index]);
        $(".etc-design-img-box .first-title").text(firstTitle[index]);
        $(".etc-design-img-box .second-title").text(secondTitle[index]);
      });
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    // console.log(scroll);
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
  pFolder = document.querySelectorAll(".folder-name"),
  pCopy = document.querySelector(".copyright"),
  folder = document.querySelectorAll(".dark-folder-change"),
  dark = document.querySelectorAll(".dark-mode"),
  darkLine = document.querySelectorAll(".darkline"),
  example = document.querySelector(".example"),
  label = document.querySelectorAll("label"),
  darkLinedark = document.querySelector(".darklinedark"),
  secondTitle = document.querySelector(".second-title"),
  firstTitle = document.querySelector(".first-title"),
  leftTitle = document.querySelectorAll(".left-title"),
  rightTitle = document.querySelectorAll(".right-title");

toggle.addEventListener("click", function () {
  body.classList.toggle("body_dark");
  pName.classList.toggle("darkmode_text-333");
  pName2.classList.toggle("darkmode_text");
  pST.classList.toggle("darkmode_text");  
  pCopy.classList.toggle("darkmode_text");  
  pTyping.classList.toggle("darkmode_text");
  aTyping.classList.toggle("darkmode_text");
  example.classList.toggle("darkmode_text-333");
  secondTitle.classList.toggle("darkmode_text-333");
  firstTitle.classList.toggle("darkmode_text-333");
  
  // leftTitle.classList.toggle("darkmode_text");
  // rightTitle.classList.toggle("darkmode_text");
  // console.log(toggle.checked)
  if (toggle.checked) {
    darkLinedark.classList.toggle("darklinewhite");
    for (let i = 0; i < 4; i++) {
      leftTitle[i].classList.toggle("darkmode_text")
    }
    for (let i = 0; i < 4; i++) {
      rightTitle[i].classList.toggle("darkmode_text")
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
    for (let i = 0; i < 3; i++) {
      pFolder[i].classList.toggle("darkmode_text");
      folder[i].setAttribute("src", "images/dark-mini_folder2.png");
    }
  } else {
    darkLinedark.classList.remove("darklinewhite");
    for (let i = 0; i < 4; i++) {
      leftTitle[i].classList.remove("darkmode_text")
    }
    for (let i = 0; i < 4; i++) {
      rightTitle[i].classList.remove("darkmode_text")
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
    for (let i = 0; i < 3; i++) {
      pFolder[i].classList.toggle("darkmode_text-333");
      folder[i].setAttribute("src", "images/mini_folder.png");
    }
  }
});

//loading-bar 한칸씩나오게
let span = document.querySelector(".loading-bar span");
for (i = 1; i <= 25; i++) {
  spanClone = $("span").contents().clone();
  spanCloneContainer = $('<div class="span00 loading-bar' + [i] + '"></div>');
  spanCloneContainer.appendTo(".loading-bar");
  spanCloneContainer.append(spanClone);
  spanCloneContainer.append(span);
}
