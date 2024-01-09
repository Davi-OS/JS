
// Object.setPrototypeOf(objB,objA); // faz objB "herdar" o Proto do objeto A

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // linkando as duas funcoes
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); // herdando prototipe de Produto
Camiseta.prototype.constructor = Camiseta;// ajustando o prototype de camiseta
Camiseta.prototype.aumento = function (percentual) {// rescrevendo o metodo aumento do prototype
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (quantia) {
            if (typeof quantia !== 'number') {
                return
            }
            estoque = quantia;
        }

    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta("regata", 7.5, "preta");
const caneca = new Caneca("caneca de Asas", 10.20, "porcelana", 12);

console.log(caneca);
console.log(caneca.estoque);
console.log(camiseta);
