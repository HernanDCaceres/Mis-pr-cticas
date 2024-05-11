import VehiculeRepository from "../repositories/VehiculeRepository";
import UserRepository from "../repositories/UserRepository";
import { AppDataSource } from "../config/appDataSource";
import CreateVehicleDto from "../dto/CreateVehicleDto";
import { Vehicle } from "../entities/Vehicule";



export const getVehiclesService = async (): Promise<Vehicle[]> => {
    const vehicles = await VehiculeRepository.find({
        relations: {
            user: true
        }
    });
    return vehicles;
}

export const createVehicleService = async (vehicle: CreateVehicleDto): Promise<Vehicle | void> => {
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect();
    try {
        queryRunner.startTransaction()

        const newVehicle = await VehiculeRepository.create(vehicle)
        await queryRunner.manager.save(newVehicle)
    
        const user = await UserRepository.findById(vehicle.userId)
    
        if(!user) throw Error("Usuario inexistente. No se ha creado el vehiculo")
    
        newVehicle.user = user
        await queryRunner.manager.save(newVehicle);
    
        await queryRunner.commitTransaction()
    
        return newVehicle;
        
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw Error("Usuario inexistente")
        
    } finally {
        await queryRunner.release();
    }
}