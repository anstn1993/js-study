//엘리먼트 노드의 속성 변경

window.addEventListener("load", function() {
  //area1
  var section1 = document.querySelector("#section1");
  var selectImg = section1.querySelector(".select-img");
  var btnChange1 = section1.querySelector(".btn-change");
  var img1 = section1.querySelector('.img');

  //area2  
  var section2 = document.querySelector('#section2');
  var srcInput = section2.querySelector(".src-input");
  var btnChange2 = section2.querySelector(".btn-change");
  var img2 = section2.querySelector('.img');


  btnChange1.onclick = function () {
    img1.src = "../images/" + selectImg.value;
  }

  btnChange2.onclick = function () {
    var src  = srcInput.value;
    if(src.trim() != "") {
      img2.src = "../images/" + src;
    }
    else {
      alert("이미지 파일 이름을 작성해주세요.");
    }
  }

  

});
