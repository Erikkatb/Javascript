const aluno = {
nome: "Joao",
email: "joao@gmail.com",
dataNascimento: "1995/05/28",
sexo: "masculino",
cidade: "Rio de Janeiro",
matricula: "123456",

detalhes: function () {
    console.log(this.matricula, this.nome, this.email, this.dataNascimento, this.sexo, this.cidade);
}
}

aluno.detalhes();