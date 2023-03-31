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

  @Column({ nullable: false })
  public title: string;

  @Column({ nullable: true })
  public description: string;

  @Column({ nullable: false })
  public text: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;
  @Column({ nullable: false })
  userId: number;

  @OneToMany(
    () => NewsTranslation,
    (news_translations) => news_translations.news,
    {
      eager: true,
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  newsTranslations: NewsTranslation[];
}

export default News;
