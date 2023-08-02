import { Injectable } from '@nestjs/common';
import createManagerUsecase from 'src/Domain/Usecase/CreateManager';
import mongooseEmplyeeRepository from 'src/Infrastucture/Database/Repositers/MoongooseUserRepost';
import { ManagerDto } from '../../../Login/Dto/ManagerRegisterDto';
import GetManagerUsecase from 'src/Domain/Usecase/Getmanager';
@Injectable()
export class registerService {
  private readonly createManager: createManagerUsecase;
  private readonly employeRepository: mongooseEmplyeeRepository;
  private readonly getmanager: GetManagerUsecase;
  constructor(
    createrUser: createManagerUsecase,
    employeeRepo: mongooseEmplyeeRepository,
    managerGet: GetManagerUsecase,
  ) {
    this.createManager = createrUser;
    this.employeRepository = employeeRepo;
    this.getmanager = managerGet;
  }

  public async AddManager(manager: ManagerDto) {
    const isManager = await this.employeRepository.finduserByemail(
      manager.email,
    );

    if (isManager == null) {
      return await this.createManager.excute(manager);
    } else {
      return { success: false, message: 'Manager Exist' };
    }
  }
  public async Getmanager() {
    return await this.getmanager.excute();
  }
}
