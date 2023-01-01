// screen displayed value
const display = document.querySelector(".screen");

console.log(display);

// Event delegation from parent class
const input = document.querySelector(".layout");

console.log(input);

// Receive button click
let clicked;

// Store state in array
let state = []
state[0] = 0

input.addEventListener("click", function (event) {
    clicked = event.target.innerText;

    if (clicked == 'C') {
        state[0] = 0;
        state[1] = null;
        state[2] = null;
        display.innerText = state[0];
    } else if (clicked == '←') {
        if (state[1] == null) {
            display.innerText = 0;
        } else {
            state[1] = state[1].slice(0,-1);
            display.innerText = state[1];
        }
    }else if (!isNaN(parseInt(clicked))) {
        if (state[1] == null) {
            state[1] = clicked;
            display.innerText = state[1];
        } else {
            state[1] += clicked;
            display.innerText = state[1];
        };
        display.innerText = state[1];
    } else if (clicked == '÷' || clicked == '×' || clicked == '−' || clicked == '+') { 
        if (state[0] == 0) {
            state[0] = parseInt(state[1])
            state[1] = null
        } else if (state[2] == null && state[1] != null) {
            state[1] = parseInt(state[1])
        }
        state[2] = clicked
    } else if (clicked == '=') {
        if (state[2] == '÷') {
            state[0] = state[0] / parseInt(state[1])
            state[1] = null;
            state[2] = null;
            display.innerText = state[0];
        } else if (state[2] == '×') {
            state[0] = state[0] * parseInt(state[1])
            state[1] = null;
            state[2] = null;
            display.innerText = state[0];
        } else if (state[2] == '−') {
            state[0] = state[0] - parseInt(state[1])
            state[1] = null;
            state[2] = null;
            display.innerText = state[0];
        } else if (state[2] == '+') {
            state[0] = state[0] + parseInt(state[1])
            state[1] = null;
            state[2] = null;
            display.innerText = state[0];
        }
    }
});

if (!("clicked" in window)) {
    display.innerText = 0;
}