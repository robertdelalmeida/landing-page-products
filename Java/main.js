

const sendButton = document.querySelector('#send-button')
const form = document.querySelector('#form-data')
const thankYou = document.querySelector('#thank-you')
const divForm = document.querySelector('.form')

console.log('teste')

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

function fetchProducts() {
    const url = ('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
  
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            upGallery(data)
        })
        .catch((error) => {
            console.log('Erro ao buscar os produtos:', error)
        })
}

function upGallery(data) {
    const products = data.products
    let productsInfos = ''
  
    products.forEach((product) => {
      const card = newProductCard(product)
      productsInfos += card
    });
  
    const galleryProducts = document.querySelector('#gallery-products')
    galleryProducts.insertAdjacentHTML('beforeend', productsInfos)
}

function newProductCard(product) {
    return `
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
}

fetchProducts(1)