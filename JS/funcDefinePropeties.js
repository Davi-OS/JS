function Produto(nome, preco, estoque) {
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, //valor da chave
    //     writable: false, // pode alterar
    //     configurable: false // pode reconfigurar (n pode apagar)
    // });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            get: function () {
                return nome;
            },
            set: function (value) {
                if (typeof value !== 'number') {
                    nome = value;
                }
            },
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            get: function () {
                return preco;
            },
            set: function (value) {
                if (typeof value === 'number' && value >= 0) {
                    preco = value;
                }
            },
            writable: false,
            configurable: false

        },
        estoque: {
            enumerable: true, // mostra a chave
            get: function () {
                return estoque;
            },
            set: function (value) {
                if (typeof value === 'number' && value >= 0) {
                    estoque = value;
                }
            },
            writable: false, // pode alterar
            configurable: false // pode reconfigurar (n pode apagar)

        }
    })

};
const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
//console.log(Object.keys(p1));