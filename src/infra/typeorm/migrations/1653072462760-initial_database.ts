import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDatabase1653072462760 implements MigrationInterface {
    name = 'initialDatabase1653072462760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" character varying NOT NULL, "name" character varying NOT NULL, "heigth" integer NOT NULL, "weight" integer NOT NULL, "location_area" character varying NOT NULL, "sprite_front_default" character varying NOT NULL, "sprite_front_female" character varying, "sprite_front_shiny" character varying NOT NULL, "sprite_front_shiny_female" character varying, "sprite_back_default" character varying NOT NULL, "sprite_back_female" character varying, "sprite_back_shiny" character varying NOT NULL, "sprite_back_shiny_female" character varying, "hp" integer NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "special_attack" integer NOT NULL, "special_defense" integer NOT NULL, "speed" integer NOT NULL, CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "move" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_0befa9c6b3a216e49c494b4acc5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pokemon_move_move" ("pokemonId" character varying NOT NULL, "moveId" uuid NOT NULL, CONSTRAINT "PK_f9ce7e8122fc462e33aa81febcb" PRIMARY KEY ("pokemonId", "moveId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7fbb11b0b24fd891c37339433d" ON "pokemon_move_move" ("pokemonId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a17b3fac0fded2f85a33a90fd7" ON "pokemon_move_move" ("moveId") `);
        await queryRunner.query(`CREATE TABLE "pokemon_type_type" ("pokemonId" character varying NOT NULL, "typeId" uuid NOT NULL, CONSTRAINT "PK_5e47d54206f7e4545a6ba0267d8" PRIMARY KEY ("pokemonId", "typeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9b390e93b789fd60093996b837" ON "pokemon_type_type" ("pokemonId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4af1ac7ab4b9c3d1c2b344d126" ON "pokemon_type_type" ("typeId") `);
        await queryRunner.query(`ALTER TABLE "pokemon_move_move" ADD CONSTRAINT "FK_7fbb11b0b24fd891c37339433d9" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_move_move" ADD CONSTRAINT "FK_a17b3fac0fded2f85a33a90fd73" FOREIGN KEY ("moveId") REFERENCES "move"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pokemon_type_type" ADD CONSTRAINT "FK_9b390e93b789fd60093996b8371" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "pokemon_type_type" ADD CONSTRAINT "FK_4af1ac7ab4b9c3d1c2b344d1266" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pokemon_type_type" DROP CONSTRAINT "FK_4af1ac7ab4b9c3d1c2b344d1266"`);
        await queryRunner.query(`ALTER TABLE "pokemon_type_type" DROP CONSTRAINT "FK_9b390e93b789fd60093996b8371"`);
        await queryRunner.query(`ALTER TABLE "pokemon_move_move" DROP CONSTRAINT "FK_a17b3fac0fded2f85a33a90fd73"`);
        await queryRunner.query(`ALTER TABLE "pokemon_move_move" DROP CONSTRAINT "FK_7fbb11b0b24fd891c37339433d9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4af1ac7ab4b9c3d1c2b344d126"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b390e93b789fd60093996b837"`);
        await queryRunner.query(`DROP TABLE "pokemon_type_type"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a17b3fac0fded2f85a33a90fd7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7fbb11b0b24fd891c37339433d"`);
        await queryRunner.query(`DROP TABLE "pokemon_move_move"`);
        await queryRunner.query(`DROP TABLE "move"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
        await queryRunner.query(`DROP TABLE "type"`);
    }

}
