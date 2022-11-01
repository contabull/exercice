import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserDto } from '../dto/user.dto';
import { CreateUserDto } from '../dto/create.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../../core/auth/guards/graphql-auth.guard';
import { Ctx } from '../../../core/auth/decorators/context.decorator';
import { TCtx } from '../../../types';
import { UserServiceFactory } from './use-cases';
import { CreateUserUsecase } from './use-cases/create-user.usecase';
import { LoggedInUserInfoUsecase } from './use-cases/logged-in-user-info.usecase';

@Resolver()
export class UserResolver {
  constructor(private readonly serviceFactory: UserServiceFactory) {}

  @Mutation(() => UserDto)
  async createUser(
    @Args(`dto`, { type: () => CreateUserDto }) dto: CreateUserDto,
  ) {
    return (await this.serviceFactory.create(CreateUserUsecase)).handle(dto);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => UserDto)
  async loggedInUserInfo(@Ctx() ctx: TCtx) {
    return (await this.serviceFactory.create(LoggedInUserInfoUsecase)).handle(
      ctx,
    );
  }
}
