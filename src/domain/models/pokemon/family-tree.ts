export type FamilyTreeModel = {
  evolution_lvl: number;
  name: string;
  evolution_details: Array<Record<string, unknown>> | null;
}
