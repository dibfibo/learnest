import { Artist } from "src/artists/entity";
import { Playlist } from "src/playlist/entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('string')
  title: string;

  @Column('date')
  releaseDate: Date;

  @Column('time')
  duration: Date;

  @ManyToMany(() => Artist, (artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  @ManyToOne(() => Playlist, (playlist) => playlist.songs)
  playlist: Playlist;
}
