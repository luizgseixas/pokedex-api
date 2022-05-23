import { Api } from "../client/api";
import { IGetPokemonsListService } from "../../domain/services";


interface IPokemon {
  name: string
}
export class GetPokemonsListService implements IGetPokemonsListService {
  private api: Api;
  constructor() {
    this.api = new Api();
  }

  public async execute() {
    try {
      const { data } = await this.api.get<IPokemon>("/pokemon");

      if (!data) return 0;
      // console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      throw new Error()
    }
  }

}
