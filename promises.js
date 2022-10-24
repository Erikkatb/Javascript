// function getUser(userId) {
//     constuserData= fetch(`https://api.com/api/user/${userId}`)
//       .then(response=>response.json())
//       .then(data=>console.log(data.name))
//    }
   
//    getUser(1);

function getUser(userId) {
    constuserData= fetch(`https://api.com/api/user/${userId}`)
      .then(response=>response.json())
      .then(data=>console.log(data.name))
      .catch(error=>console.log(error))
      .finally()
   }
   
   getUser(1);