document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const value = e.target.innerText;

            if (value === 'C') {
                display.innerText = '';
            } else if (value === '←') {
                display.innerText = display.innerText.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += value;
            }
        });
    });
});
