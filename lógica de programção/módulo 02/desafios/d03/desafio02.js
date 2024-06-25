// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 5;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;

}

calcularFatorial(5)
