import { GraphQLError } from 'graphql/error';
import { CreateUserDto } from '../../dto/create.dto';
import { UserRepository } from '../../repository/user.repository';
import { BcryptService } from '../../../../core/bcrypt/bcrypt.service';
import { Injectable } from '@nestjs/common';
import { UseCase } from '../../../../types';
import { UserDto } from '../../dto/user.dto';

@Injectable()
export class CreateUserUsecase
  implements UseCase<Promise<UserDto>, [dto: CreateUserDto]>
{
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcrypt: BcryptService,
  ) {}

  async handle(dto: CreateUserDto) {
    const user = await this.userRepository.findByEmail(dto.email);

    if (user) {
      throw new GraphQLError(`There is already an user with this email`);
    }
    const hash = await this.bcrypt.hash(dto.password);

    return this.userRepository.create(dto.email, hash);
  }
}
