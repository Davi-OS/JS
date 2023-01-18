const h1 = document.querySelector('.container h1');




const data = new Date();
console.log(data);
// Retorna as horas e minutos ja em string.
function horaMinutoString(data) {
    const horas = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`;
    const minutos = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`;
    let stringhoras = `${horas}:${minutos}`;
    return stringhoras;
}

// Retorna o ano
function anoString(data) {
    const anoString = data.getFullYear();
    return anoString;
}
// Converte o mes de Number para a respctiva string//
function mesAnoString(data) {
    const mes = data.getMonth();
    let mesText;
    switch (mes) {
        case 0:
            mesText = 'Janeiro';
            break;
        case 1:
            mesText = 'Fevereiro';
            break;
        case 2:
            mesText = 'Março';
            break;
        case 3:
            mesText = 'Abriu';
            break;
        case 4:
            mesText = 'Maio';
            break;
        case 5:
            mesText = 'Junho';
            break;
        case 6:
            mesText = 'Julho';
            break;
        case 7:
            mesText = 'Agosto';
            break;
        case 8:
            mesText = 'Setembro';
            break;
        case 9:
            mesText = 'Outubro';
            break;
        case 10:
            mesText = 'Novembro';
            break;
        case 11:
            mesText = 'Dezembro';
            break;
    }
    return mesText;
}

//Retorna o dia do mes.
function diaMesString(data) {
    const diaMes = data.getDate();
    return diaMes
}
//Acha o dia da semana e transforma em string.
function diaSString(data) {
    const diaSemana = data.getDay()
    let diaSemanaString;
    switch (diaSemana) {
        case 0:
            diaSemanaString = "Segunda-Feira";
            return diaSemanaString;
        case 1:
            diaSemanaString = "Terça-Feira";
            return diaSemanaString;
        case 2:
            diaSemanaString = "Quarta-Feira";
            return diaSemanaString;
        case 3:
            diaSemanaString = "Quinta-Feira";
            return diaSemanaString;
        case 4:
            diaSemanaString = "Sexta-Feira";
            return diaSemanaString;
        case 5:
            diaSemanaString = "Sabado";
            return diaSemanaString;
        case 6:
            diaSemanaString = "Domingo";
            return diaSemanaString;
    }
}
function criaData(data){
    const diaSemana = diaSString(data);
    const diaMes = diaMesString(data);
    const mes = mesAnoString(data);
    const ano = anoString(data);
    const horas =  horaMinutoString(data);

    return `${diaSemana}, ${diaMes} de ${mes} de ${ano} ${horas}`;
}
h1.innerHTML=criaData(data);


