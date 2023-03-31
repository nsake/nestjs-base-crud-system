import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import News from './news.entity';

@Injectable()
class NewsRepository extends Repository<News> {
  constructor(private dataSource: DataSource) {
    super(News, dataSource.createEntityManager());
  }
}

export { NewsRepository };
