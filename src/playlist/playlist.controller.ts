import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlaylistAbstract } from './playlist.abstract';
import { CreatePlaylistDto } from './dto';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController extends PlaylistAbstract {
  constructor(private Playlist: PlaylistService) {
    super();
  }

  @Post()
  create(@Body() dto: CreatePlaylistDto) {
    return this.Playlist.create(dto);
  }

  @Get()
  findAll() {
    return this.Playlist.findAll()
  }
}
