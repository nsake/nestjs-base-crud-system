import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import News from './news.entity';
import { NewsRepository } from './news.repository';
import { CreateNewsDto } from './dtos/create_news.dto';

@Injectable()
export class NewsService {
  constructor(private _newsRepository: NewsRepository) {}

  async create(payload: CreateNewsDto): Promise<News> {
    const instance = this._newsRepository.create(payload);

    if (!instance) {
      throw new HttpException(
        'Such news already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    return await this._newsRepository.save(instance);
  }

  public async findOne(id: number) {
    return await this._newsRepository.find({
      where: { id },
    });
  }
}
