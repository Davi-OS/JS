function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);

}
function esperaAi(msg, temp) {

    return new Promise((resolve, reject) => { // cria uma promessa que pode ou não se comprida promisses são executadas em paralelo asincrono.
        setTimeout(() => {
            if (typeof msg != 'string') { // teste  para dispara um reject
                reject("Bad Value");
            }
            resolve(msg);
        }, temp);
    });
}
/*
esperaAi("Conectando....", aleatorio(1, 3))
    .then(resposta => { //cria uma espera
        console.log(resposta);
        return esperaAi("Buscando....", aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).
    then(resposta => {
        console.log("Exibindo....");
    })
    .catch(e => {
        console.log('Erro:', e);
    });
*/
// metodos interessantes

// Promise.all Promise.race Promise.resolve Promise.reject

const promisses = ["v1",
    esperaAi("P1", 3000),
    esperaAi("P2", 400),
    esperaAi("P3", 1),
    "outro valor"
];

// retorna todos os valores de um array de promises;
/*
Promise.all(promisses).then(function (valor) {
    console.log(valor);
}).catch(function (err) {
    console.log(err);
});

Promise.race(promisses).then(resp => { // literalmente retorna a primeira promises que terminar (uma corrida)
    console.log(resp);
}).catch(err => {
    console.log(err)
});
*/

//altera a promise para resolvida
Promise.resolve(promisses).then(resp => {
    console.log(resp);
});

//altera a promise para rejeitada
Promise.reject(esperaAi("res", 1)).then(resp => {
    console.log(resp);
}).catch(e => {
    console.log(e);
});
