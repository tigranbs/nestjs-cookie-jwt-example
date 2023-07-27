import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtGuard } from './auth/guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtGuard)
  @Get()
  privateEndpoint(@Req() req): string {
    console.log(req.cookies);
    return this.appService.getHello();
  }

  @Get('/public')
  publicEndpoint(@Req() req): string {
    console.log(req.cookies);
    return this.appService.getHello();
  }
}
