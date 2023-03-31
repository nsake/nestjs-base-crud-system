import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import NewsTranslations from './news_translations.entity';
import { NewsTranslationsService } from './news_translations.service';
import { NewsTranslationsRepository } from './news_translations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([NewsTranslations])],
  providers: [NewsTranslationsService, NewsTranslationsRepository],
  exports: [NewsTranslationsService],
})
export class NewsTranslationsModule {}
