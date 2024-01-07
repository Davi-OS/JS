class controleRemoto{
    constructor(Tv){
        this.Tv = Tv;
        this.volume = 0;
    }

    AumentarVolume(){
        this.volume +=2;
    }
    DiminuirVolume(){
        this.volume -=2;
    }
//metodo estatico
    static trocaPilha(){
        console.log('pilha Trocada');
    }
}

const controle = new controleRemoto("Sansung");
console.log(controle);
controle.AumentarVolume();
console.log(controle);
controleRemoto.trocaPilha();