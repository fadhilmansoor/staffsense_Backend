import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { ManagerDto } from 'src/Infrastucture/Core/Login/Dto/ManagerRegisterDto';
dotenv.config();

@Injectable()
class createManagerUsecase {
  private employeerepos: mongooseEmplyeeRepository;
  constructor(employeerepos: mongooseEmplyeeRepository) {
    this.employeerepos = employeerepos;
  }
  async excute(user: ManagerDto) {
    const HashPassword = await bcrypt.hash(user.password, 10);
    user.password = HashPassword;
    user.isBanned = false;
    return await this.employeerepos.Register(user);
  }
}

export default createManagerUsecase;
