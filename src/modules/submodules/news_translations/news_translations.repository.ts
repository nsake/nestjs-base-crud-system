import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import News from './news_translations.entity';

@Injectable()
class NewsTranslationsRepository extends Repository<News> {
  constructor(private dataSource: DataSource) {
    super(News, dataSource.createEntityManager());
  }
}

export { NewsTranslationsRepository };
