import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SongEntity, SongRepository } from '.';

const feature = TypeOrmModule.forFeature([SongEntity]);

@Module({
  imports: [feature],
  providers: [SongRepository, Repository<SongEntity>],
  exports: [feature],
})
export class SongRepositoryModule {}
