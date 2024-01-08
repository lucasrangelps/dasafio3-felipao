// Desafio escrevendo as classes de um jogo


//Classe
class heroiAventureiro {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    ataque = " "

    //Estrutura de decisão
    atacar(){
        switch (this.tipo){
            case "Guerreiro":
            this.ataque = "espada";
            break
            
            case "Mago":
            this.ataque = "magia";
            break

            case "Monge":
            this.ataque = "artes maciais";
            break

            case "Ninja":
            this.ataque = "shuriken";
            break

        }

        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
            
    }

}
    //Cria os Objetos
    let heroinum1 = new heroiAventureiro ("Aquiles", "48", "Guerreiro")
    let heroinum2 = new heroiAventureiro ("Albus Dumbledore", "700", "Mago")
    let heroinum3 = new heroiAventureiro ("Eremita", "140", "Monge")
    let heroinum4 = new heroiAventureiro ("Hattori", "42", "Ninja")

    //Chama a função atacar
    heroinum1.atacar()
    heroinum2.atacar()
    heroinum3.atacar()
    heroinum4.atacar()