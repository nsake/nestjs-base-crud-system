import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLanguagesTable1680287937239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'languages',
        columns: [
          {
            name: 'lang_abbreviation',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.query(`
        INSERT INTO "languages" (lang_abbreviation, name) VALUES 
          ('fr', 'French' ),
          ('de', 'German' )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('languages');
  }
}
