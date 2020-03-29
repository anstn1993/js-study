var changeVal = function() {
  var x = prompt("x 값을 입력하세요", 0);
  var y = prompt("y 값을 입력하세요", 0);

  x = parseInt(x);
  y = parseInt(y);

  var btnValChange = document.getElementById("btn-val-change");
  btnValChange.value = x + y; //input태그의 value attribute 값 변경
  span.innerText = x + y; //span 태그 내의 text 교체
};

var changeType = function() {
  var btnToText = document.getElementById("btn-to-text");
  btnToText.type = "text";
  btnToText.value = "changed to text type";
};

var shout = function() {
  alert("I'm span!");
};
//step 0에서 script코드를 맨 마지막으로 뺄 수 밖에 없었다는 한계를 해결하기 위해서
//window객체의 onload이벤트를 이용했다. onload이벤트는 html, css등의 모든 리소스 파일이 모두 메모리에 로드되면 호출되는 이벤트다.
//body태그의 onload이벤트를 사용하지 않은 이유는 html 태그만 메모리 로드가 끝나면 호출되는 이벤트이기 때문이다.
var init = function() {
  var btnValChange = document.getElementById("btn-val-change");
  var btnToText = document.getElementById("btn-to-text");
  btnValChange.onclick = changeVal;
  btnToText.onclick = changeType;
  span.onclick = shout;
};

window.onload = init;

//두 가지 한계가 있다. 하나는 엘리먼트 객체를 함수 안에서 매번 호출해서 쓰는 것
//다른 하나는 init, changeVal, changeType, shout함수 같은 것들은 사실 이벤트에 대한 콜백 함수라 굳이 이름이 필요 없는데 이름이 있다는 것


