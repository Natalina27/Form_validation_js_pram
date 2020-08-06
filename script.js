//все элементы, с которыми мы будем работать
const form = document.querySelector('.formWithValidation');
const validateBtn = form.querySelector('.validateBtn');
const username = form.querySelector('.username');
const password = form.querySelector('.password');
const passwordConfirmation = form.querySelector('.passwordConfirmation');
const where = form.querySelector('.where');
const message = form.querySelector('.message');
const fields = form.querySelectorAll('.field');

//нужно повесить евент submit на нашу форму
form.addEventListener('submit', function (event) {
    event.preventDefault(); //запрещает поведение по умолчанию (html по умолчанию отправляет форму и перезагружает при этом страницу)
    console.log('clicked on validate');
    console.log('username: ', username.value);
    console.log('password: ', password.value);
    console.log('passwordConfirmation: ', passwordConfirmation.value);
    console.log('where: ', where.value);
    console.log('message: ', message.value);
})

//проверим, что все поля у нас заполнены

