import { AppDataSource } from "../config/appDataSource";
import { Vehicle } from "../entities/Vehicule";

const VehiculeRepository = AppDataSource.getRepository(Vehicle)

export default VehiculeRepository;