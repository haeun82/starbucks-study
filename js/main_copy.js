// 검색 영역(div.search) 클릭 시 강제 포커스 및 제어
// 검색 영역 찾기
const searchEl = document.querySelector('.search');

// const searchInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('.search input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
// input 요소에 포커스 되면 실행
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합 검색');
    // html 속성을 추가하는 메소드 - setAttribute 실행시 (속성,값) 넣어주기
});

// input 요소에 포커스 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
    // html 속성을 추가하는 메소드 - setAttribute 실행시 (속성,값) 넣어주기
});



// 스크롤 시 전역 배지(고정 배너) 숨기기
// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelectorAll('header .badges');

// 페이지에 스크롤 이벤트 추가!
// window: 브라우저 창 객체
window.addEventListener('scroll', function () {
    // 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
    // 페이지 스크롤 위치가 500px을 넘지않으면 배지 요소 보이기
    if (window.scrollY > 500) {
        
    } else {
        
    }
});


// 페이지 스크롤 위치가 500px을 넘으면 배지 요소를 숨기고,
// 페이지 스크롤 위치가 500px을 넘지않으면 배지 요소 보이기

  // gsap 적용
    // gsap.to(요소, 지속시간, 옵션: {}) 메소드: css속성을 통해 애니메이션 처리

    // 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in) 찾기 