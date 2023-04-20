export interface ISaveTrainerRepository {
  save: (trainer: ISaveTrainerRepository.Params) => Promise<void>;
}

export namespace ISaveTrainerRepository {
  export type Params = {
    name: string;
    email: string;
    password: string;
  }
}
