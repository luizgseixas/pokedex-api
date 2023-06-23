import { TrainerModel } from '../models/trainer/trainer';

export const mockTrainer = (): TrainerModel => ({
  id: 'any_trainer_id',
  name: 'any_trainer',
  email: 'trainer@mail.com',
  password: 'any+hashed_password',
  created_at: new Date(),
  updated_at: new Date(),
});
