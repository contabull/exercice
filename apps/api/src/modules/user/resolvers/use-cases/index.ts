import { CreateUserUsecase } from './create-user.usecase';
import { ServiceFactory } from '../../../../core/factory/service.factory';
import { Injectable } from '@nestjs/common';
import { LoggedInUserInfoUsecase } from './logged-in-user-info.usecase';

type AvailableUseCases = CreateUserUsecase | LoggedInUserInfoUsecase;

@Injectable()
export class UserServiceFactory extends ServiceFactory<AvailableUseCases> {}
