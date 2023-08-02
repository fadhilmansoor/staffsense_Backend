import { ManagerDto } from 'src/Infrastucture/Core/Login/Dto/ManagerRegisterDto';
import User from '../Enitity/User.Enitiy';

interface UserRepository {
  finduserByemail(email: string): Promise<User>;
  Register(user: ManagerDto): void;
}
export default UserRepository;
