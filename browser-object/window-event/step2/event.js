//버블링을 이용한 이벤트 처리

window.addEventListener("load", function() {

    var section = document.querySelector("section");

    var imgList = section.querySelector(".img-list");
    // var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(event) {
        
        if(event.target.nodeName != "IMG") return;//img태그를 클릭했을 때만 실행

        currentImg.src = event.target.src;
    }
});

/*
    운영체제가 브라우저를 관리하고 있기 때문에 마우스로 브라우저의 어떤 부분을 클릭하면 운영체제는 브라우저에게 알려준다.
    브라우저는 자신이 관리하는 객체인 document객체들을 가진다. 브라우저는 이벤트가 발생한 위치에 어떤 객체가 있는지 알아보게 된다. 
    그래서 이벤트가 발생한 부분이 여러 layer의 태그로 이루어져 있으면 document부터 시작해서 html, body, ...가장 안쪽으로 감싸져있는 태그까지 전달이 되면
    그 노드에서 이벤트가 발생했음을 감지하고 만약 이벤트 핸들러가 붙어있으면 이벤트를 발생시킨다. 
    그런데 이 끝단에 있는 노드들의 개수가 많을 때, 그런데 수행하는 동작도 거의 동일하다면 그걸 일일이 함수를 바인딩해주는 것보단 
    버블링을 이용해서 다시 자신의 부모 노드로 이벤트를 전달해주게 된다. 그렇게 해서 계속 위로 전달을 해줌으로써 자기 자신이 이벤트를 직접 실행하지 않는 것이다. 
    그래서 img태그에 직접 onclick핸들러를 달지 않더라도 그 부모 태그인 imgList에도 이벤트가 전파되어서 핸들러가 실행되게 된다.
    그럼 굳이 img 태그들에 다 핸들러를 만들 필요가 없어지는 것이다.   
*/