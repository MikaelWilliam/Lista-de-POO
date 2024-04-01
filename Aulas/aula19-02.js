//Objeto retangulo
class Retangulo {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    calcular_area(){
        return this.altura * this.largura
    }
}

console.log("Gerando um retangulo")
const retangulo = new Retangulo(10, 20);
console.log(retangulo.altura);
console.log(retangulo.largura);
console.log("Area: ", retangulo.calcular_area())

console.log("Gerando um quadrado")
const quadrado = new Retangulo(10, 10);
console.log(quadrado.altura);
console.log(quadrado.largura);
console.log("Area: ", quadrado.calcular_area())

//Objeto circulo

class Circulo {
    set raio(raio){
        this._raio = raio;
    }

    get raio(){
        return this._raio;
    }

    get area(){
        return this.calcular_area();
    }

    calcular_area(){
        return Math.PI * (Math.pow(this.raio, 2))
    }
}


const circulo = new Circulo();
circulo.raio = 20;
circulo.calcular_area();
console.log(circulo.raio);

