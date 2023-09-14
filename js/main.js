// 검색 영역(div.search) 클릭 시 강제 포커스 및 제어
// 검색 영역 찾기
const searchEl = document.querySelector('.search');
// const searchEInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('.search input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); 
  // html 속성을 추가하는 메소드 - setAttribute 실행시 (속성,값) 넣어주기
});

// input 요소에 포커스 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () { // 해제
  searchEl.classList.remove('focused'); // 제거
  searchInputEl.setAttribute('placeholder', ''); 
  // html 속성을 추가하는 메소드 - setAttribute 실행시 (속성,값) 넣어주기
});

// 스크롤 시 전역 배지(고정 배너) 숨기기
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
  // console.log(window.scrollY); // (Y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치

  // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
  // 페이지 스크롤 위치가 500px을 넘지않으면 배지 요소 보이기
  if (window.scrollY > 500) {
    // badgeEl.style.display = 'none';

    // gsap 적용
    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: css속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // badgeEl.style.display = 'block';

    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
  }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in) 찾기 
const fadeEls = document.querySelectorAll('.visual .fade-in');
// console.log(fadeEls);

// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // console.log(fadeEl);

  // gsap.to(요소, 지속시간, 옵션: {}) 메소드: css속성을 통해 애니메이션 처리
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7 // 0,7s, 1.4s, 2.8s
    // delay: 몇 초 뒤에 실행될 것인가?
  });
});


// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성한다
// new Swiper(선택자, 옵션: {});
// 첫번째 인자값: 슬라이드 기능을 적용할 요소의 선택자 입력
// 두번째 인자값: 다양한 옵션을 객체 데이터({})로 전달
// (옵션들은 API 페이지 참고)
new Swiper('.notice .swiper', {
  direction: 'vertical', // 수직 슬라이드 // 방향 설정 기본은 horizontal
  loop: true, // 반복 재생 여부 true로 설정시 1->2->3->4->1 - 다시 1부터 반복 재생
  autoplay: true // 자동 재생 여부
});

// 프로모션 수평 슬라이드 기능
new Swiper('.promotion .swiper', {
  direction: 'horizontal', // 수직 슬라이드 // 방향 설정 기본은 horizontal
  loop: true, // 반복 재생 여부 true로 설정시 1->2->3->4->1 - 다시 1부터 반복 재생
  autoplay: { // 자동 재생 여부
    delay: 5000 //5초마다 슬라이드 바뀜 (기본값: 3000)
  },
  slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수 (기본값: 1개)
  spaceBetween: 10, // 슬라이드 사이 여백 간격 px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: {  // 페이지 번호 사용 옵션
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부, 클릭해서 제어할 수 있게끔
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.promotion .swiper-button-next', // 다음 버튼 요소
    prevEl: '.promotion .swiper-button-prev'// 이전 버튼 요소
  }
});


// 프로모션 섹션 토글 기능
const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

// 토글 버튼을 클릭했을 때 아래 기능을 실행
// 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리
// ('hide'클래스를 제거하고 아이콘 모양을 'upload'로 설정 )
// 그렇지 않으면 숨김처리 ('hide'클래스를 추가하고 아이콘 모양을 'download'로 설정 )


promotionToggleBtn.addEventListener('click', function () {
  const hasHide = promotionEl.classList.contains('hide');
  if (hasHide) {
    promotionEl.classList.remove('hide');
    promotionToggleIcon.textContent = 'upload';
  } else {
    promotionEl.classList.add('hide');
    promotionToggleIcon.textContent = 'download';
  }
});



