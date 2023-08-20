

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
        span.innerText = "Este campo não pode estar vazio"
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
        span.innerText = "Este campo não pode estar vazio"
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
        span.innerText = "Este campo não pode estar vazio"
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
        span.innerText = 'Você precisa selecionar um dos campos acima'
    } else {
        let span = sex.lastElementChild
        span.innerText = ''
    }

    if(!temErro){
        thankYouDiv()
        fetchProducts()
    }
}


const upGallery = document.querySelector('#gallery-products')
const buttonPage = document.querySelector('#next-page')

let clickCounter = 0

async function fetchProducts() {
    let nextPageLink = ''

    const response = await fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")

    console.log(response)

    const data = await response.json()

    console.log(data)

    nextPageLink = data.nextPage

    data.products.map((product) => {
        const divApi = document.createElement('div')
        
        const hTML = document.innerHTML = `
        <div class="productApi" data-id="${product.id}">
            <div id='product-image'>
                <img src="${product.image}" id='image' alt="Galeria">
            </div>
            <div id='product-info'>
                <span id='name'>${product.name}</span>
                <p id='description'>${product.description}</p>
                <span id='old-price'>De: R$${product.oldPrice.toFixed(2)}</span>
                <h1 id='price'>Por: R$${product.price.toFixed(2)}</h1>
                <span id='installments'>ou ${product.installments.count}x de R$${product.installments.value.toFixed(2)}</span>
                <button id='button-buy'>Comprar</button>
            </div>
        </div>
    `
        divApi.innerHTML = hTML
        upGallery.appendChild(divApi)

        buttonPage.addEventListener('click', buttonPageLink)

    })

    async function buttonPageLink() {
        if (clickCounter >= 4) { // Limite de 6 cliques
            buttonPage.disabled = true
            console.log("Limite de cliques atingido.");
            return;
        }

        clickCounter++
        upGallery.innerHTML = ''
        const nextPage = await fetch(`https://${nextPageLink}`)

        console.log(nextPageLink)

        const data = await nextPage.json()

        console.log(data)

        nextPageLink = data.nextPage

        console.log(nextPageLink)

        data.products.map((product) => {
            const divApi = document.createElement('div')
            
            const hTML = document.innerHTML = `
            <div class="productApi" data-id="${product.id}">
                <div id='product-image'>
                    <img src="${product.image}" id='image' alt="Galeria">
                </div>
                <div id='product-info'>
                    <span id='name'>${product.name}</span>
                    <p id='description'>${product.description}</p>
                    <span id='old-price'>De: R$${product.oldPrice.toFixed(2)}</span>
                    <h1 id='price'>Por: R$${product.price.toFixed(2)}</h1>
                    <span id='installments'>ou ${product.installments.count}x de R$${product.installments.value.toFixed(2)}</span>
                    <button id='button-buy'>Comprar</button>
                </div>
            </div>
        `

        divApi.innerHTML = hTML
        upGallery.appendChild(divApi)
        })
    }

}

const sendInvite = document.querySelector('#send-invite')
const formInvite = document.querySelector('#form-invite')
const inviteShare = document.querySelector('#invite-share')
const pHide = document.querySelector('.p-fourth')

function thanksForShare(){
    formInvite.style.display = 'none';
    inviteShare.style.display = 'flex';
    pHide.style.display = 'none';
}

formInvite.onsubmit = function(event){
    event.preventDefault()
    temErro = false

    let inputName = document.forms['form-invite']['name']

    if (!inputName.value) {
        temErro = true
        inputName.classList.add('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerText = "can't be empty"
    } else {
        inputName.classList.remove('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['form-invite']['email']

    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = "can't be empty"
    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro){
        thanksForShare()
    }
}

function scroll(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
    })
}

document.querySelectorAll('a[href^="#algoritimo"]').forEach(anchor => {
    anchor.addEventListener('click', scroll)
})

document.querySelectorAll('a[href^="#produtos"]').forEach(anchor => {
    anchor.addEventListener('click', scroll)
})

document.querySelectorAll('a[href^="#share"]').forEach(anchor => {
    anchor.addEventListener('click', scroll)
})
