window.addEventListener("load", function() {
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
});

//index.html파일을 보면 event.js를 먼저 쓰고 그 다음 test.js를 썼다.
//이때 각 파일에 window.onload = function() {}과 같은 식으로 쓰면 안 된다.
//그럼 window.onload이벤트에 처음에는 event.js의 익명 함수를 참조하지만 이후 test.js의 익명함수를 참조해서
//event.js에서 정의한 기능들은 사라지게 된다. 

//이런 문제를 해결하기 위해서 addEventListener를 사용하면 된다. 
//이렇게 하면 리스너 안에 인자로 전달되는 함수의 코드가 모두 누적되게 된다. 


