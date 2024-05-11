import UserRepository from "../repositories/UserRepository";
import UserDto from "../dto/userDto";
import { User } from "../entities/User";


export const createUserService = async(userData: UserDto) => { 
    const user = await UserRepository.create(userData);
    const result = await UserRepository.save(user);
    return user;
};
 
export const getUsersService = async(): Promise<User[]> => {
    const users = await UserRepository.find({
        relations: {
            vehicles: true
        }
    });
    return users;
};

export const getUserByIdService = async(id: number):Promise<User | null > => {
    const user = await UserRepository.findOneBy({id});
    return user;
}
