const display = document.getElementById("display");

// Display mein value add karna
function appendValue(value) {
    // Error ke baad naya number start hoga
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

// Sab kuch clear karna
function clearDisplay() {
    display.value = "";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Factorial function
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return NaN;
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Calculation
function calculate() {
    try {
        let expression = display.value;

        if (expression === "") {
            return;
        }

        // Factorial support: 5! = 120
        expression = expression.replace(
            /(\d+)!/g,
            function (match, number) {
                return factorial(parseInt(number));
            }
        );

        // Percentage support
        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            function (match, number) {
                return `(${number}/100)`;
            }
        );

        const result = eval(expression);

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
