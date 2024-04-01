//EX. 1.1
class Carro {
    #marca
    #modelo
    #ano
    constructor(marca, modelo, ano){
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }
    #calcularIdade(){
        const anoAtual = new Date().getFullYear()
        return anoAtual - this.#ano
    }
     obterInformacoes(){
        return `Informações do Veiculo-- \n Marca do veiculo: ${this.#marca} \n Modelo do Veiculo: ${this.#modelo} \n Ano do Veiculo: ${this.#ano}`
    }

    anosDeUso(){
        return this.#calcularIdade()
    }
}

const carro = new Carro("Chevrolet", "Onix", "2012")
const carro2 = new Carro("Toyota", "Corolla", "2015")

console.log(carro.obterInformacoes())
console.log(`Idade do Veiculo: ${carro.anosDeUso()} anos`)
console.log("---------------")
console.log(carro2.obterInformacoes())
console.log(`Idade do Veiculo: ${carro2.anosDeUso()} anos`)
console.log("---------------")
//EX. 1.2

class Membro {
    #nome
    #idade
    #peso
    #altura

    constructor(nome, idade, peso, altura){
        this.#nome = nome
        this.#idade = idade
        this.#peso = peso
        this.#altura = altura
    }

    #verificarIdade(){
        return this.#idade < 18
    }

    #calcularIMC(){
        const alturaMetros = this.#altura / 100
        return this.#peso / (alturaMetros * alturaMetros)
    }

    obterInformacoes(){
        return `Nome: ${this.#nome} \n Idade: ${this.#idade} anos \n Peso: ${this.#peso} kg \n Altura: ${this.#altura} cm`
    }

    validarIdade() {
        if (this.#verificarIdade()) {
            return `${this.#nome} é menor de idade.`
        } else {
            return `${this.#nome} é maior de idade.`
        }
    }

    exibirIMC() {
        return `IMC: ${this.#calcularIMC().toFixed(2)}`
    }
}

const membro = new Membro("Vitor Hugo", 20, 80, 172)
const membro2 = new Membro("Edson", 22, 75, 175)
const membro3 = new Membro("Guilherme", 17, 60, 163)

console.log(membro.obterInformacoes())
console.log(membro.validarIdade())
console.log(membro.exibirIMC())
console.log("---------------")
console.log(membro2.obterInformacoes())
console.log(membro2.validarIdade())
console.log(membro2.exibirIMC())
console.log("---------------")
console.log(membro3.obterInformacoes())
console.log(membro3.validarIdade())
console.log(membro3.exibirIMC())
console.log("---------------")

//EX 2.1

class Animal {
    constructor(nome, idade) {
        this._nome = nome
        this._idade = idade
    }

    _exibirInformacoes() {
        console.log(`Nome: ${this._nome}, Idade: ${this._idade}`)
    }
}

class Mamifero extends Animal {
    constructor(nome, idade, tipoDePelo) {
        super(nome, idade)
        this._tipoDePelo = tipoDePelo
    }

    _somCaracteristico() {
        console.log("Som característico de mamífero")
    }

    mostrarInfoMamifero() {
        this._exibirInformacoes()
        console.log(`Tipo de pelo: ${this._tipoDePelo}`)
        this._somCaracteristico()
    }
}

class Ave extends Animal {
    constructor(nome, idade, tipoDeBico) {
        super(nome, idade)
        this._tipoDeBico = tipoDeBico
    }

    _podeVoar() {
        console.log("Pode voar")
    }

    mostrarInfoAve() {
        this._exibirInformacoes()
        console.log(`Tipo de bico: ${this._tipoDeBico}`)
        this._podeVoar()
    }
}

const mamifero = new Mamifero("Urso", 6, "Pelagem Grande")
mamifero.mostrarInfoMamifero()

const ave = new Ave("Papagaio", 2, "Curvo")
ave.mostrarInfoAve()


