import { ObjectId } from 'mongoose';

interface Imiddlewire {
  isHr(id: ObjectId): Promise<boolean>;
}
export default Imiddlewire;
