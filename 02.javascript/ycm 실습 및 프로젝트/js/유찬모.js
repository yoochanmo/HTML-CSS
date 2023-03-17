// 구매 버튼 클릭 이벤트 핸들러 함수
function purchaseBook(event) {
  // 클릭한 버튼의 상위 요소인 카드 요소 가져오기
  const card = event.target.closest('.card');
  // 카드에서 도서명 가져오기
  const bookTitle = card.querySelector('.card-body h5').textContent;
  //  장바구니 알림
  alert(`${bookTitle} 도서를 장바구니에 담았습니다.`);
}

// 모든 구매 버튼 요소 가져오기
const purchaseBtns = document.querySelectorAll('.card-footer .btn');
// 구매 버튼에 클릭 이벤트 핸들러 등록
purchaseBtns.forEach(btn => btn.addEventListener('click', purchaseBook));

