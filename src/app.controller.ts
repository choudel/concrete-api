import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHelloDto } from './create-hello.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createHello(@Body() createHelloDto: CreateHelloDto): string {
    return 'add a new hello';
  }
  @Get('profile/:id')
  getHello(@Param() params): string {
    return this.appService.getHello(params);
  }
}
