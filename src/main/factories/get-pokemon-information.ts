import { GetPokemonInformationFeature } from '@src/features';
import { GetPokemonInformationController } from '@src/presentation/controllers/get-pokemon-information.controller';
import { IController } from '@src/presentation/protocols';

export const makeGetPokemonInformationController = (): IController => {
  const getPokemonInformationFeature = new GetPokemonInformationFeature();
  return new GetPokemonInformationController(getPokemonInformationFeature);
};
