import { Injectable } from "@nestjs/common";
import { GetUserArgs } from "src/dto/args/get-user.ergs";
import { GetUsersArgs } from "src/dto/args/get-users.ergs";
import { CreateUserInput } from "src/dto/input/create-user.input";
import { DeleteUserInput } from "src/dto/input/delete-user.input";
import { UpdateUserInput } from "src/dto/input/update-user.input";
import { User } from "src/models/user";
import {v4 as uuidv4} from"uuid";

@Injectable()
export class UsersService{
    private users: User[]=[];
    
    public createUser(createUserData:CreateUserInput):User{
        const user:User={
            userId: uuidv4(),
            isSubscribed:false,
            ...createUserData,
            
        }
        this.users.push(user)
        return user
    }
    public updateUser(updateUserData:UpdateUserInput):User{
        const user = this.users.find(user=>user.userId===updateUserData.userId)
        Object.assign(user,updateUserData)
        return user
    }
    public getUser(getUserArgs:GetUserArgs):User{
        const user = this.users.find(user=>user.userId===getUserArgs.userId)
        return user
    }
    public getUsers(getUsersArgs:GetUsersArgs):User[]{
        return getUsersArgs.userIds.map(userId=>this.getUser({userId}))
    }
    public deleteUser(deleteUserData:DeleteUserInput):User{
        const userIndex=this.users.findIndex(user=>user.userId===deleteUserData.userId)
        const user =this.users[userIndex]
        this.users.splice(userIndex)
        return user
    }
}