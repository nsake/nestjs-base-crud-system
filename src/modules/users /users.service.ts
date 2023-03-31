import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import User from './users.entity';
import { UsersRepository } from './users.repository';

import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private _usersRepository: UsersRepository) {}

  async create(userData: UserDto): Promise<User> {
    const newUser = this._usersRepository.create(userData);

    if (!newUser) {
      throw new HttpException(
        'Such user already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this._usersRepository.save(newUser);
  }

  async getByName(query: UserDto): Promise<User> {
    const user = await this._usersRepository.findOne({
      where: query,
    });

    if (user) {
      return user;
    }

    throw new HttpException('Such user does not exist', HttpStatus.NOT_FOUND);
  }
}
