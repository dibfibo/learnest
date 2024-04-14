import { SongEntity } from 'src/song/repository';
import { User } from 'src/user/entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => SongEntity, (song) => song.playlist)
  songs: SongEntity[];

  @ManyToOne(() => User, (user) => user.playlists)
  user: User;
}
