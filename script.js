// Insert number or operator into the display
function insert(value) {
    document.getElementById("display").value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Delete last character
function deleteLast() {
    let currentDisplay = document.getElementById("display").value;
    document.getElementById("display").value = currentDisplay.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
