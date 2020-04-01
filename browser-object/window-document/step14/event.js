//특정 컬럼을 기준으로 레코드 정렬하기

window.addEventListener("load", function() {
  //서버에서 받아온 데이터라고 가정한다.
  var notices = [
    {
      id: 1,
      title: "유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..",
      regDate: "2019-02-05",
      writerId: "mansoo",
      hit: 2
    },
    {
      id: 2,
      title: "자바스크립트란..",
      regDate: "2019-02-02",
      writerId: "mansoo",
      hit: 0
    },
    {
      id: 3,
      title: "기본기가 튼튼해야....",
      regDate: "2019-02-01",
      writerId: "mansoo",
      hit: 1
    },
    {
      id: 4,
      title: "근데 조회수가 ㅜㅜ..",
      regDate: "2019-01-25",
      writerId: "mansoo",
      hit: 0
    }
  ];

  var section = document.querySelector("section");
  var noticeTable = section.querySelector(".notice-table");
  var titleTd = section.querySelector(".title");
  var tbodyNode = noticeTable.querySelector("tbody");

  //레코드의 각 컬럼 노드에 notices의 데이터들 바인딩
  var bindData = function() {
    var template = section.querySelector("template");
    for (var i = 0; i < notices.length; i++) {
      var cloneNode = document.importNode(template.content, true);
      var tds = cloneNode.querySelectorAll("td");
      tds[0].textContent = notices[i].id;
      var aNode = tds[1].querySelector("a");
      aNode.href = notices[i].id;
      aNode.textContent = notices[i].title;
      tds[2].textContent = notices[i].regDate;
      tds[3].textContent = notices[i].writerId;
      tds[4].textContent = notices[i].hit;

      tbodyNode.append(cloneNode);
    }
  };

  bindData();

  var titleSorted = false; //최초의 제목 버튼 클릭시에만 데이터 정렬을 하기 위한 flag

  titleTd.onclick = function() {
    tbodyNode.innerHTML = ""; //기존 레코드 모두 삭제

    if (!titleSorted) {
      titleSorted = true; //데이터 정렬 상태 flag true

      notices.sort(function(notice1, notice2) {
        var title1 = notice1.title;
        var title2 = notice2.title;
        return title1 == title2 ? 0 : title1 < title2 ? -1 : 1;
      });
    }

    notices.reverse(); //배열의 요소를 역순으로 바꿔준다.

    bindData(); //배열의 데이터를 각 node에 바인딩해준다.
  };
});

/*

레코드 정렬을 구현할 때 핵심 컨셉은 노드 자체를 이동시키려고 하는 게 아니라 데이터 array의 정렬하는 것이다.


Array.prototype.sort(): 인요소들을 모두 문자열로 casting해서 유니코드 순서로 배열하게 된다. 
notices.sort(comparator(a, b)): a, b는 notices의 요소들이고 이 함수로직으로 정렬 기준을 잡게 된다.  

 */
