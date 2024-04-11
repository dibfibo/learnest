import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AbstractSong } from './song.abstract';
import { SongService } from './song.service';
import { CreateSongDto } from './dto';

@Controller('songs')
export class SongController extends AbstractSong {
  constructor(private Songs: SongService) {
    super();
  }

  @Post()
  public create(@Body() dto: CreateSongDto) {
    return this.Songs.create(dto);
  }

  @Get()
  public findAll() {
    return this.Songs.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Songs.findOne(id);
  }

  @Get(':id')
  @Patch()
  public patch(@Param('id') id: number, @Body() dto: any) {
    return this.Songs.patch(id, dto);
  }

  @Put()
  public update(@Param('id') id: number, @Body() dto: any) {
    return this.Songs.update(id, dto);
  }

  @Delete('id')
  public delete(@Param('id') id: number) {
    return this.Songs.delete(id);
  }
}
