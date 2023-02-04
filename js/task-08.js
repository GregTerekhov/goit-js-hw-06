const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {mail, password} = event.currentTarget.elements;

    if (!mail || !password) {
        return alert('Please, fill in all the fields');
    };

    form.reset();
    console.log(mail, password);
};