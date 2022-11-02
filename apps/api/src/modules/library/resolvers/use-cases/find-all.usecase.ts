import { Injectable } from '@nestjs/common';
import { TCtx, UseCase } from '../../../../types';
import {BookDto} from "../../dto/book.dto";
import {BookRepository} from "../../repository/book.repository";



@Injectable()
export class FindAllUsecase
    implements UseCase<Promise<{ book: Omit<BookDto, `userId`>[];}>, [ctx: TCtx]>
{
    constructor(private readonly bookRepository: BookRepository) {}

    async handle(ctx: TCtx) {
        return this.bookRepository.findAllById(ctx.id);
    }
}