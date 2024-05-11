import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/appDataSource";
import { preLoadVehicleData, preUserLoadData } from "./helpers/preLoadData";

const initializeApp = async () => {
    await AppDataSource.initialize()
    await preUserLoadData();
    await preLoadVehicleData();
    server.listen( PORT, ( ) => {
        console.log(`Server listening on PORT ${PORT}`);
    })
}

initializeApp();