import { In, Repository } from 'typeorm';
import { from } from 'rxjs';
import { SongEntity } from '.';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongRepository {
  constructor(private repository: Repository<SongEntity>) {}

  createSong(song: SongEntity) {
    return from(this.repository.save(song));
  }

  find() {
    return from(this.repository.find());
  }

  findOne(id: number) {
    return from(
      this.repository.findOne({
        where: {
          id,
        },
      }),
    );
  }

  getSongsByIds(ids: number[]) {
    return from(this.repository.findBy({ id: In(ids) }));
  }
}
