import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Language from './languages.entity';
import { LanguageRepository } from './languages.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageRepository],
  exports: [LanguageRepository],
})
export class LanguageModule {}
