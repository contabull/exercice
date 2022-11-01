import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field()
  id: number;

  @Field()
  email: string;

}
