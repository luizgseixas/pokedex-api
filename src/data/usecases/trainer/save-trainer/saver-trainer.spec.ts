import { ILoadTrainerByEmailRepository } from '@src/data/contracts/db/trainer/load-trainer-by-email';
import { ISaveTrainerRepository } from '@src/data/contracts/db/trainer/save-trainer';
import { throwError } from '@src/domain/test';
import { failure } from '@src/domain/shared/utils/either';
import { mockTrainer } from '@src/domain/test/mock-trainer';
import { EmailInUseError } from '@src/presentation/errors/email-in-use-error';
import { SaveTrainerUseCase } from './save-trainer.usecase';

const mockLoadTrainerByEmailRepository = (): ILoadTrainerByEmailRepository => {
  class LoadTrainerByEmailRepositoryStub implements ILoadTrainerByEmailRepository {
    async loadByEmail () {
      return null;
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
  it('should call LoadTrainerByEmailRepository with correct params', async () => {
    const { sut, loadTrainerByEmailRepositoryStub } = makeSut();
    const loadByEmailSpy = jest.spyOn(loadTrainerByEmailRepositoryStub, 'loadByEmail');

    await sut.execute({ name: 'any_name', email: 'any_email', password: 'any_password' });

    expect(loadByEmailSpy).toHaveBeenCalledWith({ email: 'any_email' });
  });

  it('should returns an failure error if LoadTrainerByEmailRepository throws', async () => {
    const { sut, loadTrainerByEmailRepositoryStub } = makeSut();
    jest.spyOn(loadTrainerByEmailRepositoryStub, 'loadByEmail').mockImplementationOnce(throwError);

    const promise = sut.execute({ name: 'any_name', email: 'any_email', password: 'any_password' });

    await expect(promise).resolves.toEqual(failure(Error()));
  });

  it('should returns an failure EmailInUseError if LoadTrainerByEmailRepository throws', async () => {
    const { sut, loadTrainerByEmailRepositoryStub } = makeSut();
    jest.spyOn(loadTrainerByEmailRepositoryStub, 'loadByEmail').mockResolvedValue(mockTrainer());

    const promise = sut.execute({ name: 'any_name', email: 'any_email', password: 'any_password' });

    await expect(promise).resolves.toEqual(failure(new EmailInUseError()));
  });

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
