import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entity';
import { User } from 'src/user/entity';
import { SongEntity } from 'src/song/repository';

@Module({
  imports: [TypeOrmModule.forFeature([Playlist, SongEntity, User])],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
