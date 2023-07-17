function zeroAEsquerda(num) {

    return num >= 10 ? num : `0${num}`;

}

function strMes(mes) {
    switch (mes) {
        case 0:

            return 'Janeiro';

            break;
        case 1:
            return 'Fevereiro';
            break;
        case 2:
            return 'Março';
            break;
        case 3:
            return 'Abril';
            break;
        case 4:
            return 'Maio';
            break;
        case 5:
            return 'Junho';
            break;
        case 6:
            return 'Julho';
            break;
        case 7:
            return 'Agosto';
            break;
        case 8:
            return 'Setembro';
            break;
        case 9:
            return 'Outubro';
            break;
        case 10:
            return 'Novembro';
            break;
        case 11:
            return 'Dezembro';
            break;
    }
}
const data = new Date();

const dia = zeroAEsquerda(data.getDate());
const mes = data.getMonth();
const ano = zeroAEsquerda(data.getFullYear());
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const seg = zeroAEsquerda(data.getSeconds());

function diaDaSemana(data) {
    let intDay = data.getDay();
    switch (intDay) {
        case 0:

            return 'Domingo';

            break;
        case 1:
            return 'Segunda-Feira';
            break;
        case 2:
            return 'Terça-Feira';
            break;
        case 3:
            return 'Quarta-Feira';
            break;
        case 4:
            return 'Quinta-Feira';
            break;
        case 5:
            return 'Sexta-Feira';
            break;
        case 6:
            return 'Sabado';
            break;
    }
}

let dSemana = diaDaSemana(data);
let strmes = strMes(mes);

const h1 = document.querySelector('.container h1');

const horaOut = `${dSemana},${dia} de ${strmes} de ${ano} ${hora}:${min} `

h1.innerHTML = horaOut;



