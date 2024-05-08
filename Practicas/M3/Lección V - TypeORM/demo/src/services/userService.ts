import UserDto from "../dto/userDto";
import IUser from "../interfaces/IUser";

let users: IUser[] = [{
        id: 1,
        name: "Hernan",
        email: "hdc@mail.com",
        age: 31,
        active: true
}];

let id: number = 1;

export const createUserService = async(userData: UserDto):Promise<IUser> => { 
    //? Recibir los datos del usuario
    //? Crear un nuevo usuario
    //? Incluir el nuevo usuario dentro del arreglo 
    //? retornar el objeto creado
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        age: userData.age,
        active: userData.active
    }
    users.push(newUser);
    id++;
    return newUser;
};
 
export const getUsersService = async(): Promise<IUser[]> => {
    return users;
 };

export const deleteUserService = async(id: number): Promise<void> => { 
    users = users.filter((user: IUser) => {
        return user.id !== id
    });
};