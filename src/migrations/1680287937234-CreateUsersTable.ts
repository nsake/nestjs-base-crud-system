import { Table, QueryRunner, MigrationInterface } from 'typeorm';

export class CreateUsersTable1680287937234 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
            isPrimary: true,
          },
          {
            name: 'firstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'lastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            default: "timezone('UTC', now())",
            name: 'createdAt',
            type: 'timestamp',
            isNullable: false,
          },
          {
            default: "timezone('UTC', now())",
            name: 'updatedAt',
            type: 'timestamp',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.query(`
        INSERT INTO "users" (id, "firstName", "lastName") VALUES 
          (1, 'testUserFN', 'testUserLN' )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
