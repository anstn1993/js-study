var changeVal = function () {
    var x = prompt("x 값을 입력하세요", 0);
    var y = prompt("y 값을 입력하세요", 0);

    x = parseInt(x);
    y = parseInt(y);

    btnValChange.value = x + y;//input태그의 value attribute 값 변경
    span.innerText = x + y;//span 태그 내의 text 교체
}

btnValChange.onclick = changeVal;

var changeType = function () {
    btnToText.type = "text";
    btnToText.value = "changed to text type";
}

btnToText.onclick = changeType;

var shout = function () {
    alert("I'm span!");
}

span.onclick = shout;

//엘리먼트 객체 변수의 이름을 html 태그의 id와 같게 쓰면 굳이 document객체로 엘리먼트 객체를 가져오지 않아도 맵핑이 된다.
