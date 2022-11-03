import { PrismaService } from '../../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {CreateBookDto} from "../dto/create-book.dto";


@Injectable()
export class BookRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        userId: number,
        author: string,
        title: string,
    ) {
        return this.prisma.book.create({
            data: {
                userId,
                title,
                author
            },
        });
    }

    async update(
        id: number,
        book: Pick<CreateBookDto, `title` | `author`>,
    ) {
        return this.prisma.book.update({
            where: { id },
            data: { ...book },
        });
    }

    async findById(id: number) {
        return this.prisma.book.findUnique({ where: { id } });
    }

    /*
    async findByDto(dto: CreateBookDto) {
        return this.prisma.book.findFirst({
            where: { title: dto.title, author: dto.author }
        });
    }
 */


    async findAllByUserId(id: number) {
          return this.prisma.book.findMany({ where: { userId: id } });
    }
}