const nick = document.querySelector("#nick"); // 이름
const major = document.querySelector("#major"); // 전공
const save = document.querySelector("#save"); // 신청하기 버튼
const plylist = document.querySelector("#plylist"); // 표시될 영역
const reset = document.querySelector("button[type='reset']");


reset.addEventListener("click", (e) => {
  e.preventDefault();
  nick.value = "";
  major.value = "";
});


save.addEventListener("click", (e) => {
  e.preventDefault();
  alert(`${nick.value} (님) 신청완료.`)

  const item = document.createElement("li"); 
  item.innerHTML = `${nick.value} - ${major.value} <button type="button" class="delbtn">"신청 취소"</button>`;
  
  plylist.appendChild(item);
  
  nick.value = "";
  major.value = "";

  // 명단에서 제거하기
  const delButtons = document.querySelectorAll(".delbtn");

  for (let delButton of delButtons) {
    delButton.addEventListener("click", removeItem);
  } 
});

function removeItem() {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
} 
