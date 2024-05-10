import { AppDataSource, UserModel } from "../config/appDataSource";
import UserDto from "../dto/userDto";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";

let users: IUser[] = [{
        id: 1,
        name: "Hernan",
        email: "hdc@mail.com",
        age: 31,
        active: true
}];

let id: number = 1;

export const createUserService = async(userData: UserDto) => { 
    const user = await UserModel.create(userData);
    const result = await UserModel.save(user);
    return user;
};
 
export const getUsersService = async(): Promise<User[]> => {
    const users = await UserModel.find({
        relations: {
            vehicles: true
        }
    });
    return users;
 };

export const getUserByIdService = async(id: number):Promise<User | null > => {
    const user = await UserModel.findOneBy({id});
    return user;
}

export const deleteUserService = async(id: number): Promise<void> => { 
    users = users.filter((user: IUser) => {
        return user.id !== id
    });
};