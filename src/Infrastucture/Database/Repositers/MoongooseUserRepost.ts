import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from 'src/Domain/Enitity/User.Enitiy';
import UserRepository from 'src/Domain/Interface/User.Interface';
import { ManagerDto } from 'src/Infrastucture/Core/Login/Dto/ManagerRegisterDto';

export default class mongooseUserRepository implements UserRepository {
  constructor(
    @InjectModel('Workers') private readonly workermodel: Model<User>,
  ) {}

  async finduserByemail(email: string): Promise<User | null> {
    const found = await this.workermodel.findOne({ email: email }).exec();
    return found ? found : null;
  }
  async Register(user: ManagerDto) {
    try {
      await this.workermodel.create(user);
      const list = await this.listManager();
      return { success: true, list, message: 'Successfully Registered' };
    } catch (error) {
      return { success: false, message: 'Internal Server Error' };
    }
  }

  async listManager() {
    return await this.workermodel.find({ role: 'Manager' });
  }
}
