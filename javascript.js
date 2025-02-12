let result = "";

function cal(x) {
    result += x;
    document.getElementById("display_x").innerHTML = result;
}

function ac() {
    result = "";
    document.getElementById("display_x").innerHTML = "0";
}

function det() {
    result = result.slice(0, -1); // Remove the last character
    document.getElementById("display_x").innerHTML = result || "0"; // If result is empty, show "0"
}

function equ() {
    try {
        result = eval(result).toString(); // Evaluate the expression and convert to string
        document.getElementById("display_x").innerHTML = result;
    } catch (error) {
        document.getElementById("display_x").innerHTML = "Error";
        result = ""; // Reset result on error
    }
}