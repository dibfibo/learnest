import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SongModule } from './song/song.module';
import { LoggerMiddleware } from './@common/middleware/logger/logger.middleware';
import { SongService } from './song/song.service';
import { PlaylistModule } from './playlist/playlist.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist/entity';
import { Song } from './song/entity';
import { User } from './user/entity';
import { Artist } from './artist/entity';

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
      entities: [Song, Artist, User, Playlist],
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
