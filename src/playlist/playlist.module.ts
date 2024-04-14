import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from './playlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './entity';
import { User } from 'src/user/entity';
import { RepoModule } from 'src/@common/repo';
import { SongEntity } from 'src/song/repo';

@Module({
  imports: [
    RepoModule.forFeature(SongEntity),
    TypeOrmModule.forFeature([Playlist, User]),
  ],
  controllers: [PlaylistController],
  providers: [PlaylistService],
})
export class PlaylistModule {}
