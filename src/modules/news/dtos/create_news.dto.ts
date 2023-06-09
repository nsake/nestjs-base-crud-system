import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { AutoCreateNewsTranslationDto } from 'src/modules/submodules/news_translations/dtos/create_news_translation.dto';

export class CreateNewsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiPropertyOptional({ type: AutoCreateNewsTranslationDto })
  @IsOptional()
  newsTranslations: AutoCreateNewsTranslationDto[];
}
