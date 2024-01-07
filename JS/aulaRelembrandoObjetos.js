const pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio",
    idade : 12,
    getDataNascimento: function(){
        const dataAtual = new Date;
        return dataAtual.getFullYear() - this.idade;
    }
};

let chave = 'sobrenome';
// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(pessoa[chave]);

const pessoa1 = new Object();
pessoa1.nome = 'davi';
pessoa1.idade = 12;
pessoa1.sobrenome = 'Oliveira';
pessoa1.falarNome = function () {
    return (`${this.nome} esta falando seu nome`);
}
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
};
//console.log(pessoa1[chave]);

// delete pessoa1.idade;
console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
for (const chave in pessoa1) {
   console.log(pessoa1[chave]);
}