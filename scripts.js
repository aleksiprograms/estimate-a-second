let timeStarted = false;
let startTime = 0;
let instruction = document.getElementById("instruction");
let buttonStartAndStop = document.getElementById("buttonStartAndStop");
let listResults = document.getElementById("listResults");
let timeOut;

const onButtonClick = (event) => {
    if (!timeStarted) {
        start();
    } else {
        stop(true);
    }
}

const start = () => {
    startTime = Date.now();
    timeStarted = true;
    buttonStartAndStop.innerHTML = "STOP";
    instruction.innerHTML = "";
    timeOut = setTimeout(() => {
        instruction.innerHTML = "WAITED TOO LONG";
        stop(false);
    }, 10000);
}

const stop = (addToList) => {
    if (addToList) {
        let result = ((Date.now() - startTime) / 1000).toFixed(3) + " s";
        instruction.innerHTML = ""
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(result));
        listResults.insertBefore(li, listResults.childNodes[0]);
    }
    timeStarted = false;
    buttonStartAndStop.innerHTML = "START";
    clearTimeout(timeOut);
}