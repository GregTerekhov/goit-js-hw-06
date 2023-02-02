const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.value.length == inputEl.dataset.length ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
}