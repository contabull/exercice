import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileDto {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  techStack: string;

  @Field(() => Date)
  birthday: Date;

  @Field()
  city: string;
}
