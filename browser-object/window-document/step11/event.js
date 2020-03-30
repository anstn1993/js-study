//노드 복제 및 템플릿 복제

window.addEventListener("load", function() {
  var notices = [
    {
      id: 5,
      title: "5번 추가",
      regData: "2019-02-24",
      writerId: "mansoo",
      hit: 0
    },
    {
      id: 6,
      title: "6번 추가",
      regData: "2019-02-27",
      writerId: "mansoo",
      hit: 0
    }
  ];

  var section = document.querySelector("section");
  var noticeTable = section.querySelector(".notice-table");
  var tbody = noticeTable.querySelector("tbody");
  var cloneBtn = section.querySelector(".clone-btn");
  var cloneTPBtn = section.querySelector(".clone-template-btn");

  cloneBtn.onclick = function() {
    var trNode = noticeTable.querySelector("tbody tr"); //tbody의 첫 번째 tr
    for(var i in notices) {
      var cloneNode = trNode.cloneNode(true); //true: 모든 자식 노드들을 다 복제, false: 자기 자신만 복제
      var tds = cloneNode.querySelectorAll("td");
      // tds[0].innerText = notices[0].id;
      tds[0].textContent = notices[i].id;
      tds[1].innerHTML = '<a href="'+ notices[i].id +'">' + notices[i].title + "</a>";
      tds[2].textContent = notices[i].regData;
      tds[3].textContent = notices[i].writerId;
      tds[4].textContent = notices[i].hit;
      tbody.append(cloneNode);
    }
  };

  cloneTPBtn.onclick = function() {
    var template = section.querySelector("template");
    for(var i in notices) {
      var cloneNode = document.importNode(template.content, true); //true: 모든 자식 노드들을 다 복제, false: 자기 자신만 복제
      var tds = cloneNode.querySelectorAll("td");
      // tds[0].innerText = notices[0].id;
      tds[0].textContent = notices[i].id;
      // tds[1].innerHTML = '<a href="'+ notices[i].id +'">' + notices[i].title + "</a>";
      var aNode = tds[1].querySelector("a");
      aNode.textContent = notices[i].title;
      tds[1].append(aNode);

      tds[2].textContent = notices[i].regData;
      tds[3].textContent = notices[i].writerId;
      tds[4].textContent = notices[i].hit;
      tbody.append(cloneNode);
    }
  };
});

/*
cloneNode(): 다른 노드를 복제한다. 인자로 true를 주면 자식 노드들까지 복제하고 false를 주면 해당 노드 하나만 복제

하지만 node clone은 기존에 노드가 존재해야 복제가 가능하다. 그래서 노드가 없는 상태에서는 template을 써서 노드를 만들어야 한다. 

 */
