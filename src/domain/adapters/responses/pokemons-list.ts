export interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonList[];
}

export interface IPokemonList {
  name: string;
  url: string;
}
