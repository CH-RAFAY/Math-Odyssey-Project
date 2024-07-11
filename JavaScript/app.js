

    document.addEventListener('DOMContentLoaded', function() {
        const body = document.body;
        const symbols = ['+', '-', '×', '÷', '√', 'π', '∫', '∑', 'θ', '∞'];

        // Generate symbols and append to body
        symbols.forEach((symbol, index) => {
            const span = document.createElement('span');
            span.textContent = symbol;
            span.classList.add('symbol');
            span.style.left = `${Math.random() * 100}vw`;
            span.style.animationDelay = `${index * 4}s`; // Adjust delay for each symbol
            body.appendChild(span);
        });
    });


    let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
button.addEventListener("click", function() {
    let value = this.textContent;
    switch(value) {
        case "AC":
            inputbox.value = "0";
            break;
        case "DEL":
            inputbox.value = inputbox.value.slice(0, -1);
            break;
        case "%":
            inputbox.value = eval(inputbox.value) / 100;
            break;
        case "=":
            inputbox.value = eval(inputbox.value);
            break;
        case "sin":
            inputbox.value = Math.sin(parseFloat(inputbox.value));
            break;
        case "cos":
            inputbox.value = Math.cos(parseFloat(inputbox.value));
            break;
        case "tan":
            inputbox.value = Math.tan(parseFloat(inputbox.value));
            break;
        case "log":
            inputbox.value = Math.log10(parseFloat(inputbox.value));
            break;
        case "√":
            inputbox.value = Math.sqrt(parseFloat(inputbox.value));
            break;
        case "±":
            inputbox.value = -inputbox.value;
            break;
        default:
            if (inputbox.value == "0") {
                inputbox.value = value;
            } else {
                inputbox.value += value;
            }
    }
});
});
