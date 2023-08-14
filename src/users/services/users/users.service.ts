import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'John@11', email: 'john1@gmail.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  getUserById(id: number) {
    return { id, username: 'abc', email: 'a@bc.com' };
  }
}
