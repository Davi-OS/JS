function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}
function esperaAi(msg, temp) {

    return new Promise((resolve, reject) => { // cria uma promessa que pode ou não se comprida promisses são executadas em paralelo asincrono.
        setTimeout(() => {
            if (typeof msg !== 'string') { // teste  para dispara um reject
                reject("Bad Value");
            } else {
                resolve(msg.toUpperCase() + ' passei na primisse');
                return;
            }
        }, temp);
    });
}

// esperaAi("teste 1", aleatorio()).then(resp => {
//     console.log(resp);
//     return esperaAi("teste2", aleatorio())
//         .then(res => {
//             console.log(res);
//             return esperaAi("teste3", aleatorio())
//                 .then(res => {
//                     console.log(res);
//                     return res;
//                 })
//                 .then(fase => {
//                     console.log("terminamos no teste ", fase);
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 })
//         })
// })

async function executa() { // presisar ser async para usar o await
    try {
        const fase1 = await esperaAi("Fase 1", aleatorio());
        console.log(fase1);
        const fase2 = await esperaAi("Fase 2", aleatorio());
        console.log(fase2);
        const fase3 = await esperaAi("Fase 3", aleatorio());
        console.log(fase3);

        console.log("terminamos na fase: ", fase3);
    }
    catch (e) {
        console.log(e);
    }
}

executa();