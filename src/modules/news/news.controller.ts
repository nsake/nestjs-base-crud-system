import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { SchemaValidationPipe } from 'src/infrastructure/pipes/schema-validation.pipe';
import { GlobalExceptionFilter } from 'src/infrastructure/decorators/catch.decorator';
import { CreateNewsDto } from './dtos/create_news.dto';
import { UpdateNewsDto } from './dtos/update_news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UseFilters(new GlobalExceptionFilter())
  create(
    @Body(new SchemaValidationPipe(CreateNewsDto))
    createNewsDto: CreateNewsDto,
  ): Promise<any> {
    return this.newsService.create(createNewsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
