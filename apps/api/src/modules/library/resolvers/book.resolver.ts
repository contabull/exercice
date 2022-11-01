import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../../core/auth/guards/graphql-auth.guard';
import { Ctx } from '../../../core/auth/decorators/context.decorator';
import { TCtx } from '../../../types';
import { BookServiceFactory } from './use-cases';
import { CreateOrUpdateUsecaseBook } from './use-cases/create-or-update.usecase';
import {BookDto} from "../dto/book.dto";
import {CreateBookDto} from "../dto/create-book.dto";

@Resolver()
export class BookResolver {
    constructor(private readonly serviceFactory: BookServiceFactory) {}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => BookDto, {
        name: "createOrUpdateBook",
        description: "Creates a book or updates one if an id is provided"
    })
    async createOrUpdate(
        @Args(`dto`, { type: () => CreateBookDto }) dto: CreateBookDto,
        @Ctx() ctx: TCtx,
    ) {
        return (await this.serviceFactory.create(CreateOrUpdateUsecaseBook)).handle(
            ctx,
            dto,
        );
    }
}