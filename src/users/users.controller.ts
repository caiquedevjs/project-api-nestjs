/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
 export class UserController {
    constructor(private readonly userService : UsersService){}
@Get()
findAll(){
    return this.userService.getUsers()
}
@Post()
createUser(@Body()user : CreateUserDto){
    return this.userService.createUsers(user)
}
@Delete()
deleteUser(@Body('name')name : string){
    return this.userService.deleteUsers(name)
}

 }