import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';


@Injectable()
export class RepoService<T extends ObjectLiteral> {
  constructor(protected repository: Repository<T>) {}
}
