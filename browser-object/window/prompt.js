//사용자 값을 받는 대화상자. 값은 문자열로 들어온다. 

var x, y;
//두 번째 인자는 기본 값
x = window.prompt("x 값을 입력해주세요. ", 0);
y = window.prompt("y 값을 입력해주세요. ", 0);

//숫자로 parsing, 만약 문자열을 입력한 경우 NaN(Not a Number) 에러 return
 x = parseInt(x);
 y = parseInt(y);

 //parseInt("12abc") = 12. 자동으로 문자열은 탈락시켜준다. substring할 필요 없음.

alert(x + y);
