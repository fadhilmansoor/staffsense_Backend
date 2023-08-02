import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { workers } from 'src/Infrastucture/Database/Schema/Workers';
import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import verifyLoginUsecase from 'src/Domain/Usecase/LoginUsecase';
import { registerService } from './Services/Manager.Service';
import { RegisterController } from './HR.Controller';
import createManagerUsecase from 'src/Domain/Usecase/CreateManager';
import GetManagerUsecase from 'src/Domain/Usecase/Getmanager';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Workers',
        schema: workers,
      },
    ]),
  ],
  providers: [
    registerService,
    mongooseEmplyeeRepository,
    verifyLoginUsecase,
    createManagerUsecase,
    GetManagerUsecase,
  ],
  controllers: [RegisterController],
})
export class RegisterModule {}
