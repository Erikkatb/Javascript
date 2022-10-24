class objeto {
constructor(altura, largura) {
    this.altura = altura; this.largura = largura;
}

get area(){
    return this.calculaArea()
}
calculaArea(){
    return this.altura*this.largura;
}
}

const quadrado = new objeto(5,5);

console.log(quadrado.area);