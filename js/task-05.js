const inputTextEl = document.querySelector('input#name-input');
const outputTextEl = document.querySelector('span#name-output');

outputTextEl.textContent = 'Anonymous';
inputTextEl.addEventListener('input', getEnteredName);

const getEnteredName = (event) => {
    if(!event.currentTarget.value) outputTextEl.textContent = 'Anonymous';

    outputTextEl.textContent = event.currentTarget.value;
}