export type SpeciesResponse = {
  base_happiness: number;
  capture_rate: number;
  color: { name: string, url: string };
  egg_groups: Array<{ name: string, url: string }>;
  evolution_chain: { url: string };
  habitat: { name: string, url: string };
  has_gender_differences: boolean;
  id: number;
  is_baby: boolean;
  name: string;
  [prop: string]: any
}
