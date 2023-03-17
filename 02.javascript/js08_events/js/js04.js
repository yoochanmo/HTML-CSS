const orderlist = document.querySelector('#orderlist');
const orderButton = document.querySelector('#order'); 
const product = document.querySelector('.container > h2'); //상품목록

orderButton.addEventListener('click', () => {
  let orderProduct = document.createElement('p'); //p tag 생성
  let textProduct = document.createTextNode(product.innerText); //상품명

  orderProduct.appendChild(textProduct); // 상품명 textNode를 p tag에 추가
  orderlist.appendChild(orderProduct); // 주문상품을 주문목록에 추가
}, {once:false}) //once 옵션은 한번만 실행