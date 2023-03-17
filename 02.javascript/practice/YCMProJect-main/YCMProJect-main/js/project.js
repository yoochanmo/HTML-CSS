const image = document.createElement('img');
image.classList.add('bookImage');
image.src = book.imageUrl;
item.appendChild(image);

const info = document.createElement('div');
info.classList.add('bookInfo');
item.appendChild(info);

const title = document.createElement('h3');
title.classList.add('bookTitle');
title.textContent = book.title;
info.appendChild(title);

const author = document.createElement('p');
author.classList.add('bookAuthor');
author.textContent = book.author;
info.appendChild(author);

const description = document.createElement('p');
description.classList.add('bookDescription');
description.textContent = book.description;
info.appendChild(description);

return item;


// bookList에 bookItems를 추가합니다.
bookList.innerHTML = '';
bookList.append(...bookItems);


// 웹 페이지가 로드되면 도서 목록을 로드합니다.
window.addEventListener('load', loadBooks);

// 위의 예제 코드는 JavaScript를 사용하여 도서 목록을 가져오고, 이를 HTML 요소로 변환하여 동적으로 페이지에 추가합니다. 이를 위해 다음과 같은 주요 요소를 사용합니다.

// - document.querySelector() : HTML 요소를 검색하는 함수입니다. 이 예제에서는 #bookList를 사용하여 ul 요소를 가져옵니다.
// - Array 