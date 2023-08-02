import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { workers } from 'src/Infrastucture/Database/Schema/Workers';
import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import verifyLoginUsecase from 'src/Domain/Usecase/LoginUsecase';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Workers',
        schema: workers,
      },
    ]),
  ],
  providers: [LoginService, mongooseEmplyeeRepository, verifyLoginUsecase],
  controllers: [LoginController],
})
export class LoginModule {}
