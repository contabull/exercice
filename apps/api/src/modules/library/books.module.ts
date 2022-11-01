import { Module } from '@nestjs/common';
import {BookRepository} from "./repository/book.repository";
import {BookResolver} from "./resolvers/book.resolver";
import {BookServiceFactory} from "./resolvers/use-cases";
import {PrismaService} from "../../core/prisma/prisma.service";

@Module({
    providers: [
        BookRepository,
        PrismaService,
        BookResolver,
        BookServiceFactory,
    ],
})
export class BooksModule {}