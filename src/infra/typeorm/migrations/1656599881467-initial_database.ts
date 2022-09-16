import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialDatabase1656599881467 implements MigrationInterface {
  name = 'initialDatabase1656599881467';

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "tb_type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_4c981dc84ed6d246e510903176a" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_pokemon" ("id" character varying NOT NULL, "name" character varying NOT NULL, "heigth" integer NOT NULL, "weight" integer NOT NULL, "location_area" character varying NOT NULL, "sprite_front_default" character varying NOT NULL, "sprite_front_female" character varying, "sprite_front_shiny" character varying NOT NULL, "sprite_front_shiny_female" character varying, "sprite_back_default" character varying NOT NULL, "sprite_back_female" character varying, "sprite_back_shiny" character varying NOT NULL, "sprite_back_shiny_female" character varying, "hp" integer NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "special_attack" integer NOT NULL, "special_defense" integer NOT NULL, "speed" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d10e69a00746eb3ce1b65b5bc44" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_move" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_7bd6ad13b83a0ea68d317775da9" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "tb_pokemon_move_tb_move" ("tbPokemonId" character varying NOT NULL, "tbMoveId" uuid NOT NULL, CONSTRAINT "PK_4122e167535134edb71840afe27" PRIMARY KEY ("tbPokemonId", "tbMoveId"))');
    await queryRunner.query('CREATE INDEX "IDX_85f5184a3e62a16d2e4b87dc42" ON "tb_pokemon_move_tb_move" ("tbPokemonId") ');
    await queryRunner.query('CREATE INDEX "IDX_6f50a43a0a8c39442af19d06ac" ON "tb_pokemon_move_tb_move" ("tbMoveId") ');
    await queryRunner.query('CREATE TABLE "tb_pokemon_type_tb_type" ("tbPokemonId" character varying NOT NULL, "tbTypeId" uuid NOT NULL, CONSTRAINT "PK_cb9f4114eaa7d781ff8c48932f9" PRIMARY KEY ("tbPokemonId", "tbTypeId"))');
    await queryRunner.query('CREATE INDEX "IDX_d3b5b7fc344e560b6196072083" ON "tb_pokemon_type_tb_type" ("tbPokemonId") ');
    await queryRunner.query('CREATE INDEX "IDX_f64df4fac8d04e4f1230d73b20" ON "tb_pokemon_type_tb_type" ("tbTypeId") ');
    await queryRunner.query('ALTER TABLE "tb_pokemon_move_tb_move" ADD CONSTRAINT "FK_85f5184a3e62a16d2e4b87dc424" FOREIGN KEY ("tbPokemonId") REFERENCES "tb_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    await queryRunner.query('ALTER TABLE "tb_pokemon_move_tb_move" ADD CONSTRAINT "FK_6f50a43a0a8c39442af19d06ace" FOREIGN KEY ("tbMoveId") REFERENCES "tb_move"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "tb_pokemon_type_tb_type" ADD CONSTRAINT "FK_d3b5b7fc344e560b6196072083e" FOREIGN KEY ("tbPokemonId") REFERENCES "tb_pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    await queryRunner.query('ALTER TABLE "tb_pokemon_type_tb_type" ADD CONSTRAINT "FK_f64df4fac8d04e4f1230d73b20a" FOREIGN KEY ("tbTypeId") REFERENCES "tb_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "tb_pokemon_type_tb_type" DROP CONSTRAINT "FK_f64df4fac8d04e4f1230d73b20a"');
    await queryRunner.query('ALTER TABLE "tb_pokemon_type_tb_type" DROP CONSTRAINT "FK_d3b5b7fc344e560b6196072083e"');
    await queryRunner.query('ALTER TABLE "tb_pokemon_move_tb_move" DROP CONSTRAINT "FK_6f50a43a0a8c39442af19d06ace"');
    await queryRunner.query('ALTER TABLE "tb_pokemon_move_tb_move" DROP CONSTRAINT "FK_85f5184a3e62a16d2e4b87dc424"');
    await queryRunner.query('DROP INDEX "public"."IDX_f64df4fac8d04e4f1230d73b20"');
    await queryRunner.query('DROP INDEX "public"."IDX_d3b5b7fc344e560b6196072083"');
    await queryRunner.query('DROP TABLE "tb_pokemon_type_tb_type"');
    await queryRunner.query('DROP INDEX "public"."IDX_6f50a43a0a8c39442af19d06ac"');
    await queryRunner.query('DROP INDEX "public"."IDX_85f5184a3e62a16d2e4b87dc42"');
    await queryRunner.query('DROP TABLE "tb_pokemon_move_tb_move"');
    await queryRunner.query('DROP TABLE "tb_move"');
    await queryRunner.query('DROP TABLE "tb_pokemon"');
    await queryRunner.query('DROP TABLE "tb_type"');
  }
}
