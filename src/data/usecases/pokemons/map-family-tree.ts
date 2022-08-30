import { IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { chainFilter } from '@src/shared/utils/evolutions-filter';
import { IFamilyTreeRequester } from '@src/domain/adapters';

export class MapFamilyTree implements IMapFamilyTree {
  private readonly api: IFamilyTreeRequester;

  constructor (api: IFamilyTreeRequester) {
    this.api = api;
  }

  async execute ({ pokemonId }: IMapFamilyTree.Params): IMapFamilyTree.Result {
    try {
      const data = await this.api.familyTree(pokemonId);

      return success(chainFilter(data.chain));
    } catch (err) {
      console.error(err);
      return failure(err);
    }
  }
}
