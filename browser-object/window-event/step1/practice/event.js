window.addEventListener("load", function() {

    var section = document.querySelector("section");

    var delBtns = section.querySelectorAll(".del-btn");

    for(var i in delBtns) {
        delBtns[i].onclick = function (event) {
            event.target.parentElement.parentElement.remove();
        }
    }
});