import { PrismaService } from '../../../core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {CreateBookDto} from "../dto/create-book.dto";


@Injectable()
export class BookRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(
        userId: number,
        book: Pick<CreateBookDto, `title` | `author`>,
    ) {
        return this.prisma.book.create({
            data: {
                ...book,
                userId,
            },
        });
    }

    async update(
        id: number,
        user: Pick<CreateBookDto, `title` | `author`>,
    ) {
        return this.prisma.book.update({
            where: { id },
            data: { ...user },
        });
    }

    async findById(id: number) {
        return this.prisma.book.findUnique({ where: { id } });
    }

    async findByUserId(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
            select: { book: true },
        });
    }
}