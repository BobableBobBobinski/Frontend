function alerting() {
    alert("!!!");
    var card = document.getElementById("card-to-delete");
    card.parentElement.removeChild();
}

function removeByJquery() {
    var element = $("#card-to-delete");
    element.remove();
}

function add() {
    var but2 = $("#button-to-add");
    but2.after("<h2>Hello, ma friend</h2>");
}
var current = "blue";
var colors = ["none", "none", "none", "none", "none", "none", "none", "none", "none"];
function turn(number) {
    $("#s"+number).css("background-color",current);
    colors[number - 1] = current;
    console.log(colors);
    if(current === "blue") {
        current = "red";
    } else {
        current = "blue";
    }
    $("#s"+number).prop("disabled", true);
}
