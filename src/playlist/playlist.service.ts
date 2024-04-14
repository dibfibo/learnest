import { Injectable } from '@nestjs/common';
import { PlaylistAbstract } from './playlist.abstract';
import { CreatePlaylistDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './entity';
import { In, Repository } from 'typeorm';
import { User } from 'src/user/entity';
import { from, forkJoin, switchMap, map, of } from 'rxjs';
import { SongEntity, SongRepository } from 'src/song/repo';

@Injectable()
export class PlaylistService extends PlaylistAbstract {
  constructor(
    @InjectRepository(Playlist) private Playlist: Repository<Playlist>,
    @InjectRepository(SongEntity) private Song: SongRepository,
    @InjectRepository(User) private User: Repository<User>,
  ) {
    super();
  }

  create(dto: CreatePlaylistDto) {
    return of(new Playlist()).pipe(
      map((p) => ({ ...p, name: dto.name })),
      switchMap((p) =>
        forkJoin({
          playlist: of(p),
          songs: this.Song.findByIds(dto.songs),
          user: this.User.findOneBy({ id: dto.user }),
        }),
      ),
      switchMap(({ playlist, songs, user }) =>
        this.Playlist.save({
          ...playlist,
          songs,
          user,
        }),
      ),
    );
  }

  findAll() {
    return from(this.Playlist.find());
  }
}
