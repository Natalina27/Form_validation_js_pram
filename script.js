//все элементы, с которыми мы будем работать
const form = document.querySelector('.formWithValidation');
const validateBtn = form.querySelector('.validateBtn');
const username = form.querySelector('.username');
const password = form.querySelector('.password');
const passwordConfirmation = form.querySelector('.passwordConfirmation');
const where = form.querySelector('.where');
const message = form.querySelector('.message');
const fields = form.querySelectorAll('.field');

//функции
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

//вынесем проверку полей на пустоту
const checkFieldsPresence = function () {
    fields.forEach(item => {
        if(!item.value) {
            const error = generateError(' Cannot be blank');
            item.parentElement.insertBefore(error, item);
        }
    })
}

form.addEventListener('submit', function (event) {

    event.preventDefault();

    removeValidation();
    checkFieldsPresence();

    if (password.value !== passwordConfirmation.value) {
        const error = generateError('Passwords doesnt match');
        password.parentElement.insertBefore(error, password);
    }
})





