const inputTextEl = document.querySelector('input#name-input');
const outputTextEl = document.querySelector('span#name-output');

outputTextEl.textContent = 'Anonymous';
inputTextEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    outputTextEl.textContent = event.currentTarget.value;
}