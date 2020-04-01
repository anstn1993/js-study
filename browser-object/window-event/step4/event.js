//서로 다른 기능을 가진 여러 버튼을 가진 화면에서 이벤트 처리하기

window.addEventListener("load", function() {
  var section = document.querySelector("section");

  var tbody = document.querySelector("tbody");
  
  tbody.onclick = function(event) {
    var target = event.target;

    if(target.nodeName != "INPUT") return;

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
  모든 버튼들의 공통 부모가 되는 태그(tbody)에 핸들러를 달면 어차피 모든 버튼 이벤트에 대한 전파로 부모 태그도 이벤트를 받게 된다.
  그리고 부모 태그 이벤트 핸들러에서 같은 기능을 하는 버튼들을 class로 묶어서 분리한다. 

*/
