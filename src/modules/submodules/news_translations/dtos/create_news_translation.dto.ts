import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNewsTranslationDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  lang_abbreviation: string;

  @IsNotEmpty()
  @IsNumber()
  news_id: number;
}
