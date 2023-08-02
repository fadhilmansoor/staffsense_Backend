import { LoginDto } from 'src/Infrastucture/Core/Login/Dto/Login.dto';
import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

@Injectable()
class verifyLoginUsecase {
  private employeerepos: mongooseEmplyeeRepository;
  constructor(employeerepos: mongooseEmplyeeRepository) {
    this.employeerepos = employeerepos;
  }
  async excute(user: LoginDto) {
    const Res = await this.employeerepos.finduserByemail(user.email);
    if (Res) {
      const verfied = await bcrypt.compare(user.password, Res.password);
      if (verfied) {
        const token = jwt.sign({ userId: Res._id }, SECRET_KEY);
        return {
          success: true,
          message: 'verifed SuccessFully',
          token,
          UserData: Res,
        };
      } else {
        return { success: false, message: 'password is incorret' };
      }
    } else {
      return { success: false, message: 'user Not Exists' };
    }
  }
}

export default verifyLoginUsecase;
