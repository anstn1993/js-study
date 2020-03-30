//text 노드 동적 추가/삭제

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var titleInput = section.querySelector(".title-input");
  var menuListDiv = section.querySelector(".menu-list");
  var btnAdd = section.querySelector(".btn-add");
  var btnDel = section.querySelector(".btn-del");

  btnAdd.onclick = function() {
    const title = titleInput.value;
    var textNode = document.createTextNode(title);//node 생성
    menuListDiv.appendChild(textNode);//node를 menu list div node의 자식으로 추가
  };

  btnDel.onclick = function() {
    var textNode = menuListDiv.childNodes[0];
    menuListDiv.removeChild(textNode);
  };
});


/*
createTextNode(): 텍스트 노드 생성
appendChild(): 자식 노드로 추가
removeChild(): 자식 노드에서 삭제
*/