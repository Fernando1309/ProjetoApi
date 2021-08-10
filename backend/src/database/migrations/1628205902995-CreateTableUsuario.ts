import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsuario1628205902995 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'); //caso a extenção nao esteja habilitado habilita, para conseguir executar o generations da uuid
        await queryRunner.createTable(new Table({
            name: "Usuario",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()', //gerador da chave da tabela é o uuid pelo generate
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                },
                {
                    name: 'senha',
                    type: 'varchar',
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Usuario');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
