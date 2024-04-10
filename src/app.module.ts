import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './@common/middleware/logger/logger.middleware';
import { SongsService } from './songs/songs.service';
import { PlaylistModule } from './playlist/playlist.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Playlist } from './playlist/entity';
import { Song } from './songs/entity';
import { User } from './users/entity';
import { Artist } from './artists/entity';

/**
 * Video at 56:00
 */

@Module({
  imports: [
    SongsModule,
    PlaylistModule,
    UsersModule,
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
  ],
  controllers: [],
  providers: [SongsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('**');
  }
}
