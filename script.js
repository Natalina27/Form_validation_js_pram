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


    //Но если мы нажмем еще раз validate, то все наши сообщения сдублируются.
    // Самый простой способ этого избежать, это удалять все ошибки с страницы при валидации.
    const errors = form.querySelectorAll('.error');

    errors.forEach(item => item.remove());
    //проверим, что все поля у нас заполнены и если поля не заполнены выведем их в консоль
    fields.forEach(item => {
        if(!item.value) {
            console.log('field is blank', item);
            //выведем  ошибки на форму
            //сгенерируем новый элемент и добавим к каждому полю, которое не заполнено.
            const error = document.createElement('div');
            error.className = 'error';
            //Добавим еще красный цвет и текст Cannot be blank.
            error.style.color = 'red';
            error.innerHTML = ' Cannot be blank';
            //чтобы вставить его перед нашими полями используем insertBefore.
            // А так как нам нужно указать парента, то используем .parentElement.
            item.parentElement.insertBefore(error, item);
        }
    })
})





