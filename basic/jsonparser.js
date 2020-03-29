var dataStr = '{ "id": 1, "title": "aaa" }';

var data = JSON.parse(dataStr);
console.log("id: "+ data.id + ", title: " + data.title);


var dataStr2 = JSON.stringify(data);
console.log(dataStr2);