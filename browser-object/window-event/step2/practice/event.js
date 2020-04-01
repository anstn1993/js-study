window.addEventListener("load", function() {

    var section = document.querySelector("section");
    var tbody = document.querySelector("tbody");

    tbody.onclick = function(event) {
        if(event.target.nodeName != "INPUT") return;
        event.target.parentElement.parentElement.remove();
    };

});