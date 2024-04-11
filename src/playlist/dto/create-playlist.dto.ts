import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  @IsNotEmpty()
  readonly name;

  @IsNotEmpty()
  @IsArray()
  @IsNumber(undefined, { each: true })
  readonly songs;

  @IsNumber()
  @IsNotEmpty()
  readonly user: number;
}
