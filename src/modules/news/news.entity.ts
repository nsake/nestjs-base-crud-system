import { ParentEntity } from 'src/infrastructure/types/abstract/parent.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import User from '../users /users.entity';
import NewsTranslation from '../submodules/news_translations/news_translations.entity';

@Entity('news')
class News extends ParentEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true, nullable: false })
  public title: string;

  @Column({ unique: false, nullable: true })
  public description: string;

  @Column({ unique: false, nullable: false })
  public text: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
  @Column({ nullable: false })
  userId: number;

  @OneToMany(
    () => NewsTranslation,
    (news_translations) => news_translations.news,
  )
  newsTranslations: NewsTranslation[];
}

export default News;
