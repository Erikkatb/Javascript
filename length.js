// índice        0   1   2   3   4  - A contagem dos índices sempre começa a partir de 0
// const numeros= [50, 20, 15, 14, 8];

// console.log(numeros.length); // Exibe o resultado 5 para o tamanho do array 

//Acessando um elemento
//const numeros= [50, 20, 15, 14, 8];console.log(numeros[3]);

//Adicionar no final
//const numeros= [50, 20, 15, 14, 8];numeros.push(10);console.log(numeros); 
//50, 20, 15, 14, 8, 10

//Adicionar no início
//const numeros= [50, 20, 15, 14, 8];numeros.unshift(10);console.log(numeros); // 10, 50, 20, 15, 14, 8

//Juntar dois arrays
const numerosA= [50, 20, 15];
const numerosB= [14, 8];
numerosA.concat(numerosB);
console.log(numerosA + numerosB); 
// 50, 20, 15, 14, 8