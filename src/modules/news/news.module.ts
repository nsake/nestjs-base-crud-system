import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import News from './news.entity';
import { NewsService } from './news.service';
import { NewsRepository } from './news.repository';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  providers: [NewsService, NewsRepository],
  exports: [NewsService],
})
export class NewsModule {}
