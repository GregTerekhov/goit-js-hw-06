const inputEl = document.querySelector('input#font-size-control');
const textSpanEl = document.querySelector('#text');

inputEl.addEventListener('input', function (event) {
    textSpanEl.style.fontSize = event.currentTarget.value + 'px';
});

