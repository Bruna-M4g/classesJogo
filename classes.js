class ClassesH {
    constructor(classe, nome, idade) {
        this.classe = classe;
        this.nome = nome;
        this.idade = idade;
        this.attack = "";

        if (classe === "guerreira") {
            this.attack = "espada";
        }
        if (classe === "maga") {
            this.attack = "magia";
        }
        if (classe === "monge") {
            this.attack = "artes marciais";
        }
        if (classe === "ninja") {
            this.attack = "shuriken";
        }
    }

    mensagemSaida() {
        console.log(`A ${this.classe} de ${this.idade} anos chamada ${this.nome} atacou usando ${this.attack}`);
    }
}

let nome = "Kay";
let idade = 24;

const personagem = new ClassesH("ninja", nome, idade);
personagem.mensagemSaida();
