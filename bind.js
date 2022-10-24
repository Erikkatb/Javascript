function usuario() {console.log(this.nome) 
}

usuario();
//Ao chamar a função usuário, obtemos undefined como resultado, 
//isso porque dentro da função existe um this.nome, ou seja, 
//uma propriedade local, porém sem referência alguma do que deve ser escrito na hora. 

//Para resolver o problema de falta de referência ou propriedade correta, 
//podemos utilizar o método bind da seguinte maneira:

function usuario() {console.log(this.nome);
}

let aluno= {nome: 'Erika Teixeira Bassi'
}

let usuarioAluno=usuario.bind(aluno);

usuarioAluno(); 