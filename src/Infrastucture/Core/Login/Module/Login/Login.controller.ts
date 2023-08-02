import { LoginService } from './login.service';
// import { LoginDto } from '../../dto/login.dto';
import { Response } from 'express';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { LoginDto } from '../../Dto/Login.dto';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async verifyLogin(@Body() user: LoginDto, @Res() res: Response) {
    const response = await this.loginService.verfiy(user);
    if (response.success) {
      const userdata = response.UserData;
      if (userdata.role == 'Hr') {
        res.cookie('jwt-HR', response.token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: 'none',
          secure: true,
        });
      } else if (userdata.role == 'Manager') {
        res.cookie('jwt-Manager', response.token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: 'none',
          secure: true,
        });
      }
      res.json({
        success: response.success,
        message: response.message,
        Userdata: response.UserData,
        token: response.token,
      });
    } else {
      res.json({ success: response.success, message: response.message });
    }
  }
}
