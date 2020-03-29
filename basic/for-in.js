//for-in는 for each와 달리 배열이나 맵(object)에서 값을 뽑아내지 않고 index, key값을 뽑아낸다.
//값을 꺼내는 경우 object의 값을 적절하게 빼내기가 어려워서 배열과 맵을 둘 다 지원하기 위해서 그렇게 설계

var array = ["hello", "hi", "greeting"];

//original
for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}

//for-in array
for (var i in array) {
  document.write(array[i] + "<br>");
}

//for-in object(map)
var object = { id: 1, title: "hello", writeId: "mansoo" };
for (var key in object) {
  document.write(object[key] + "<br>");
}
