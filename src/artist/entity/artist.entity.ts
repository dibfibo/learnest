import { SongEntity } from 'src/song/repo';
import { User } from 'src/user/entity';
import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('artists')
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => SongEntity, (song) => song.artists)
  songs: SongEntity[];
}
