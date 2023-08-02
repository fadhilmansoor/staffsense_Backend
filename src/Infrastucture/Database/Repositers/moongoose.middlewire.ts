import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import User from 'src/Domain/Enitity/User.Enitiy';
import Imiddlewire from 'src/Domain/Interface/Imiddlewire';

export class mongooseMiddlewareRepository implements Imiddlewire {
  constructor(
    @InjectModel('Workers') private readonly usermodel: Model<User>,
  ) {}
  async isHr(id: Schema.Types.ObjectId): Promise<boolean> {
    try {
      const data = await this.usermodel.findById(id);
      if (!data) {
        return false;
      }
      return data.role == 'Hr' ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async isManager(id: Schema.Types.ObjectId): Promise<boolean> {
    try {
      const data = await this.usermodel.findById(id);
      if (!data) {
        return false;
      }
      return data.role == 'Manager' ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
