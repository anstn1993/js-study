//버블링을 멈춰야 하는 경우와 처리

window.addEventListener("load", function() {
  var section = document.querySelector("section");

  var imgList = section.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");
  var btnAdd = section.querySelector(".btn-add");

  imgList.onclick = function(event) {
    console.log("imgList.onclick");
    if (event.target.nodeName != "IMG") return;
    currentImg.src = event.target.src;
  };

  btnAdd.onclick = function(event) {
    console.log("btnAdd.onclick");
    event.stopPropagation();//이벤트 버블링 중단

    var imgNode = document.createElement("img");
    imgNode.src = "/browser-object/images/image1.jpg";
    currentImg.insertAdjacentElement("afterend", imgNode);
  };
});

/*
    event객체의 stopPropagation(): 이벤트 버블링(전파)를 멈춰준다. btnAdd노드는 imgList의 자식 노드이기 때문에
    btnAdd노드를 클릭하면 imgList까지도 이벤트가 전파되어서 핸들러를 타게 된다. 그런데 stopPropagation() 메소드를 써주면 이벤트 전파가 멈추게 된다.     
*/
