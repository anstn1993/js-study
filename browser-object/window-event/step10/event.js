//박스의 offset 좌표 이용하기

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var dragging = false; //drag상태 flag
  var status = this.document.querySelector(".status");
  var offset = { x: 0, y: 0 };//box를 클릭한 시점의 offset x, y좌표를 저장하는 객체
  var currentBox = null;

  var left = section.offsetLeft;
  var top = section.offsetTop;

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

    const x = event.pageX - offset.x - left;
    const y = event.pageY - offset.y - top;

    currentBox.style.left = x + "px";
    currentBox.style.top = y + "px";

    status.innerHTML = "(x, y):(" + x + ", " + y + ")";
  };

  section.onmouseup = function(event) {
    //마우스를 떼는 순간 다시 flag를 false로
    dragging = false;
  };
});

/*
*/
