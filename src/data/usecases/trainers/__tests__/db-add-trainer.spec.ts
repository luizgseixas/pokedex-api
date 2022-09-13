import { failure, success } from '../../../../domain/shared/utils/either';
import { IAddTrainerModel } from '../../../../domain/usecases/trainer';
import { IAddTrainerRepository } from '../../protocols/db/add-trainer-repository';
import { DbAddTrainer } from '../db-add-trainer';
import { makeFakeTrainer, makeFakeTrainerData } from './__mocks__/db-add-trainer.mock';

const makeAddTrainerRepository = (): IAddTrainerRepository => {
  class AddTrainerRepositoryStub implements IAddTrainerRepository {
    async perform (trainer: IAddTrainerModel): IAddTrainerRepository.Result {
      return success(makeFakeTrainer());
    }
  }
  return new AddTrainerRepositoryStub();
};

interface SutTypes {
  sut: DbAddTrainer;
  addTrainerRepositoryStub: IAddTrainerRepository;
}

const makeSut = (): SutTypes => {
  const addTrainerRepositoryStub = makeAddTrainerRepository();
  const sut = new DbAddTrainer(addTrainerRepositoryStub);
  return {
    sut,
    addTrainerRepositoryStub,
  };
};

describe('DbAddTrainer UseCase', () => {
  test('Should call AddAccountRepository with correct values', async () => {
    const { sut, addTrainerRepositoryStub } = makeSut();
    const addSpy = jest.spyOn(addTrainerRepositoryStub, 'perform');
    await sut.execute(makeFakeTrainerData());
    expect(addSpy).toHaveBeenCalledWith(makeFakeTrainerData());
  });

  test('Should return a failure error of AddAccountRepository throws', async () => {
    const { sut, addTrainerRepositoryStub } = makeSut();
    jest.spyOn(addTrainerRepositoryStub, 'perform').mockImplementationOnce(() => { throw new Error(); });
    const promise = await sut.execute(makeFakeTrainerData());
    expect(promise).toEqual(failure(new Error()));
  });
});
