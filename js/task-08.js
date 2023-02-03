const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password,
    }

    if (!mail || !password) {
        alert('Please, fill all the fields');
    };

    form.reset();
    //const formData = new FromData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log('name: ', name);
    //     console.log('value: ', value);
    // });
    console.log(formData);
    
    return formData;
};