export interface ILoadTrainerByEmailRepository {
  loadByEmail: (trainer: ILoadTrainerByEmailRepository.Params) => Promise<void>;
}

export namespace ILoadTrainerByEmailRepository {
  export type Params = {
    name: string;
    email: string;
    password: string;
  }
}
