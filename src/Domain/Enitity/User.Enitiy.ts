import { ObjectId } from 'mongoose';

class User {
  public _id: ObjectId;
  public email: string;
  public password: string;
  public isBanned: boolean;
  public role: string;
  public name: string;

  constructor(email: string, password: string, role: string, name: string) {
    (this.email = email), (this.password = password);
    this.isBanned = false;
    (this.role = role), (this.name = name);
  }
  getId(): ObjectId {
    return this._id;
  }
  getEmail(): string {
    return this.email;
  }
  getpaasword(): string {
    return this.password;
  }
  getisBanned(): boolean {
    return this.isBanned;
  }
  getrole(): string {
    return this.role;
  }
  getname(): string {
    return this.name;
  }
}

export default User;
