import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { LoggerMiddleware } from './@common/middleware/logger/logger.middleware';
import { PlaylistModule } from './playlist/playlist.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist/entity';
import { User } from './user/entity';
import { Artist } from './artist/entity';
import { SongEntity } from './song/repository';
import { SongRepositoryModule } from './song/repository/song.module';

/**
 * Video at 1:32:00
 */

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'spotify-clone',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      entities: [SongEntity, Artist, User, Playlist],
      synchronize: true,
    }),
    SongModule,
    PlaylistModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('**');
  }
}
