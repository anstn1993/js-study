//엘리먼트 노드의 기본 행위 막기

window.addEventListener("load", function() {
  var section = document.querySelector("section");

  var tbody = document.querySelector("tbody");
  
  tbody.onclick = function(event) {

    event.preventDefault();//클릭에 반응하는 기본행동이 있더라도 그 행동을 막아버린다.

    var target = event.target;

    if(target.nodeName != "A") return;

    if(target.classList.contains("btn-sel")) {//class는 여러 이름이 올 수 있기 때문에 classList에서 contains메소드로 특정 클래스 명을 찾아야 한다. 
      var tr = target.parentElement;
      //target노드와 tr노드 사이에 다른 노드가 이후에 유지 보수 과정에서 끼어들 가능성이 있기 때문에 반복문으로 순회를 한다.
      for(; tr.nodeName != "TR"; tr = tr.parentElement);
      tr.style.background = "yellow";
    }
    else if(target.classList.contains("btn-edit")) {
        //....
    }
    else {
      var tr = target.parentElement;
      for(;tr.nodeName != "TR"; tr = tr.parentElement);
      tr.remove();
    }
  }

});

/*

*/
