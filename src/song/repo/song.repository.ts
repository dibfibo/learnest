import { In, Repository } from 'typeorm';
import { from } from 'rxjs';
import { SongEntity } from '.';
import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/@common/repo';

@Injectable()
export class SongRepository extends RepoService<SongEntity> {
  constructor(protected repository: Repository<SongEntity>) {
    super(repository);
  }

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

  findByIds(ids: number[]) {
    return from(this.repository.findBy({ id: In(ids) }));
  }
}
