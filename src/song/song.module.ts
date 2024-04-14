import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from 'src/artist/entity';
import { SongRepositoryModule } from './repository';

@Module({
  imports: [SongRepositoryModule, TypeOrmModule.forFeature([Artist])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
