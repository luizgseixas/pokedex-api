export type FamilyTreeModel = {
  evolution_lvl: number;
  name: string;
  evolution_details: Record<string, unknown> | null;
}
