// const axios = require("axios");

// const promesaResuelta = new Promise((resolve, reject) => {
//     resolve("Valor de resolución");
// });

// const promesaRechazada = new Promise((resolve, reject) =>{
//     reject("Razón del rechazo");
// });

// const promise = axios.get("https://students-api.up.railway.app/movies")

// //* Success handler

// promise
//     .then((res) => {
//     console.log(res.data);
//     })
//     .catch((err) => {
//     console.log(err);
//     })

const fecthMovies = async () => {
    try {
        const data = await axios.get("https://students-api.up.railway.app/movies");
        console.log(data.data);
        
    } catch (error) {
        console.log(error.message);
    }
    
};

fecthMovies();