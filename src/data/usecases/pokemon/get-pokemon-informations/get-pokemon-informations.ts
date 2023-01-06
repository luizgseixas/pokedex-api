import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases';
import { failure, success } from '@src/domain/shared/utils/either';
import { IPokemonInformationsRequester, Move, Sprite } from '@src/data/contracts/apis';

export class GetPokemonInformation implements IGetPokemonInformations {
  constructor (
    private readonly informationsRequester: IPokemonInformationsRequester,
    private readonly mapFamilyTree: IMapFamilyTree,
  ) {}

  async execute ({ id }: IGetPokemonInformations.Params): IGetPokemonInformations.Result {
    try {
      const data = await this.informationsRequester.informations(id);

      const familyTree = await this.mapFamilyTree.execute({ id: data.id.toString() });

      if (familyTree.isFailure()) {
        return failure(familyTree.value);
      }

      const information = {
        id: data.id,
        name: data.name,
        stats: data.stats,
        types: data.types,
        sprites: this.spritesFilter(data.sprites),
        moves: this.movesFilter(data.moves),
        familyTree: familyTree.value,
      };

      return success(information);
    } catch (err) {
      return failure(err);
    }
  }

  private movesFilter = (moves: Move[]) => {
    const filteredMoves = moves.map((move) => move.move);
    return filteredMoves;
  };

  private spritesFilter = (sprites: Sprite) => {
    return {
      back_default: sprites.back_default,
      back_female: sprites.back_female,
      back_shiny: sprites.back_shiny,
      back_shiny_female: sprites.back_shiny_female,
      front_default: sprites.front_default,
      front_female: sprites.front_female,
      front_shiny: sprites.front_shiny,
      front_shiny_female: sprites.front_shiny_female,
    };
  };
}
