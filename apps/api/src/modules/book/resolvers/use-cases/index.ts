import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateOrUpdateBookUseCase } from './create-or-update.usecase';
import {FindAllUsecase} from "./find-all.usecase";

type AvailableUseCases = CreateOrUpdateBookUseCase | FindAllUsecase;

@Injectable()
export class BookServiceFactory extends ServiceFactory<AvailableUseCases> {}
