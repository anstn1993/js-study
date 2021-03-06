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

//step1에서의 문제를 해결했다. 이벤트 콜백 함수들을 모두 익명 함수로 교체했고
//onload이벤트에 대한 콜백 함수도 익명 함수로 교체한 덕분에 그 익명 함수 안에 
//콜백 함수들이 구현됐고 그래서 엘리먼트 객체를 onload이벤트 콜백 함수 scope에서 가져올 수 있게 됐고
//다른 이벤트 콜백 함수들에서 참조할 수 있게 됐다. 
