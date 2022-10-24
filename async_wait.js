async function getUser(userId) {
    let response= await fetch(`https://api.com/api/user/${userId}`);
    let data= await response.json();

    return data.nome;
}

exibeDados(await getUser(1));