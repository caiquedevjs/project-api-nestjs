/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports: [],
    controllers: [UserController],
    providers : [UsersService],
})
// eslint-disable-next-line prettier/prettier
export class UserModule{
    
}