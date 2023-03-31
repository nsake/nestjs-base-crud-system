import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { NewsService } from './news.service';
import { SchemaValidationPipe } from 'src/infrastructure/pipes/schema-validation.pipe';
import { GlobalExceptionFilter } from 'src/infrastructure/decorators/catch.decorator';
import { CreateNewsDto } from './dtos/create_news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly userService: NewsService) {}

  @Post()
  @UseFilters(new GlobalExceptionFilter())
  create(
    @Body(new SchemaValidationPipe(CreateNewsDto))
    createNewsDto: CreateNewsDto,
  ): Promise<any> {
    return this.userService.create(createNewsDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
}
