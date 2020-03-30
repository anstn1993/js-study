//노드 삽입 및 대체하기

window.addEventListener("load", function() {

  var section = document.querySelector("section");
  
  var noticeTable = section.querySelector(".notice-table");
  var tbody = noticeTable.querySelector("tbody");
  var upBtn = section.querySelector(".up-btn");
  var downBtn = section.querySelector(".down-btn");

  var currentNode = tbody.firstElementChild;


  upBtn.onclick = function() {
   
    var previousNode = currentNode.previousElementSibling;

    if(previousNode == null) {
      alert('더 이상 이동할 수 없습니다.');
      return;
    }
    
    /*방법 1
      tbody.insertBefore(currentNode, previousNode);
    */

    //방법 2
    currentNode.insertAdjacentElement('afterend', previousNode);
  };

  downBtn.onclick = function() {
    var nextNode = currentNode.nextElementSibling;
    
    if(nextNode == null) {
      alert('더 이상 이동할 수 없습니다.');
      return;
    }

    /*방법 1
      tbody.insertBefore(nextNode, currentNode);
    
    */

    //방법 2
    currentNode.insertAdjacentElement('beforebegin', nextNode);
  };
});

/*
  parentNode: 부모 노드 참조
  firstChild: 자식 노드 중 첫 번째 노드 참조
  lastChild: 자식 노드 중 마지막 노드 참조
  previousSibling: 이전 형제 노드 참조
  nextSibling: 다음 형제 노드 참조

  주의할 점은 위의 노드 참조는 노드의 범위가 모든 노드라는 점이다. text, comment등등 모두 포함이다.
  엘리먼트만 대상으로 하려면 다음과 같이 써야 한다. 

  parentElement
  firstElementChild
  lastElementChild
  previousElementSibling
  nextElementSibling

  insertBefore(): 이동시키려는 노드의 부모 노드가 호출한다. 두 번째 인자로 오는 노드의 앞으로 첫 번째 인자로 오는 노드를 이동시킨다.
  insertAdjacentElement(): 이동시키려는 노드의 기준점이 되는 노드가 호출한다. 첫 번째 인자는 자신을 기준으로 어디로 이동시킬지를 결정하고, 두 번째 인자로 이동시킬 노드가 온다.

  beforebegin-태그 바깥쪽의 앞부분
  beforeend-태그 안쪽의 앞부분
  afterbegin-태그 안쪽의 뒷부분
  afterend-태그 바깥쪽의 뒷부분

 */
