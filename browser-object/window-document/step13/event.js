//다중 엘리먼트 선택과 일괄 삭제

window.addEventListener("load", function() {
  var section = document.querySelector("section");

  var noticeTable = section.querySelector(".notice-table");
  var tbody = noticeTable.querySelector("tbody");
  var overallCheckBox = noticeTable.querySelector(".overall-checkbox");
  var delBtn = section.querySelector(".del-btn");
  var swapBtn = section.querySelector(".swap-btn");

  overallCheckBox.onchange = function() {
    // var checkBoxes = tbody.querySelectorAll("tr td input");
    var checkBoxes = tbody.querySelectorAll("input[type='checkbox']");

    for (var i in checkBoxes) checkBoxes[i].checked = overallCheckBox.checked;
  };

  delBtn.onclick = function() {
    //css의 pseudo_class를 이용해서 check된 input태그만 가져온다.
    var checkBoxes = tbody.querySelectorAll("input[type='checkbox']:checked");

    for (var i in checkBoxes) {
      checkBoxes[i].parentElement.parentElement.remove();
    }
  };

  swapBtn.onclick = function() {
    var checkBoxes = tbody.querySelectorAll("input[type='checkbox']:checked");

    if (checkBoxes.length != 2) {
      alert("두 개만 선택하세요.");
      return;
    }

    var rows = [];
    for (var i = 0; i < checkBoxes.length; i++) {
      rows.push(checkBoxes[i].parentElement.parentElement);
    }

    var cloneNode = rows[0].cloneNode(true);
    tbody.replaceChild(cloneNode, rows[1]);//replace를 swap하는 노드의 부모 노드가 호출
    rows[0].replaceWith(rows[1]);//swap을 하는 노드가 replace를 호출
  };
});

/*  
  swap을 할 때는 둘 중 아무 노드의 clone node를 만들고 그 node를 나머지 노드와 replace를 이용해서 바꿔준다.
  그럼 교체되어 나가떨어진 노드는 화면에서는 사라지지만 rows array가 참조를 하고 있기 때문에 메모리에서는 사라지지 않은 상태다.
  그러니까 clone의 대상이 되는 원본 노드와 나가 떨어진 노드를 replace해주면 된다. 
 */
