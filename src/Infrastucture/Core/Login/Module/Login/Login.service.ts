import { Injectable } from '@nestjs/common';
import { LoginDto } from '../../Dto/Login.dto';
import verifyLoginUsecase from 'src/Domain/Usecase/LoginUsecase';

@Injectable()
export class LoginService {
  private readonly _verifyLoginUsecase: verifyLoginUsecase;
  constructor(verfiyLoginUsecase: verifyLoginUsecase) {
    this._verifyLoginUsecase = verfiyLoginUsecase;
  }
  public async verfiy(User: LoginDto) {
    return await this._verifyLoginUsecase.excute(User);
  }
}
