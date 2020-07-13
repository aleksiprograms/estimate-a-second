let timeStarted = false;
let startTime = 0;
let buttonStartAndStop = document.getElementById("buttonStartAndStop");
let result = document.getElementById("result");

const onButtonClick = (event) => {
    if (!timeStarted) {
        startTime = Date.now();
        buttonStartAndStop.innerHTML = "STOP";
    } else {
        buttonStartAndStop.innerHTML = "START";
        result.innerHTML = ((Date.now() - startTime) / 1000).toFixed(3) + " s";
    }
    timeStarted = !timeStarted;
}