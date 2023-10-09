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

