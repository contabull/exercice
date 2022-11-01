import { CreateProfileDto } from '../../dto/create-profile.dto';
import { Injectable } from '@nestjs/common';
import { TCtx, UseCase } from '../../../../types';
import { ProfileRepository } from '../../repository/profile.repository';
import { ProfileDto } from '../../dto/profile.dto';
import { GraphQLError } from 'graphql/error';

@Injectable()
export class CreateOrUpdateUsecase
  implements UseCase<Promise<ProfileDto>, [ctx: TCtx, dto: CreateProfileDto]>
{
  constructor(private readonly profileRepository: ProfileRepository) {}

  async handle(ctx: TCtx, dto: CreateProfileDto) {
    if (dto.id) {
      const profile = await this.profileRepository.findById(dto.id);

      if (!profile) {
        throw new GraphQLError(`Profile not found`);
      }

      if (profile.userId !== ctx.id) {
        throw new GraphQLError(`Unauthorized`);
      }

      return this.profileRepository.update(profile.id, dto);
    }

    const profile = await this.profileRepository.findByUserId(ctx.id);

    if (profile) {
      throw new GraphQLError(`A profile already exists for this user`);
    }
    return this.profileRepository.create(ctx.id, dto);
  }
}
