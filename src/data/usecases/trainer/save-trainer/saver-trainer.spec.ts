import { ISaveTrainerRepository } from '@src/data/contracts/db/trainer/save-trainer';
import { ISaveTrainer } from '@src/domain/usecases/trainer';

class SaveTrainerUseCase implements ISaveTrainer {
  constructor (private readonly saveTrainerRepository: ISaveTrainerRepository) {}

  async execute ({ name, email, password }: ISaveTrainer.Params): Promise<void> {
    this.saveTrainerRepository.save({ name, email, password });
  }
}

const mockSaveTrainerRepository = (): ISaveTrainerRepository => {
  class SaveTrainerRepositoryStub implements ISaveTrainerRepository {
    async save () {

    }
  }

  return new SaveTrainerRepositoryStub();
};

type SutTypes = {
  sut: SaveTrainerUseCase,
  saveTrainerRepositoryStub: ISaveTrainerRepository
}

const makeSut = (): SutTypes => {
  const saveTrainerRepositoryStub = mockSaveTrainerRepository();
  const sut = new SaveTrainerUseCase(saveTrainerRepositoryStub);

  return {
    sut,
    saveTrainerRepositoryStub,
  };
};

describe('SaveTrainerUseCase', () => {
  it('should call SaveTrainerRepository with correct params', async () => {
    const { sut, saveTrainerRepositoryStub } = makeSut();
    const saveSpy = jest.spyOn(saveTrainerRepositoryStub, 'save');

    await sut.execute({ name: 'any_name', email: 'any_email', password: 'any_password' });

    expect(saveSpy).toHaveBeenCalledWith({ name: 'any_name', email: 'any_email', password: 'any_password' });
  });
});
