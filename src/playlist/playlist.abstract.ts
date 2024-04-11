import { CreatePlaylistDto } from './dto';

export abstract class PlaylistAbstract {
  abstract create(dto: CreatePlaylistDto);
  abstract findAll();
}
