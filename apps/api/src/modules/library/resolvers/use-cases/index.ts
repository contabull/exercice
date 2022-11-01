import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateOrUpdateUsecaseBook } from './create-or-update.usecase';

type AvailableUseCases = CreateOrUpdateUsecaseBook;

@Injectable()
export class BookServiceFactory extends ServiceFactory<AvailableUseCases> {}
