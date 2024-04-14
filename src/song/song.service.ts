import { Injectable } from '@nestjs/common';
import { AbstractSong } from './song.abstract';
import { CreateSongDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { forkJoin, from, of, switchMap } from 'rxjs';
import { Artist } from 'src/artist/entity';
import { SongEntity, SongRepository } from './repository';

@Injectable()
export class SongService extends AbstractSong {
  constructor(
    @InjectRepository(SongEntity) private Song: SongRepository,
    @InjectRepository(Artist) private Artist: Repository<Artist>,
  ) {
    super();
  }
  public readonly songs = [];

  public create(dto: CreateSongDto) {
    return forkJoin({
      song: of({
        ...new SongEntity(),
        ...dto,
      }),
      artists: this.getArtists$(dto),
    }).pipe(
      switchMap(({ song, artists }) =>
        this.Song.createSong({
          ...song,
          artists,
        }),
      ),
    );
  }

  getArtists$(dto: CreateSongDto) {
    return from(this.Artist.findBy({ id: In(dto.artists) }));
  }

  public findAll() {
    return this.Song.find();
  }

  public findOne(id: number) {
    return this.Song.findOne(id);
  }

  public patch(id: number, dto: any) {
    const index = this.songs.findIndex((s) => s.id === id);
    if (index >= 0) {
      this.songs[index] = { ...this.songs[index], ...dto };
      return this.songs[index];
    } else return null;
  }

  public update(id: number, dto: any[]) {
    const index = this.songs.findIndex((s) => s.id === id);
    if (index >= 0) {
      this.songs[index] = { ...this.songs[index], ...dto };
      return this.songs[index];
    } else return null;
  }

  public delete(id: number) {
    const index = this.songs.findIndex((s) => s.id === id);
    if (index >= 0) {
      this.songs.splice(index, 1);
      return true;
    }
    return false;
  }
}
