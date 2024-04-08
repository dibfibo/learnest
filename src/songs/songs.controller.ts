import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AbstractSongs } from './songs.abstract';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto';

@Controller('songs')
export class SongsController extends AbstractSongs {
  constructor(private Songs: SongsService) {
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
  public findOne(@Param('id') id: number) {
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
