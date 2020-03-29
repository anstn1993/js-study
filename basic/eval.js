//eval: 문자열을 그대로 코드로 옮겨주는 역할을 하는 함수


var data = '[ \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
    {"id":1, "title":"hello"}, \
]';

eval('var x = 30;');

console.log(x);

eval("var array = " + data + ";");

console.log(array[0].title);
