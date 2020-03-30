window.addEventListener("load", function() {
  var sectionCalc = document.getElementById("section-calc");

  /* 태그명으로 엘리먼트 선택하기
  var inputs = sectionCalc.getElementsByTagName("input");//input tag array
  var numX = inputs[0];
  var numY = inputs[1];
  var btnAdd = inputs[2];
  var numResult = inputs[3];
  */

  //class명으로 엘리먼트 선택하기(이 방식이 더 바람직)
  var numX = sectionCalc.getElementsByClassName("num-x")[0];
  var numY = sectionCalc.getElementsByClassName("num-y")[0];
  var btnAdd = sectionCalc.getElementsByClassName("btn-add")[0];
  var numResult = sectionCalc.getElementsByClassName("num-result")[0];

  btnAdd.onclick = function() {
    var x = parseInt(numX.value);
    var y = parseInt(numY.value);

    numResult.value = x + y; //자동으로 문자열로 casting
  };
});
