import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProfileDto } from '../dto/profile.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../../core/auth/guards/graphql-auth.guard';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { Ctx } from '../../../core/auth/decorators/context.decorator';
import { TCtx } from '../../../types';
import { ProfileServiceFactory } from './use-cases';
import { CreateOrUpdateUsecase } from './use-cases/create-or-update.usecase';

@Resolver()
export class ProfileResolver {
  constructor(private readonly serviceFactory: ProfileServiceFactory) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => ProfileDto)
  async createOrUpdate(
    @Args(`dto`, { type: () => CreateProfileDto }) dto: CreateProfileDto,
    @Ctx() ctx: TCtx,
  ) {
    return (await this.serviceFactory.create(CreateOrUpdateUsecase)).handle(
      ctx,
      dto,
    );
  }
}
