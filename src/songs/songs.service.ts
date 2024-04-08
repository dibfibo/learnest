import { Injectable } from '@nestjs/common';
import { AbstractSongs } from './songs.abstract';
import { CreateSongDto } from './dto';

@Injectable()
export class SongsService extends AbstractSongs {
  public readonly songs = [];

  public create(dto: CreateSongDto) {
    this.songs.push(dto);
    return this.songs;
  }

  public findAll() {
    return this.songs;
  }

  public findOne(id: number) {
    return this.songs.find((s) => s.id === id);
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
