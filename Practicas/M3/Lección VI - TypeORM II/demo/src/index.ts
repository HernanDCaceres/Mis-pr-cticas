import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/appDataSource";

AppDataSource.initialize()
    .then(res => {
        console.log("Conexion a la base de datos realziada con éxito");
        server.listen(PORT, () =>{
            console.log(`Server listening on port ${PORT}`);
        })
    })
    


// server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
    
// })