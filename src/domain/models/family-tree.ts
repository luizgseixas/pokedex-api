export interface FamilyTreeModel {
  first_evolution: {
    name: string;
  };
  second_evolution:
    | {
        name: string;
        evolves_details: Record<string, unknown>;
      }
    | Record<string, unknown>;
  third_evolution:
    | {
        name: string;
        evolves_details: Record<string, unknown>;
      }
    | Record<string, unknown>;
}