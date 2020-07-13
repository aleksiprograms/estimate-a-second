let timeStarted = false;
let startTime = 0;
let buttonStartAndStop = document.getElementById("buttonStartAndStop");
let listResults = document.getElementById("listResults");

const onButtonClick = (event) => {
    if (!timeStarted) {
        startTime = Date.now();
        buttonStartAndStop.innerHTML = "STOP";
    } else {
        buttonStartAndStop.innerHTML = "START";
        let result = ((Date.now() - startTime) / 1000).toFixed(3) + " s";
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(result));
        listResults.insertBefore(li, listResults.childNodes[0]);
    }
    timeStarted = !timeStarted;
}