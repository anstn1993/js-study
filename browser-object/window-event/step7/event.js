//클릭 위치에 박스 옮기기

window.addEventListener("load", function() {
  var section = document.querySelector("section");
  var box = section.querySelector(".box");

  section.onclick = function(event) {
    console.log("(x, y): (" + event.x + "," + event.y + ")");
    console.log("client (x, y): (" + event.clientX + "," + event.clientY + ")");
    console.log("page (x, y): (" + event.pageX + "," + event.pageY + ")");
    console.log("offset (x, y): (" + event.offsetX + "," + event.offsetY + ")");
    box.style.position = "absolute";
    box.style.left = event.pageX + "px";
    box.style.top = event.pageY + "px";
  }
});

/*

client:현재 브라우저의 화면에 보이는 영역의 좌측 상단이 좌표의 기준점이 된다.(그냥 x, y를 쓰면 clientX, clientY를 쓴다.) 
page:브라우저 화면이 아닌 페이지 전체 영역의 좌측 상단이 좌표의 기준점이 된다. 즉 화면 최상단의 좌측 상단
offset:클릭한 위치에 있는 노드들 중 최상단 노드, 즉 막내 노드의 좌측 상단이 좌표의 기준점이 된다. 

*/
