/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";






@Injectable()
export class UsersService{
    private users: CreateUserDto[] = [];
    // eslint-disable-next-line prettier/prettier
    getUsers() :any []{
        return this.users.slice()
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUsers(user : CreateUserDto){
       this.users.push(user);
        
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    deleteUsers(nameUser: string): boolean {
        try {
          if (this.users.length === 0) {
            console.error("Lista vazia");
            return false;
          }
    
      
          const userIndex = this.users.findIndex(user => {
            return user.name === nameUser;
          });
      
          if (userIndex === -1) {
            console.error("Usuário não está na lista");
            return false;
          }
      
          this.users.splice(userIndex, 1);
          return true;
        } catch (error) {
          console.log(`O usuário não foi deletado: ${error}`);
          return false;
        }
      }
      
      
      
      
      
    }
