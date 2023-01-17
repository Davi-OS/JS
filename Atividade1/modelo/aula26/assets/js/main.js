// Capturar evento de submit do formulário
const form = document.querySelector('.formulario');
//S
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    resultado('Peso invalido', false);
    return;
  }

  if (!altura) {
    resultado('Altura invalida', false);
    return;
  }

  const imc = getIMC(peso, altura);
  const nivelIMC = getNivelIMC(imc);

  const msg = `Seu imc é ${imc} (${nivelIMC}).`;
  resultado(msg, true);

});

// teste de Nivel IMC//
function getNivelIMC(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade Grau1', 'Obesidade Grau2', 'Obesidade Grau3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];

}

function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p');
  return p;
}


function resultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP();
  if (isValid) {
    p.classList.add('paragrafoResultado');
  } else {
    p.classList.add('bad');
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}