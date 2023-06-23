import { ILoadTrainerByEmailRepository } from '@src/data/contracts/db/trainer/load-trainer-by-email';
import { ISaveTrainerRepository } from '@src/data/contracts/db/trainer/save-trainer';
import { failure } from '@src/domain/shared/utils/either';
import { ISaveTrainer } from '@src/domain/usecases/trainer';
import { EmailInUseError } from '@src/presentation/errors/email-in-use-error';

export class SaveTrainerUseCase implements ISaveTrainer {
  constructor (
    private readonly loadTrainerByEmailRepository: ILoadTrainerByEmailRepository,
    private readonly saveTrainerRepository: ISaveTrainerRepository,
  ) {}

  async execute ({ name, email, password }: ISaveTrainer.Params): ISaveTrainer.Result {
    try {
      const alreadyRegistered = await this.loadTrainerByEmailRepository.loadByEmail({ email });
      if (alreadyRegistered) throw new EmailInUseError();
      await this.saveTrainerRepository.save({ name, email, password });
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
