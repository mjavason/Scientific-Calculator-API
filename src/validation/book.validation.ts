import { IsString, IsNumber, IsOptional } from 'class-validator';

export class BookDto {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsString()
  genre!: string;

  @IsString()
  publicationDate!: string;

  @IsString()
  ISBN!: string;

  @IsNumber()
  availableCopies!: number;

  @IsNumber()
  totalCopies!: number;
}
