import { IAddTrainerModel } from '@src/domain/usecases/trainer';
import { Trainer } from '../../../../../domain/typeorm/entities';

export const makeFakeTrainer = (): Trainer => ({
  id: 'anny_id',
  name: 'anny_name',
  email: 'any_email',
  password: 'any_password',
  created_at: 'new Date()',
});

export const makeFakeTrainerData = (): IAddTrainerModel => ({
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password',
});
