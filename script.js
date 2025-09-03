//cotação de moeda 

const USD = 5.45
const EUR = 6.35
const GBP = 7.32

//obtendo os elementos 
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector("main footer")
const description = document.getElementById('description')
const result = document.getElementById('result')

// manipular o input amount para receber apenas números
amount.addEventListener('input', () => {

  const hasNumber = /\D+/g
  amount.value = amount.value.replace(hasNumber, '')
})

// capturando o evento de submit enviar formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}


//função para converte a moeda 
function convertCurrency(amount, price, symbol) {

  try {
    // exibindo a cotação da moeda selecionada 
    description.textContent = `${symbol} 1 = ${formatCurrencyBrl(price)}`

    //calcula o total
    let total = amount * price
    //formatar o valor total 
    total = formatCurrencyBrl(total).replace("R$", "")
    // exibir o resultado total
    result.textContent = `${total} Reais`
    //exir o resultado com footer na tela
    footer.classList.add("show-result")

  } catch (error) {
    //remove a classe da tela
    footer.classList.remove("show-result")
  }
}

// formata a moeda em real 
function formatCurrencyBrl(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: 'currency',
    currency: "BRL"
  })
}