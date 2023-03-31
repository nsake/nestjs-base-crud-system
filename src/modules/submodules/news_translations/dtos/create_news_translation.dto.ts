import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNewsTranslationDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  lang_abbreviation: string;

  @IsNotEmpty()
  @IsNumber()
  news_id: number;
}
export class AutoCreateNewsTranslationDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  @IsString()
  lang_abbreviation: string;
}
