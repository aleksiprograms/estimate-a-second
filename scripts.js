let timeStarted = false;
let startTime = 0;
let instruction = document.getElementById("instruction");
let buttonStartAndStop = document.getElementById("buttonStartAndStop");
let tableResults = document.getElementById("tableResults");
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
    instruction.innerHTML = "Running...";
    timeOut = setTimeout(() => {
        instruction.innerHTML = "WAITED TOO LONG";
        stop(false);
    }, 30000);
}

const stop = (addToList) => {
    if (addToList) {
        let result = (Date.now() - startTime) / 1000;
        let resultFormated = result.toFixed(3) + " s";
        instruction.innerHTML = ""
        let row = tableResults.insertRow(0);
        let cellResult = row.insertCell(0);
        let cellEvaluation = row.insertCell(1);
        cellResult.innerHTML = resultFormated;
        cellResult.className = "result"
        if (resultFormated === "10.000 s") {
            cellEvaluation.innerHTML = "PERFECT";
            cellEvaluation.className = "evaluation"
            cellEvaluation.classList.add("evaluationPerfect");
        } else if (Math.abs(result - 10) <= 0.5) {
            cellEvaluation.innerHTML = "NICE";
            cellEvaluation.className = "evaluation"
            cellEvaluation.classList.add("evaluationNice");
        } else if (Math.abs(result - 10) <= 1) {
            cellEvaluation.innerHTML = "GOOD";
            cellEvaluation.className = "evaluation"
            cellEvaluation.classList.add("evaluationGood");
        } else if (Math.abs(result - 10) <= 2) {
            cellEvaluation.innerHTML = "OK";
            cellEvaluation.className = "evaluation"
            cellEvaluation.classList.add("evaluationOK");
        } else {
            cellEvaluation.innerHTML = "BAD";
            cellEvaluation.className = "evaluation"
            cellEvaluation.classList.add("evaluationBad");
        }
    }
    timeStarted = false;
    buttonStartAndStop.innerHTML = "START";
    clearTimeout(timeOut);
}