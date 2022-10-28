const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
      document.getElementById("resultado").style.color ="orange" ;
    } else if (imc < 25) {
      classification = 'Peso normal'
      document.getElementById("resultado").style.color ="green" ;
    } else if (imc < 30) {
      classification = 'Acima do peso'
      document.getElementById("resultado").style.color ="red" ;
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
      document.getElementById("resultado").style.color ="red" ;
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
      document.getElementById("resultado").style.color ="rede" ;
    } else {
      classification = 'Obesidade Grau III'
      document.getElementById("resultado").style.color ="red" ;
    }
    
    resultado.innerHTML = `IMC: ${imc} (${classification})`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
document.getElementById("Abaixo do peso").innerHTML = resultado;
document.getElementById("Abaixo do peso").style.color ="orange" ;
document.getElementById("Peso normal").innerHTML = resultado;
document.getElementById("Peso normal").style.color ="green" ;
document.getElementById("Acima do peso").innerHTML = resultado;
document.getElementById("Acima do peso").style.color ="red" ;
document.getElementById("Obesidade Grau I").innerHTML = resultado;
document.getElementById("Obesidade Grau I").style.color ="red" ;
document.getElementById("Obesidade Grau II").innerHTML = resultado;
document.getElementById("Obesidade Grau II").style.color ="red" ;
document.getElementById("Obesidade Grau III").innerHTML = resultado;
document.getElementById("Obesidade Grau III").style.color ="red" ;
