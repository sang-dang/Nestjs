import { Injectable } from '@nestjs/common';
import { Ilogin } from './login.model';

export const admin_username: string = 'admin';
export const admin_password: string = '123456';

@Injectable()
export class LoginService {
  public getIn(user: Ilogin): string {
    if (user.username === admin_username && user.password === admin_password) {
      return 'login successfully';
    } else {
      return 'user name or password wrong';
    }
  }
}