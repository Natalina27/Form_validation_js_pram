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
    //проверим, что все поля у нас заполнены и если поля не заполнены выведем их в консоль
    fields.forEach(item =>  {
        !item.value && console.log ('field is blank', item);
    });

    //выведем  ошибки на форму
    //сгенерируем новый элемент и добавим к каждому полю, которое не заполнено.
    //Добавим еще красный цвет и текст Cannot be blank.
    //чтобы вставить его перед нашими полями используем insertBefore.
    // А так как нам нужно указать парента, то используем .parentElement.


});

