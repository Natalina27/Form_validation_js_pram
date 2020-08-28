const form = document.querySelector('.formWithValidation');
const password = form.querySelector('.password');
const passwordConfirmation = form.querySelector('.passwordConfirmation');
const fields = form.querySelectorAll('.field');

const generateError = function (text) {
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
}

const removeValidation = function () {
    const errors = form.querySelectorAll('.error')
    errors.forEach(item => item.remove());
}

// проверка полей на пустоту
const checkFieldsNotEmpty = function () {
    fields.forEach(item => {
        if(!item.value) {
            const error = generateError(' Cannot be blank');
            item.parentElement.insertBefore(error, item);
        }
    })
}

//валидация пароля
const checkPasswordMatch = function () {
    if (password.value !== passwordConfirmation.value) {
        const error = generateError('Passwords doesnt match');
        password.parentElement.insertBefore(error, password);
    }
}

form.addEventListener('submit', function (event) {

    event.preventDefault();

    removeValidation();
    checkFieldsNotEmpty();
    checkPasswordMatch();

})





