class Retangulo {

    #altura
    #largura
  
    constructor(altura, largura){
      this.#altura = altura
      this.#largura = largura
    }
  
    get area(){
      return this.calcularArea();
    }
  
    calcularArea(){
      return this.#altura * this.#largura
    }
  }

const retangulo = new Retangulo(20, 30)
retangulo.altura = 30
console.log(retangulo.area)