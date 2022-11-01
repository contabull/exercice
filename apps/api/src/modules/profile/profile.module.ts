import { Module } from '@nestjs/common';
import { ProfileRepository } from './repository/profile.repository';
import { PrismaService } from '../../core/prisma/prisma.service';
import { ProfileResolver } from './resolvers/profile.resolver';
import { ProfileServiceFactory } from './resolvers/use-cases';

@Module({
  providers: [
    ProfileRepository,
    PrismaService,
    ProfileResolver,
    ProfileServiceFactory,
  ],
})
export class ProfileModule {}
