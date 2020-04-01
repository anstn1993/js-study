//event객체의 target속성 이용하기

window.addEventListener("load", function() {

    var section = document.querySelector("section");

    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i = 0; i < imgs.length; i ++) {
        imgs[i].onclick = function (event) {
            currentImg.src = event.target.src;
        } 
    }
});

/*
    DOM의 인터페이스인 Event인터페이스는 이벤트가 발생한 노드를 참조할 수 있는 target속성을 제공한다.
    target을 쓰면 이벤트가 발생한 노드를 참조한다.

    위의 코드는 버블링을 쓰지 않아서 반복문으로 img태그들에 대한 onclick이벤트를 하나하나 줄 수밖에 없다.
    그렇게 되면 함수 객체를 반복적으로 만들면서 메모리 공간도 많이 쓰게 되는 문제가 발생. 
*/