import {MigrationInterface, QueryRunner} from "typeorm";

export class criaTabelaMateriaCapa1634169344971 implements MigrationInterface {
    name = 'criaTabelaMateriaCapa1634169344971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "MateriaCapa" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "descricao" character varying(100) NOT NULL, "conteudo" character varying(1000) NOT NULL, "palavraChave" character varying(100) NOT NULL, "imageCapa" text NOT NULL, "linkVideo" character varying(600) NOT NULL, "textPrincipal" character varying(1000) NOT NULL, "textSec" character varying(1000) NOT NULL, "textThird" character varying(1000) NOT NULL, CONSTRAINT "PK_3454632ebe1a7888024a2b65612" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."Usuario" DROP CONSTRAINT "UQ_c2591f33cb2c9e689e241dda91f"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."Usuario" ADD CONSTRAINT "UQ_c2591f33cb2c9e689e241dda91f" UNIQUE ("email")`);
        await queryRunner.query(`DROP TABLE "MateriaCapa"`);
    }

}
