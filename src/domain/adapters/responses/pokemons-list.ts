export interface IPokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IPokemon {
  name: string;
  url: string;
}
