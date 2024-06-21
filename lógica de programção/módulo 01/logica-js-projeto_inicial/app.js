alert ('Bem-vindo, ao jogo do número secretro');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

// estrutura de repetição, enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Digite um núemro entre 1 e ${numeroMaximo}`);
   // se chute for igual a 
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    

   /*  if (tentativas > 1) {
        alert(`Parabéns, você acertou o número secretro ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        alert(`Parabéns, você acertou o número secretro ${numeroSecreto} com ${tentativas} tentativa`);
    } */

