import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import { Injectable } from '@nestjs/common';

@Injectable()
class GetManagerUsecase {
  private employeerepos: mongooseEmplyeeRepository;
  constructor(employeerepos: mongooseEmplyeeRepository) {
    this.employeerepos = employeerepos;
  }
  async excute() {
    return await this.employeerepos.listManager();
  }
}

export default GetManagerUsecase;
