import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('languages')
class Language {
  @PrimaryColumn()
  public lang_abbreviation: string;

  @Column({ nullable: true })
  public name: string;
}

export default Language;
