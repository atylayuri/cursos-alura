
let numeroSecreto = 4;
let tentivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto')
exibirTextoNaTela('p','Escolha um número entre 1 e 10')

function verificarChute() {
    chute = document.querySelector('input').value

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou!');
      let palavraTentativa = tentivas > 1 ? 'tentativas' : 'tentativa';
      let msgTentativas = `Você descobriu o número secreto com ${tentivas} ${palavraTentativa}`;
      exibirTextoNaTela('p', msgTentativas)
       document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroSecreto > chute ){
            exibirTextoNaTela('p','O número secreto é maior')
        } else {
            exibirTextoNaTela('p','O número secreto é menor')
        }
        tentivas++
        limparCampo()
        
    } 
}

function gerarNumeroAleatorio() {
   return parseIntI(Math.random() * 10 + 1)
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
