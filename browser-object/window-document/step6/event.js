//Selectors API Level1

window.addEventListener("load", function() {
  var sectionCalc = document.getElementById("section-calc");

  /*
  var numX = sectionCalc.querySelector(".num-x");
  var numY = sectionCalc.querySelector(".num-y");
  var btnAdd = sectionCalc.querySelector(".btn-add");
  var numResult = sectionCalc.querySelector(".num-result");
  */

  var numX = sectionCalc.querySelector("input[name='x']");
  var numY = sectionCalc.querySelector("input[name='y']");
  var btnAdd = sectionCalc.querySelector("input[name='btn-add']");
  var numResult = sectionCalc.querySelector("input[name='result']");

  btnAdd.onclick = function() {
    var x = parseInt(numX.value);
    var y = parseInt(numY.value);

    numResult.value = x + y; //자동으로 문자열로 casting
  };
});

/*
Selectors API Level1
querySelector: 태그 하나 가져오기
querySelectorAll: 복수의 태그 배열로 가져오기

인자로는 css selector를 쓸 수 있다.

*/
