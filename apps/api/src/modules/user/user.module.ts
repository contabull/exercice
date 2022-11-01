import { Module } from '@nestjs/common';
import { UserResolver } from './resolvers/user.resolver';
import { PrismaService } from '../../core/prisma/prisma.service';
import { BcryptService } from '../../core/bcrypt/bcrypt.service';
import { UserRepository } from './repository/user.repository';
import { UserServiceFactory } from './resolvers/use-cases';

@Module({
  providers: [
    UserResolver,
    UserRepository,
    PrismaService,
    BcryptService,
    UserServiceFactory,
  ],
})
export class UserModule {}
