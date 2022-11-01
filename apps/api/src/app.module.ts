import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './core/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import {BooksModule} from "./modules/library/books.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
    ProfileModule,
    AuthModule,
    BooksModule,
  ],
})
export class AppModule {}
