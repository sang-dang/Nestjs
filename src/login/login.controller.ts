import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoginDto } from './login.model';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor( private loginService: LoginService) {}
  @Get('/getInfor')
  getInfor() {
    return 'asd';
  }

  @Post('/login')
  log(@Body() req: LoginDto) {
    return this.loginService.getIn(req);
  }
}
