let listaDeNumerosSorteados = []
let numeroSecreto = gerarNumeroAleatorio() ;
let tentivas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
    function exibirMensagemNaTela() {
        exibirTextoNaTela('h1','Jogo do número secreto')
        exibirTextoNaTela('p','Escolha um número entre 1 e 10')
    }
    
    exibirMensagemNaTela()


function verificarChute() {
    chute = document.querySelector('input').value
//Achar o erro do maior ou menor depois
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
    let numeroEscolhido = parseInt(Math.random() * 10 + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentivas = 1
    exibirMensagemNaTela();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}