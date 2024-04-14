import { Observable } from 'rxjs';
import { CreateSongDto } from './dto';
import { SongEntity } from './repo';

export abstract class AbstractSong {
  public abstract create(dto: CreateSongDto): Observable<SongEntity>;
  public abstract findAll(): Observable<SongEntity[]>;
  public abstract findOne(id: SongEntity['id']): Observable<SongEntity>;
  public abstract patch(...args);
  public abstract update(...args);
  public abstract delete(...args);
}
