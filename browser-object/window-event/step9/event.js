//여러개의 박스를 드래그 방식으로 옮기기

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var dragging = false; //drag상태 flag
  var offset = { x: 0, y: 0 };//box를 클릭한 시점의 offset x, y좌표를 저장하는 객체
  var currentBox = null;

  section.onmousedown = function(event) {
   if(event.target.classList.contains("box")) {
     dragging = true;
     currentBox = event.target;
     offset.x = event.offsetX;
     offset.y = event.offsetY;
   }
  };

  section.onmousemove = function(event) {
    if (!dragging) return;
    currentBox.style.left = event.pageX - offset.x + "px";
    currentBox.style.top = event.pageY - offset.y + "px";
  };

  section.onmouseup = function(event) {
    //마우스를 떼는 순간 다시 flag를 false로
    dragging = false;
  };
});

/*
  버블링을 이용해서 박스 3개를 감싸는 container에서 onmousedown이벤트 핸들러를 걸고
  타겟 노드의 class에 box가 포함된 경우라면 그 타겟을 currentBox가 참조하게 해서 처리
*/
