

const sendButton = document.querySelector('#send-button')
const form = document.querySelector('#form-data')
const thankYou = document.querySelector('#thank-you')
const divForm = document.querySelector('.form')

function thankYouDiv(){
    divForm.style.display = 'none';
    thankYou.style.display = 'flex';
    sendButton.style.display = 'none';
}

form.onsubmit = function(event){
    event.preventDefault()
    temErro = false

    let inputName = document.forms['form-data']['name']

    if(!inputName.value){
        temErro = true
        inputName.classList.add('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerText = "can't be empty"
    } else {
        inputName.classList.remove('inputError')
        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['form-data']['email']

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = "can't be empty"
    } else {
        inputEmail.classList.remove('inputError')
        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputCPF = document.forms['form-data']['cpf']

    if(!inputCPF.value){
        temErro = true
        inputCPF.classList.add('inputError')

        let span = inputCPF.nextSibling.nextSibling
        span.innerText = "can't be empty"
    } else {
        inputCPF.classList.remove('inputError')
        let span = inputCPF.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputSex = document.forms['form-data']['sex']
    let sex = document.querySelector('#sex')

    if(!inputSex.value){
        temErro = true

        let span = sex.lastElementChild
        span.innerText = 'you need to select one'
    } else {
        let span = sex.lastElementChild
        span.innerText = ''
    }

    if(!temErro){
        thankYouDiv()
    }
}
