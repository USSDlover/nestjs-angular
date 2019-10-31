import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';
import { ROUTE_TEST } from './routes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  root(@Res() response): void {
    response.sendFile(path.resolve('./public/index.html'));
  }

  @Get(ROUTE_TEST)
  testApi(): string {
    return this.appService.getHello();
  }
}
