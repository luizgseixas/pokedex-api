import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "../client/api";
import {
  Evolutions,
  PokemonData,
  PokemonListResponse,
  PokemonList,
} from "../interfaces";

interface ListOfPokemons {
  id: string;
  name: string;
  img: string;
}

export class PokedexService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = api;
  }

  async getPokemonList() {
    try {
      const res = await this.instance.get<PokemonListResponse>(
        "/pokemon/?limit=100"
      );
      // console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPokemon(pokemonName: string) {
    try {
      const res = await this.instance.get<PokemonData>(
        `/pokemon/${pokemonName}`
      );
      // console.log(res.data);
      const data = res.data;
      const sprites = {
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
        front_shiny: data.sprites.front_shiny,
        back_shiny: data.sprites.back_shiny,
      };
      const stats = data.stats.map((stat) => {
        return { statName: stat.stat.name, statValue: stat.base_stat };
      });

      const types = data.types.map((type) => {
        return type.type.name;
      });

      const moves = data.moves.map((move) => {
        return move.move.name;
      });

      // const evolutions = await this.pokemonEvolutions(data.id);

      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: types,
        stats: stats,
        sprites: sprites,
        moves: moves,
        // evolutions: evolutions,
      };
    } catch (error) {
      console.log(error);
    }
  }

  async pokemonEvolutions(pokemonId: number) {
    try {
      const res: AxiosResponse<Evolutions> = await this.instance.get(
        `/evolution-chain/${pokemonId}`
      );
      const data = res.data;
      const first = {
        name: data.chain.species.name,
      };
      const second = {
        name: data.chain.evolves_to[0].species.name,
        // level: data.chain.evolves_to[0].
      };
      const third = {
        name: data.chain.evolves_to[0].evolves_to[0].species.name,
      };

      return { First: first, Second: second, Third: third };
    } catch (error) {
      console.log(error);
    }
  }

  async buildPokemonList() {
    const list = await this.getPokemonList();
    if (list != undefined) {
      const pokemonList = list?.results.map(async (result) => {
        const info = await this.fetchPokemon(result.name);

        return {
          id: info?.id,
          name: info?.name,
          img: info?.sprites.front_default,
        };
      });
      console.log(pokemonList);
      return pokemonList;
    } else {
      return "Search failed";
    }
  }
}

//testeeeeee
