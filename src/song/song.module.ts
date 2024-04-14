import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from 'src/artist/entity';
import { RepoModule } from 'src/@common/repo';
import { SongEntity } from './repo';

@Module({
  imports: [
    RepoModule.forFeatures(SongEntity),
    TypeOrmModule.forFeature([Artist]),
  ],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
