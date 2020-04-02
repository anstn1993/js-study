//드래그 방식으로 박스 옮기기

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var box = section.querySelector(".box");
  var dragging = false; //drag상태 flag
  var offset = { x: 0, y: 0 };//box를 클릭한 시점의 offset x, y좌표를 저장하는 객체

  section.onmousedown = function(event) {
    //박스가 아닌 컨테이너를 클릭해도 박스가 움직여지기 때문에 그것을 방지하기 위한 조건문이다. 
    if (event.target === box) {
      dragging = true;
    }
  };

  section.onmousemove = function(event) {
    if (!dragging) return;
    box.style.left = event.pageX - offset.x + "px";
    box.style.top = event.pageY - offset.y + "px";
  };

  section.onmouseup = function(event) {
    //마우스를 떼는 순간 다시 flag를 false로
    dragging = false;
  };

  box.onmousedown = function(event) {
    //마우스를 클릭하는 순간 박스의 offset x, y좌표를 저장해준다.
    offset.x = event.offsetX;
    offset.y = event.offsetY;
  }
});

/*


*/
