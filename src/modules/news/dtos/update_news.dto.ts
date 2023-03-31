import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { AutoCreateNewsTranslationDto } from 'src/modules/submodules/news_translations/dtos/create_news_translation.dto';

export class UpdateNewsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  text: string;

  @ApiPropertyOptional({ type: AutoCreateNewsTranslationDto })
  @IsOptional()
  newsTranslations: AutoCreateNewsTranslationDto[];
}
