window.addEventListener("load", function() {
  var numX = document.getElementById("num-x");
  var numY = document.getElementById("num-y");
  var btnAdd = document.getElementById("btn-add");
  var numResult = document.getElementById("num-result");

  btnAdd.onclick = function() {
    var x = parseInt(numX.value);
    var y = parseInt(numY.value);
    
    numResult.value = x + y;//자동으로 문자열로 casting
  }
});

 


