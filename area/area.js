console.log("✅ area.js loaded!");

document.querySelectorAll('.poster-container').forEach(container => {
  const cards = container.querySelectorAll('.poster-card');
  if (cards.length <= 1) {
    // 카드가 1개 이하일 경우: 스크롤 없애고 꽉 채우기
    container.style.overflowX = 'visible';
    container.style.justifyContent = 'center';
  } else {
    // 카드가 2개 이상일 경우: 스크롤 유지
    container.style.overflowX = 'auto';
  }
});

// 초기엔 모든 섹션 숨김
document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));

// 지도 위 지역 버튼 클릭 시 해당 섹션만 표시
document.querySelectorAll('.region-btn').forEach(btn => {
  btn.addEventListener('click', e => {

    e.preventDefault(); // 혹시 모를 기본동작 차단
    e.stopPropagation(); // 이벤트 전파 방지

    const region = btn.dataset.region;
    
    // 모든 섹션 숨기기
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    
    // 클릭된 지역 섹션만 표시
    const target = document.querySelector(`section[data-region="${region}"]`);
    if (target) target.classList.add('active');
  });
});




