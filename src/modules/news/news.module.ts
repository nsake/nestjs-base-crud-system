import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import News from './news.entity';
import { NewsService } from './news.service';
import { NewsRepository } from './news.repository';
import { NewsController } from './news.controller';
import { NewsTranslationsModule } from '../submodules/news_translations/news_translations.module';

@Module({
  imports: [TypeOrmModule.forFeature([News]), NewsTranslationsModule],
  providers: [NewsService, NewsRepository],
  exports: [NewsService, NewsTranslationsModule],
  controllers: [NewsController],
})
export class NewsModule {}
