import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../../../core/auth/guards/graphql-auth.guard';
import { Ctx } from '../../../core/auth/decorators/context.decorator';
import { TCtx } from '../../../types';
import { BookServiceFactory } from './use-cases';
import { CreateOrUpdateBookUseCase } from './use-cases/create-or-update.usecase';
import {BookDto} from "../dto/book.dto";
import {CreateBookDto} from "../dto/create-book.dto";
import {FindAllUsecase} from "./use-cases/find-all.usecase";

@Resolver()
export class BookResolver {
    constructor(private readonly serviceFactory: BookServiceFactory) {}

    @UseGuards(GqlAuthGuard)
    @Query(() => [BookDto], {
        name: "getAllBooks",
        description: "receives user id and returns an array of books registered to the user"
    })
    async findAll(
    @Ctx() ctx: TCtx,
    ) {
        return(await this.serviceFactory.create(FindAllUsecase)).handle(
            ctx
        )
    }

    @UseGuards(GqlAuthGuard)
    @Mutation(() => BookDto, {
        name: "createOrUpdateBook",
        description: "Creates a book or updates one if an id is provided"
    })
    async createOrUpdate(
        @Args(`dto`, { type: () => CreateBookDto }) dto: CreateBookDto,
        @Ctx() ctx: TCtx,
    ) {
        return (await this.serviceFactory.create(CreateOrUpdateBookUseCase)).handle(
            ctx,
            dto,
        );
    }


}