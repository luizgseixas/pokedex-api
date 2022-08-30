import { success } from '../../../../domain/shared/utils/either';
import { Trainer } from '../../../../domain/typeorm/entities';
import { IAddTrainerModel } from '../../../../domain/usecases/trainer';
import { IAddTrainerRepository } from '../../protocols/db/add-trainer-repository';
import { DbAddTrainer } from '../db-add-trainer';

const makeFakeTrainer = (): Trainer => ({
  id: 'anny_id',
  name: 'anny_name',
  email: 'any_email',
  password: 'any_password',
  created_at: 'new Date()',
});

const makeFakeTrainerData = (): IAddTrainerModel => ({
  name: 'valid_name',
  email: 'valid_email@mail.com',
  password: 'valid_password',
});

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
});
