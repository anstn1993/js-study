//함수와 표현식

//js의 함수는 다른 언어와 다르게 정의한다고 하지 않고 만든다고 한다.
//왜냐하면 함수도 new연산자를 이용해서 객체로 만들기 때문이다.
//함수를 아래와 같이 만들 수 있기 때문에 다른 곳에 인자로 전달할 수 있다.

var add = new Function("x, y", "return x + y;");

document.write(add(3, 4));

//이런 식으로 표현해도 new를 이용해서 만드는 것과 같다. 가장 많이 쓰이는 방식이다.
var multiple = function(x, y) {
  return x * y;
};

document.write(multiple(3, 4));

//다른 언어처럼 방법처럼 만들 수도 있다.
function divide(x, y) {
  if (y != 0) {
    return x / y;
  }

  return 0;
}

document.write(divide(6, 2));


//js의 모든 함수는 사실 가변 인자 함수다.

var variadicFunc = function () {
    for(i in arguments) {
        document.write(arguments[i] + "<br>");
    }
}


variadicFunc(1, 2, 3, 4, "hi", "world");

//분명 매개변수는 없는데도 인자들이 여러 개 전달된다.
//이 인자들은 사실 arguments라는 컬렉션에 배열의 형태로 저장이 된다. 
//그래서 사실 매개변수들은 arguments의 값에 특별하게 이름을 주는 것에 불과하다. 

var variadicFunc = function (x, y) {
    for(i in arguments) {
        document.write(arguments[i] + "<br>");
    }

    document.write(x + "<br>");
    document.write(y + "<br>");
}

variadicFunc("hi", "apple", 1, 3, 4, "red");//x = "hi", y = "apple"