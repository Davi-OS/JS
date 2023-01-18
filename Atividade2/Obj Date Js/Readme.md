# Trabalhando com o Objeto Date JavaScript.
## Esse Branch tras melhorias/correções para o primeiro codigo do exercicio.

A partir de mais estudos percebi que o objeto possui um meio de formatação muito mas muito mais pratico do que o desenvolvido por mim.....
##
const h1 = document.querySelector('.container h1');
const data = new Date();
// usando a propiedade do objeto, formatando a data e hora.
h1.innerHTML = data.toLocaleString('pt-BR',{dateStyle:'full',timeStyle:'short' });
##
trata simplismente do metodo "toLocaleString" que  a partir dele defino um idioma e um objeto com as especificações de estilo da data e da hora.

##

Outra melhoria observavel que poderia ter feito é a substuição dos dois "switch's" para dois Array's de strings com os nomes dos meses e dia das semanas, pois o metodo data.getDay() e data.getMonth() retorna uma valor (Number) que equivale a ao index de um array, por exemplo, ao usar o data.getDay() ele me retornasse um '0', equivaleria a posição 0 do array "diasDaSemana" ou seja segunda-feira (Monday);

