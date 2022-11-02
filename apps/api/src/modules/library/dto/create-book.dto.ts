import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBookDto {
    @Field({ nullable: true })
    id?: number;

    @Field()
    title: string;

    @Field()
    author: string;

    @Field()
    userId: number;
}
