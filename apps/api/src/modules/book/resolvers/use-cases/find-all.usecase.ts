import { Injectable } from '@nestjs/common';
import { TCtx, UseCase } from '../../../../types';
import {BookRepository} from "../../repository/book.repository";
import {CreateBookDto} from "../../dto/create-book.dto";



@Injectable()
export class FindAllUsecase
    implements UseCase<Promise<CreateBookDto[]>, [ctx: TCtx]>
{
    constructor(private readonly bookRepository: BookRepository) {}

    async handle(ctx: TCtx) {
        return this.bookRepository.findAllByUserId(ctx.id);
    }
}