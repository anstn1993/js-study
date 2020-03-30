//엘리먼트 노드 동적 추가/삭제

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var titleInput = section.querySelector(".title-input");
  var menuListUl = section.querySelector(".menu-list");
  var btnAdd = section.querySelector(".btn-add");
  var btnDel = section.querySelector(".btn-del");

  btnAdd.onclick = function() {
    const title = titleInput.value;

    /* 방법 1
      var textNode = document.createTextNode(title);//node 생성

      var aNode = document.createElement("a");
      aNode.href = "/";
      aNode.appendChild(textNode);

      var liNode = document.createElement("li");
      liNode.appendChild(aNode);

      menuListUl.appendChild(liNode);//node를 menu list div node의 자식으로 추가
    };

    btnDel.onclick = function() {
      var textNode = menuListUl.childNodes[0];
      menuListUl.removeChild(textNode);
  */

  /* 방법 2
    이 방식은 태그 문자열을 뒤에 추가하는 방식이 아니고 기존 문자열과 새로 추가되는 문자열을 합쳐서 새롭게 메모리 할당을 해서 성능 이슈가 있을 수 있음.
    menuListUl.innerHTML += '<li><a href="">' + title + '</a></li>'; 
  */

  // 방법 3
    var html = '<a href="">' + title + "</a>";
    var liNode = document.createElement("li");
    liNode.innerHTML = html;
    // menuListUl.appendChild(liNode);
    menuListUl.append(liNode);
  };

  btnDel.onclick = function() {
    /* 방법 1
    var liNode = menuListUl.children[0];
    menuListUl.removeChild(liNode);
    */

    //방법 2
    var liNode = menuListUl.children[0];
    liNode.remove();
  };
});

/*
appendChild(): 자식 노드로 추가, 인자로 무조건 노드만 전달 가능
append(): 자식 노드로 추가, 가변 인자로 복수의 노드 추가 가능하고 문자열이 들어가도 알아서 text node로 박싱을 해서 넣어준다.
removeChild(): 자식 노드 삭제
remove(): 삭제해야 할 노드 자체에서 호출하는 함수로 그 노드를 삭제한다. 
*/
