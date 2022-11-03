import { Injectable } from '@nestjs/common';
import { TCtx, UseCase } from '../../../../types';
import { GraphQLError } from 'graphql/error';
import {BookDto} from "../../dto/book.dto";
import {CreateBookDto} from "../../dto/create-book.dto";
import {BookRepository} from "../../repository/book.repository";

@Injectable()
export class CreateOrUpdateBookUseCase
    implements UseCase<Promise<BookDto>, [ctx: TCtx, dto: CreateBookDto]>
{
    constructor(private readonly bookRepository: BookRepository) {}

    async handle(ctx: TCtx, dto: CreateBookDto) {
        if (dto.id) {
            const book = await this.bookRepository.findById(dto.id);

            if (!book) {
                throw new GraphQLError(`Book was not found`);
            }

            if (book.userId !== ctx.id) {
                throw new GraphQLError(`Unauthorized`);
            }

            return this.bookRepository.update(book.id, dto);
        }

        return this.bookRepository.create(ctx.id, dto.author, dto.title);
    }
}
