let totalPercent = 0;

function addingOne() {
    totalPercent = totalPercent + 1;
    changingAttribute(totalPercent);
}

function addingThree() {
    totalPercent = totalPercent + 3;
    changingAttribute(totalPercent);
}

function addingSeven() {
    totalPercent = totalPercent + 7;
    changingAttribute(totalPercent);
}

function changingAttribute(percent) {
    $(".progress-bar").attr("style", "width:" + percent + "%");
}

function init() {
    $("#onePercent").click(addingOne);
    $("#threePercent").click(addingThree);
    $("#sevenPercent").click(addingSeven);
    console.log("Отслеживание нажитий началось")
}

$(document).ready(init);
console.log("Скрипт загрузился")