import { ILoadTrainerByEmailRepository } from '@src/data/contracts/db/trainer/load-trainer-by-ermail';
import { ISaveTrainerRepository } from '@src/data/contracts/db/trainer/save-trainer';
import { ISaveTrainer } from '@src/domain/usecases/trainer';
import { throwError } from '@src/domain/test';
import { failure } from '@src/domain/shared/utils/either';

class SaveTrainerUseCase implements ISaveTrainer {
  constructor (
    private readonly loadTrainerByEmail: ILoadTrainerByEmailRepository,
    private readonly saveTrainerRepository: ISaveTrainerRepository,
  ) {}

  async execute ({ name, email, password }: ISaveTrainer.Params): ISaveTrainer.Result {
    try {
      await this.saveTrainerRepository.save({ name, email, password });
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}

const mockLoadTrainerByEmailRepository = (): ILoadTrainerByEmailRepository => {
  class LoadTrainerByEmailRepositoryStub implements ILoadTrainerByEmailRepository {
    async loadByEmail () {

    }
  }

  return new LoadTrainerByEmailRepositoryStub();
};

const mockSaveTrainerRepository = (): ISaveTrainerRepository => {
  class SaveTrainerRepositoryStub implements ISaveTrainerRepository {
    async save () {

    }
  }

  return new SaveTrainerRepositoryStub();
};

type SutTypes = {
  sut: SaveTrainerUseCase;
  loadTrainerByEmailRepositoryStub: ILoadTrainerByEmailRepository;
  saveTrainerRepositoryStub: ISaveTrainerRepository;
}

const makeSut = (): SutTypes => {
  const loadTrainerByEmailRepositoryStub = mockLoadTrainerByEmailRepository();
  const saveTrainerRepositoryStub = mockSaveTrainerRepository();
  const sut = new SaveTrainerUseCase(loadTrainerByEmailRepositoryStub, saveTrainerRepositoryStub);

  return {
    sut,
    loadTrainerByEmailRepositoryStub,
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

  it('should returns an failure error if SaveTrainerRepository throw', async () => {
    const { sut, saveTrainerRepositoryStub } = makeSut();
    jest.spyOn(saveTrainerRepositoryStub, 'save').mockImplementationOnce(throwError);

    const promise = sut.execute({ name: 'any_name', email: 'any_email', password: 'any_password' });

    await expect(promise).resolves.toEqual(failure(Error()));
  });
});
