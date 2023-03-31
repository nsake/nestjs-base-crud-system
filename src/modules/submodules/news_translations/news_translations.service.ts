import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { NewsTranslationsRepository } from './news_translations.repository';
import { CreateNewsTranslationDto } from './dtos/create_news_translation.dto';

@Injectable()
export class NewsTranslationsService {
  constructor(
    private _newsTranslationsRepository: NewsTranslationsRepository,
  ) {}

  async create(
    payload: CreateNewsTranslationDto,
  ): Promise<CreateNewsTranslationDto> {
    const instance = this._newsTranslationsRepository.create(payload);

    if (!instance) {
      throw new HttpException(
        'Such news translations already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this._newsTranslationsRepository.save(instance);
  }
}
