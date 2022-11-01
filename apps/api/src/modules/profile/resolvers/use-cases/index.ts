import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { CreateOrUpdateUsecase } from './create-or-update.usecase';

type AvailableUseCases = CreateOrUpdateUsecase;

@Injectable()
export class ProfileServiceFactory extends ServiceFactory<AvailableUseCases> {}
