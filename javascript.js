let result = "";
let display = document.getElementById("display");

function cal(v) {
    result += v;
    display.innerHTML = result;
}

function ac() {
    result = "";
    display.innerHTML = "0";
}

function det() {
    result = result.slice(0, -1); // Remove the last character
    display.innerHTML = result || "0"; // If result is empty, show "0"
}

function equ() {
    try {
        result = eval(result).toString(); // Evaluate the expression and convert to string
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = "Error";
        result = ""; // Reset result on error
    }
}