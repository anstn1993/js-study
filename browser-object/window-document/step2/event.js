window.onload = function() {
  var btnValChange = document.getElementById("btn-val-change");
  var btnToText = document.getElementById("btn-to-text");

  btnValChange.onclick = function() {
    var x = prompt("x 값을 입력하세요", 0);
    var y = prompt("y 값을 입력하세요", 0);

    x = parseInt(x);
    y = parseInt(y);

    btnValChange.value = x + y; //input태그의 value attribute 값 변경
    span.innerText = x + y; //span 태그 내의 text 교체
  };

  btnToText.onclick = function() {
    btnToText.type = "text";
    btnToText.value = "changed to text type";
  };

  span.onclick = function() {
    alert("I'm span!");
  };
};

//엘리먼트 객체를 함수 안에서 매번 호출해서 쓰는 한계
