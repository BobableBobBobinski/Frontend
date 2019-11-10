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
    // $("#s" + number).css("background-color", current);
    $("#s" + number).animate({
        backgroundColor: current,
        borderColor: "white"
    }, 300);
    colors[number - 1] = current;
    console.log(colors);
    if (current === "blue") {
        current = "red";
    } else {
        current = "blue";
    }
    $("#s" + number).prop("disabled", true);
    var result = check();
    if (result != "none") {
        for (let i = 0; i < 10; i++) {
            $("#s" + i).prop("disabled", true);
        }
        $("#result").animate({
            backgroundColor: result,
        }, 200);
        $("#result").text("Winner is ");
    }
    console.log(result);
}

function check() {
    for (let i = 0; i < 7; i += 3) {
        if (colors[0 + i] == colors[1 + i] && colors[1 + i] == colors[2 + i] && colors[2 + i] != "none") {
            return colors[0 + i];
        }
    }
    for (let i = 0; i < 3; i += 1) {
        if (colors[0 + i] == colors[3 + i] && colors[3 + i] == colors[6 + i] && colors[6 + i] != "none") {
            return colors[0 + i];
        }
    }
    if (colors[0] == colors[4] && colors[4] == colors[8] && colors[0] != "none") {
        return colors[0];


    }
    if (colors[2] == colors[4] && colors[4] == colors[6] && colors[6] != "none") {
        return colors[2];
    }
    let wasNone = false;
    for (let i = 0; i < 9; i++) {
        if (colors[i] == "none") {
            wasNone = true;
        }
    }
    if (wasNone == false) {
        return "draw";
    }
    return "none";
}

function restart() {
    for (let i = 1; i < 10; i++) {
        $("#s" + i).animate({
            backgroundColor: "white",
            borderColor: "black",

        }, 100)
        $("#s" + i).prop("disabled", false);
    }
    for (let i = 0; i < 9; i++) {
        colors[i] = "none";
    }
}
