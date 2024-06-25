/* Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
 */

function calculaIMC(altura, peso){
    let alturaMetros = altura
    let imc = peso / (alturaMetros * alturaMetros);
    console.log(`O imc é de ${imc}`)
  }

  calculaIMC(171, 65)