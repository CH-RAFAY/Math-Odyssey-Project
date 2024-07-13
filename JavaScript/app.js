document.addEventListener('DOMContentLoaded', function() {

    const body = document.body;
    const inputbox = document.getElementById("inputbox");
    const buttons = document.querySelectorAll("button");
    const themeCircles = document.querySelectorAll('.theme-circle');
    const popupBtn = document.getElementById("popupBtn");
    const popupOverlay = document.getElementById("popupOverlay");
    const closeBtn = document.getElementById("closeBtn");


    const symbols = ['+', '-', '×', '÷', '√', 'π', '∫', '∑', 'θ', '∞'];
    symbols.forEach((symbol, index) => {
        const span = document.createElement('span');
        span.textContent = symbol;
        span.classList.add('symbol');
        span.style.left = `${Math.random() * 100}vw`;
        span.style.animationDelay = `${index * 3}s`; 
        body.appendChild(span);
    });

    // Calculator functionality
    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            if (button.id === 'popupBtn' || button.id === 'closeBtn') {
                return; 
            }
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
                    try {
                        inputbox.value = eval(inputbox.value);
                    } catch (error) {
                        inputbox.value = "Error";
                    }
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
                    inputbox.value = -parseFloat(inputbox.value);
                    break;
                default:
                    if (inputbox.value === "0") {
                        inputbox.value = value;
                    } else {
                        inputbox.value += value;
                    }
            }
        });
    });


    const stopEventPropagation = (event) => {
        event.preventDefault(); 
        event.stopPropagation(); 
    };

    popupBtn.addEventListener("click", (event) => {
        stopEventPropagation(event);
        popupOverlay.classList.add("show-popup");
    });

    closeBtn.addEventListener("click", (event) => {
        stopEventPropagation(event);
        popupOverlay.classList.remove("show-popup");
    });

    popupOverlay.addEventListener("click", (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.classList.remove("show-popup");
        }
    });


    function setActiveTheme() {
        const currentTheme = window.location.pathname.split('/').pop().split('.')[0];
        themeCircles.forEach(circle => {
            if (circle.classList.contains(currentTheme)) {
                circle.classList.add('active');
                circle.style.transform = 'scale(1.2)';
                circle.style.border = '3px solid white';
            } else {
                circle.classList.remove('active');
                circle.style.transform = 'scale(1)';
                circle.style.border = 'none';
            }
        });
    }

    setActiveTheme();

    themeCircles.forEach(circle => {
        circle.addEventListener('click', function(e) {
            e.preventDefault();
            const themeColor = getComputedStyle(this).getPropertyValue('--color1');
            const targetUrl = this.getAttribute('data-theme') + '.html';

            const descentContainer = document.createElement('div');
            descentContainer.style.position = 'fixed';
            descentContainer.style.top = '0';
            descentContainer.style.left = '0';
            descentContainer.style.width = '100vw';
            descentContainer.style.height = '100vh';
            descentContainer.style.backgroundColor = themeColor;
            descentContainer.style.zIndex = '9999';
            descentContainer.style.transform = 'translateY(-100%)';
            descentContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)';

            document.body.appendChild(descentContainer);

            const content = document.createElement('div');
            content.style.position = 'absolute';
            content.style.top = '50%';
            content.style.left = '50%';
            content.style.transform = 'translate(-50%, -50%)';
            content.style.fontSize = '3rem';
            content.style.color = 'white';
            content.style.opacity = '0';
            content.style.transition = 'opacity 0.2s ease-in-out';
            content.textContent = 'Changing Theme...';
            descentContainer.appendChild(content);


            requestAnimationFrame(() => {
                descentContainer.style.transform = 'translateY(0)';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 50);
            });


            for (let i = 0; i < 10; i++) {
                const element = document.createElement('div');
                element.style.position = 'absolute';
                element.style.width = '20px';
                element.style.height = '20px';
                element.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                element.style.borderRadius = '50%';
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                element.style.animation = `float 2s infinite ease-in-out ${Math.random() * 2}s`;
                element.style.opacity = '0';
                element.style.transition = 'opacity 0.2s ease-in-out';
                descentContainer.appendChild(element);
                setTimeout(() => {
                    element.style.opacity = '1';
                }, 100 + Math.random() * 200);
            }

            setTimeout(() => {
                descentContainer.style.transform = 'translateY(-100%)';
                content.style.opacity = '0';
                const elements = descentContainer.querySelectorAll('div');
                elements.forEach(el => {
                    el.style.opacity = '0';
                });
            }, 600);

            // Navigate to the new page after the animation
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        });
    });
});