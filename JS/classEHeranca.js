class DispositivoEletronico {
    constructor(nome) { // construtor padrão
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} ja esta ligado.`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} ja esta desligado.`);
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome); // passa parametros para classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    // da pra sobrescrever e escrever novos metodos em cada classe..
    ligar() {
        console.log("Voce alterou o metodo da super classe.")
    }
}
const s1 = new Smartphone("Iphone", "preto", 13);
const table = new Tablet("NotePad", true);

console.log(s1);
console.log(table);
s1.ligar();
table.ligar();
