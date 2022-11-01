import { UserRepository } from '../../repository/user.repository';
import { Injectable } from '@nestjs/common';
import { TCtx, UseCase } from '../../../../types';
import { UserDto } from '../../dto/user.dto';

@Injectable()
export class LoggedInUserInfoUsecase
  implements UseCase<Promise<UserDto>, [ctx: TCtx]>
{
  constructor(private readonly userRepository: UserRepository) {}

  async handle(ctx: TCtx) {
    return this.userRepository.findByEmail(ctx.email);
  }
}
