function hello() {console.log("Hello World!");
}

hello()

//MUDANDO O TEXTO
function hello(texto) {console.log("Olá",texto);
}

hello("Rodrigo")

//EXEMPLO 2
let numeroA= 5;
let numeroB= 10;

function calcularMedia(leta, letb) {
    let soma= numeroA+numeroB;

    let media= soma/ 2;
    console.log("Media: ",media);
}

calcularMedia(numeroA,numeroB);

// Arrow Function
const soma= (a,b) =>a+b;

const alunos= [
    {id: 1,nome: 'Maria da Silva' },
    {id: 2,nome: 'João Fernando' },
    {id: 3,nome: 'Pedro dos Santos' },
    {id: 4,nome: 'Silvia Maria' },
  ]
  
  const aluno=alunos.find(aluno=>aluno.id=== 3);
  console.log(aluno.nome); 
  // Pedro dos Santos