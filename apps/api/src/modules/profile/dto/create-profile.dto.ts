import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProfileDto {
  @Field({ nullable: true })
  id?: number;

  @Field()
  name: string;

  @Field()
  techStack: string;

  @Field(() => Date)
  birthday: Date;

  @Field()
  city: string;
}
