import { MigrationInterface, QueryRunner } from 'typeorm';

export class createInitialTables1672009172115 implements MigrationInterface {
  name = 'createInitialTables1672009172115';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "tb_moves" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_8e6df9554069b053105b3f6b179" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_pokemon_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_745d9a6879ca28ac30aa20ae332" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_pokemons" ("id" character varying NOT NULL, "name" character varying NOT NULL, "heigth" integer NOT NULL, "weight" integer NOT NULL, "location_area" character varying NOT NULL, "sprite_front_default" character varying NOT NULL, "sprite_front_female" character varying, "sprite_front_shiny" character varying NOT NULL, "sprite_front_shiny_female" character varying, "sprite_back_default" character varying NOT NULL, "sprite_back_female" character varying, "sprite_back_shiny" character varying NOT NULL, "sprite_back_shiny_female" character varying, "hp" integer NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "special_attack" integer NOT NULL, "special_defense" integer NOT NULL, "speed" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_de09f7087c606763532b1689f89" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_pokemons_move_tb_moves" ("tbPokemonsId" character varying NOT NULL, "tbMovesId" uuid NOT NULL, CONSTRAINT "PK_5a5a61ab8aae3480d68ec30b83c" PRIMARY KEY ("tbPokemonsId", "tbMovesId"))');
    await queryRunner.query('CREATE INDEX "IDX_b9dcdbec98441993e307540860" ON "tb_pokemons_move_tb_moves" ("tbPokemonsId") ');
    await queryRunner.query('CREATE INDEX "IDX_599f18dbc4f967e0fa56476db9" ON "tb_pokemons_move_tb_moves" ("tbMovesId") ');
    await queryRunner.query('CREATE TABLE "tb_pokemons_type_tb_pokemon_types" ("tbPokemonsId" character varying NOT NULL, "tbPokemonTypesId" uuid NOT NULL, CONSTRAINT "PK_da2212e941baf0cb733cc45c541" PRIMARY KEY ("tbPokemonsId", "tbPokemonTypesId"))');
    await queryRunner.query('CREATE INDEX "IDX_52b10b04d07136efde68d30caf" ON "tb_pokemons_type_tb_pokemon_types" ("tbPokemonsId") ');
    await queryRunner.query('CREATE INDEX "IDX_40512beffd5e4402b811242bbb" ON "tb_pokemons_type_tb_pokemon_types" ("tbPokemonTypesId") ');
    await queryRunner.query('ALTER TABLE "tb_pokemons_move_tb_moves" ADD CONSTRAINT "FK_b9dcdbec98441993e3075408609" FOREIGN KEY ("tbPokemonsId") REFERENCES "tb_pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    await queryRunner.query('ALTER TABLE "tb_pokemons_move_tb_moves" ADD CONSTRAINT "FK_599f18dbc4f967e0fa56476db9f" FOREIGN KEY ("tbMovesId") REFERENCES "tb_moves"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "tb_pokemons_type_tb_pokemon_types" ADD CONSTRAINT "FK_52b10b04d07136efde68d30caf8" FOREIGN KEY ("tbPokemonsId") REFERENCES "tb_pokemons"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    await queryRunner.query('ALTER TABLE "tb_pokemons_type_tb_pokemon_types" ADD CONSTRAINT "FK_40512beffd5e4402b811242bbbc" FOREIGN KEY ("tbPokemonTypesId") REFERENCES "tb_pokemon_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tb_pokemons_type_tb_pokemon_types" DROP CONSTRAINT "FK_40512beffd5e4402b811242bbbc"');
    await queryRunner.query('ALTER TABLE "tb_pokemons_type_tb_pokemon_types" DROP CONSTRAINT "FK_52b10b04d07136efde68d30caf8"');
    await queryRunner.query('ALTER TABLE "tb_pokemons_move_tb_moves" DROP CONSTRAINT "FK_599f18dbc4f967e0fa56476db9f"');
    await queryRunner.query('ALTER TABLE "tb_pokemons_move_tb_moves" DROP CONSTRAINT "FK_b9dcdbec98441993e3075408609"');
    await queryRunner.query('DROP INDEX "public"."IDX_40512beffd5e4402b811242bbb"');
    await queryRunner.query('DROP INDEX "public"."IDX_52b10b04d07136efde68d30caf"');
    await queryRunner.query('DROP TABLE "tb_pokemons_type_tb_pokemon_types"');
    await queryRunner.query('DROP INDEX "public"."IDX_599f18dbc4f967e0fa56476db9"');
    await queryRunner.query('DROP INDEX "public"."IDX_b9dcdbec98441993e307540860"');
    await queryRunner.query('DROP TABLE "tb_pokemons_move_tb_moves"');
    await queryRunner.query('DROP TABLE "tb_pokemons"');
    await queryRunner.query('DROP TABLE "tb_pokemon_types"');
    await queryRunner.query('DROP TABLE "tb_moves"');
  }
}
