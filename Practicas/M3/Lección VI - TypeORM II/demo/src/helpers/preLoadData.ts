import { AppDataSource } from "../config/appDataSource";
import VehiculeRepository from "../repositories/VehiculeRepository";
import UserRepository from "../repositories/UserRepository";

const preLoadUsers = [{
    name: "Hernan Caceres",
    email: "email@email.com",
    age: 31,
    active: true

},
{
    name: "Daniela Castaño",
    email: "dani@email.com",
    age: 30,
    active: true

},
{
    name: "Erika Acero",
    email: "eri@email.com",
    age: 29,
    active: true

},
{
    name: "Oscar Azuero",
    email: "roscar@email.com",
    age: 32,
    active: true

}]

const preLoadVehicles = [{
        brand: "Ford",
        model: "Fiesta",
        year: 2020,
        color: "Red",
        userId: 1
    },
    {
        brand: "Mazda",
        model: "CX3",
        year: 2020,
        color: "Black",
        userId: 2
    },
    {
        brand: "GMC",
        model: "Bighorn",
        year: 2020,
        color: "White",
        userId: 3
    },
    {
        brand: "Ford",
        model: "Fiesta",
        year: 2020,
        color: "Red",
        userId: 1
    }]

export const preUserLoadData = async () => {

    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const users = await UserRepository.find();

        if (users.length) return console.log("No se hizo la precarga de datos. Datos ya en existencia");
        
        for await (const user of preLoadUsers) {
            const newUser = await UserRepository.create(user);
            await transactionalEntityManager.save(newUser);
        }
    
        console.log("Precarga de datos de usuarios realizada con éxito");
        
    })
}

export const preLoadVehicleData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect()

    const promises = preLoadVehicles.map(async (vehicle) => {
        const newVehicle = await VehiculeRepository.create(vehicle)
        await queryRunner.manager.save(newVehicle);
        const user = await UserRepository.findOneBy({id: vehicle.userId})
        if (!user) throw Error("Usuario inexistente")
        newVehicle.user = user;
        queryRunner.manager.save(newVehicle);
    })

    try {
        await queryRunner.startTransaction();
        await Promise.all(promises)
        console.log("Precarga de vehículos realizada con éxito");
        await queryRunner.commitTransaction();
    } catch (error) {
        console.log("Error al intentar crear los vehiculos");
        await queryRunner.rollbackTransaction();
    } finally {
        console.log("Finalizado el intento de precarga");
        await queryRunner.release();
    }
}
