const addUserButton = document.getElementById("addUserButton");

let i = 1;

class User{
    constructor(id, name, username, email){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
}

class Repository {
    constructor(){
        this.users = [];
    }

    createUser({id, name, username, email}){
        const newUser = new User(id, name, username, email);
        this.users.push(newUser)
    }
}

const refresh = () => {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = "";
    const users = repository.users;

    const htmlUsers = users.map((user) => {
        const name = document.createElement("h3");
        const email = document.createElement("p")

        name.innerHTML = user.name;
        email.innerHTML = user.email;

        const card = document.createElement("div");
        card.appendChild(name);
        card.appendChild(email);

        return card;

    });

    htmlUsers.forEach(card =>{
        usersContainer.appendChild(card);   
    })
}

const repository = new Repository();
const addUser = () => {
        if(i > 10) return alert("No hay más usuarios");
        $.get(`https://students-api.2.us-1.fl0.io/movies`, (data, status) => {
        i++;
        repository.createUser(data);
        console.log(repository.users);
        refresh();
    });
};


addUserButton.addEventListener("click", addUser);