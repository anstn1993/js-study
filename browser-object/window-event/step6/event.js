//이벤트 트리거

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var btnFile = section.querySelector(".btn-file");
  var btnFileTrigger = section.querySelector(".btn-file-trigger");

  btnFileTrigger.onclick = function() {

    //마우스 이벤트 객체 생성
    var event = new MouseEvent("click", {
      'view':window,
      'bubbles':true,
      'cancelable':true//버블링 취소 가능 flag
    })

    btnFile.dispatchEvent(event);//file 버튼에 이벤트 dispatch
  }
});

/*
  이벤트는 종류에 따라서 다양한 event인터페이스를 상속받은 이벤트 객체들이 존재한다. 마우스 이벤트의 경우
  mouse event객체를 생성해야 하며 이 객체를 file input 노드에 dispatch해주면 file input 노드에 대한 클릭 이벤트가 실행된다. 
*/
