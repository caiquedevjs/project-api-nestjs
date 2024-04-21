/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";





@Injectable()
export class UsersService{
    private users: CreateUserDto[] = [];
    // eslint-disable-next-line prettier/prettier
    getUsers() :any []{
        return this.users;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUsers(user : CreateUserDto){
       this.users.push(user);
        
    }
}