import { failure, success } from '@src/domain/shared/utils/either';
import { IAddTrainer, IAddTrainerModel } from '@src/domain/usecases/trainer';
import { IAddTrainerRepository } from '../protocols/db/add-trainer-repository';

export class DbAddTrainer implements IAddTrainer {
  constructor (private readonly addTrainerRepository: IAddTrainerRepository) {}

  async execute (trainer: IAddTrainerModel): IAddTrainer.Result {
    try {
      await this.addTrainerRepository.perform(trainer);
    } catch (err) {
      return failure(err);
    }
    return failure({});
  }
}
