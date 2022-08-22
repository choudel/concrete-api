import { Controller, Get, Param, Post, Req } from "@nestjs/common";
import Request from 'express';
@Controller('cats')
export class CatsController {
    @Get('/user')
    findAll() {
        return { name: 'this action returns all cats' }
    }
    @Post()
    store(@Req() req: Request) {
        return req.body;
    }
    @Get('/:userId')
    getUser(@Param()userId:number){
        return userId 
    }
}