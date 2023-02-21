
function HelloWorld(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve('Hello World');
        }, 2000);
    });
}

async function message(){
    let msg = await Promise.resolve("HelloW World!");
    console.log(msg);
}

message();


function ambilDataUser() {
  return fetch("https://reqres.in/api/users")
    .then(function(response) {
      return response.json();
    })
    .then(function(users) {
      console.log(users.data);
    });
}

ambilDataUser();


async function ambilDataUserAsync() {
    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    console.log(users.data);
}

ambilDataUserAsync();
