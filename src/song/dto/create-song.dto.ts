import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  readonly artists: number[];

  @IsNotEmpty()
  @IsDateString()
  readonly releaseDate: Date;

  @IsNotEmpty()
  @IsMilitaryTime()
  readonly duration: Date;
}
