import { IGetPokemonInformations, IMapFamilyTree } from '@src/domain/usecases/pokemon';
import { failure, success } from '@src/domain/shared/utils/either';
import { IPokemonInformationsRequester, Move, Sprite } from '@src/data/contracts/apis';
import { PokemonInformationsModel, Stats } from '@src/domain/models/pokemon';

export class GetPokemonInformationUseCase implements IGetPokemonInformations {
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

      const information: PokemonInformationsModel = {
        id: data.id,
        name: data.name,
        stats: data.stats.reduce((acc, { stat, base_stat }) => ({ ...acc, [stat.name]: base_stat }), {} as Stats),
        types: data.types.map((type) => type.type.name),
        sprites: this.spritesFilter(data.sprites),
        moves: data.moves.map((move) => move.move.name),
        familyTree: familyTree.value,
      };

      return success(information);
    } catch (err) {
      return failure(err);
    }
  }

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
