//childNodes를 이용한 노드 선택

window.addEventListener("load", function() {
  var sectionCalc = document.querySelector("#section-calc");
  // var inputs = document.querySelectorAll("input");
  var box = sectionCalc.querySelector(".box");
  // var inputs = box.childNodes;//box 태그의 자식 노드들을 배열로 return(text, comment 포함)
  var inputs = box.children;//box 태그의 자식 노드들을 배열로 return(태그만 포함)
  var input1 = inputs[0];
  var input2 = inputs[1];

  input1.value = "hello";
  input2.value = "okay";

  btnAdd.onclick = function() {
    var x = parseInt(numX.value);
    var y = parseInt(numY.value);

    numResult.value = x + y; //자동으로 문자열로 casting
  };
});

/*

childNodes: 자식 노드들을 배열로 반환해주지만 이렇게 하면 우리가 원하는 결과가 안 나올 가능성이 높다.
노드에는 text와 주석이 모두 포함되기 때문에 white space나 주석이 부모 노드와 내가 원하는 자식 태그 노드 사이에 끼어있으면 
태그들이 내가 생각한 index에 없기 때문이다.

children:childNodes와 달리 text와 주석을 제외한 html태그만 노드로 뽑아서 배열로 반환해준다. 


노드의 종류

1. DocumentType : <!DOCTYPE HTML>
2. Element: html tag
  1) Attribute: html태그의 속성(value, name, rows, cols...)
  2) Entity: 예약어를 text로 쓰기 위해서 사용하는 키워드(lt(less than):<, gt(greater than):>, nbsp)
  3) EntityReference: Entity만 그대로 쓰면 그것도 텍스트가 되기 때문에 Entity임을 표시하기 위한 문자(&lt;, &gt;, &nbsp)
  4) Text

3. Comment: 주석
4. CDATASection: <![CDATA[<, >, %, *, ....이 영역에 특수문자를 마음껏 쓸 수 있다]]>
5. Notation: Attribute의 값 중 #ffffff, 10px같이 특정 형식을 지닌 값들

*/
