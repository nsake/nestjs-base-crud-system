import Language from 'src/modules/languages/languages.entity';
import News from 'src/modules/news/news.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  RelationId,
} from 'typeorm';

@Entity('news_translations')
class NewsTranslation {
  @OneToOne(() => News)
  @JoinColumn({
    name: 'news_id',
  })
  news: News;
  @RelationId((news_translations: NewsTranslation) => news_translations.news)
  @PrimaryColumn()
  news_id: number;

  @OneToOne(() => Language, (language) => language.lang_abbreviation)
  @JoinColumn({
    name: 'lang_abbreviation',
    referencedColumnName: 'lang_abbreviation',
  })
  languages: Language;
  @Column()
  lang_abbreviation: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  text: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;
}

export default NewsTranslation;
