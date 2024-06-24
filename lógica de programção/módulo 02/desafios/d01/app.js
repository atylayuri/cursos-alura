let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

function msgNoConsole() {
    console.log('O botão foi clicado')
}

function clicado() {
    alert('Eu amo JS')
}

function nomeCidade() {
    let cidade = prompt('Digite um nome de um cidade do Brasil aqui:')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function soma() {
    let num1 = parseInt(prompt('Digite um número inteiro'))
    let num2 = parseInt(prompt('Digite outro número inteiro'))
    let resultado = num1 + num2
    alert(`${num1} + ${num2} = ${resultado}`)
}
