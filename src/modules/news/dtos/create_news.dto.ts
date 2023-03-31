import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { AutoCreateNewsTranslationDto } from 'src/modules/submodules/news_translations/dtos/create_news_translation.dto';

export class CreateNewsDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsOptional()
  newsTranslations: AutoCreateNewsTranslationDto[];
}
