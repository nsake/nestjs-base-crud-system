import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateNewsTranslationsTable1680287937242
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE news_translations(
      news_id int REFERENCES news (id) ON UPDATE CASCADE ON DELETE CASCADE,
      lang_abbreviation varchar REFERENCES languages (lang_abbreviation) ON UPDATE CASCADE,
      text varchar NOT NULL,
      CONSTRAINT news_translations_pkey PRIMARY KEY (news_id, lang_abbreviation)
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('news_translations');
  }
}
