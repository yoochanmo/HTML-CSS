let button = document.querySelector("button");

button.addEventListener('click', () => {
  
  let testNode = document.createElement('p');
  let testTextNode = document.createTextNode("MongoDB");
  testNode.appendChild(testTextNode);


  // insertbefore : 특정요소의 앞에 추가하는
  let p = document.querySelectorAll("p")[2];
  document.body.insertBefore(testNode, p);
})

