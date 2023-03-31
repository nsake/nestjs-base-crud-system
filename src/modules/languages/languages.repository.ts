import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import Language from './languages.entity';

@Injectable()
class LanguageRepository extends Repository<Language> {
  constructor(private dataSource: DataSource) {
    super(Language, dataSource.createEntityManager());
  }
}

export { LanguageRepository };
