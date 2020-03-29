//==: 값이 같은지만 비교
//===: 주소까지 같은지 비교

var x = 3;
var y = 3;

document.writeln(x == y); //true
document.writeln(x === y); //true -> auto boxing을 해서 변수를 초기화한 경우, 값이 같으면 따로 메모리 할당을 하지 않고 기존 주소 참조

y = 4;//값이 달라지는 순간 새롭게 메모리 할당

document.writeln(x === y); //false

var a = 3;
var b = new Number(3);

document.writeln(a == b); //true
document.writeln(a === b); //false -> new 연산자로 만들게 되면 값이 같아도 무조건 새 주소에 할당


//숫자 문자열과 숫자를 더하면 문자열로 casting
//숫자 문자열과 숫자를 빼면 숫자로 casting
const str1 = 3 + "4";
document.writeln("type: " + typeof str1 + ", value: " + str1); //"34"
const str2 = 3.5 + "4";
document.writeln("type: " + typeof str2 + ", value: " + str2); //"3.54"
const num1 = 3.5 - "2";
document.writeln("type: " + typeof num1 + ", value " + num1); //1.5


document.writeln("322" > "4");//false
document.writeln(32 > "4");//true -> 문자열이 숫자로 캐스팅




