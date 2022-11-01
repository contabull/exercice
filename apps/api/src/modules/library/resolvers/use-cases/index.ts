import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateOrUpdateUsecaseBook } from './create-or-update.usecase';
import {FindAllUsecase} from "./find-all.usecase";

type AvailableUseCases = CreateOrUpdateUsecaseBook | FindAllUsecase;

@Injectable()
export class BookServiceFactory extends ServiceFactory<AvailableUseCases> {}
