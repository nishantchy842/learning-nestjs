import { Controller, Get, Post, Req, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  get(): string {
    console.log(this.appService);
    return this.appService.getHello();
  }
  @Get('/user/:userId')
  getUser(@Param() userId: string): object {
    console.log(userId);
    return this.appService.getUser(userId);
  }
}
